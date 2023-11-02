import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
   
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        {isAuthenticated ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout} className="btn btn-dark">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h3 className="mb-3">SIGN IN</h3>
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
            <button onClick={handleLogin} className="btn btn-dark">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
