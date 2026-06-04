import React, { useState, useEffect } from 'react';
import './ToursPage.css';
import { TourCard } from '../TourCard/TourCard';
import type { TourPackage } from '../../types';
import { Search, SlidersHorizontal, RefreshCw, AlertCircle } from 'lucide-react';

interface ToursPageProps {
  tours: TourPackage[];
  onSelectTour: (tourId: string) => void;
  wishlist: string[];
  onToggleWishlist: (tourId: string, e: React.MouseEvent) => void;
  filters: { destination: string; maxPrice: number; tag: string };
  setFilters: (filters: { destination: string; maxPrice: number; tag: string }) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({
  tours,
  onSelectTour,
  wishlist,
  onToggleWishlist,
  filters,
  setFilters,
}) => {
  const [localDest, setLocalDest] = useState(filters.destination);
  const [localPrice, setLocalPrice] = useState(filters.maxPrice);
  const [localTag, setLocalTag] = useState(filters.tag);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Sync when parent filters change (e.g. from Home search)
  useEffect(() => {
    setLocalDest(filters.destination);
    setLocalPrice(filters.maxPrice);
    setLocalTag(filters.tag);
  }, [filters]);

  const handleApplyFilters = () => {
    setFilters({
      destination: localDest,
      maxPrice: localPrice,
      tag: localTag,
    });
    setShowFiltersMobile(false);
  };

  const handleResetFilters = () => {
    const defaultFilters = { destination: '', maxPrice: 3500, tag: '' };
    setLocalDest('');
    setLocalPrice(3500);
    setLocalTag('');
    setFilters(defaultFilters);
  };

  // Filter logic
  const filteredTours = tours.filter((tour) => {
    const matchDest =
      localDest === '' ||
      tour.destination.toLowerCase().includes(localDest.toLowerCase()) ||
      tour.title.toLowerCase().includes(localDest.toLowerCase());
    const matchPrice = tour.price <= localPrice;
    const matchTag =
      localTag === '' || tour.tags.includes(localTag);
    return matchDest && matchPrice && matchTag;
  });

  return (
    <div className="tours-page-view page-fade-in container">
      {/* Page Header */}
      <div className="tours-page-header">
        <h1>All Flight Tour Packages</h1>
        <p>Browse our hand-crafted, premium all-inclusive flight tours to the most scenic spots on Earth.</p>
      </div>

      <div className="tours-layout">
        {/* Mobile Filter Toggle */}
        <button 
          className="btn btn-secondary mobile-filter-toggle"
          onClick={() => setShowFiltersMobile(!showFiltersMobile)}
        >
          <SlidersHorizontal size={18} />
          <span>Filters & Sort</span>
        </button>

        {/* Sidebar Filters */}
        <aside className={`tours-sidebar glass-panel ${showFiltersMobile ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <h3>Filter Tours</h3>
            <button className="reset-btn-link" onClick={handleResetFilters} title="Reset all filters">
              <RefreshCw size={14} />
              <span>Reset</span>
            </button>
          </div>

          <div className="sidebar-filter-group">
            <label className="sidebar-label">Destination</label>
            <div className="sidebar-search-wrapper">
              <Search className="sidebar-search-icon" size={16} />
              <input
                type="text"
                placeholder="Search country or city..."
                value={localDest}
                onChange={(e) => setLocalDest(e.target.value)}
                onBlur={handleApplyFilters}
                onKeyDown={(e) => e.key === 'Enter' && handleApplyFilters()}
              />
            </div>
          </div>

          <div className="sidebar-filter-group">
            <div className="price-label-row">
              <label className="sidebar-label">Max Budget</label>
              <span className="price-bubble">${localPrice}</span>
            </div>
            <input
              type="range"
              min="800"
              max="3500"
              step="100"
              className="price-range-slider"
              value={localPrice}
              onChange={(e) => setLocalPrice(Number(e.target.value))}
              onMouseUp={handleApplyFilters}
              onTouchEnd={handleApplyFilters}
            />
            <div className="price-range-limits">
              <span>$800</span>
              <span>$3500</span>
            </div>
          </div>

          <div className="sidebar-filter-group">
            <label className="sidebar-label">Tour Category</label>
            <select
              value={localTag}
              onChange={(e) => {
                setLocalTag(e.target.value);
                setFilters({ destination: localDest, maxPrice: localPrice, tag: e.target.value });
              }}
            >
              <option value="">All Categories</option>
              <option value="Best Seller">Best Seller</option>
              <option value="All-Inclusive">All-Inclusive</option>
              <option value="Romantic">Romantic</option>
              <option value="Luxury">Luxury</option>
              <option value="Nature & Adventure">Nature & Adventure</option>
            </select>
          </div>

          <button className="btn btn-primary w-full apply-filters-btn" onClick={handleApplyFilters}>
            Apply Filters
          </button>
        </aside>

        {/* Catalog Main Content */}
        <main className="tours-catalog-content">
          <div className="catalog-status">
            <span className="results-count">
              Showing <strong>{filteredTours.length}</strong> of <strong>{tours.length}</strong> packages
            </span>
          </div>

          {filteredTours.length > 0 ? (
            <div className="tours-page-grid">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  onSelect={onSelectTour}
                  isWishlisted={wishlist.includes(tour.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="no-results-panel glass-panel">
              <AlertCircle size={48} className="no-results-icon text-indigo" />
              <h3>No flight tours match your filter</h3>
              <p>Try clearing your keywords or increasing your maximum budget slider limit.</p>
              <button className="btn btn-primary" onClick={handleResetFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
