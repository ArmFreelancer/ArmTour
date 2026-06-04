import React, { useState } from 'react';
import './Footer.css';
import { Mail, Globe, Send, CheckCircle, Heart } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLinkClick = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-panel">
      <div className="footer-container container">
        {/* Brand details and social mockup */}
        <div className="footer-brand-section">
          <div className="footer-logo" onClick={() => handleLinkClick('home')}>
            <div className="logo-icon-wrapper-sm">
              <Globe className="logo-icon-sm" />
            </div>
            <span className="logo-text">
              Arm<span className="logo-highlight">Tour</span>
            </span>
          </div>
          <p className="brand-description">
            Offering all-inclusive luxury flight tours globally. Rest, explore, and travel premium with hassle-free flight bookings and 5-star resort accommodations.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" title="Instagram">IG</a>
            <a href="#" className="social-icon" title="Facebook">FB</a>
            <a href="#" className="social-icon" title="Twitter">TW</a>
            <a href="#" className="social-icon" title="Telegram">TG</a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            <li><button onClick={() => handleLinkClick('home')}>Home Explorer</button></li>
            <li><button onClick={() => handleLinkClick('tours')}>Flight Packages</button></li>
            <li><button onClick={() => handleLinkClick('wishlist')}>Saved Wishlist</button></li>
            <li><button onClick={() => handleLinkClick('contact')}>Contact Agents</button></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter-section">
          <h3>Travel Dispatch</h3>
          <p className="newsletter-subtitle">Subscribe to receive exclusive deals, flight discounts, and limited packages.</p>
          
          {subscribed ? (
            <div className="newsletter-success-toast">
              <CheckCircle size={16} className="text-success" />
              <span>Subscribed successfully!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <Mail size={16} className="mail-icon" />
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="btn btn-primary newsletter-btn" type="submit">
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copy row */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <span className="copy-text">© {new Date().getFullYear()} ArmTour Travel Agency. All rights reserved.</span>
          <span className="credit-text">
            Designed with <Heart size={10} className="text-pink-fill" /> for premium travel experiences.
          </span>
        </div>
      </div>
    </footer>
  );
};
