import React from 'react';

function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-5 text-center">
      <h2 className="display-6 fw-bold mb-4">Stay Updated with Our Newsletter</h2>
      <p className="mx-auto mb-4 text-muted" style={{ maxWidth: '32rem' }}>
        Subscribe to our newsletter for the latest updates, promotions, and healthy living tips.
      </p>
      <form className="mx-auto d-flex rounded-lg border border-2 bg-white shadow-sm" style={{ maxWidth: '28rem' }}>
        <input
          type="email"
          className="form-control border-0 bg-transparent px-4 py-3 text-sm"
          placeholder="Enter your email"
        />
        <button className="btn btn-primary px-4 py-3 text-sm fw-bold" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter;