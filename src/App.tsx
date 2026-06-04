import { useState } from 'react';
import './App.css';
import { tourPackages } from './data';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { ToursPage } from './components/ToursPage/ToursPage';
import { TourDetails } from './components/TourDetails/TourDetails';
import { BookingPage } from './components/Booking/BookingPage';
import { WishlistPage } from './components/Wishlist/WishlistPage';
import { ContactPage } from './components/Contact/ContactPage';
import { Footer } from './components/Footer/Footer';

function App() {
  const [view, setView] = useState<string>('home');
  const [prevView, setPrevView] = useState<string>('home');
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [searchFilters, setSearchFilters] = useState<{ destination: string; maxPrice: number; tag: string }>({
    destination: '',
    maxPrice: 3500,
    tag: '',
  });

  const [bookingParams, setBookingParams] = useState<{ travelers: number; date: string }>({
    travelers: 1,
    date: '2026-07-15',
  });

  const handleSelectTour = (tourId: string) => {
    setPrevView(view);
    setSelectedTourId(tourId);
    setView('details');
  };

  const handleToggleWishlist = (tourId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // prevent card click
    }
    setWishlist((prev) => {
      if (prev.includes(tourId)) {
        return prev.filter((id) => id !== tourId);
      } else {
        return [...prev, tourId];
      }
    });
  };

  const handleBookTour = (tourId: string, travelersCount: number, dateString: string) => {
    setSelectedTourId(tourId);
    setBookingParams({ travelers: travelersCount, date: dateString });
    setView('booking');
  };

  // Safe navigation back to catalog or home
  const handleDetailsBack = () => {
    setView(prevView === 'booking' ? 'home' : prevView);
  };

  // Find selected tour package details
  const activeTour = tourPackages.find((t) => t.id === selectedTourId) || tourPackages[0];

  const handleViewChange = (newView: string) => {
    setView(newView);
    if (newView !== 'details' && newView !== 'booking') {
      setPrevView(newView);
    }
  };

  return (
    <div className="app-shell">
      {/* Navigation Bar */}
      <Navbar
        currentView={view}
        setView={handleViewChange}
        savedCount={wishlist.length}
      />

      {/* Main Dynamic View Content */}
      <main className="main-content-area">
        {view === 'home' && (
          <Home
            tours={tourPackages}
            onSelectTour={handleSelectTour}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            setView={handleViewChange}
            setSearchFilters={setSearchFilters}
          />
        )}

        {view === 'tours' && (
          <ToursPage
            tours={tourPackages}
            onSelectTour={handleSelectTour}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            filters={searchFilters}
            setFilters={setSearchFilters}
          />
        )}

        {view === 'details' && (
          <TourDetails
            tour={activeTour}
            onBack={handleDetailsBack}
            onBook={handleBookTour}
            isWishlisted={wishlist.includes(activeTour.id)}
            onToggleWishlist={(tourId) => handleToggleWishlist(tourId)}
          />
        )}

        {view === 'booking' && (
          <BookingPage
            tour={activeTour}
            travelers={bookingParams.travelers}
            date={bookingParams.date}
            onBack={() => setView('details')}
            onBookingSuccess={() => {
              // Can clear wishlist if they bought it
              if (wishlist.includes(activeTour.id)) {
                setWishlist((prev) => prev.filter((id) => id !== activeTour.id));
              }
            }}
          />
        )}

        {view === 'wishlist' && (
          <WishlistPage
            tours={tourPackages}
            wishlist={wishlist}
            onSelectTour={handleSelectTour}
            onToggleWishlist={handleToggleWishlist}
            setView={handleViewChange}
          />
        )}

        {view === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer bar */}
      <Footer setView={handleViewChange} />
    </div>
  );
}

export default App;
