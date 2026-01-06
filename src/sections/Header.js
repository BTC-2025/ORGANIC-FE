import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate("/products", { state: { search: searchQuery.trim() } });
    } else {
      navigate("/products", { state: { search: "" } });
    }
  };

  return (
    <header className="header shadow-sm bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="d-flex align-items-center justify-content-between gap-3">
          {/* Logo */}
          <div className="d-flex align-items-center gap-2">
            <svg
              className="text-success"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <h2 className="fs-4 fw-bold text-success m-0">Organic Mart</h2>
          </div>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="flex-grow-1 d-none d-md-flex justify-content-center">
            <div className="position-relative w-75">
              <input
                type="text"
                placeholder="Search for organic products..."
                className="form-control rounded-pill px-4 pe-5"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="btn position-absolute end-0 top-50 translate-middle-y me-2 text-success"
                style={{ background: "transparent", border: "none" }}
              >
                🔍
              </button>
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn rounded-circle p-2 text-white"
              style={{ backgroundColor: "#228B22" }}
            >
              🤖
            </button>

            <button className="btn position-relative rounded-circle p-2 text-success border border-success">
              <svg
                fill="currentColor"
                width="22"
                height="22"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
              </svg>
              <span className="position-absolute top-0 end-0 badge bg-success text-white">2</span>
            </button>

            {!isLoggedIn ? (
              <button
                className="btn rounded-pill px-4 py-2 fw-bold text-success border border-success"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                  {username[0]}
                </div>
                <span className="fw-semibold">{username}</span>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <form onSubmit={handleSearch} className="d-md-none mt-3 position-relative">
          <input
            type="text"
            placeholder="Search for organic products..."
            className="form-control rounded-pill px-4 pe-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="btn position-absolute end-0 top-50 translate-middle-y me-2 text-success"
            style={{ background: "transparent", border: "none" }}
          >
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;