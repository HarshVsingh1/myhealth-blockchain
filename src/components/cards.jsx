import './cards.css'  
import clock from '../assets/clock.gif'
import care from '../assets/care.gif' 
import emergency from '../assets/emergency.gif'
export default function Card() {
    return (
        <> 
        <div id='mainCardContainer' >

        
            <div className='cardContainer' >
                              <div>  <img className='icon' src={clock} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Enhanced Data Security
                              </div>
                              <div className='cardDescription' >
                              Secure encryption and tamper-proof records ensure your medical data is protected from unauthorized access and breaches.
                              </div>
            </div>  

            <div className='cardContainer' >
                              <div>  <img className='icon' src={care} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Seamless Data Accessibility
                              </div>
                              <div className='cardDescription' >
                              Access and share your medical records anytime, anywhere, with our user-friendly interface, ensuring real-time updates and better medical decisions.
                              </div>
            </div>

            <div className='cardContainer' >
                              <div>  <img className='icon' src={emergency} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Interoperability and Integration
                              </div>
                              <div className='cardDescription' >
                              Easily integrates with existing healthcare systems, allowing seamless data sharing across different providers and institutions.
                              </div>
            </div> 

            <div className='cardContainer' >
                              <div>  <img className='icon' src={emergency} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Patient-Centric Management
                              </div>
                              <div className='cardDescription' >
                              Gives patients full control over their records, enabling them to manage permissions and track data access for a more personalized healthcare experience.
                              </div>
            </div>
         </div>
        </>
    )
}