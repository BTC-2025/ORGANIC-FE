import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AccountPage.css';

function AccountPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Green St, Organic City, Earth 98765'
  });

  const navItems = [
    { icon: 'person', label: 'Personal Information', to: '/account' },
    { icon: 'history', label: 'Order History', to: '/account/history' },
    { icon: 'favorite', label: 'Wishlist', to: '/wishlist' },
    { icon: 'credit_card', label: 'Payment Methods', to: '/account/payment' },
    { icon: 'settings', label: 'Account Settings', to: '/account/settings' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data saved:', formData);
    // Show success message
    alert('Your changes have been saved successfully!');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="account-page">
      <main className="account-container">
        <h1 className="account-title">My Account</h1>
        
        <div className="account-content">
          <aside className="account-sidebar">
            <nav className="account-nav">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={`account-nav-item ${isActive(item.to) ? 'account-nav-item-active' : ''}`}
                >
                  <span className="material-symbols-outlined account-nav-icon">{item.icon}</span>
                  <span className="account-nav-label">{item.label}</span>
                </Link>
              ))}
            </nav>
          </aside>

          <div className="account-main">
            <section className="account-section">
              <h2 className="account-section-title">Personal Information</h2>
              
              <form className="account-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="form-label">
                    Shipping Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="4"
                    className="form-textarea"
                    placeholder="Enter your shipping address"
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            </section>

            {/* Additional account information */}
            <div className="account-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">12</h3>
                  <p className="stat-label">Orders</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">8</h3>
                  <p className="stat-label">Wishlist Items</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">24</h3>
                  <p className="stat-label">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Material Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </div>
  );
}

export default AccountPage;