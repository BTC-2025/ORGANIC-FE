import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MyOrders = () => {
  const [activeView, setActiveView] = useState("grid");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
    {
      id: 1,
      orderNumber: "#123456",
      date: "July 15, 2024",
      total: 250.00,
      status: "delivered",
      statusText: "Delivered",
      items: [
        {
          name: "Classic Silk Blouse",
          size: "M",
          quantity: 1,
          price: 150.00,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop"
        },
        {
          name: "Designer Silk Scarf",
          size: "One Size",
          quantity: 1,
          price: 100.00,
          image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&h=150&fit=crop"
        }
      ]
    },
    {
      id: 2,
      orderNumber: "#789012",
      date: "June 20, 2024",
      total: 180.00,
      status: "shipped",
      statusText: "Shipped",
      items: [
        {
          name: "Summer Linen Dress",
          size: "S",
          quantity: 1,
          price: 180.00,
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop"
        }
      ]
    },
    {
      id: 3,
      orderNumber: "#345678",
      date: "May 5, 2024",
      total: 120.00,
      status: "cancelled",
      statusText: "Cancelled",
      items: [
        {
          name: "Cotton T-Shirt Pack",
          size: "L",
          quantity: 3,
          price: 120.00,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop"
        }
      ]
    }
  ];

  const getStatusBadge = (status, statusText) => {
    const statusConfig = {
      delivered: { class: "bg-success", icon: "check_circle" },
      shipped: { class: "bg-primary", icon: "local_shipping" },
      cancelled: { class: "bg-secondary", icon: "cancel" }
    };
    const config = statusConfig[status] || statusConfig.delivered;
    
    return (
      <span className={`badge ${config.class} d-flex align-items-center gap-1`}>
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
          {config.icon}
        </span>
        {statusText}
      </span>
    );
  };

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <main className="container py-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto">
        {/* Page Heading + Search */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">
          <div>
            <h1 className="fw-bold text-dark mb-2" style={{ fontSize: '2.5rem' }}>My Orders</h1>
            <p className="text-muted">Track and manage your purchases</p>
          </div>
          <div className="position-relative w-100 w-md-25">
            <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ms-3 text-primary">
              search
            </span>
            <input
              type="text"
              className="form-control ps-5 rounded-pill border-0 shadow-sm"
              placeholder="Search by order # or product"
              style={{ height: '45px' }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4 p-4 bg-white rounded-3 shadow-sm">
          <span className="fw-semibold text-dark">Filter by:</span>
          <button className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3 border-0 shadow-sm">
            Status <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3 border-0 shadow-sm">
            Date Range <span className="material-symbols-outlined">expand_more</span>
          </button>
          <div className="ms-auto d-flex gap-2 bg-light rounded-pill p-1">
            <button 
              className={`btn btn-sm rounded-pill px-3 ${activeView === 'grid' ? 'btn-primary' : 'bg-light'}`}
              onClick={() => setActiveView('grid')}
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button 
              className={`btn btn-sm rounded-pill px-3 ${activeView === 'list' ? 'btn-primary' : 'bg-light'}`}
              onClick={() => setActiveView('list')}
            >
              <span className="material-symbols-outlined">list</span>
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="d-flex flex-column gap-4">
          {orders.map((order) => (
            <div key={order.id} className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-header bg-gradient-primary text-white py-4">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <p className="mb-1 opacity-75">Order #</p>
                    <strong className="h5">{order.orderNumber}</strong>
                  </div>
                  <div className="col-md-2">
                    <p className="mb-1 opacity-75">Date</p>
                    <span>{order.date}</span>
                  </div>
                  <div className="col-md-2">
                    <p className="mb-1 opacity-75">Total</p>
                    <strong className="h5">${order.total.toFixed(2)}</strong>
                  </div>
                  <div className="col-md-3">
                    <p className="mb-1 opacity-75">Status</p>
                    {getStatusBadge(order.status, order.statusText)}
                  </div>
                  <div className="col-md-2 text-end">
                    <button 
                      className="btn btn-light btn-sm rounded-pill me-2"
                      onClick={() => toggleOrderExpand(order.id)}
                    >
                      {order.status === 'shipped' ? 'Track Shipment' : 'View Order'}
                    </button>
                    <button 
                      className="btn btn-outline-light btn-sm rounded-circle"
                      onClick={() => toggleOrderExpand(order.id)}
                    >
                      <span className="material-symbols-outlined">
                        {expandedOrder === order.id ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-body p-0">
                <div className="p-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="d-flex align-items-center gap-4 mb-3 p-3 bg-light rounded-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-3 shadow"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="fw-semibold mb-1 text-dark">{item.name}</h6>
                        <p className="mb-1 text-muted small">Size: {item.size} • Qty: {item.quantity}</p>
                        <p className="fw-bold mb-0 text-primary">${item.price.toFixed(2)}</p>
                      </div>
                      {order.status === 'delivered' && (
                        <button className="btn btn-outline-primary btn-sm rounded-pill px-3">
                          Return Item
                        </button>
                      )}
                      {order.status === 'shipped' && (
                        <button className="btn btn-outline-success btn-sm rounded-pill px-3">
                          Track Package
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Expanded Details */}
                {expandedOrder === order.id && (
                  <div className="border-top bg-light p-4">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="fw-semibold mb-3">Shipping Address</h6>
                        <p className="text-muted mb-0">
                          123 Main Street<br />
                          Suite 100<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="fw-semibold mb-3">Order Details</h6>
                        <div className="d-flex justify-content-between text-muted">
                          <span>Subtotal:</span>
                          <span>${(order.total * 0.9).toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between text-muted">
                          <span>Shipping:</span>
                          <span>$10.00</span>
                        </div>
                        <div className="d-flex justify-content-between text-muted">
                          <span>Tax:</span>
                          <span>${(order.total * 0.1).toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fw-bold">
                          <span>Total:</span>
                          <span>${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary rounded-pill px-4 py-2 shadow">
            Load More Orders
            <span className="material-symbols-outlined ms-2">arrow_downward</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        .btn {
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </main>
  );
};

export default MyOrders;