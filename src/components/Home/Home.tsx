import React, { useState, useEffect } from 'react';
import './Home.css';
import type { TourPackage } from '../../types';
import { HeroSlider } from '../HeroSlider/HeroSlider';
import { TourCard } from '../TourCard/TourCard';
import { Compass, Award, ShieldCheck, ArrowRight, Quote, Percent } from 'lucide-react';

interface HomeProps {
  tours: TourPackage[];
  onSelectTour: (tourId: string) => void;
  wishlist: string[];
  onToggleWishlist: (tourId: string, e: React.MouseEvent) => void;
  setView: (view: string) => void;
  setSearchFilters: (filters: { destination: string; maxPrice: number; tag: string }) => void;
}

export const Home: React.FC<HomeProps> = ({
  tours,
  onSelectTour,
  wishlist,
  onToggleWishlist,
  setView,
  setSearchFilters,
}) => {
  // Countdown timer for special deal
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 45, seconds: 30 }; // reset mockup
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredTours = tours.filter((t) => t.featured);
  const sliderSlides = tours.slice(0, 3); // Tatev, Paris, Tokyo

  const handleQuickDestClick = (dest: string) => {
    setSearchFilters({
      destination: dest,
      maxPrice: 3500,
      tag: '',
    });
    setView('tours');
  };

  const testimonials = [
    {
      name: 'Anna Harutyunyan',
      role: 'Travel Enthusiast',
      quote: 'The Tatev & Yerevan tour was absolute magic! Wings of Tatev was breathtaking, and the hotel was top-notch. ArmTour organized everything perfectly down to the flights and wine tasting.',
      rating: 5,
    },
    {
      name: 'David Miller',
      role: 'Family Vacationer',
      quote: 'Booking the Maldives luxury package with my wife was the best decision. Flying Business Class and staying in an overwater villa with our own private pool was pure paradise. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Sophie Dubois',
      role: 'Solo Explorer',
      quote: 'Japan is a mix of neon lights and ancient shrines. The ryokan with natural hot springs in Kyoto was a highlight of my life. ArmTour handles all flights, bullet train passes, and dinners perfectly.',
      rating: 5,
    },
  ];

  return (
    <div className="home-view page-fade-in">
      {/* Hero Banner Slider */}
      <HeroSlider slides={sliderSlides} onSelectTour={onSelectTour} />

      {/* Why Choose ArmTour - Inclusion Highlights */}
      <section className="why-us-section container">
        <div className="section-header">
          <span className="badge badge-primary">Premium Service</span>
          <h2>The ArmTour Experience</h2>
          <p>We craft complete, trouble-free flight tour packages so you only focus on creating memories.</p>
        </div>

        <div className="why-us-grid">
          <div className="why-card glass-panel glass-panel-hover">
            <div className="why-icon-wrapper icon-blue">
              <Compass className="why-icon" />
            </div>
            <h3>All-Inclusive Flights</h3>
            <p>Every single tour package contains roundtrip airline tickets, airport pickup, and checked luggage. Business upgrades available.</p>
          </div>

          <div className="why-card glass-panel glass-panel-hover">
            <div className="why-icon-wrapper icon-pink">
              <Award className="why-icon" />
            </div>
            <h3>5-Star Accommodations</h3>
            <p>From overwater pool villas in the Maldives to luxury hotels in Paris, we partner only with top-rated hotels and authentic Ryokans.</p>
          </div>

          <div className="why-card glass-panel glass-panel-hover">
            <div className="why-icon-wrapper icon-teal">
              <ShieldCheck className="why-icon" />
            </div>
            <h3>Curated Daily Itineraries</h3>
            <p>No planning needed. We schedule detailed daily excursions, secure skip-the-line museum passes, and hire professional guides.</p>
          </div>
        </div>
      </section>

      {/* Special Promo Deal with Timer */}
      <section className="promo-deal-section container">
        <div className="promo-banner glass-panel">
          <div className="promo-content">
            <div className="promo-badge badge badge-secondary">
              <Percent size={14} />
              <span>Limited Time Exclusive Deal</span>
            </div>
            <h2>Swiss Alps Luxury Explorer</h2>
            <p>
              Experience breathtaking snow-covered peaks, ride the Glacier Express train in Excellence Class, and relax in 5-star mountain thermal resorts. Book within the next few hours to save $400 per traveler!
            </p>

            <div className="deal-timer">
              <div className="timer-block">
                <span className="timer-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="timer-lbl">Hours</span>
              </div>
              <div className="timer-divider">:</div>
              <div className="timer-block">
                <span className="timer-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="timer-lbl">Mins</span>
              </div>
              <div className="timer-divider">:</div>
              <div className="timer-block">
                <span className="timer-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="timer-lbl">Secs</span>
              </div>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => onSelectTour('swiss-alps-explorer')}
            >
              <span>Secure Deal Now</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="promo-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=800&q=80" 
              alt="Swiss Alps" 
              className="promo-image"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="promo-image-overlay"></div>
            <div className="price-floating-badge">
              <span className="lbl">Special offer</span>
              <span className="val">$2100</span>
              <span className="old">$2500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured/Popular Tours */}
      <section className="featured-section container">
        <div className="section-header">
          <span className="badge badge-primary">Trending Now</span>
          <h2>Our Most Popular Flight Tours</h2>
          <p>Check out our best-selling packages rated highly by travelers all around the world.</p>
        </div>

        <div className="tours-grid">
          {featuredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              isWishlisted={wishlist.includes(tour.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        <div className="view-all-row">
          <button className="btn btn-secondary" onClick={() => setView('tours')}>
            <span>View All Tour Packages</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Quick Destinations Grid */}
      <section className="quick-dest-section container">
        <div className="section-header">
          <span className="badge badge-primary">Explore Regions</span>
          <h2>Travel by Country</h2>
        </div>
        <div className="dest-grid">
          {[
            { name: 'Armenia', img: 'https://images.unsplash.com/photo-1589218436045-ee3dfcd111b5?auto=format&fit=crop&w=400&q=80' },
            { name: 'France', img: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e9bc7?auto=format&fit=crop&w=400&q=80' },
            { name: 'Japan', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80' },
            { name: 'Maldives', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' }
          ].map((dest, i) => (
            <div 
              key={i} 
              className="dest-circle-card"
              onClick={() => handleQuickDestClick(dest.name)}
            >
              <div className="circle-image-wrapper">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80";
                  }}
                />
                <div className="overlay">
                  <span>{dest.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <div className="section-header">
          <span className="badge badge-primary font-bold">Reviews</span>
          <h2>What Our Travelers Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card glass-panel">
              <Quote className="quote-icon text-indigo" size={36} />
              <p className="quote-text">"{t.quote}"</p>
              <div className="testimonial-user">
                <div>
                  <h4 className="user-name">{t.name}</h4>
                  <span className="user-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
