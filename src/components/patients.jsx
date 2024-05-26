import { Button, TextField } from '@mui/material'

import './profile.css'
import { useState } from 'react'
import axios from 'axios';



export default function SavePatient() {  

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


        const handlechange = (e) => {
                const {name , value} = e.target 
                setFormdata({...formdata,[name] : value})
        }
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

        const applyDoctor =  async () => {
          try {
                const response  = await axios.post(`${API_BASE_URL}/users/patient` , formdata) 
                console.log(response)


          } 
          catch (error) {
                   console.log("error sending request")
          }
        }
    return ( 
        <>

        <div>     
                
                
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
                                               <Button onClick={() => { applyDoctor()}} variant="contained">Submit</Button>

                                               </div>
                                             
                                               
                          </div>
                          
                 </div>
        </div>
        </>
    )
}