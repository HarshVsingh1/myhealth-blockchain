import { Button, TextField } from '@mui/material'

import './profile.css'

export default function Profile() {
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
                                                       <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Last Name</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Phone number</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Phone number" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div> 

                          <br></br>

                          <div className='profileSubcontainer' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Address</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Address" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Website</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Website" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Email Address</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Email Address" variant="outlined" />
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
                                                       <TextField id="outlined-basic" label="Specialization" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Experience</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Experience" variant="outlined" />
                                                       </div>
                                               </div>
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Fees Per Consultation</div>
                                                       <div>
                                                       <TextField id="outlined-basic" label="Fees" variant="outlined" />
                                                       </div>
                                               </div>
                                               
                          </div> 

                          <br></br>

                          <div className='profileSubcontainertwo' >
                                               <div  className='profileTextfieldContainer' >
                                                       <div className='profileTextfieldHeading' >Timing</div>
                                                       <div>
                                                       <input type="time" id="time-input" />
                                                       </div> 
                                                          ---
                                                       <div>
                                                       <input type="time" id="time-input" />
                                                       </div>

                                               </div> 

                                               <div>
                                               <Button variant="contained">Update</Button>

                                               </div>
                                             
                                               
                          </div>
                          
                 </div>
        </div>
        </>
    )
}