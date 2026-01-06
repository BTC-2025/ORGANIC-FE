import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductListingPage.css';
import toast from 'react-hot-toast';

const ProductListingPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [ratingMin, setRatingMin] = useState('');
  const [sortBy, setSortBy] = useState('new');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wishlistItems,setWishlistItems] = useState([])
  const [cartItems,setCartItems] = useState([])

  const userId = JSON.parse(localStorage.getItem('user')).id

  const categories = {
    1: 'MEDICINE',
    2: 'FOOD',
    3: 'COSMETICS',
    4: 'BABY',
    5: 'ESSENTIAL',
    6: 'HERBAL POWDER',
    7: 'PETS',
    8: 'PLANTS',
  };

  const categoryName = categories[id] || 'Products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(process.env.REACT_APP_BASE_URL)
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/categoryid/${id}`);
        setProducts(res.data.items || []);
      } catch (err) {
        console.error('Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() =>{
    fetchCart()
    fetchWishlist()
    isInCart()
    isInWishlist()
  },[])


  const fetchWishlist = async () =>{
  
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/wishlist/${userId}`)
    if(res.status === 200 || res.status === 201){
      setWishlistItems(res.data)
    }
  }

  const fetchCart = async () =>{

    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/cart/user/${userId}`)
    if(res.status === 200 || res.status === 201){
      setCartItems(res.data)
    }
  }

  const isInWishlist = (productId) =>{
    return wishlistItems.some(item => item.productId === productId);
  }

  const isInCart = (productId) =>{
    return cartItems.some(item => item.productId === productId)
  }

  const addtocart = async(productId) =>{
    try{

      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart/add`,{
        userId,productId,quantity:1
      })
      toast.success('Product addedd to Cart',{position:'top-right',duration:2000})
      fetchCart()
      console.log(userId)
      console.log(productId)
    }
    catch(err){
      console.log(err)
    }
  }

  
  const addtowishlist = async(productId) =>{
    try{

      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/wishlist/add`,{
        userId,productId
      })
      if(res.status === 200 || res.status === 201){
        toast.success('Product added to Wishlist' , {position:'top-right', duration:2000})
        fetchWishlist()
      }
    }catch(err){
      console.log(err)
    }
  }

  const removefromwishlist = async(productId) =>{
    try{
      console.log(userId,productId)
      const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/wishlist/remove`,{
        data:{userId,productId}
      })
      toast.success('Product removed from Wishlist' , {position:'top-right', duration:2000})
      fetchWishlist()
    }catch(err){
      console.error(err)
    }
  }

  const getFilteredSortedProducts = () => {
    let filtered = [...products];
    if (priceMin !== '') filtered = filtered.filter(p => p.price >= Number(priceMin));
    if (priceMax !== '') filtered = filtered.filter(p => p.price <= Number(priceMax));
    if (ratingMin !== '') filtered = filtered.filter(p => (p.rating || 0) >= Number(ratingMin));
    
    if (sortBy === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'new') {
      filtered.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return b.id - a.id;
      });
    }
    return filtered;
  };

  const filteredProducts = getFilteredSortedProducts();
  const activeFiltersCount = [priceMin, priceMax, ratingMin].filter(Boolean).length;

  if (loading) return <div className="plp-loading">Loading...</div>;

  return (
    <div className="plp-container">
      {/* Mobile Filter Header */}
      <div className="plp-mobile-filter" style={{position:'sticky', top:70, zIndex:1}}>
        <button 
          className="plp-filter-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="material-icons">filter_list</span>
          Filters
          {activeFiltersCount > 0 && (
            <span className="plp-filter-badge">{activeFiltersCount}</span>
          )}
        </button>
      </div>

      <div className="plp-content">
        {/* Sidebar Overlay */}
        <div 
          className={`plp-sidebar-overlay ${sidebarOpen ? 'plp-sidebar-overlay-open' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Filters Sidebar */}
        <aside className={`plp-sidebar ${sidebarOpen ? 'plp-sidebar-open' : ''}`}>
          <div className="plp-sidebar-header">
            <h3>Filters</h3>
            <div className="plp-sidebar-actions">
              <button 
                className="plp-btn-clear"
                onClick={() => {
                  setPriceMin('');
                  setPriceMax('');
                  setRatingMin('');
                }}
              >
                Clear All
              </button>
              <button 
                className="plp-btn-close"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
          </div>

          <div className="plp-sidebar-content">
            {/* Price Filter */}
            <div className="plp-filter-section">
              <h4 className="plp-filter-title">Price Range</h4>
              <div className="plp-price-input-group">
                <div className="plp-price-input-wrapper">
                  <input
                    type="number"
                    placeholder="Min"
                    className="plp-price-input"
                    value={priceMin}
                    min="0"
                    onChange={e => setPriceMin(e.target.value.replace(/^0+/, ''))}
                  />
                </div>
                <span className="plp-price-separator">to</span>
                <div className="plp-price-input-wrapper">
                  <input
                    type="number"
                    placeholder="Max"
                    className="plp-price-input"
                    value={priceMax}
                    min="0"
                    onChange={e => setPriceMax(e.target.value.replace(/^0+/, ''))}
                  />
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="plp-filter-section">
              <h4 className="plp-filter-title">Customer Rating</h4>
              <div className="plp-rating-filter">
                {[4, 3, 2, 1].map((star) => (
                  <div 
                    key={star}
                    className={`plp-rating-option ${Number(ratingMin) === star ? 'plp-rating-option-active' : ''}`}
                    onClick={() => setRatingMin(star === Number(ratingMin) ? '' : star.toString())}
                  >
                    <div className="plp-rating-stars">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-icons"
                          style={{ 
                            color: s <= star ? '#FFD700' : '#e0e0e0',
                            fontSize: '18px'
                          }}
                        >
                          {s <= star ? 'star' : 'star_border'}
                        </span>
                      ))}
                    </div>
                    <span className="plp-rating-text">& above</span>
                  </div>
                ))}
                {ratingMin !== '' && (
                  <button
                    className="plp-rating-clear"
                    onClick={() => setRatingMin('')}
                  >
                    Clear rating
                  </button>
                )}
              </div>
            </div>

            {/* Sort By */}
            <div className="plp-filter-section">
              <h4 className="plp-filter-title">Sort By</h4>
              <div className="plp-sort-options">
                <label className="plp-sort-option">
                  <input
                    type="radio"
                    name="sort"
                    value="new"
                    checked={sortBy === 'new'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span className="plp-radio-checkmark"></span>
                  New Arrival
                </label>
                <label className="plp-sort-option">
                  <input
                    type="radio"
                    name="sort"
                    value="priceHigh"
                    checked={sortBy === 'priceHigh'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span className="plp-radio-checkmark"></span>
                  Price: High to Low
                </label>
                <label className="plp-sort-option">
                  <input
                    type="radio"
                    name="sort"
                    value="priceLow"
                    checked={sortBy === 'priceLow'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span className="plp-radio-checkmark"></span>
                  Price: Low to High
                </label>
              </div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="plp-sidebar-footer">
            <button 
              className="plp-btn-apply"
              onClick={() => setSidebarOpen(false)}
            >
              Show {filteredProducts.length} Products
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="plp-main-content">
          <div className="plp-product-list">
            {/* Page Header */}
            <div className="plp-page-header">
              <div className="plp-header-info">
                <h1>{categoryName}</h1>
                <p>Showing {filteredProducts.length} products</p>
              </div>
              <div className="plp-sort-container">
                <span className="plp-sort-label">Sort by:</span>
                <select
                  className="plp-sort-select"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                >
                  <option value="new">New Arrival</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="priceLow">Price: Low to High</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="plp-product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="plp-product-card">
                    <div className="plp-product-image">
                      {product.discount > 0 && (
                        <div className="plp-discount-badge">-{product.discount}%</div>
                      )}
                      <div
                        className="plp-image-container"
                        style={{ backgroundImage: `url(${product.imageUrl})` }}
                      />
                      {isInWishlist(product.id) ?(
                       <button className="plp-btn-wishlist plp-btn-wishlist-active" onClick={() => removefromwishlist(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </button> 
                      ):(
                      <button className="plp-btn-wishlist" onClick={() => addtowishlist(product.id)}>
                        <span className="material-icons">favorite_border</span>
                      </button>
                      )}
                    </div>
                    <div className="plp-product-info">
                      <h3 className="plp-product-name">{product.name}</h3>
                      <div className="plp-product-rating">
                        <div className="plp-rating-stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className="material-icons"
                              style={{ 
                                color: star <= Math.floor(product.rating || 0) ? '#FFD700' : '#e0e0e0',
                                fontSize: '16px'
                              }}
                            >
                              {star <= (product.rating || 0) ? 'star' : 
                               (star - 0.5 <= (product.rating || 0) ? 'star_half' : 'star_border')}
                            </span>
                          ))}
                        </div>
                        <span className="plp-rating-value">({product.rating || 0})</span>
                      </div>
                      <div className="plp-price-container">
                        <span className="plp-product-price">₹{product.price}</span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="plp-original-price">₹{product.originalPrice}</span>
                        )}
                      </div>
                      {isInCart(product.id) ? (
                      <button className="plp-btn-add-to-cart" onClick={() => window.location.href='/cart'}>
                        <span className="material-icons">shopping_cart</span>
                        Go to Cart
                      </button>
                      ) : (
                      <button className="plp-btn-add-to-cart" onClick={() => addtocart(product.id)}>
                        <span className="material-icons">shopping_cart</span>
                        Add to Cart
                      </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="plp-no-products">
                  <span className="material-icons">search_off</span>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to see more results</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

export default ProductListingPage;