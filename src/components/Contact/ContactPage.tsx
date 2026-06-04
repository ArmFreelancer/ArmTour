import React, { useState } from 'react';
import './ContactPage.css';
import { Mail, Phone, MapPin, Send, CheckCircle, Compass } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out Name, Email, and Message.');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="contact-page page-fade-in container">
      <div className="contact-header">
        <h1>Contact Our Agents</h1>
        <p>Have questions about flight upgrades, hotels, or customize itineraries? Drop us a message!</p>
      </div>

      <div className="contact-layout">
        {/* Contact Form */}
        <div className="contact-form-container glass-panel">
          {isSubmitted ? (
            <div className="contact-success animate-scale">
              <div className="succ-badge">
                <CheckCircle className="succ-icon" />
              </div>
              <h2>Message Transmitted!</h2>
              <p>
                Thank you for contacting ArmTour, <strong>{name}</strong>. A luxury travel agent will review your request and email you at <strong>{email}</strong> within 1 hour.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setSubject('');
                  setMessage('');
                  setIsSubmitted(false);
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Direct Travel Agent Inquiry</h3>
              
              <div className="form-group-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Flight Upgrades, Group Discounts"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Inquiry Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Please specify dates, locations, or details you need help with..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button className="btn btn-primary contact-send-btn" type="submit">
                <Send size={16} />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact info details / HQ Location */}
        <div className="contact-info-container">
          <div className="info-card glass-panel">
            <h3>Headquarters Location</h3>
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <MapPin className="det-icon text-indigo" />
                <div>
                  <h4>Office Address</h4>
                  <p>1 Republic Square, Yerevan 0010, Armenia</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <Phone className="det-icon text-teal" />
                <div>
                  <h4>Phone Hotline</h4>
                  <p>+374 10 123-456 (24/7 Support)</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <Mail className="det-icon text-pink" />
                <div>
                  <h4>Email Address</h4>
                  <p>support@armtour.am</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Interactive Map mockup */}
          <div className="visual-map-card glass-panel">
            <div className="map-placeholder">
              <div className="map-dot-pulse"></div>
              <div className="map-dot-glow"></div>
              <div className="map-labels">
                <span className="hq-tag">ArmTour HQ</span>
                <span className="hq-loc">Yerevan, Armenia</span>
              </div>
              <Compass className="map-compass animate-spin-slow" size={32} />
              {/* background grid styling for map feel */}
              <div className="map-grid-mesh"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
