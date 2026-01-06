import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    deliveryOption: 'standard'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeliveryChange = (option) => {
    setFormData(prev => ({
      ...prev,
      deliveryOption: option
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="checkout-page">
      <main className="checkout-container">
        <div className="checkout-content">
          <div className="checkout-main">
            <nav className="checkout-breadcrumb">
              <Link to="/cart" className="breadcrumb-link">Cart</Link>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-current">Checkout</span>
            </nav>
            
            <h2 className="checkout-title">Shipping Information</h2>
            
            <div className="progress-section">
              <p className="progress-label">Progress</p>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: '33%' }}
                ></div>
              </div>
              <p className="progress-step">Step 1 of 3</p>
            </div>

            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="1234 Green St"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Groveville"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="California"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip" className="form-label">Zip Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="90210"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="checkout-sidebar">
            <div className="order-summary-card">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">$9.47</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Shipping</span>
                  <span className="summary-value free">Free</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span className="summary-label">Estimated Total</span>
                  <span className="summary-value">$9.47</span>
                </div>
              </div>
              <button 
                type="submit" 
                className="checkout-btn"
                onClick={handleSubmit}
              >
                Continue to Payment
              </button>
            </div>

            <div className="delivery-options">
              <h3 className="delivery-title">Delivery Options</h3>
              <div className="delivery-options-list">
                <label className={`delivery-option ${formData.deliveryOption === 'standard' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="delivery-option"
                    checked={formData.deliveryOption === 'standard'}
                    onChange={() => handleDeliveryChange('standard')}
                    className="delivery-radio"
                  />
                  <div className="delivery-option-content">
                    <div className="delivery-info">
                      <p className="delivery-name">Standard</p>
                      <p className="delivery-time">5-7 business days</p>
                    </div>
                    <span className="delivery-price">Free</span>
                  </div>
                </label>

                <label className={`delivery-option ${formData.deliveryOption === 'express' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="delivery-option"
                    checked={formData.deliveryOption === 'express'}
                    onChange={() => handleDeliveryChange('express')}
                    className="delivery-radio"
                  />
                  <div className="delivery-option-content">
                    <div className="delivery-info">
                      <p className="delivery-name">Express</p>
                      <p className="delivery-time">2-3 business days</p>
                    </div>
                    <span className="delivery-price">$5.00</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;