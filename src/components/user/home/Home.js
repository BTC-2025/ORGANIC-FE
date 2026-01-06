import React, { useState } from 'react'
import Header from '../../../sections/Header'
import HeroSection from '../../../sections/HeroSection'
import FeaturedProducts from '../../../sections/FeaturedProducts'
import CategorySection from '../../../sections/CategorySection'
import Footer from '../../../sections/Footer'
import Newsletter from '../../../sections/Newsletter'
import OurStory from '../../../sections/OurStory'
import SaleBanner from '../../../sections/SaleBanner'
import Testimonials from '../../../sections/Testimonials'
import BenefitsSection from '../../../sections/BenefitsSection'

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <SaleBanner />
      <BenefitsSection />
      <OurStory />
      <Testimonials />
      <Newsletter />
      {/* <Footer /> */}

      {/* Chatbot Floating Icon */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          cursor: 'pointer',
        }}
        onClick={() => setShowChat(!showChat)}
      >
        <img
          src="https://img.freepik.com/premium-vector/chatbot-icon-concept-chat-bot-chatterbot-robot-virtual-assistance-website_123447-1615.jpg?w=1380" // replace with your chatbot icon path
          alt="Chatbot"
          style={{ width: '80px', height: '80px', borderRadius: '50%' ,background:'black'}}
        />
      </div>

      {/* Chatbot Window (toggle visibility) */}
      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '30px',
            width: '300px',
            height: '400px',
            background: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            borderRadius: '12px',
            zIndex: 1000,
          }}
        >
          <div style={{ padding: '10px', fontWeight: 'bold' }}>Chatbot</div>
          <div style={{ padding: '10px' }}>
            {/* Add your chatbot component or iframe here */}
            Hello! How can I help you?
          </div>
        </div>
      )}
    </div>
  )
}

export default Home