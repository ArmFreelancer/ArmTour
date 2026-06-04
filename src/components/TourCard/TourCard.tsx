import React from 'react';
import './TourCard.css';
import { Heart, Star, Plane, Hotel, Utensils, ArrowRight, Clock } from 'lucide-react';
import type { TourPackage } from '../../types';

interface TourCardProps {
  tour: TourPackage;
  onSelect: (tourId: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string, e: React.MouseEvent) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onSelect,
  isWishlisted,
  onToggleWishlist,
}) => {
  const discountPercent = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  return (
    <div className="tour-card glass-panel glass-panel-hover" onClick={() => onSelect(tour.id)}>
      {/* Tour Image and Badges */}
      <div className="card-image-wrapper">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="card-image" 
          loading="lazy" 
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="card-gradient-overlay"></div>

        {/* Favorite Icon */}
        <button
          className={`favorite-btn ${isWishlisted ? 'wishlisted' : ''}`}
          onClick={(e) => onToggleWishlist(tour.id, e)}
          title={isWishlisted ? 'Remove from Saved' : 'Save Tour'}
        >
          <Heart className={`fav-heart ${isWishlisted ? 'heart-filled' : ''}`} size={18} />
        </button>

        {/* Dynamic Badges */}
        <div className="card-badges">
          {tour.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className={`badge ${
                tag === 'Best Seller'
                  ? 'badge-primary'
                  : tag === 'All-Inclusive'
                  ? 'badge-success'
                  : 'badge-secondary'
              }`}
            >
              {tag}
            </span>
          ))}
          {discountPercent > 0 && (
            <span className="badge badge-warning discount-badge">-{discountPercent}% Save</span>
          )}
        </div>

        {/* Duration Overlay */}
        <div className="card-duration-badge">
          <Clock size={12} />
          <span>{tour.durationDays}D / {tour.durationNights}N</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Rating and Destination */}
        <div className="card-header-row">
          <span className="card-destination">{tour.destination}</span>
          <div className="card-rating">
            <Star className="star-icon" size={14} />
            <span className="rating-val">{tour.rating}</span>
            <span className="rating-count">({tour.reviewCount})</span>
          </div>
        </div>

        {/* Tour Title */}
        <h3 className="card-title">{tour.title}</h3>

        {/* Description Snippet */}
        <p className="card-description">{tour.description}</p>

        {/* Main Inclusions */}
        <div className="card-inclusions">
          <div className="inclusion-item" title="Flight Details">
            <Plane size={14} className="inclusion-icon text-indigo" />
            <span>{tour.flightDetails.airline}</span>
          </div>
          <div className="inclusion-item" title="Accommodation">
            <Hotel size={14} className="inclusion-icon text-teal" />
            <span>{tour.hotelDetails.name} ({tour.hotelDetails.stars}★)</span>
          </div>
          <div className="inclusion-item" title="Included Meals">
            <Utensils size={14} className="inclusion-icon text-pink" />
            <span>{tour.meals.split(':')[0]}</span>
          </div>
        </div>

        {/* Card Footer: Pricing and Action */}
        <div className="card-footer-row">
          <div className="card-price-block">
            {tour.originalPrice && (
              <span className="original-price">${tour.originalPrice}</span>
            )}
            <div className="current-price-val">
              <span className="currency">$</span>
              <span className="value">{tour.price}</span>
              <span className="per-person">/ person</span>
            </div>
          </div>
          <button className="btn btn-secondary card-action-btn" onClick={() => onSelect(tour.id)}>
            <span>Details</span>
            <ArrowRight size={14} className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
