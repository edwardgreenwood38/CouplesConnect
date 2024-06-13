import React, { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        try {
            const response = await fetch(`/login`, {
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
        console.log(error);
        alert('An error occured, Please try again in 1 min!');
    }
};
    return (
        <div className = "container">
            <h1>User Login</h1>
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

                {/* Button */}
            <button type="submit">Login</button>
            </form>
        </div>
      );
    }

export default SignIn;