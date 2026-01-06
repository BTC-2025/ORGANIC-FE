import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Table, Form, Button, 
  Navbar, Nav, Modal, Alert, Badge, Spinner, InputGroup
} from 'react-bootstrap';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  // Dashboard state
  const [activeSection, setActiveSection] = useState('dashboard');
  const [analyticsData, setAnalyticsData] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalReturns: 0,
    totalComplaints: 0
  });
  
  // Mock data for demonstration
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 299.99, stock: 45, description: 'High-quality product', discount: 10, tagline: 'Best seller', image: '/api/placeholder/80/80' },
    { id: 2, name: 'Summer T-Shirt', category: 'Clothing', price: 49.99, stock: 100, description: 'Comfortable wear', discount: 5, tagline: 'New arrival', image: '/api/placeholder/80/80' },
    { id: 3, name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 30, description: 'Latest technology', discount: 15, tagline: 'Limited edition', image: '/api/placeholder/80/80' },
    { id: 4, name: 'Desk Lamp', category: 'Home', price: 89.99, stock: 75, description: 'Modern design', discount: 0, tagline: 'Energy efficient', image: '/api/placeholder/80/80' }
  ]);
  
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', date: '2023-10-15', status: 'Delivered', total: 299.99, items: 2 },
    { id: 2, customer: 'Jane Smith', date: '2023-10-16', status: 'Pending', total: 149.99, items: 1 },
    { id: 3, customer: 'Bob Johnson', date: '2023-10-17', status: 'Cancelled', total: 89.99, items: 3 },
    { id: 4, customer: 'Alice Brown', date: '2023-10-18', status: 'Delivered', total: 199.99, items: 1 }
  ]);
  
  const [returns, setReturns] = useState([
    { id: 1, orderId: 101, customer: 'John Doe', reason: 'Wrong size', status: 'Pending', date: '2023-10-10' },
    { id: 2, orderId: 102, customer: 'Jane Smith', reason: 'Defective product', status: 'Processed', date: '2023-10-12' },
    { id: 3, orderId: 103, customer: 'Mike Wilson', reason: 'Changed mind', status: 'Refunded', date: '2023-10-14' }
  ]);
  
  const [complaints, setComplaints] = useState([
    { id: 1, orderId: 101, customer: 'John Doe', type: 'Delivery', description: 'Late delivery', status: 'Resolved', date: '2023-10-05' },
    { id: 2, orderId: 102, customer: 'Jane Smith', type: 'Product', description: 'Wrong item received', status: 'Open', date: '2023-10-08' },
    { id: 3, orderId: 103, customer: 'Robert Davis', type: 'Service', description: 'Rude customer service', status: 'In Progress', date: '2023-10-11' }
  ]);
  
  const [feedback, setFeedback] = useState([
    { id: 1, product: 'Wireless Headphones', customer: 'John Doe', rating: 4, comment: 'Good product with excellent sound quality', date: '2023-10-12' },
    { id: 2, product: 'Summer T-Shirt', customer: 'Jane Smith', rating: 5, comment: 'Excellent quality and perfect fit', date: '2023-10-10' },
    { id: 3, product: 'Smart Watch', customer: 'Mike Wilson', rating: 3, comment: 'Good features but battery life could be better', date: '2023-10-08' }
  ]);
  
  // Order trends data for chart
  const orderTrendsData = [
    { name: 'Jan', orders: 120, revenue: 12000 },
    { name: 'Feb', orders: 190, revenue: 19000 },
    { name: 'Mar', orders: 150, revenue: 15000 },
    { name: 'Apr', orders: 200, revenue: 22000 },
    { name: 'May', orders: 180, revenue: 19800 },
    { name: 'Jun', orders: 220, revenue: 24200 },
    { name: 'Jul', orders: 240, revenue: 26400 },
    { name: 'Aug', orders: 210, revenue: 23100 },
    { name: 'Sep', orders: 190, revenue: 20900 },
    { name: 'Oct', orders: 230, revenue: 25300 }
  ];
  
  // Product category data for pie chart
  const categoryData = [
    { name: 'Electronics', value: 35 },
    { name: 'Clothing', value: 25 },
    { name: 'Home', value: 20 },
    { name: 'Books', value: 15 },
    { name: 'Other', value: 5 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  
  // Modal states
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    discount: '',
    tagline: '',
    image: ''
  });
  
  // Search and filter states
  const [productSearch, setProductSearch] = useState('');
  const [orderFilter, setOrderFilter] = useState('All');
  const [feedbackFilter, setFeedbackFilter] = useState('All');
  
  // Initialize analytics data
  useEffect(() => {
    if (isAuthenticated) {
      setAnalyticsData({
        totalOrders: orders.length,
        totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
        totalReturns: returns.length,
        totalComplaints: complaints.length
      });
    }
  }, [isAuthenticated, orders, returns, complaints]);
  
  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    
    // Simulate API call
    setTimeout(() => {
      if (loginData.email === 'admin@example.com' && loginData.password === 'password') {
        setIsAuthenticated(true);
        localStorage.setItem('adminAuth', 'true');
      } else {
        setLoginError('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };
  
  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };
  
  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  
  // Handle product form changes
  const handleProductFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value
    });
  };
  
  // Handle product submission (add/edit)
  const handleProductSubmit = (e) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id ? { ...p, ...productForm } : p
      ));
    } else {
      // Add new product
      const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...productForm
      };
      setProducts([...products, newProduct]);
    }
    
    setShowProductModal(false);
    resetProductForm();
  };
  
  // Edit product
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      description: product.description,
      discount: product.discount,
      tagline: product.tagline,
      image: product.image || ''
    });
    setShowProductModal(true);
  };
  
  // Delete product
  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };
  
  // Reset product form
  const resetProductForm = () => {
    setProductForm({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      discount: '',
      tagline: '',
      image: ''
    });
    setEditingProduct(null);
  };
  
  // Update order status
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };
  
  // Update return status
  const handleUpdateReturnStatus = (returnId, newStatus) => {
    setReturns(returns.map(ret => 
      ret.id === returnId ? { ...ret, status: newStatus } : ret
    ));
  };
  
  // Update complaint status
  const handleUpdateComplaintStatus = (complaintId, newStatus) => {
    setComplaints(complaints.map(comp => 
      comp.id === complaintId ? { ...comp, status: newStatus } : comp
    ));
  };
  
  // Filter products based on search
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    product.category.toLowerCase().includes(productSearch.toLowerCase())
  );
  
  // Filter orders based on status
  const filteredOrders = orderFilter === 'All' 
    ? orders 
    : orders.filter(order => order.status === orderFilter);
  
  // Filter feedback based on rating
  const filteredFeedback = feedbackFilter === 'All' 
    ? feedback 
    : feedback.filter(item => item.rating === parseInt(feedbackFilter));
  
  // Login Form
  if (!isAuthenticated) {
    return (
      <Container fluid className="login-containers d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col md={6} lg={4} className="mx-auto">
            <Card className="login-card shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="login-icon">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h2 className="login-title">Admin Login</h2>
                  <p className="text-muted">Enter your credentials to access the dashboard</p>
                </div>
                
                {loginError && <Alert variant="danger" className="animated-alert">{loginError}</Alert>}
                
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-4">
                    <InputGroup>
                      <InputGroup.Text className="input-icon">
                        <i className="fas fa-envelope"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        required
                        className="input-field"
                      />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <InputGroup>
                      <InputGroup.Text className="input-icon">
                        <i className="fas fa-key"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        required
                        className="input-field"
                      />
                    </InputGroup>
                  </Form.Group>
                  
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 login-btns" 
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner animation="border" size="sm" /> : 'Login'}
                  </Button>
                </Form>
                
                <div className="text-center mt-4">
                  <small className="text-muted demo-credentials">
                    Demo credentials: admin@example.com / password
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  // Dashboard Content
  return (
    <div className="admin-dashboard">
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="admin-navbar px-3">
        <Navbar.Brand href="#" className="navbar-brand">
          <i className="fas fa-tachometer-alt me-2"></i>
          Admin Dashboard
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-user">
              <i className="fas fa-user-circle me-1"></i> Admin User
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="logout-btns">
              <i className="fas fa-sign-out-alt me-1"></i> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} lg={2} className="sidebar p-0">
            <div className="sidebar-header">
              <h5>Navigation</h5>
            </div>
            <Nav className="flex-column p-3">
              <Nav.Link 
                className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveSection('dashboard')}
              >
                <i className="fas fa-tachometer-alt me-2"></i> Dashboard
              </Nav.Link>
              
              <Nav.Link 
                className={`sidebar-link ${activeSection === 'products' ? 'active' : ''}`}
                onClick={() => setActiveSection('products')}
              >
                <i className="fas fa-box me-2"></i> Products
              </Nav.Link>
              
              <Nav.Link 
                className={`sidebar-link ${activeSection === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveSection('orders')}
              >
                <i className="fas fa-shopping-cart me-2"></i> Orders
              </Nav.Link>
              
              <Nav.Link 
                className={`sidebar-link ${activeSection === 'returns' ? 'active' : ''}`}
                onClick={() => setActiveSection('returns')}
              >
                <i className="fas fa-undo me-2"></i> Returns
              </Nav.Link>
              
              <Nav.Link 
                className={`sidebar-link ${activeSection === 'complaints' ? 'active' : ''}`}
                onClick={() => setActiveSection('complaints')}
              >
                <i className="fas fa-exclamation-triangle me-2"></i> Complaints
              </Nav.Link>
              
              <Nav.Link 
                className={`sidebar-link ${activeSection === 'feedback' ? 'active' : ''}`}
                onClick={() => setActiveSection('feedback')}
              >
                <i className="fas fa-star me-2"></i> Feedback
              </Nav.Link>
            </Nav>
          </Col>
          
          {/* Main Content */}
          <Col md={9} lg={10} className="main-content p-4">
            {/* Dashboard Section */}
            {activeSection === 'dashboard' && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="section-title">Dashboard Overview</h2>
                  <div className="date-indicator">
                    <i className="fas fa-calendar me-2"></i>
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
                
                {/* Analytics Cards */}
                <Row className="mb-4">
                  <Col md={3} className="mb-3">
                    <Card className="analytics-card analytics-card-orders">
                      <Card.Body className="text-center">
                        <div className="card-icon">
                          <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3 className="card-value">{analyticsData.totalOrders}</h3>
                        <p className="card-label">Total Orders</p>
                        <div className="card-trend positive">
                          <i className="fas fa-arrow-up me-1"></i> 12.5%
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={3} className="mb-3">
                    <Card className="analytics-card analytics-card-revenue">
                      <Card.Body className="text-center">
                        <div className="card-icon">
                          <i className="fas fa-dollar-sign"></i>
                        </div>
                        <h3 className="card-value">${analyticsData.totalRevenue.toFixed(2)}</h3>
                        <p className="card-label">Total Revenue</p>
                        <div className="card-trend positive">
                          <i className="fas fa-arrow-up me-1"></i> 8.3%
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={3} className="mb-3">
                    <Card className="analytics-card analytics-card-returns">
                      <Card.Body className="text-center">
                        <div className="card-icon">
                          <i className="fas fa-undo"></i>
                        </div>
                        <h3 className="card-value">{analyticsData.totalReturns}</h3>
                        <p className="card-label">Returns</p>
                        <div className="card-trend negative">
                          <i className="fas fa-arrow-down me-1"></i> 3.2%
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={3} className="mb-3">
                    <Card className="analytics-card analytics-card-complaints">
                      <Card.Body className="text-center">
                        <div className="card-icon">
                          <i className="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3 className="card-value">{analyticsData.totalComplaints}</h3>
                        <p className="card-label">Complaints</p>
                        <div className="card-trend positive">
                          <i className="fas fa-arrow-down me-1"></i> 5.7%
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                {/* Charts */}
                <Row>
                  <Col md={8} className="mb-4">
                    <Card className="chart-card">
                      <Card.Header className="chart-header">
                        <h5 className="mb-0">Order Trends & Revenue</h5>
                      </Card.Header>
                      <Card.Body>
                        <ResponsiveContainer width="100%" height={300}>
                          <AreaChart data={orderTrendsData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              contentStyle={{ 
                                borderRadius: '10px', 
                                border: 'none', 
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
                              }}
                            />
                            <Legend />
                            <Area 
                              type="monotone" 
                              dataKey="orders" 
                              stroke="#8884d8" 
                              fill="#8884d8" 
                              fillOpacity={0.3} 
                              name="Orders"
                            />
                            <Area 
                              type="monotone" 
                              dataKey="revenue" 
                              stroke="#82ca9d" 
                              fill="#82ca9d" 
                              fillOpacity={0.3} 
                              name="Revenue ($)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={4} className="mb-4">
                    <Card className="chart-card">
                      <Card.Header className="chart-header">
                        <h5 className="mb-0">Product Categories</h5>
                      </Card.Header>
                      <Card.Body>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={categoryData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                borderRadius: '10px', 
                                border: 'none', 
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                {/* Recent Orders */}
                <Row>
                  <Col>
                    <Card className="recent-card">
                      <Card.Header className="d-flex justify-content-between align-items-center recent-header">
                        <h5 className="mb-0">Recent Orders</h5>
                        <Button variant="outline-primary" size="sm" onClick={() => setActiveSection('orders')}>
                          View All
                        </Button>
                      </Card.Header>
                      <Card.Body>
                        <Table responsive hover className="recent-table">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Customer</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.slice(0, 5).map(order => (
                              <tr key={order.id} className="recent-row">
                                <td className="order-id">#{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.date}</td>
                                <td>
                                  <Badge bg={
                                    order.status === 'Delivered' ? 'success' : 
                                    order.status === 'Pending' ? 'warning' : 'danger'
                                  } className="status-badge">
                                    {order.status}
                                  </Badge>
                                </td>
                                <td className="order-total">${order.total.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </>
            )}
            
            {/* Products Section */}
            {activeSection === 'products' && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="section-title">Product Management</h2>
                  <Button 
                    variant="primary" 
                    className="action-btns"
                    onClick={() => {
                      resetProductForm();
                      setShowProductModal(true);
                    }}
                  >
                    <i className="fas fa-plus me-1"></i> Add Product
                  </Button>
                </div>
                
                <Card className="data-card">
                  <Card.Header className="data-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">All Products</h5>
                      <div className="search-box">
                        <InputGroup>
                          <InputGroup.Text className="search-icon">
                            <i className="fas fa-search"></i>
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Search products..."
                            value={productSearch}
                            onChange={(e) => setProductSearch(e.target.value)}
                            className="search-field"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive hover className="data-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Product</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Discount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map(product => (
                          <tr key={product.id}>
                            <td className="product-id">{product.id}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="product-image me-2">
                                  <i className="fas fa-box"></i>
                                </div>
                                <div>
                                  <div className="product-name">{product.name}</div>
                                  <small className="text-muted">{product.tagline}</small>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Badge bg="secondary" className="category-badge">
                                {product.category}
                              </Badge>
                            </td>
                            <td className="product-price">${product.price}</td>
                            <td>
                              <div className="stock-indicator">
                                <div className={`stock-status ${product.stock > 50 ? 'high' : product.stock > 20 ? 'medium' : 'low'}`}>
                                  {product.stock}
                                </div>
                              </div>
                            </td>
                            <td>
                              {product.discount > 0 ? (
                                <Badge bg="success" className="discount-badge">
                                  {product.discount}% OFF
                                </Badge>
                              ) : (
                                <span className="text-muted">None</span>
                              )}
                            </td>
                            <td>
                              <Button 
                                variant="outline-primary" 
                                size="sm" 
                                className="action-icon me-1"
                                onClick={() => handleEditProduct(product)}
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                className="action-icon"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Orders Section */}
            {activeSection === 'orders' && (
              <>
                <h2 className="section-title mb-4">Order Management</h2>
                
                <Card className="data-card">
                  <Card.Header className="data-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">All Orders</h5>
                      <div className="d-flex">
                        <Form.Select 
                          className="filter-select me-2" 
                          value={orderFilter}
                          onChange={(e) => setOrderFilter(e.target.value)}
                        >
                          <option value="All">All Status</option>
                          <option value="Pending">Pending</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </Form.Select>
                        
                        <InputGroup className="search-box">
                          <InputGroup.Text className="search-icon">
                            <i className="fas fa-search"></i>
                          </InputGroup.Text>
                          <Form.Control 
                            type="text" 
                            placeholder="Search orders..." 
                            className="search-field"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive hover className="data-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Items</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders.map(order => (
                          <tr key={order.id}>
                            <td className="order-id">#{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.items}</td>
                            <td className="order-total">${order.total.toFixed(2)}</td>
                            <td>
                              <Form.Select 
                                size="sm" 
                                value={order.status}
                                onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                                className={`status-select ${order.status.toLowerCase()}`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                              </Form.Select>
                            </td>
                            <td>
                              <Button variant="outline-info" size="sm" className="action-btns-sm">
                                <i className="fas fa-eye me-1"></i> Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Returns Section */}
            {activeSection === 'returns' && (
              <>
                <h2 className="section-title mb-4">Return Requests</h2>
                
                <Card className="data-card">
                  <Card.Header className="data-header">
                    <h5 className="mb-0">All Return Requests</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive hover className="data-table">
                      <thead>
                        <tr>
                          <th>Return ID</th>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Reason</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {returns.map(ret => (
                          <tr key={ret.id}>
                            <td>#{ret.id}</td>
                            <td>#{ret.orderId}</td>
                            <td>{ret.customer}</td>
                            <td>{ret.reason}</td>
                            <td>{ret.date}</td>
                            <td>
                              <Form.Select 
                                size="sm" 
                                value={ret.status}
                                onChange={(e) => handleUpdateReturnStatus(ret.id, e.target.value)}
                                className={`status-select ${ret.status.toLowerCase()}`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Processed">Processed</option>
                                <option value="Refunded">Refunded</option>
                              </Form.Select>
                            </td>
                            <td>
                              <Button variant="outline-info" size="sm" className="action-btns-sm">
                                <i className="fas fa-eye me-1"></i> Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Complaints Section */}
            {activeSection === 'complaints' && (
              <>
                <h2 className="section-title mb-4">Customer Complaints</h2>
                
                <Card className="data-card">
                  <Card.Header className="data-header">
                    <h5 className="mb-0">All Complaints</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive hover className="data-table">
                      <thead>
                        <tr>
                          <th>Complaint ID</th>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Type</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {complaints.map(comp => (
                          <tr key={comp.id}>
                            <td>#{comp.id}</td>
                            <td>#{comp.orderId}</td>
                            <td>{comp.customer}</td>
                            <td>
                              <Badge bg={
                                comp.type === 'Delivery' ? 'primary' : 
                                comp.type === 'Product' ? 'warning' : 'info'
                              }>
                                {comp.type}
                              </Badge>
                            </td>
                            <td>{comp.description}</td>
                            <td>{comp.date}</td>
                            <td>
                              <Form.Select 
                                size="sm" 
                                value={comp.status}
                                onChange={(e) => handleUpdateComplaintStatus(comp.id, e.target.value)}
                                className={`status-select ${comp.status.toLowerCase().replace(' ', '-')}`}
                              >
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                              </Form.Select>
                            </td>
                            <td>
                              <Button variant="outline-info" size="sm" className="action-btns-sm">
                                <i className="fas fa-eye me-1"></i> Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Feedback Section */}
            {activeSection === 'feedback' && (
              <>
                <h2 className="section-title mb-4">Customer Feedback</h2>
                
                <Card className="data-card">
                  <Card.Header className="data-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Product Reviews & Ratings</h5>
                      <Form.Select 
                        className="filter-select" 
                        value={feedbackFilter}
                        onChange={(e) => setFeedbackFilter(e.target.value)}
                      >
                        <option value="All">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                      </Form.Select>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    {filteredFeedback.map(item => (
                      <div key={item.id} className="feedback-item">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="feedback-product">{item.product}</h6>
                          <div className="feedback-rating">
                            {[...Array(5)].map((_, i) => (
                              <i 
                                key={i} 
                                className={`fas fa-star ${i < item.rating ? 'active' : ''}`}
                              ></i>
                            ))}
                          </div>
                        </div>
                        <p className="feedback-customer mb-1">
                          <strong>{item.customer}</strong> • {item.date}
                        </p>
                        <p className="feedback-comment mb-0">{item.comment}</p>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
      
      {/* Product Modal */}
      <Modal show={showProductModal} onHide={() => setShowProductModal(false)} size="lg" className="product-modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>{editingProduct ? 'Edit Product' : 'Add New Product'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleProductSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={productForm.name}
                    onChange={handleProductFormChange}
                    required
                    className="form-input"
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={productForm.category}
                    onChange={handleProductFormChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home">Home</option>
                    <option value="Books">Books</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    name="price"
                    value={productForm.price}
                    onChange={handleProductFormChange}
                    required
                    className="form-input"
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    value={productForm.stock}
                    onChange={handleProductFormChange}
                    required
                    className="form-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={productForm.description}
                onChange={handleProductFormChange}
                className="form-input"
              />
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Discount (%)</Form.Label>
                  <Form.Control
                    type="number"
                    name="discount"
                    value={productForm.discount}
                    onChange={handleProductFormChange}
                    className="form-input"
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    name="tagline"
                    value={productForm.tagline}
                    onChange={handleProductFormChange}
                    className="form-input"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={() => setShowProductModal(false)} className="cancel-btns">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="submit-btns">
              {editingProduct ? 'Update Product' : 'Add Product'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;