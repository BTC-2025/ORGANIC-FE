import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: "I love the quality and freshness of the produce from Nature's Bounty. It's made a huge difference in my family's health!",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG9H9cz8E1YnRd5wpd1Gx9ONBhbxsStp4k_KnUFsqJxSgTv_N6nlvu388Mwb2MMtreca1vW4TWgAjtjnR0Pc-k0rJsoncsO4msg9ThL2ROBCZ1A_17DHlJ9AQc0BcanhuOE0R_csS6eXPQE16tlY6foV7-QUTE8UlDDH_VLsIpyOrHRKxwtUIoBT-IKTExR0bSYhcQsCSCvHcxHaUvIXOooVzEg3XPXil4IbK5lVGSXOPW2XRS0EKh-WtIrYu9MEgp_1oz_UeYG5ze',
    },
    {
      name: 'David L.',
      text: 'The convenience of having organic groceries delivered to my door is a game-changer. Highly recommend!',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWfMgoj5PIQy_C9lUc76VhGFKjPjYPjKmHRlEitJctXe_n91ksoUSAEwtlXSgYwWHXBK1NN9n7wWhPok5PcIcZ5T4wSI5a2f9yRzu7gTNZSo4X9OmhRI2VoaP7G-61DrUo-9QN-wAEKNf3Wl3B8A0N7dpRYyowXTvFTRfdjmEeS1Jtm9nZTQ41rQk-g-ySPX8si3TBZg2LwgW_swD3xoeUHaDx7Jv2metpst1QXO6D4P3HIc6in9ghtKnXfetp3sD0ZBC0AprxwJZx',
    },
    {
      name: 'Emily R.',
      text: "The customer service is excellent, and the products are always top-notch. I wouldn't shop anywhere else for my organic needs.",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YPqWpHpBFL74y_rWSs7l9BQTzsZOOJCmDqPD67i4eFLergG8mOtrm9FvMBzMG2-yf5m8QijtXt7hCyDSUXzG8AvTDaIQohs26UefCK1AqLdlstCzLwlAaeADJ9kXoNoLDX6mcLGxAKrJZd8bb1qKjL-AB7MSDN4otAl8wFcwo_OeLbNbk5wEVOeMS3Pw-JqliFVX7gXHNrnKwu3or8SCso-01m7ZWN_8vvEnRVb8dcu_n5vbiBGThs5quGORFTzTACddTC7B7wAd',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="display-6 fw-bold text-center mb-4">What Our Customers Say</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col">
              <div className="card rounded-lg p-4 text-center shadow-sm">
                <img src={testimonial.avatar} alt={testimonial.name} className="rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
                <p className="fw-semibold mb-3">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;