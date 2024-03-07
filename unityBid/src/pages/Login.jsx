import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginC.css"
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // Get the users from local storage
    let users = localStorage.getItem('users');
    users = users ? JSON.parse(users) : [];

    // Check if the entered username and password match any user in the users array
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      // User found, redirect to welcome page
      navigate("/Home");
    } else {
      // User not found, show an alert
      alert('Invalid username or password');
    }
  };

  return (
    <div className="log-container">
      <form className='log-form' onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Username:</label>
          <input className='form-in' type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="form-element">
          <label>Password:</label>
          <input className='form-in' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        
        <div className="form-element">
          <input className='form-button' type="submit" value="Log in" />
        </div>
        
        <p>Are you a new user, <Link to="/Register" className='link'>Register?</Link> </p>
          
        
        
      </form>
    </div>
    
  );
}

export default Login;
