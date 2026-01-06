import React from 'react';

function FeaturedProducts() {
  const products = [
    {
      name: 'Crisp Organic Apples',
      price: '$2.99/lb',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwUTaO4t084fO0uHomjgYD166EQQIVP-mMhbIJzq4maxKzFovSgrXJbklsq9-uJ3mk_K5nWxdmTYP9tV9snqKedi-lMEWCb0WDD7bp7X5DJWtajkmk8ybmI4j6zMEeTbjGtIPGgPD5VDwv5qjXwOTK7fxVvVvO01MVQRZ9W3z3pH4LGwuis2kLEVV8lHJg9fRUeZ8axxftQv9X6LXbmJfgiUkg-NVUCZGhBldICvjO0ZxF46rMx2fomZ93NN5oaint6FfMqco1GcR7',
    },
    {
      name: 'Sweet Organic Bananas',
      price: '$1.49/lb',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4JiJ3e7koCMvs3ru-1dCtBIPSqLLWMc2dYzublkSSuMLKiLKFcEfK8YvB6o5w2joFnaZFAHpqrc8HJvBCnRAeUq3_rbI2r9fGxUgVpLyF4KeYGXHXJW1S0IQqZkHKpnzk0yKSzlE0Y_xrDJBSucQA7rif_akARXDkz0NMR6Kj1HNx0J-TTjb6_th4b8Z6EpGyKuBylp3RVtLOr8l0hoUHOJbRyrs0BL3ZjS7fS-AEGfq-7NAKbfybQVDFcBfVl2p55TnVdrxq7mhE',
    },
    {
      name: 'Fresh Organic Carrots',
      price: '$1.99/bunch',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1TLQakRbtK-S6gsM72-UggEBiyYIoB-2P1pCQH_LFpOJ_sDhp9pGWIGbnGj76B06Rak6Yvz7bqF-xNTf1Jqrq7cq1yR9Yph2HNEQEGopaB7BEyYVCIWR8UxLcwttyvYuKzWMbVeaiz1OoeUvMUzdIAmLYBZ9i0kc0-aAyA-l_TuKGEJncRamuMm68PJ-5kQYeyhtbYu_FCUJ8gG5BVSDneXE5k_IMorgsNlzQw1IdrduN3SmYHUX_p_pGcg-fKjyKJkNE9Kwv2TH',
    },
    {
      name: 'Vibrant Organic Spinach',
      price: '$3.49/bag',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR3QLZiPnHjmM2nOnZSvwk87wleZz3j1JuLjYLhjrPGYgu0xgLaqE51ZKkIF-ra1tDtA7clpaFn5p5vAe-zMkvTwIrtwRAF0Ou5Z7P_Y7XS-sEu3-GPwYRb8X1Ma2edCweYU_wz1wDwX9N-nKyChgoLIEdj-4LLAbb5jQwWbg4CsFljYcJNh8XSQeOIdXOiiQbSpQmMso5MPj0AGDxWbmDB_EmN7v6hCKNz6FjozzYuK8Xo4b5jPEFb1JSfM2gsl1oM2vZK14c4EUn',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="display-6 fw-bold text-center mb-4">Featured Products</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {products.map((product, index) => (
            <div key={index} className="col">
              <div className="product-card position-relative rounded-lg bg-white p-4 shadow-sm">
                <div
                  className="ratio ratio-1x1 rounded"
                  style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                  <p className="fw-medium mb-0">{product.name}</p>
                  <p className="primary-text fw-bold mb-0">{product.price}</p>
                </div>
                <div className="product-overlay">
                  <button className="btn btn-primary rounded-lg mb-2 px-4 py-2 text-sm fw-bold">Quick View</button>
                  <button className="btn btn-light rounded-lg px-4 py-2 text-sm fw-bold text-dark">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;