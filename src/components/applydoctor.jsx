import { Button, TextField } from '@mui/material'

import './profile.css'
import { useState } from 'react'
import axios from 'axios';



export default function Applydoctor() {  

        const [ formdata , setFormdata] = useState({
                firstName : '' ,
                lastName : '' ,
                phoneNumber : '' , 
                address : '' ,
                website : '' ,
                email : '' ,
                specialization :'' ,
                experience : '' ,
                fees : '' ,
                timingfrom : '' ,
                timingto : '' ,
                password  : ''

        }) 


        const handlechange = (e) => {
                const {name , value} = e.target 
                setFormdata({...formdata,[name] : value})
        }
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

        const applyDoctor =  async () => {
          try {
                const response  = await axios.post(`${API_BASE_URL}/users/applydoctor` , formdata) 
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
                                                       <div className='profileTextfieldHeading' >Website</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='website' onChange={handlechange}  label="Website" variant="outlined" />
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
                                                       <div className='profileTextfieldHeading' >Specialization</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='specialization' label="Specialization" onChange={handlechange} variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Experience</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='experience' onChange={handlechange} label="Experience" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Fees Per Consultation</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='fees' onChange={handlechange} label="Fees" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div> 

                          <br></br>

                          <div className='profileSubcontainertwo' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Timing</div>
                                                       <div>
                                                       <input name='timingfrom' onChange={handlechange} type="time" id="time-input" />
                                                       </div> 
                                                          ---
                                                       <div>
                                                       <input name='timingto' onChange={handlechange} type="time" id="time-input" />
                                                       </div>

                                               </div> 
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Password</div>
                                                       <div>
                                                       <TextField id="outlined-basic" name='password' onChange={handlechange} label="password" variant="outlined" />
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