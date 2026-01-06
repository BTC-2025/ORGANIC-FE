import React from 'react';

function OurStory() {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-center g-4">
        <div className="col">
          <h2 className="display-6 fw-bold mb-4">Our Story</h2>
          <p className="mb-4 text-muted">
            At Nature's Bounty, we believe in the power of nature to nourish and heal. Our journey began with a simple desire: to provide access to the freshest, most wholesome organic
            products. From our carefully selected farms to your doorstep, we ensure every item meets our rigorous standards for quality and sustainability. Join us in our commitment to a
            healthier planet and a healthier you.
          </p>
          <button className="btn rounded-lg px-4 py-2 text-sm fw-bold" style={{ backgroundColor: 'rgba(23, 207, 23, 0.2)' }}>
            Learn More
          </button>
        </div>
        <div className="col">
          <div
            className="rounded-lg"
            style={{
              height: '20rem',
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHbATJUI6Z4um9A48v5A1f6v8bdUab6m-S2DX8tdDD45wjXmi6eje6K5LvS1cPXzj3zngK4HR8dQ1OTVt2jAmjFrkREwgrO7er9lhxAkciRFURdjuIw1KrKduI50Tj9ISDD9Y2VykdLbHIUfVN1-WEGQsos2gIcPswxSJdGVH_GzwPcbGen1iyO5e-mNAH-72PZb3lQjEqsdlpggaWuiguKOJpkMbY15QYZZc_G9YIkVK3H-TwV-kpP9LfWUq6QX3ECzK8JpOOV_Cp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;