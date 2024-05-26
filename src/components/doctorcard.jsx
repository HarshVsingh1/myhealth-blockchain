import { useState } from 'react';
import man from '../assets/man.png'
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import axios from 'axios';

export default function DoctorCard  ({ doctor }) { 
    
    const [open, setOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const userEmail = sessionStorage.getItem("email")
    const [servity,setServity] = useState('success')
    const [pop,setPop] = useState(false)
    const [message,setMessage] = useState('')
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const handleClickOpen = () => {
      setPop(true);
    };
  
    const handleClose = () => {
     
      setPop(false);
    }; 

    const handleMessageClose = () => {
      setOpen(false)
    }

   

    
     
    
    
    const openbox = (message , servity ) => {
      setMessage(message)
          setServity(servity)
          setOpen(true)
      
      
       
    }

    const book = async () => { 
        const data =  {
                time : selectedTime ,
                date : selectedDate,
                doctorId : doctor._id ,
                userEmail ,
                doctorName : doctor.firstName + doctor.lastName ,
                price : doctor.fees
                
        }
         const response = await axios.post(`${API_BASE_URL}/appointment/request` , data)   ;
           console.log(data)
         if(response.status == 200 ) {
                
          openbox( 'Appointment request submitted successfully. You can check on appointment tab' , 'success')
        }

    }
    
    return (
    <div key={doctor._id} className='doctorcard'> 
     <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleMessageClose} severity={servity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar> 
       <Bookdialog handleClose={handleClose} open={pop} setPop={setPop} book={book} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setSelectedDate={setSelectedDate} selectedDate={selectedDate} openbox={openbox}></Bookdialog>
      <div className='miniContainer'>
        <div>
          <img className='docProfileimage' src={man} alt="Doctor" />
        </div>
        <div className='docProfilename'>
          {doctor.firstName} {doctor.lastName}
        </div>
        <div>
          {doctor.specialization}
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(214, 214, 214,0.3)" }} className='miniContainer'>
        <div className='cardcen'>
          <div>
            Experience
          </div>
          <div>{doctor.experience} years</div>
        </div>
        <div className='cardcen'>
          <div>
            Timing
          </div>
          <div>{doctor.timingfrom} -- {doctor.timingto}</div>
        </div>
        <div className='cardcen'>
          <div>
            Fees Per consultation
          </div>
          <div>{doctor.fees} rs</div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleClickOpen} variant="contained">Book Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  )

}


const Bookdialog = ({handleClose , open , book , setSelectedDate , setSelectedTime , selectedDate , selectedTime , setPop}) => {  
   
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
      };
    

      const handleDateChange = (event) => {
        const selectedDateValue = event.target.value; 
        console.log(event.target.value)
        setSelectedDate(selectedDateValue);
      };
      

      const register = () => {
        book() 
        setPop(false)
        
      }


    return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
      },
    }}
  >
    <DialogTitle>Book an Appointment</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Enter the preferable time and date.
      </DialogContentText>
      
      <div>
      <h2>Choose a Time</h2>
      <input type="time" value={selectedTime} onChange={handleTimeChange} />
      {selectedTime && <p>Selected Time: {selectedTime}</p>}
    </div>

    <div>
      <h2>Choose a Date</h2>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </div>

     
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={register} >Book</Button>
    </DialogActions>
  </Dialog>
    ) ;
}