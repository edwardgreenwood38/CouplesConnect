import React, {useState} from 'react';
import './loginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';



const Signup = () => { 
    const [action, setAction] = useState ("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('form submitted');
      try {
          const response = await fetch(`http://localhost:5000/User`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email: email,
                  password: password
              }),
          });
          if (response.ok) {
              alert('Login Completed!');

      } else {
          alert('Login Failed!, Please try again');
      }
    } catch(error) {
      // console.log(error);
      alert('An error occured, Please try again in 1 min!');
    }
  };
            

    return (
      <div> 
    <div className="container"> 
       <div className= "header"> 
        <div className="text">{action} </div>
        <div className="underline"></div>
       </div>
       <div className="inputs"></div>
       {action==="Login"?<div></div> :
    
       <div className="input">
          <img src={user_icon} alt="" />
          <input type="Name" placeholder="Name" />  
         </div>}
         
         <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />  
         </div>  

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />    
        </div> 
  </div>
  <div className="forgot-password">
      Lost Password? <span>Click Here</span>
    </div>
      <div className="submit-container">
      <form onSubmit = {handleSubmit}>
  <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
  <div className={action === "Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
  <button type="submit">Enter</button>
  </form>



   
    
   
    
    </div>
    </div>
);
};


export default Signup;