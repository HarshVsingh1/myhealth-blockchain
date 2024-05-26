

import logo from './assets/logo.png'

import tagSideImage from './assets/docOne.png'

import './App.css'
import { Button, Typography } from '@mui/material';

import { Link } from 'react-scroll';
import Card from './components/cards';
import Schemes from './components/schemes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

function Homapage() {

  const token = sessionStorage.getItem("token")
  const email = sessionStorage.getItem('email')
  const [Token , setToken] = useState(null)
  const navigate = useNavigate();
  

useEffect(() => {
  setToken(token)
}, [token])


    return <>
              

              <div id="header">
                           <Navbar></Navbar>
                        <hr style={{margin : "0 5%"}}></hr>

                            <div id='tagContainer'>
                                <div>
                                <div id='tagline'>
                                A Wealth Of Experience To  <span id='typinganimation'>  Heal And Help you .</span>
                                </div>
                                <div id='subTagline'>
                                Welcome to Myhealth, your trusted partner in secure and efficient medical record management. Our blockchain-based platform ensures the highest level of data integrity, security, and accessibility for your medical records. With MedBlock, healthcare providers and patients can seamlessly manage and share medical information with utmost confidence. Explore our innovative features designed to enhance your healthcare experience.
                                </div>
                                <div id='launchButton' >
                                  <Link to='Features' smooth={true} duration={800}>
                                <Button onClick={() => {navigate('/userdashboard')}} className='lbutton' sx={{ backgroundColor : "#03045e" , width : '300px' }} variant="contained">Make an appointment </Button>
                                  </Link>
                                
                                </div>
                                </div>
                                <div >
                                           <img  id='tagimage' className='rightAnimation' src={tagSideImage} alt='tagSideImage' ></img>
                                </div>
                            </div>

              </div> 

              <div>
                        <Card></Card>
                    </div>  

                    <div> 
                      
                      <Schemes></Schemes>
                    </div>

                  
                  <div>
                    <Footer></Footer>
                  </div>
                   
    </>


}

export default Homapage ;