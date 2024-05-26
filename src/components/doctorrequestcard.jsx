import { useState } from 'react';
import man from '../assets/man.png'
import { Alert, Button, Snackbar} from '@mui/material';
import axios from 'axios';

export default function DoctorRequestCard  ({ doctor }) { 
    
    const [open, setOpen] = useState(false);
    const [servity,setServity] = useState('success')
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
                doctorId : doctor._id ,
               
                
        }
         const response = await axios.patch(`${API_BASE_URL}/approve` , data)   ;
           console.log(data)
         if(response.status == 200 ) {
                
          openbox( 'doctor is approved now' , 'success')
        }

    }
    
    return (
    <div key={doctor._id} className='doctorcard'> 
     <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleMessageClose} severity={servity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar> 
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
            <Button onClick={book} variant="contained">Approve</Button>
          </div>
        </div>
      </div>
    </div>
  )

}

