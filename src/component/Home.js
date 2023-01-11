import React from 'react';
import './Home.css';

const Home = () => {
   return(
      <div>
      
      
      <div className="form">
      <img id='pic' src="https://images.moneycontrol.com/static-mcnews/2021/07/Airline.jpg?impolicy=website&width=770&height=431" alt="" />
      <div>
      
         <h1>
         Welcome to FlyAirways
         </h1>
         <form>
         
         <label>Traveler Name: </label><input type="text" name="uname"  /><br />
         <label>Traveler's Age: </label><input type="text" name="age"  /><br />
         <label className='ori'>Boarding: </label><input type="text" name="origin"  /><br />
         <label className='des'>Destination: </label><input type="text" name="origin"  /><br />
         <label>Date of Journey: </label><input type="date" name="origin"  /><br />
         <button className='btn'>Book Now</button>

         
         
         </form>
           
      </div>
     <form>
       


         
       
       
       
     </form>
   </div>

            
      </div>
   );
};
export default Home;