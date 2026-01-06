import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetailPage() {
  const relatedProducts = [
    {
      name: 'Organic Bananas',
      price: '$1.49 / lb',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3q3Ijerr5XS3VeyWup9OfZ04rkYS735GPqJtS6W7j0tUlaW5cq6P4YePawh4bfx1ZQY6cNwqDRjDWRH8FQRqLjIA0XR_2C1-DymVJi16Cdtohq6HplpjJBzlTbE2rxf6UlSCrnLyPZeJkRyGUT38y_WVzSpwCpaM7vcFF8LQgNX53Dkcc_kmmX9fgTJjtdx6P6eYWZvVbh6wL-6PQhchLPq1FGU_1U2yoGEwsZ2Qy0ZZJ3eQuM2SBLtd_jzlVj_lXzkG2vQbgJfXl',
    },
    {
      name: 'Organic Avocados',
      price: '$2.99 each',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDx5GIKBiPZrxU_eR50818L02iSdlE0G7qFX6N4U9b03jECCs71KnLPoIWjSoXki8UW-FdpJKk38-09h0StrBp5JCXroOdAH_jhMn9RCms3hHD48dc-Sh82XUXxnfOOuPOKIXc1HHcI8nAvQPeCa4-LUROtqiSFQHS_jn4huIckdCtzoMrbfY_Xzo_V7GVxvTuQN87FuFm7ec6Mi9bIO4VvuevZB2BGwZjRpJyn4H2r9kRcmnrqdI5Rab6CEk_96-H__5y-s9SGqYM',
    },
    {
      name: 'Organic Navel Oranges',
      price: '$1.99 / lb',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJYi8UD9CJcXhtZKNrO7ysWzxSlvCkJqjxOpCWw00PM1emKCSctwPLec14chgDfdhmPr9qpV417enzDWHXtBV_HhhsVV1RtH2eGX8GkFGR6smPaVzLkzuzaZwCiGkM7117xCwEn_hs3MZnDQfFWctsmHuni9nfsLgleQ3SCMZ4Risv_rirXf50SLHIGJTZJTvJ8OhS1c1aaBgr4fRxFV83PLULKb4a6fDH6nb5Yf89L_U_MsNhxnDMe5yAK1OFpliLo3PUWEZqYUvX',
    },
  ];

  return (
    <div className="product-detail-page bg-light d-flex flex-column min-vh-100">
      {/* Header */}
      {/* <header className="header">
        <div className="container mx-auto px-4 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <svg className="text-primary" width="32" height="32" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
              <h1 className="fs-5 fw-bold">Nature's Bounty</h1>
            </div>
            <nav className="d-none d-md-flex align-items-center gap-4">
              {['Shop', 'About', 'Recipes', 'Sustainability'].map((item) => (
                <Link key={item} to={item === 'Shop' ? '/products/fruits' : '#'} className="text-sm fw-medium text-decoration-none text-dark hover-primary-text">
                  {item}
                </Link>
              ))}
            </nav>
            <div className="d-flex align-items-center gap-2">
              <button className="d-flex align-items-center justify-content-center rounded-circle h-10 w-10 bg-black-5 hover:bg-black-10">
                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
              <button className="d-flex align-items-center justify-content-center rounded-circle h-10 w-10 bg-black-5 hover:bg-black-10">
                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </button>
              <button className="d-flex align-items-center justify-content-center rounded-circle h-10 w-10 bg-black-5 hover:bg-black-10">
                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow-1 container mx-auto px-4 py-5">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="breadcrumb mb-4 text-sm">
            <Link to="/products/fruits" className="primary-text hover-underline">Shop</Link>
            <span className="mx-2 breadcrumb-divider">/</span>
            <span className="text-dark">Organic Apples</span>
          </div>

          {/* Product Details */}
          <div className="product-details row g-4">
            <div className="col-lg-6">
              <div className="product-image ratio ratio-3x2 rounded-lg overflow-hidden">
                <div
                  className="w-100 h-100 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBuYxxOcocvKrEWQtrmip8CFIDOcLtl3NuKcNK--SeuZQ-s1twsxvxJ9l7UZWyul9m2DH917epQZlAxMR4Z-SktEi6rdwdlce92oKcX3pJBnbvZ6S0dGuxlaxmJnA5QNvTbwuC7IBksfrx8AdmH1JreiIyXbl8ri4EiSIj7V5-ufhwOoZP2JFEqGTjvceawYXUb8qxGj2zMtPnjiqxu2lW5iYKHU-O4swD-SjRcT6hVQo9F8UCspUcqqRH95517hTAOgcEI424xFhOB)' }}
                ></div>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column gap-4">
              <div className="product-info">
                <h1 className="display-5 fw-bold">Organic Gala Apples</h1>
                <p className="mt-2 text-black-70">
                  Freshly picked from our orchards, these organic Gala apples are crisp, sweet, and perfect for snacking or baking. Certified organic and non-GMO.
                </p>
              </div>
              <p className="product-price fs-3 fw-bold primary-text">$2.99 / lb</p>
              <div className="product-actions d-flex align-items-end gap-3">
                <div className="quantity-selector w-25">
                  <label htmlFor="quantity" className="form-label text-sm fw-medium mb-1">Quantity</label>
                  <select className="form-select rounded border-gray-200 bg-background-light h-12 px-4" id="quantity">
                    {['1 lb', '2 lbs', '3 lbs', '4 lbs', '5 lbs'].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <button className="add-to-cart flex-grow-1 h-12 btn btn-primary rounded fw-bold">Add to Cart</button>
              </div>
              <div className="product-description pt-4 border-top border-gray-200">
                <h2 className="fs-3 fw-bold">Product Description</h2>
                <p className="mt-2 text-black-70">
                  Our organic Gala apples are grown with care, ensuring they are free from synthetic pesticides and fertilizers. They are known for their beautiful red and yellow
                  striped skin, juicy flesh, and mild, sweet flavor. Enjoy them fresh, in salads, or baked into pies and crisps.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="customer-reviews mt-5 pt-5 border-top border-gray-200">
            <h2 className="fs-3 fw-bold mb-4">Customer Reviews</h2>
            <div className="row g-4">
              <div className="col-md-4 d-flex flex-column gap-2 align-items-center align-items-md-start text-center text-md-start">
                <p className="rating-score fs-1 fw-black">4.8</p>
                <div className="rating-stars d-flex">
                  {Array(4).fill().map((_, i) => (
                    <svg key={i} fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg" className="primary-text">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  ))}
                  <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg" className="text-black-20">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <p className="rating-count text-sm text-black-60">Based on 125 reviews</p>
              </div>
              <div className="rating-bars col-md-8 d-grid gap-1" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                {[
                  { rating: 5, percentage: '70%' },
                  { rating: 4, percentage: '20%' },
                  { rating: 3, percentage: '5%' },
                  { rating: 2, percentage: '3%' },
                  { rating: 1, percentage: '2%' },
                ].map(({ rating, percentage }) => (
                  <React.Fragment key={rating}>
                    <span className="rating-number">{rating}</span>
                    <div className="rating-bar bg-black-10">
                      <div className="rating-bar-fill" style={{ width: percentage }}></div>
                    </div>
                    <span className="rating-percentage text-black-60">{percentage}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="review-list mt-4 d-flex flex-column gap-4">
              {[
                {
                  name: 'Sophia Carter',
                  date: '2 weeks ago',
                  rating: 5,
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2tXnW5_Msyg1HG8k6WOy8PgT5_eiuswP6L5rUEZjIBAi5NEXLQiy4P2GdslhmIKRl_bq7KN9HsNOhHKgl--PkBps9YDqx51YoqcwIqacqKDcqtcniTzk3tmImEgeOGMZE5qe_Kl6Bgni2bPezb-KedM6hURikVhx4T0EuSQts8zS1RhXPOEwwmgScQeYMgdQJBrTRaIursAkc_V-1UdRL4KoAxo9Dw8rwKMRsN3rpb1oLdBJQUn8daPBc53JR7LqjDmB_c-VOBC5R',
                  comment: 'These apples are absolutely delicious! The perfect balance of sweetness and tartness, and they stay fresh for a long time. Will definitely be buying again.',
                  likes: 15,
                  dislikes: 2,
                },
                {
                  name: 'Ethan Bennett',
                  date: '1 month ago',
                  rating: 4,
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJZAqtUAbvrghIUPaI7HOepCMXUtFbVScBORF0pCSAz8VhoNfCFAFL4ux1QSv-xn8EItVHGyOoZut6_81t1_elJznaSNw7G2uraNTNafukrXNQ8g61JwaWSdd864VKvDCRyt6Zghcn7k5-wVuy2sGfkzGNxXhVK_FjJC9gcqFnImfR_rO4VlwaUNABtntp7PnIjA6EXgDK1wGNRf4-JPur_P8tUZic_Maq43AGptKiZwbhetnzPjy66pGpWN7f-J6hL2rYiqjIRDlw',
                  comment: 'Good quality apples, though some were a bit smaller than expected. Still, they taste great and are a healthy snack option.',
                  likes: 8,
                  dislikes: 1,
                },
              ].map(({ name, date, rating, image, comment, likes, dislikes }, index) => (
                <div key={index} className="review-item d-flex flex-column gap-3">
                  <div className="reviewer-info d-flex align-items-center gap-3">
                    <div
                      className="reviewer-avatar w-12 h-12 rounded-circle bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <div>
                      <p className="reviewer-name fw-semibold">{name}</p>
                      <p className="review-date text-sm text-black-60">{date}</p>
                    </div>
                  </div>
                  <div className="review-rating d-flex">
                    {Array(5).fill().map((_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        height="18"
                        viewBox="0 0 256 256"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        className={i < rating ? 'primary-text' : 'text-black-20'}
                      >
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="review-comment">{comment}</p>
                  <div className="review-actions d-flex gap-4 text-sm text-black-60">
                    <button className="like-button d-flex align-items-center gap-2 hover-primary-text">
                      <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32A16,16,0,0,0-16,112v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                      </svg>
                      <span>{likes}</span>
                    </button>
                    <button className="dislike-button d-flex align-items-center gap-2 hover-primary-text">
                      <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                      </svg>
                      <span>{dislikes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products mt-5 pt-5 border-top border-gray-200">
            <h2 className="fs-3 fw-bold mb-4">Related Products</h2>
            <div className="row row-cols-2 row-cols-md-4 g-3">
              {relatedProducts.map((product, index) => (
                <div key={index} className="col">
                  <div className="related-product d-flex flex-column gap-3">
                    <div
                      className="related-product-image ratio ratio-1x1 rounded-lg overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className="related-product-info">
                      <p className="related-product-name fw-medium hover-primary-text">{product.name}</p>
                      <p className="related-product-price text-sm text-black-60">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-black-5 mt-5 py-5">
        <div className="container mx-auto px-4">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <a key={item} className="text-sm text-decoration-none text-black-60 hover-primary-text" href="#">
                  {item}
                </a>
              ))}
            </div>
            <div className="d-flex justify-content-center gap-3">
              <a className="text-black-60 hover-primary-text" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
              <a className="text-black-60 hover-primary-text" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </svg>
              </a>
              <a className="text-black-60 hover-primary-text" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-top border-gray-200 text-center text-sm text-black-60">
            <p>© 2024 Nature's Bounty. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default ProductDetailPage;