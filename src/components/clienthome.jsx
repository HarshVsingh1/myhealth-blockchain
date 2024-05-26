
import axios from 'axios';
import { useEffect, useState } from 'react';

import './clienthome.css'
import DoctorCard from './doctorcard';







export default function Clienthome() { 
 

    const [doctors , setDoctors] = useState([])
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    useEffect(() => {
            const fetch = async() => {
                      const response = await axios.get(`${API_BASE_URL}/doctors`)
                      console.log("hi")
                      if(response){
                       
                        console.log(response.data.doctors)
                        setDoctors(response.data.doctors) 
                      }
            } 

            fetch()
    },[]) 

    if(!doctors) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='doctorCardContainer'  > 


      {/* Map over the doctors array and render DoctorCard for each doctor */}
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
   

            </div>
        )
    }


}


