export interface FlightDetails {
  airline: string;
  departureCity: string;
  arrivalCity: string;
  flightDuration: string;
  class: string;
}

export interface HotelDetails {
  name: string;
  stars: number;
  roomType: string;
  description: string;
  amenities: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  durationDays: number;
  durationNights: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  description: string;
  featured: boolean;
  tags: string[];
  flightDetails: FlightDetails;
  hotelDetails: HotelDetails;
  meals: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
}

export interface BookingDetails {
  tourId: string;
  tourTitle: string;
  pricePerPerson: number;
  travelers: number;
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  departureDate: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
  totalPrice: number;
  bookingRef: string;
}
