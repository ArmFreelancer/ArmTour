import React, { useState, useEffect } from 'react';
import './TourDetails.css';
import type { TourPackage } from '../../types';
import {
  Calendar,
  Heart,
  Plane,
  Hotel,
  Utensils,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  PlaneTakeoff,
  Bed,
  Sparkles,
} from 'lucide-react';

interface TourDetailsProps {
  tour: TourPackage;
  onBack: () => void;
  onBook: (tourId: string, travelers: number, date: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
}

export const TourDetails: React.FC<TourDetailsProps> = ({
  tour,
  onBack,
  onBook,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'accommodation'>('overview');
  const [openDay, setOpenDay] = useState<number>(1);
  const [travelers, setTravelers] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('2026-07-15');
  const [bgImage, setBgImage] = useState(tour.images[1] || tour.image);

  useEffect(() => {
    const img = new Image();
    img.src = tour.images[1] || tour.image;
    img.onload = () => {
      setBgImage(tour.images[1] || tour.image);
    };
    img.onerror = () => {
      setBgImage("https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80");
    };
  }, [tour]);

  // Multi-day calendar dropdown mockup
  const availableDates = [
    { value: '2026-07-15', label: 'July 15, 2026' },
    { value: '2026-08-10', label: 'August 10, 2026' },
    { value: '2026-09-05', label: 'September 05, 2026' },
    { value: '2026-10-12', label: 'October 12, 2026' },
  ];

  const totalPrice = tour.price * travelers;
  const originalTotalPrice = tour.originalPrice ? tour.originalPrice * travelers : 0;
  const savings = originalTotalPrice ? originalTotalPrice - totalPrice : 0;

  const toggleDayAccordion = (dayNum: number) => {
    setOpenDay(openDay === dayNum ? 0 : dayNum);
  };

  const handleBooking = () => {
    onBook(tour.id, travelers, selectedDate);
  };

  return (
    <div className="tour-details-view page-fade-in">
      {/* Banner */}
      <div 
        className="details-hero" 
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(7, 10, 19, 0.3) 0%, rgba(7, 10, 19, 0.9) 100%), url(${bgImage})` }}
      >
        <div className="details-hero-container container">
          <button className="btn btn-secondary back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back to Explorer</span>
          </button>
          <div className="details-hero-tags">
            {tour.tags.map((tag, idx) => (
              <span key={idx} className="badge badge-primary">{tag}</span>
            ))}
          </div>
          <h1 className="details-hero-title">{tour.title}</h1>
          <div className="details-hero-meta">
            <span className="meta-item">
              <Clock size={16} className="text-indigo" />
              <span>{tour.durationDays} Days / {tour.durationNights} Nights</span>
            </span>
            <span className="meta-item">
              <Plane size={16} className="text-pink" />
              <span>Flight Tickets Included</span>
            </span>
          </div>
        </div>
      </div>

      <div className="details-layout container">
        {/* Main Left Details */}
        <div className="details-main-content">
          {/* Navigation Tabs */}
          <div className="details-tabs glass-panel">
            <button
              className={`details-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Sparkles size={16} />
              <span>Overview</span>
            </button>
            <button
              className={`details-tab-btn ${activeTab === 'itinerary' ? 'active' : ''}`}
              onClick={() => setActiveTab('itinerary')}
            >
              <Calendar size={16} />
              <span>Daily Itinerary ({tour.itinerary.length} Days)</span>
            </button>
            <button
              className={`details-tab-btn ${activeTab === 'accommodation' ? 'active' : ''}`}
              onClick={() => setActiveTab('accommodation')}
            >
              <Hotel size={16} />
              <span>Flights & Hotel</span>
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="tab-pane-content">
              <div className="overview-summary glass-panel">
                <h2>About this Tour Package</h2>
                <p className="summary-desc">{tour.description}</p>

                <div className="overview-highlights-grid">
                  <div className="highlight-box">
                    <PlaneTakeoff className="h-icon text-indigo" />
                    <div>
                      <h4>Flight Included</h4>
                      <p>{tour.flightDetails.airline} ({tour.flightDetails.class})</p>
                    </div>
                  </div>
                  <div className="highlight-box">
                    <Bed className="h-icon text-teal" />
                    <div>
                      <h4>5★ Accommodation</h4>
                      <p>{tour.hotelDetails.name} staying in {tour.hotelDetails.roomType}</p>
                    </div>
                  </div>
                  <div className="highlight-box">
                    <Utensils className="h-icon text-pink" />
                    <div>
                      <h4>Premium Meals</h4>
                      <p>{tour.meals}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="inc-exc-grid">
                <div className="inc-exc-box glass-panel border-success">
                  <h3 className="text-success-row">
                    <CheckCircle2 className="row-icon text-success" />
                    <span>What's Included</span>
                  </h3>
                  <ul className="inc-list">
                    {tour.included.map((inc, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="inc-exc-box glass-panel border-danger">
                  <h3 className="text-danger-row">
                    <XCircle className="row-icon text-danger" />
                    <span>Excluded from Package</span>
                  </h3>
                  <ul className="exc-list">
                    {tour.excluded.map((exc, i) => (
                      <li key={i}>
                        <XCircle size={14} className="text-danger flex-shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Itinerary Accordions */}
          {activeTab === 'itinerary' && (
            <div className="tab-pane-content itinerary-accordion-list">
              {tour.itinerary.map((day) => {
                const isOpen = openDay === day.day;
                return (
                  <div key={day.day} className={`itinerary-day-card glass-panel ${isOpen ? 'open' : ''}`}>
                    <div className="itinerary-day-header" onClick={() => toggleDayAccordion(day.day)}>
                      <div className="day-badge">Day {day.day}</div>
                      <h3 className="day-title">{day.title}</h3>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    {isOpen && (
                      <div className="itinerary-day-body animate-slide-down">
                        <p className="day-body-desc">{day.description}</p>
                        <div className="day-activities">
                          <h5>Scheduled Activities:</h5>
                          <ul>
                            {day.activities.map((act, aIdx) => (
                              <li key={aIdx}>
                                <ShieldCheck size={14} className="text-indigo" />
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 3: Flights & Hotel Details */}
          {activeTab === 'accommodation' && (
            <div className="tab-pane-content accommodation-pane">
              {/* Flight card */}
              <div className="details-sub-card glass-panel">
                <h3 className="sub-card-title">
                  <Plane className="title-icon text-indigo" />
                  <span>Aviation & Transfer Details</span>
                </h3>
                <div className="details-info-grid">
                  <div className="info-item">
                    <span className="lbl">Carrier Airline</span>
                    <span className="val">{tour.flightDetails.airline}</span>
                  </div>
                  <div className="info-item">
                    <span className="lbl">Cabin Class</span>
                    <span className="val">{tour.flightDetails.class}</span>
                  </div>
                  <div className="info-item">
                    <span className="lbl">Route & Stops</span>
                    <span className="val">
                      {tour.flightDetails.departureCity} ➔ {tour.flightDetails.arrivalCity}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="lbl">Duration</span>
                    <span className="val">{tour.flightDetails.flightDuration}</span>
                  </div>
                </div>
              </div>

              {/* Hotel card */}
              <div className="details-sub-card glass-panel">
                <h3 className="sub-card-title">
                  <Hotel className="title-icon text-teal" />
                  <span>Luxury Hotel Accommodation</span>
                </h3>
                <div className="hotel-overview-row">
                  <div className="hotel-info">
                    <h4>{tour.hotelDetails.name}</h4>
                    <div className="hotel-stars">
                      {Array.from({ length: tour.hotelDetails.stars }).map((_, i) => (
                        <span key={i} className="star-span">★</span>
                      ))}
                      <span className="stars-lbl">5-Star Luxury Rating</span>
                    </div>
                    <p className="hotel-desc">{tour.hotelDetails.description}</p>
                  </div>
                </div>

                <div className="hotel-amenities-section">
                  <h5>Resort Amenities:</h5>
                  <div className="amenities-tag-cloud">
                    {tour.hotelDetails.amenities.map((am, i) => (
                      <span key={i} className="amenity-tag">✓ {am}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Checkout Pane */}
        <div className="details-checkout-sidebar">
          <div className="booking-sticky-card glass-panel">
            {/* Header / Pricing */}
            <div className="sidebar-booking-header">
              <span className="lbl">All-Inclusive Flight Package</span>
              <div className="sidebar-price-row">
                <div className="sidebar-prices">
                  {tour.originalPrice && (
                    <span className="old-price">${tour.originalPrice * travelers}</span>
                  )}
                  <div className="current-price">
                    <span className="currency">$</span>
                    <span className="val">{totalPrice}</span>
                  </div>
                </div>
                <span className="price-desc-lbl">for {travelers} {travelers === 1 ? 'traveler' : 'travelers'}</span>
              </div>
              {savings > 0 && (
                <div className="sidebar-savings-badge">
                  You are saving ${savings} on this booking!
                </div>
              )}
            </div>

            {/* Inputs Form */}
            <div className="sidebar-booking-form">
              <div className="sidebar-input-group">
                <label className="form-lbl">Departure Date</label>
                <div className="sidebar-select-wrapper">
                  <Calendar size={16} className="input-icon" />
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    {availableDates.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sidebar-input-group">
                <label className="form-lbl">Number of Guests</label>
                <div className="guests-counter">
                  <button
                    className="counter-btn"
                    disabled={travelers <= 1}
                    onClick={() => setTravelers(travelers - 1)}
                  >
                    -
                  </button>
                  <span className="counter-val">{travelers}</span>
                  <button
                    className="counter-btn"
                    disabled={travelers >= 8}
                    onClick={() => setTravelers(travelers + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing breakdown */}
            <div className="price-breakdown">
              <div className="breakdown-row">
                <span>Flight & Tour Package</span>
                <span>${tour.price} x {travelers}</span>
              </div>
              <div className="breakdown-row">
                <span>Luxury Stay & Meals</span>
                <span>Included</span>
              </div>
              <div className="breakdown-row">
                <span>Airport Shuttle Transfer</span>
                <span>Included</span>
              </div>
              <div className="breakdown-row total-row">
                <span>Grand Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="sidebar-buttons">
              <button className="btn btn-primary w-full checkout-btn" onClick={handleBooking}>
                <span>Book This Tour</span>
              </button>
              <button
                className={`btn btn-secondary w-full wishlist-toggle-btn ${
                  isWishlisted ? 'wishlisted' : ''
                }`}
                onClick={() => onToggleWishlist(tour.id)}
              >
                <Heart size={16} className={isWishlisted ? 'heart-filled' : ''} />
                <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            <div className="guarantee-lbl">
              🛡 100% Secure Checkout & Free Cancellation up to 14 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
