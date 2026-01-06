import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';
import toast from 'react-hot-toast';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/login`,{email:formData.email,password:formData.password})
      toast.success(res.data.message)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      localStorage.setItem("token",res.data.token)
    }catch(err){
      toast.error(err.response.data.message)
    }
  
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', formData);
      // Here you would typically handle authentication
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <h2 className="login-title">Welcome back</h2>
            <p className="login-subtitle">Sign in to your account to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email or Username
              </label>
              <div className="input-group">
                <span className="input-icon">
                  <span className="material-symbols-outlined">person</span>
                </span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email or username"
                  required
                  autoComplete="email"
                  className="form-input"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-icon">
                  <span className="material-symbols-outlined">lock</span>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="form-input"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                  disabled={isLoading}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="checkbox-input"
                  disabled={isLoading}
                />
                <span className="checkbox-custom"></span>
                Remember me
              </label>
              
              <Link 
                to="/forgot-password" 
                className="forgot-link"
                tabIndex={isLoading ? -1 : 0}
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* <div className="login-divider">
            <span className="divider-line"></span>
            <span className="divider-text">Or continue with</span>
            <span className="divider-line"></span>
          </div>

          <div className="social-login">
            <button 
              className="social-btn google-btn"
              type="button"
              disabled={isLoading}
              tabIndex={isLoading ? -1 : 0}
            >
              <span className="social-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </span>
              Google
            </button>

            <button 
              className="social-btn facebook-btn"
              type="button"
              disabled={isLoading}
              tabIndex={isLoading ? -1 : 0}
            >
              <span className="social-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </span>
              Facebook
            </button>
          </div> */}

          <div className="login-footer">
            <p className="footer-text">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="signup-link"
                tabIndex={isLoading ? -1 : 0}
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration elements */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* Material Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </div>
  );
}

export default LoginPage;