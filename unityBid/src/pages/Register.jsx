import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./RegisterC.css"

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [existingUser, setExistingUser] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    if (username && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some((user) => user.username === username);
      

      if (userExists) {
        setExistingUser(true);
        window.alert("Username already exists")
      }
      else{
        // Add the user data to local storage
        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : [];
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        navigate('/Login')
      }
      
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className='reg-container'>
      
        <form className='reg-form' onSubmit={handleSubmit}>
          <div className="form-element">
            <label>
              Username:  
            </label>
            <input className='reg-form-in' type="text" value={username} onChange={e => setUsername(e.target.value)} required />
            
          </div>
          <div className="form-element">
            <label>
              Password:
            </label>
            <input className='reg-form-in' type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            
          </div>
          <div className="form-element">
            <input className='form-button' type="submit" value="Register" />
          </div>

          <p>Already have an account, <Link to="/Login" className='link'>Login?</Link> </p>
        </form>
      
      
      
    </div>
    
  );
}

export default Register;
