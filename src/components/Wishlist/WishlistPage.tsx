import React from 'react';
import './WishlistPage.css';
import type { TourPackage } from '../../types';
import { TourCard } from '../TourCard/TourCard';
import { Heart, Compass } from 'lucide-react';

interface WishlistPageProps {
  tours: TourPackage[];
  wishlist: string[];
  onSelectTour: (tourId: string) => void;
  onToggleWishlist: (tourId: string, e: React.MouseEvent) => void;
  setView: (view: string) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  tours,
  wishlist,
  onSelectTour,
  onToggleWishlist,
  setView,
}) => {
  const savedTours = tours.filter((t) => wishlist.includes(t.id));

  return (
    <div className="wishlist-page page-fade-in container">
      <div className="wishlist-header">
        <h1>Saved Tour Packages</h1>
        <p>Keep track of your dream vacations and all-inclusive flights in one place.</p>
      </div>

      {savedTours.length > 0 ? (
        <div className="wishlist-grid">
          {savedTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              isWishlisted={true}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      ) : (
        <div className="wishlist-empty glass-panel">
          <div className="heart-pulse-badge">
            <Heart className="empty-heart-icon text-indigo" />
          </div>
          <h3>Your wishlist is empty</h3>
          <p>Explore our global tour packages and click the heart icon on any card to save it here.</p>
          <button className="btn btn-primary" onClick={() => setView('tours')}>
            <Compass size={18} />
            <span>Discover Packages</span>
          </button>
        </div>
      )}
    </div>
  );
};
