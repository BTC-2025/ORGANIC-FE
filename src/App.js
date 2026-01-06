import './App.css';
import Home from './components/user/home/Home'
import ProductListingPage from './components/user/ProductsListing/ProductListingPage';
import Header from './sections/Header';
import Footer from './sections/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './components/user/ProductsListing/ProductDetail';
import CartPage from './components/user/cart/CartPage';
import WishlistPage from './components/user/wishlist/WishlistPage';
import CheckoutPage from './components/user/checkout/CheckoutPage';
import AccountPage from './components/user/profile/AccountPage';
import LoginPage from './components/user/login/LoginPage';
import SignupPage from './components/user/signup/SignupPage';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import MyOrders from './components/user/orders/MyOrders';
import Products from './components/user/ProductsListing/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path='/products/:id' element={<ProductListingPage />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/search/:query" element={<ProductListingPage />} /> */}
          <Route path='/product' element={<ProductDetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/profile' element={<AccountPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
