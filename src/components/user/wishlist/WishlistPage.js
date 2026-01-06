import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WishlistPage.css';
import axios from 'axios';
import toast from 'react-hot-toast';

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems,setCartItems] = useState([])

  const userId = JSON.parse(localStorage.getItem("user")).id

  

    const removefromwishlist = async(productId) =>{
    try{
      console.log(userId,productId)
      const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/wishlist/remove`,{
        data:{userId,productId}
      })
      toast.success('Product removed from Wishlist' , {position:'top-right', duration:2000})
      setWishlistItems(wishlistItems.filter(item => item.id !== productId))
    }catch(err){
      console.error(err)
    }
  }

  const moveAllToCart = () => {
    // This would typically be handled by a cart context or state management
    alert('All items moved to cart!');
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.productId === productId);
  }

  useEffect(() =>{
    const fetchWishlist = async () =>{
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/wishlist/${userId}`)
      if(res.status === 200 || res.status === 201){
        // setWishlistItems(res.data)
        console.log(res.data)
        setWishlistItems(res.data)
      }
    }

    const fetchcartItem = async() =>{
      try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/cart/user/${userId}`)
        if(res.status === 200 || res.status ===201){
          setCartItems(res.data)
        }
      }catch(err){
        console.error(err)
      }
    }

    fetchWishlist()
    fetchcartItem()
    
  },[])

  return (
    <div className="wishlist-page">
      <main className="wishlist-container">
        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-subtitle">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved for later
          </p>
          
          {wishlistItems.length > 0 && (
            <button className="move-all-btn" onClick={moveAllToCart}>
              Move All to Cart
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">❤️</div>
            <h2>Your wishlist is empty</h2>
            <p>Save your favorite items here for easy access later</p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
  <div key={item.id} className="wishlist-card">
    <div className="wishlist-item-image">
      <img src={item.Product.imageUrl} alt={item.Product.name} />
      {item.Product.stock <= 0 && (
        <div className="out-of-stock-badge">Out of Stock</div>
      )}
      <button 
        className="remove-wishlist-btn"
        onClick={() => removefromwishlist(item.id)}
        aria-label="Remove from wishlist"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
    </div>
    
    <div className="wishlist-item-details">
      <h3 className="wishlist-item-name">{item.Product.name}</h3>
      <p className="wishlist-item-price">₹{item.Product.price}</p>
      
      <div className="wishlist-item-actions">
        {isInCart(item.productId) ? (
          <button className="plp-btn-add-to-cart" onClick={() => window.location.href='/cart'}>
            <span className="material-icons">shopping_cart</span>
              Go to Cart
            </button>
          ) : (
          <button className="plp-btn-add-to-cart" onClick={() => console.log("added to cart")}>
            <span className="material-icons">shopping_cart</span>
               Add to Cart
          </button>
        )}
                      
        <button 
          className="remove-item-btn" 
          onClick={() => removefromwishlist(item.productId)}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
))}
          </div>
        )}

        {wishlistItems.length > 0 && (
          <div className="wishlist-footer">
            <p>Items in your wishlist are not reserved. Add to cart when you're ready to purchase.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default WishlistPage;