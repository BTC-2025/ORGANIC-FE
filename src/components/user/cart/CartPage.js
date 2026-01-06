import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import axios from 'axios';
import {toast} from 'react-hot-toast'

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() =>{
    cartedProducts()
  },[])

      const cartedProducts = async()=>{
      try{
        const userId = JSON.parse(localStorage.getItem('user')).id;
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/cart/user/${userId}`)
        setCartItems(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }
  
  const deletecartItem = async(cartId) =>{
    try{
      const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/cart/delete/${cartId}`)
      toast.success("Product removed from Cart",{position:'top-right',duration:2000})
      setCartItems(cartItems.filter(item => item.id !== cartId))
    }
    catch(err){
      console.error(err)
    }
  }

  const recommendedProducts = [
    {
      id: 1,
      name: 'Organic Bananas',
      price: '$2.49',
      description: 'Perfect for smoothies and baking.',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      name: 'Fresh Berries Mix',
      price: '$4.99',
      description: 'A vibrant mix for a healthy snack.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Whole Wheat Bread',
      price: '$3.99',
      description: 'Soft and nutritious, great for sandwiches.',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      name: 'Unsweetened Almond Milk',
      price: '$3.29',
      description: 'A creamy dairy-free alternative.',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const updateQuantity = async (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await axios.put(`http://192.168.1.5:3004/api/cart/update/${cartId}`, { quantity: newQuantity });
      setCartItems(cartItems.map(item => 
        item.id === cartId ? { ...item, quantity: newQuantity } : item
      ));
    } catch (error) {
      console.log(error);
    }
  };

  // const removeItem = (id) => {
  //   setCartItems(cartItems.filter(item => item.id !== id));
  // };

  const subtotal = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.Product.price) * item.quantity);
  }, 0);

  return (
    <div className="cart-page">
      <main className="cart-container">
        <div className="container mx-auto px-4 py-5 max-w-7xl">
          <div className="cart-header">
            <h2 className="cart-title">Shopping Cart</h2>
            <p className="cart-subtitle">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
          </div>
          
          <div className="cart-content">
            <div className="cart-items-section">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-icon">🛒</div>
                  <h3>Your cart is empty</h3>
                  <p>Add some delicious items to get started</p>
                  <Link to="/products" className="btn btn-primary">Start Shopping</Link>
                </div>
              ) : (
                <ul className="cart-items-list">
                  {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <img src={item.Product.imageUrl} alt={item.Product.name} />
                      </div>
                      <div className="cart-item-details">
                        <div className="cart-item-header">
                          <h3 className="cart-item-name">
                            <Link to="#">{item.Product.name}</Link>
                          </h3>
                          <p className="cart-item-price">${item.Product.price}</p>
                        </div>
                        <p className="cart-item-unit-price">${item.Product.price}</p>
                        <div className="cart-item-controls">
                          <div className="quantity-controls">
                            <span className="quantity-label">Qty</span>
                            <div className="quantity-input-group">
                              <button 
                                className="quantity-btn decrease"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >−</button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="quantity-input"
                                min="1"
                              />
                              <button 
                                className="quantity-btn increase"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >+</button>
                            </div>
                          </div>
                          <button 
                            className="remove-item-btn"
                            onClick={() => deletecartItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="order-summary">
              <div className="summary-card">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span className="free-shipping">Free</span>
                  </div>
                  <div className="summary-row">
                    <span>Estimated Tax</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="summary-divider"></div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>${(subtotal * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                <div className="checkout-btn-container">
                  <button className="btn btn-primary checkout-btn">Proceed to Checkout</button>
                </div>
                <div className="continue-shopping">
                  <p>
                    or{' '}
                    <Link to="/products" className="continue-link">
                      Continue Shopping <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {cartItems.length > 0 && (
            <section className="recommended-products">
              <h2 className="recommended-title">You might also like</h2>
              <div className="recommended-grid">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="recommended-product">
                    <div className="products-image-container">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <button className="quick-add-btn">+ Add</button>
                    </div>
                    <div className="products-info">
                      <h3 className="products-name">{product.name}</h3>
                      <p className="products-description">{product.description}</p>
                      <p className="products-price">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default CartPage;