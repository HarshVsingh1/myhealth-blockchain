// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthCareSystem {
    address public owner;
    
    enum PaymentStatus { FAILED, SUCCESS, ABANDONED }

    struct Payment {
        string username;
        uint price;
        PaymentStatus status;
        string razorpayOrderId;
        string razorpayPaymentId;
        string razorpaySignature;
        address paidBy;
    }

    struct User {
        string username;
        string email;
        string password;
        uint[] appointmentRequests;
    }

    struct AppointmentRequest {
        string userEmail;
        string doctorName;
        string time;
        string date;
        uint price;
        bool paid;
        bool status;
    }

    struct Admin {
        string username;
        string email;
        string password;
    }

    struct Doctor {
        string firstName;
        string lastName;
        uint phoneNumber;
        string address;
        string website;
        string email;
        string specialization;
        string experience;
        uint fees;
        string timingFrom;
        string timingTo;
        string password;
        bool approved;
        uint[] appointmentRequests;
    }

    struct Patient {
        string firstName;
        string lastName;
        uint phoneNumber;
        string address;
        string gender;
        string email;
        uint fees;
        string timingFrom;
        string timingTo;
        string surgicalHistory;
        string pastCondition;
        string allergies;
        string ongoingTreatment;
        string physicianNotes;
        string reasonForVisit;
    }

    mapping(address => User) public users;
    mapping(address => Admin) public admins;
    mapping(address => Doctor) public doctors;
    mapping(address => Patient) public patients;
    mapping(uint => AppointmentRequest) public appointmentRequests;
    mapping(uint => Payment) public payments;

    uint public appointmentRequestCounter;
    uint public paymentCounter;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function signupUser(string memory username, string memory email, string memory password) public {
        users[msg.sender] = User(username, email, password, new uint[](0));
    }

    function loginUser(string memory email, string memory password) public view returns (bool) {
        User memory user = users[msg.sender];
        return (keccak256(abi.encodePacked(user.email)) == keccak256(abi.encodePacked(email)) &&
                keccak256(abi.encodePacked(user.password)) == keccak256(abi.encodePacked(password)));
    }

    function signupAdmin(string memory username, string memory email, string memory password) public onlyOwner {
        admins[msg.sender] = Admin(username, email, password);
    }

    function loginAdmin(string memory email, string memory password) public view returns (bool) {
        Admin memory admin = admins[msg.sender];
        return (keccak256(abi.encodePacked(admin.email)) == keccak256(abi.encodePacked(email)) &&
                keccak256(abi.encodePacked(admin.password)) == keccak256(abi.encodePacked(password)));
    }

    function applyDoctor(string memory firstName, string memory lastName, uint phoneNumber, string memory address, string memory website, string memory email, string memory specialization, string memory experience, uint fees, string memory timingFrom, string memory timingTo, string memory password) public {
        doctors[msg.sender] = Doctor(firstName, lastName, phoneNumber, address, website, email, specialization, experience, fees, timingFrom, timingTo, password, false, new uint[](0));
    }

    function createAppointmentRequest(string memory userEmail, string memory doctorName, string memory time, string memory date, uint price) public {
        appointmentRequests[appointmentRequestCounter] = AppointmentRequest(userEmail, doctorName, time, date, price, false, false);
        appointmentRequestCounter++;
    }

    function verifyPayment(uint appointmentId) public {
        AppointmentRequest storage appointment = appointmentRequests[appointmentId];
        appointment.paid = true;
        User storage user = users[msg.sender];
        user.appointmentRequests.push(appointmentId);
    }

    function approveDoctor(address doctorAddress) public onlyOwner {
        doctors[doctorAddress].approved = true;
    }

    function getDoctorAppointments(address doctorAddress) public view returns (uint[] memory) {
        return doctors[doctorAddress].appointmentRequests;
    }

    function getUserAppointments(address userAddress) public view returns (uint[] memory) {
        return users[userAddress].appointmentRequests;
    }
}
