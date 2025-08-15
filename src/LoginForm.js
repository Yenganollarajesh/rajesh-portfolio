import React from 'react';
import "./LoginForm.css"
import { useState } from 'react';

function LoginForm({ isLoggedIn, handleLogin }) {
  const id = React.useId();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);
    const confirmPassword = '123456';
    const confirmEmail = 'test@test.com';

    // Basic validation
    if (email !== confirmEmail || password !== confirmPassword) {
      setError('Please enter a valid email and password');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call - replace with actual login API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        // Call the parent's handleLogin function with the credentials
        // handleLogin({ email, password });
        console.log("success")
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-form-wrapper'>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor={`${id}-email`}>Email:</label>
        <input
          type="email"
          id={`${id}-email`}
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
        />
      </div>
      <div className="row">
        <label htmlFor={`${id}-password`}>
          Password:
        </label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id={`${id}-password`}
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
            disabled={isLoading}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={!email || !password} className='log-in-button-wrapper'>
        {isLoading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
    </div>
  );
}

export default LoginForm;