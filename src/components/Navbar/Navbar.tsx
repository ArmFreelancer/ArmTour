import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Heart, Menu, X, Globe, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView, savedCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Tours' },
    { id: 'wishlist', label: 'Saved' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-wrapper">
            <Globe className="logo-icon animate-spin-slow" />
          </div>
          <span className="logo-text">
            Arm<span className="logo-highlight">Tour</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentView === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
              {item.id === 'wishlist' && savedCount > 0 && (
                <span className="wishlist-count-badge">{savedCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Contact/Action Button */}
        <div className="navbar-actions">
          <button 
            className={`wishlist-icon-btn ${currentView === 'wishlist' ? 'active' : ''}`} 
            onClick={() => handleNavClick('wishlist')}
            title="Saved Tours"
          >
            <Heart className={`icon-heart ${savedCount > 0 ? 'heart-filled' : ''}`} />
            {savedCount > 0 && <span className="wishlist-dot"></span>}
          </button>
          <button className="btn btn-primary btn-navbar" onClick={() => handleNavClick('contact')}>
            <PhoneCall size={16} />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${currentView === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="mobile-link-text">{item.label}</span>
              {item.id === 'wishlist' && savedCount > 0 && (
                <span className="wishlist-count-badge mobile-badge">{savedCount}</span>
              )}
            </button>
          ))}
          <button className="btn btn-primary w-full mobile-cta-btn" onClick={() => handleNavClick('contact')}>
            <PhoneCall size={16} />
            <span>Contact Agent</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
