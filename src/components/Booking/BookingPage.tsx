import React, { useState } from 'react';
import './BookingPage.css';
import type { TourPackage } from '../../types';
import {
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  Printer,
  ChevronRight,
  Plane,
  ShieldCheck,
  Compass,
} from 'lucide-react';

interface BookingPageProps {
  tour: TourPackage;
  travelers: number;
  date: string;
  onBack: () => void;
  onBookingSuccess: () => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  tour,
  travelers,
  date,
  onBack,
  onBookingSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passport, setPassport] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardFocused, setCardFocused] = useState<'front' | 'back'>('front');

  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const totalPrice = tour.price * travelers;

  // Format Card Number (adds spaces every 4 digits)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += ' ';
      formatted += value[i];
    }
    setCardNumber(formatted.slice(0, 19));
  };

  // Format Expiry Date (adds slash)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setCardExpiry(value.slice(0, 5));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/gi, '');
    setCardCvv(value.slice(0, 3));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !passport || !cardNumber || !cardName || !cardExpiry || !cardCvv) {
      alert('Please fill out all details including payment info.');
      return;
    }
    
    // Generate mock booking reference
    const ref = 'AT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSuccess(true);
    onBookingSuccess(); // track in App.tsx
  };

  const handlePrint = () => {
    window.print();
  };

  if (isSuccess) {
    return (
      <div className="booking-success-view page-fade-in container">
        <div className="success-header">
          <div className="success-icon-badge animate-scale">
            <CheckCircle className="succ-icon" />
          </div>
          <h1>Booking Confirmed!</h1>
          <p className="success-subtitle">
            Your flight tickets and vouchers have been issued. Pack your bags!
          </p>
          <div className="ref-badge">
            Booking Reference: <strong>{bookingRef}</strong>
          </div>
        </div>

        {/* Boarding Pass Mockup */}
        <div className="boarding-pass glass-panel" id="boarding-pass-print">
          <div className="boarding-pass-header">
            <div className="bp-logo">
              <Compass className="bp-logo-icon" />
              <span>ArmTour Airlines</span>
            </div>
            <div className="bp-class-tag">BOARDING PASS</div>
          </div>

          <div className="boarding-pass-body">
            {/* Left Main details */}
            <div className="bp-left-main">
              <div className="bp-cities-row">
                <div className="city-block">
                  <span className="city-code">EVN</span>
                  <span className="city-name">Yerevan Hub</span>
                </div>
                <div className="bp-flight-arrow">
                  <span className="dash-line"></span>
                  <Plane className="plane-fly-icon" />
                  <span className="dash-line"></span>
                </div>
                <div className="city-block">
                  <span className="city-code">
                    {tour.flightDetails.arrivalCity.substring(
                      tour.flightDetails.arrivalCity.indexOf('(') + 1,
                      tour.flightDetails.arrivalCity.indexOf(')')
                    ) || 'GLB'}
                  </span>
                  <span className="city-name">{tour.destination}</span>
                </div>
              </div>

              <div className="bp-details-grid">
                <div className="bp-detail-item">
                  <span className="lbl">Passenger Name</span>
                  <span className="val">{fullName.toUpperCase()}</span>
                </div>
                <div className="bp-detail-item">
                  <span className="lbl">Flight Number</span>
                  <span className="val">AT - {Math.floor(100 + Math.random() * 900)}</span>
                </div>
                <div className="bp-detail-item">
                  <span className="lbl">Departure Date</span>
                  <span className="val">{date}</span>
                </div>
                <div className="bp-detail-item">
                  <span className="lbl">Gate / Boarding</span>
                  <span className="val">GATE A12 / 07:30 AM</span>
                </div>
                <div className="bp-detail-item">
                  <span className="lbl">Seat Assignment</span>
                  <span className="val">{Math.floor(1 + Math.random() * 30)}{String.fromCharCode(65 + Math.floor(Math.random() * 6))} (Window)</span>
                </div>
                <div className="bp-detail-item">
                  <span className="lbl">Airline Carrier</span>
                  <span className="val">{tour.flightDetails.airline}</span>
                </div>
              </div>

              <div className="hotel-voucher-strip">
                <span className="hotel-title">🏨 Voucher Included: 5★ {tour.hotelDetails.name}</span>
                <span className="hotel-room">Room: {tour.hotelDetails.roomType} (All-Inclusive Plan)</span>
              </div>
            </div>

            {/* Right Ticket Stub */}
            <div className="bp-right-stub">
              <div className="stub-header">BOARDING STUB</div>
              <div className="stub-details">
                <div className="stub-item">
                  <span className="lbl">Passenger</span>
                  <span className="val-sm">{fullName.toUpperCase()}</span>
                </div>
                <div className="stub-item">
                  <span className="lbl">Destination</span>
                  <span className="val-sm">{tour.destination}</span>
                </div>
                <div className="stub-item">
                  <span className="lbl">Date & Seat</span>
                  <span className="val-sm">{date}</span>
                </div>
                <div className="stub-item">
                  <span className="lbl">Fare Total</span>
                  <span className="val-sm">${totalPrice}</span>
                </div>
              </div>

              {/* QR Code Graphic Mockup */}
              <div className="qr-code-box">
                <div className="qr-bars">
                  {/* barcode stripes mockup */}
                  <div className="stripe w-2"></div>
                  <div className="stripe w-1"></div>
                  <div className="stripe w-3"></div>
                  <div className="stripe w-1"></div>
                  <div className="stripe w-4"></div>
                  <div className="stripe w-2"></div>
                  <div className="stripe w-1"></div>
                  <div className="stripe w-3"></div>
                  <div className="stripe w-2"></div>
                  <div className="stripe w-1"></div>
                  <div className="stripe w-4"></div>
                  <div className="stripe w-1"></div>
                  <div className="stripe w-2"></div>
                  <div className="stripe w-3"></div>
                </div>
                <div className="barcode-num">{bookingRef}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="success-buttons">
          <button className="btn btn-primary" onClick={handlePrint}>
            <Printer size={18} />
            <span>Print Pass & Vouchers</span>
          </button>
          <button className="btn btn-secondary" onClick={onBack}>
            <span>Back to Homepage</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-view page-fade-in container">
      {/* breadcrumbs */}
      <div className="booking-breadcrumbs">
        <span>Explorer</span>
        <ChevronRight size={14} />
        <span>{tour.destination}</span>
        <ChevronRight size={14} />
        <span className="active">Checkout</span>
      </div>

      <div className="booking-layout">
        {/* Left Side: Form Details */}
        <form className="booking-form-main glass-panel" onSubmit={handleFormSubmit}>
          <h2>Passenger & Flight Checkout</h2>

          {/* Traveler Details Section */}
          <div className="form-section">
            <h3>
              <Users size={18} className="sec-icon text-indigo" />
              <span>Traveler Information</span>
            </h3>
            <div className="form-grid">
              <div className="form-group col-span-2">
                <label>Lead Passenger Full Name (as in Passport)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+374 (XX) XXX-XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group col-span-2">
                <label>Passport Identification Number</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AR987654"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Payment Section with 3D credit card simulator */}
          <div className="form-section">
            <h3>
              <CreditCard size={18} className="sec-icon text-pink" />
              <span>Secure Payment Method</span>
            </h3>

            {/* Interactive Animated Credit Card */}
            <div className="card-simulator-wrapper">
              <div className={`mock-credit-card ${cardFocused === 'back' ? 'flipped' : ''}`}>
                {/* Front Side */}
                <div className="card-side card-front">
                  <div className="card-chip-row">
                    <div className="card-chip"></div>
                    <Compass size={24} className="card-logo" />
                  </div>
                  <div className="card-number-display">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </div>
                  <div className="card-holder-expiry">
                    <div className="card-holder-block">
                      <span className="lbl">Cardholder Name</span>
                      <span className="val">{cardName.toUpperCase() || 'YOUR NAME HERE'}</span>
                    </div>
                    <div className="card-expiry-block">
                      <span className="lbl">Expires</span>
                      <span className="val">{cardExpiry || 'MM/YY'}</span>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-side card-back">
                  <div className="card-magnetic-strip"></div>
                  <div className="card-signature-cvv">
                    <div className="sig-strip"></div>
                    <div className="cvv-display">
                      <span className="cvv-lbl">CVV</span>
                      <span className="cvv-val">{cardCvv || '•••'}</span>
                    </div>
                  </div>
                  <div className="card-back-text">
                    This card is secure. Authorized signature required. Powered by ArmTour Pay.
                  </div>
                </div>
              </div>
            </div>

            {/* Card Inputs */}
            <div className="form-grid">
              <div className="form-group col-span-2">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  required
                  placeholder="Name on card"
                  value={cardName}
                  onFocus={() => setCardFocused('front')}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <div className="form-group col-span-2">
                <label>Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onFocus={() => setCardFocused('front')}
                  onChange={handleCardNumberChange}
                />
              </div>
              <div className="form-group">
                <label>Expiration Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  value={cardExpiry}
                  onFocus={() => setCardFocused('front')}
                  onChange={handleExpiryChange}
                />
              </div>
              <div className="form-group">
                <label>CVV / CVC Code</label>
                <input
                  type="text"
                  required
                  placeholder="123"
                  value={cardCvv}
                  onFocus={() => setCardFocused('back')}
                  onBlur={() => setCardFocused('front')}
                  onChange={handleCvvChange}
                />
              </div>
            </div>
          </div>

          <div className="booking-cta-row">
            <button className="btn btn-primary checkout-pay-btn" type="submit">
              <ShieldCheck size={18} />
              <span>Confirm & Book Flight Tour</span>
            </button>
            <button className="btn btn-secondary" type="button" onClick={onBack}>
              Cancel
            </button>
          </div>
        </form>

        {/* Right Side: Order Summary Panel */}
        <aside className="booking-summary-sidebar">
          <div className="summary-sticky-card glass-panel">
            <h3>Selected Package Summary</h3>
            <div className="summary-tour-details">
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="summary-image" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <h4>{tour.title}</h4>
              <span className="destination">{tour.destination}</span>
            </div>

            <div className="summary-breakdown">
              <div className="summary-row">
                <Calendar size={16} className="text-indigo" />
                <div>
                  <span className="lbl">Departure Date</span>
                  <span className="val">{date}</span>
                </div>
              </div>
              <div className="summary-row">
                <Users size={16} className="text-teal" />
                <div>
                  <span className="lbl">Total Travelers</span>
                  <span className="val">{travelers} {travelers === 1 ? 'Person' : 'People'}</span>
                </div>
              </div>
              <div className="summary-row">
                <Plane size={16} className="text-pink" />
                <div>
                  <span className="lbl">Flight Details</span>
                  <span className="val">{tour.flightDetails.airline} ({tour.flightDetails.class})</span>
                </div>
              </div>
            </div>

            <div className="summary-bill">
              <div className="bill-row">
                <span>Tour Base Price</span>
                <span>${tour.price} / person</span>
              </div>
              <div className="bill-row">
                <span>Tax & Airport Fees</span>
                <span>Included</span>
              </div>
              <div className="bill-row total-row">
                <span>Total Amount Due</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <div className="trust-seal">
              <ShieldCheck size={16} className="text-success" />
              <span>Secured with 256-bit SSL Encryption</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
