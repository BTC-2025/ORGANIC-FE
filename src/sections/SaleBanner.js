import React from 'react';

function SaleBanner() {
  return (
    <section className="py-5">
      <div className="bg-light rounded-3 p-4 d-flex flex-column flex-md-row align-items-center gap-4">
        <div className="w-100 w-md-50">
          <h3 className="h4 fw-bold mb-2">Summer Harvest Sale</h3>
          <p className="mb-3">Enjoy discounts on your favorite summer fruits and vegetables.</p>
          <button className="btn btn-primary rounded-pill px-4">Shop Now</button>
        </div>
        <div className="w-100 w-md-50">
          <div
            className="ratio ratio-16x9 rounded-3"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPYwwSFps0lfNLQm2E2RBwuMVg_bFX2sWsWT8UPJGhOnnnMZiI_773-NGpzalY49N29ZxphIuJ3NNsjVzbiunDs4UadPviwUh-xO5c_BOuhmZsHO0K0rt1qA6ZXQSLV0TiBykIGPluhzlKbMU6tw3wzTkoHucaQrjrigzlccB0U--nm0o__hSHPJnVPbqw9OayL98xKj8alQs5c3ojWUbYakidV-VFiY4O5IJnLHDOUU-Ifn1iZKQhcQB9X8mhhyVbb1hz2qZVb3jf")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default SaleBanner;