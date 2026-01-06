import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section rounded-lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="display-4 fw-bold mb-4 text-white">
          Fresh, Organic, and Healthy – Delivered to Your Doorstep
        </h1>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button className="btn btn-primary rounded-lg px-4 py-3 text-base fw-bold">Shop Now</button>
          <button className="btn btn-light rounded-lg px-4 py-3 text-base fw-bold text-dark">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;