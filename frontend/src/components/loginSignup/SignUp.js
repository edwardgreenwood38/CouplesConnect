import React, {useState} from 'react';
import './loginSignup.css';

// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';



function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('form submitted');
      try {
          const response = await fetch(`http://localhost:5000/user`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: username,
                  email: email,
                  password: password,
                  
              }),
          })
          if (response.ok) {
              alert('Registration Completed!');

      } else {
          alert('Registration Failed!, Please try again');
      }
   }catch(error) {
      console.log(error);
      alert('An error occured, Please try again in 1 min!');
   }
  };

  return (
      <div className = "container">
          <h1>New User</h1>
          <form onSubmit = {handleSubmit}>
          <input
              type = "email"
              placeholder = "Email"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              required
          />

          <input
              type = "password"
              placeholder = "Password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              required 
           />

          <input
              type = "text"
              placeholder = "Username"
              value = {username}
              onChange = {(e) => setUsername(e.target.value)}
              required
          />

              {/* Button */}
          <button type="submit">Enter</button>
          </form>
      </div>
  );
}
export default SignUp;