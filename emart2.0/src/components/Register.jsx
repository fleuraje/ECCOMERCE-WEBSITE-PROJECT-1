import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
   
    if (username && password) {
      setIsRegistered(true);
    } else {
      alert('Please provide a valid username and password');
    }
  };

  const handleReset = () => {
    setIsRegistered(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        {isRegistered ? (
          <div>
            <p>Registration successful for {username}!</p>
            <button onClick={handleReset} className="btn btn-dark">
              Reset
            </button>
          </div>
        ) : (
          <div>
            <h3 className="mb-3">REGISTER</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-2"
            />
            <button onClick={handleRegister} className="btn btn-dark">
              REGISTER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;