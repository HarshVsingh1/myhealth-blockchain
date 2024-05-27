import { Button, TextField } from '@mui/material'
import Web3 from 'web3';
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
        const [amount,setAmount] = useState('0.00000045')


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
                                               <Button onClick={() => { handleTransfer()}} variant="contained">Submit</Button>

                                               </div>
                                             
                                               
                          </div>
                          
                 </div>
        </div>
        </>
    )
}