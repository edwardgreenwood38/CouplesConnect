import React, {useState} from 'react';
import './loginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';



function Signup () { 
    const [action,setAction] = useState ("Sign Up");

    return (
      <div> 
    <div className='container'> 
       <div className= "header"> 
        <div className="text">{action} </div>
        <div className="underline"></div>
       </div>
    
       
         
         <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />  
         </div>  

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />    
        </div> 
  </div>


<div>
  <input type="button" className={ action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}/> 
   
   
    <div>Sign Up</div>
   
    <div className="forgot-password">
      Lost Password? <span>Click Here</span>
    </div>
    </div>
    </div>
)
}


export default Signup;