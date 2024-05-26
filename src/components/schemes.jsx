
import { Button } from '@mui/material'
import './schemes.css'
export default function() {
    return (
        <>
          <div id='schemesContainer' >
          <div>
                           
                           <div id="title" >
                            <div id="block" >
                                    
                            </div>
                            <div id='titleText' >
                            Advantages / USP
                            </div>
                     </div>
                     <div id="subTitleAndTime" >
                            <div id='subTitleAndTitleText' >
                            Advantages provided by Myhealth
                            </div>
                     </div> 
                      </div>
                  <div className='schemeCardContainer' >
                      <div className='schemesCard' >
                              <div className='schemeTitle' >
                              Unmatched Data Security
                              </div> 
                              <div>
                              Leveraging blockchain technology, Myhealth ensures that all medical records are encrypted and immutable, providing the highest level of protection against data breaches and unauthorized access.
                              </div> 
                      </div> 
                

               

                
                      <div className='schemesCard' >
                              <div className='schemeTitle' >
                              Instant Accessibility
                              </div> 
                              <div>
                              Myhealth allows both patients and healthcare providers to access medical records instantly from anywhere, ensuring that critical health information is always available when needed.
                              </div> 
                              
                      </div>

                      <div className='schemesCard' >
                              <div className='schemeTitle' >
                              Empowered Patient Control
                              </div> 
                              <div>
                              Myhealth puts patients in control of their own medical records, allowing them to manage permissions, track access, and ensure their health data is accurate and up-to-date.
                                </div> 
                             
                      </div> 

              </div>      
          </div>
        </>
    )
}