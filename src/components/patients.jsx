import { Alert, Button, Snackbar, TextField } from '@mui/material'
import Web3 from 'web3';
import './profile.css'
import { useState } from 'react'
import axios from 'axios';



export default function SavePatient() {  

        const [message,setMessage] = useState('')
        const [servity,setServity] = useState('success')
        const [open,setOpen] = useState(false) ;
        const [amount,setAmount] = useState('0.0000056')
        const [ formdata , setFormdata] = useState({
                firstName : '' ,
                lastName : '' ,
                phoneNumber : '' , 
                address : '' ,
                gender : '' ,
                email : '' ,
                fees : '' ,
                timingfrom : '' ,
                timingto : '' ,
                Surgicalhistory : '',
                Pastcondition : '',
                allergies : '' ,
                ongoingtreatment : '' ,
                physiciannotes : '' ,
                reasonforvisit : ''

        }) 



      const handleClose = () => {
        setOpen(false)
      }

      
      
      const openbox = (message , servity ) => {
        setMessage(message)
            setServity(servity)
            setOpen(true)
        
        
         
      }



        const handlechange = (e) => {
                const {name , value} = e.target 
                setFormdata({...formdata,[name] : value})
        }
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

        const applyDoctor =  async () => {
          try {
                const response  = await axios.post(`${API_BASE_URL}/users/patient` , formdata) 
                console.log(response)

                if(response.status == 200 ) {
                 openbox("Patient data saved successfully")
                }
          } 
          catch (error) {
                   console.log("error sending request")
          }
        } 
        const handleTransfer = async () => { 
   
                try {
                 
                  const web3 = new Web3(window.ethereum);
                  await window.ethereum.enable();
            
                
                  const accounts = await web3.eth.getAccounts();
                  const fromAddress = accounts[0];
            
                  
                  const abi = [
                    {
                      "inputs": [
                        {
                          "internalType": "address payable",
                          "name": "toAddress",
                          "type": "address"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        }
                      ],
                      "name": "transferEther",
                      "outputs": [],
                      "stateMutability": "payable",
                      "type": "function"
                    }
                  ];
                  const contractAddress = '0x85A7Fa2815E4e486c25D373ca8e0762985aa77b3';
                  
                  const toAddress = '0x23073E14C00395c4cE85D9f79E2e25759e793a0e'
             
                  const contract = new web3.eth.Contract(abi, contractAddress);
                 
            
            
                  
                  await contract.methods.transferEther(toAddress, web3.utils.toWei(amount, 'ether'))
                    .send({ from: fromAddress, value: web3.utils.toWei(amount, 'ether') })
                    .on('transactionHash', async(hash) => {
                     
                    
                     
                    
                     applyDoctor()
                    //   setTimeout(() => {
                    //     window.location.href = 'http://localhost:5173/order';
                    // }, 2000);
                      
                    });
            
            
                } catch (error) {
                  console.error('Error:', error);
                }
              };
    return ( 
        <>

        <div>     
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={servity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar> 
                
                
                 <div>
                          <div className='profileSectionHeading' >
                            Personal Details
                          </div>
                          <br></br>
                          <div className='profileSubcontainer' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >First Name</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='firstName' onChange={handlechange} label="First Name" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Last Name</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='lastName' onChange={handlechange}  label="Last Name" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Phone number</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='phoneNumber' onChange={handlechange}  label="Phone number" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div> 

                          <br></br>

                          <div className='profileSubcontainer' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Address</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='address' onChange={handlechange}  label="Address" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Gender</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='gender' onChange={handlechange}  label="gender" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Email Address</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='email' onChange={handlechange}  label="Email Address" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div>
                          
                 </div>
                                 


                      <br></br>



                 <div>
                          <div className='profileSectionHeading' >
                            Professional Details
                          </div> 
                          <br></br>
                          <div className='profileSubcontainer' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Past Condition</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='Pastcondition' label="Past Condition" onChange={handlechange} variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Surgical History</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='experience' onChange={handlechange} label="Surgical History" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Allergies</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='allergies' onChange={handlechange} label="Allergies" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div>   
                          <br></br>
                          <div className='profileSubcontainer' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Ongoing treatment</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='ongoingtreatment' label="Ongoing treatment" onChange={handlechange} variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >physicianNotes</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='physiciannotes' onChange={handlechange} label="Surgical History" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Fees</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='fees' onChange={handlechange} label="Fees" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div> 

                          <br></br>

                          <div className='profileSubcontainertwo' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Visit Time</div>
                                                       <div>
                                                       <input name='timingfrom' onChange={handlechange} type="time" id="time-input" />
                                                       </div> 
                                                          ---
                                                       <div>
                                                       <input name='timingto' onChange={handlechange} type="time" id="time-input" />
                                                       </div>

                                               </div> 
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >reasonForVisit</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='reasonforvisit' onChange={handlechange} label="reasonForVisit" variant="outlined" />
                                                       </div>
                                               </div>

                                               <div>
                                               <Button onClick={() => {handleTransfer()}} variant="contained">Submit</Button>

                                               </div>
                                             
                                               
                          </div>
                          
                 </div>
        </div>
        </>
    )
}