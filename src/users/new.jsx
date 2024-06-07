import React, {useState} from 'react';


function RegistrationFrom() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        try {
            const response = await fetch(`/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
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
            <h1>New User Registration</h1>
            <form onSubmit = {handleSubmit}>
            <input>
                type = "email"
                placeholder = "Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                required
            </input>

            <input>
                type = "password"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                required 
             </input>

            <input>
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
                required
            </input>

                {/* Button */}
            <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;