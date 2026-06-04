import React, { useState, useEffect, useRef } from 'react';
import './HeroSlider.css';
import { ChevronLeft, ChevronRight, Calendar, Tag, ArrowRight } from 'lucide-react';
import type { TourPackage } from '../../types';

interface HeroSliderProps {
  slides: TourPackage[];
  onSelectTour: (tourId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides, onSelectTour }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<any | null>(null);
  const [slideImages, setSlideImages] = useState<Record<string, string>>({});

  useEffect(() => {
    slides.forEach((slide) => {
      const url = slide.images[0] || slide.image;
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setSlideImages((prev) => ({ ...prev, [slide.id]: url }));
      };
      img.onerror = () => {
        setSlideImages((prev) => ({
          ...prev,
          [slide.id]: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
        }));
      };
    });
  }, [slides]);

  const resetAutoplayTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 7000); // Change slide every 7 seconds
  };

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1200); // match duration of css transition
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1200);
  };

  const handleDotClick = (index: number) => {
    if (activeIndex === index || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 1200);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="hero-slider">
      {/* Slides Container */}
      <div className="slides-container">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={`slide-item ${isActive ? 'active' : ''}`}
              style={{ pointerEvents: isActive ? 'auto' : 'none' }}
            >
              {/* Background Image with Ken Burns effect */}
              <div 
                className="slide-bg-image" 
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(7, 10, 19, 0.4), rgba(7, 10, 19, 0.85)), url(${slideImages[slide.id] || slide.images[0] || slide.image})` }}
              ></div>

              {/* Glassmorphic Content card on active */}
              {isActive && (
                <div className="slide-content-container container">
                  <div className="slide-card glass-panel">
                    <span className="slide-tag badge badge-primary animate-item-1">
                      Featured Destination
                    </span>
                    <h1 className="slide-title animate-item-2">
                      {slide.title}
                    </h1>
                    <p className="slide-description animate-item-3">
                      {slide.description}
                    </p>

                    {/* Quick attributes */}
                    <div className="slide-meta-row animate-item-4">
                      <div className="slide-meta-item">
                        <Calendar size={18} className="meta-icon text-indigo" />
                        <span>{slide.durationDays} Days / {slide.durationNights} Nights</span>
                      </div>
                      <div className="slide-meta-item">
                        <Tag size={18} className="meta-icon text-pink" />
                        <span>All-Inclusive Flight Package</span>
                      </div>
                    </div>

                    <div className="slide-action-row animate-item-5">
                      <div className="slide-price-container">
                        <span className="price-label">Starting at</span>
                        <div className="price-val">
                          <span className="currency">$</span>
                          <span className="value">{slide.price}</span>
                          <span className="per-person">/ person</span>
                        </div>
                      </div>
                      <button 
                        className="btn btn-primary btn-explore"
                        onClick={() => onSelectTour(slide.id)}
                      >
                        <span>Explore Tour Package</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      {/* Pagination Indicators */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>
    </div>
  );
};
