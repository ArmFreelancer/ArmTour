import type { TourPackage } from './types';

export const tourPackages: TourPackage[] = [
  {
    id: 'tatev-yerevan-armenia',
    title: 'Ancient Legends: Yerevan & Tatev Monastery Tour',
    destination: 'Armenia',
    durationDays: 7,
    durationNights: 6,
    price: 950,
    originalPrice: 1200,
    rating: 4.9,
    reviewCount: 148,
    image: 'https://images.unsplash.com/photo-1627914949214-e0eb3e1cd095?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1627914949214-e0eb3e1cd095?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589218436045-ee3dfcd111b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Explore the cradle of history. Walk through the pink streets of Yerevan, gaze upon the majestic Mount Ararat, fly on the Wings of Tatev (the world’s longest reversible cable car), and stay in premium local resorts.',
    featured: true,
    tags: ['Best Seller', 'Cultural Tour', 'All-Inclusive'],
    flightDetails: {
      airline: 'Armenia Airways',
      departureCity: 'Global Hubs',
      arrivalCity: 'Yerevan (EVN)',
      flightDuration: 'Variable (Direct options available)',
      class: 'Economy / Business Class Upgrade available'
    },
    hotelDetails: {
      name: 'Alexander Luxury Hotel Yerevan',
      stars: 5,
      roomType: 'Deluxe Double Room',
      description: 'Superb 5-star hotel in the heart of Yerevan with fine dining, indoor pool, and premium spa services.',
      amenities: ['Free WiFi', 'Pool & Spa', 'Fitness Center', 'Bar & Restaurant', 'City View balcony']
    },
    meals: 'Full Board: Buffet breakfast, traditional Armenian lunches, and curated wine dinners.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Yerevan & Welcome Dinner',
        description: 'Arrive at Zvartnots International Airport. Transfer to your luxury hotel. Enjoy a traditional Armenian welcome dinner with live national folk music.',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Evening stroll in Republic Square']
      },
      {
        day: 2,
        title: 'Yerevan City Tour & Cascade Complex',
        description: 'Explore the pink-tuff architecture of Yerevan. Visit the Cascade Complex, the Cafesjian Center for the Arts, and the Matenadaran ancient manuscript depository.',
        activities: ['Guided walking tour', 'Matenadaran museum entry', 'Panoramic city views from Cascade', 'Traditional lunch at Lavash restaurant']
      },
      {
        day: 3,
        title: 'Garni Temple, Geghard Monastery & Lavash Baking',
        description: 'Visit the 1st-century pagan Temple of Garni. Experience the UNESCO-listed Geghard Cave Monastery. Participate in masterclass baking traditional thin flatbread (Lavash).',
        activities: ['Garni Temple tour', 'Geghard Monastery choir listening', 'Lavash baking masterclass', 'Lunch overlooking the Azat river gorge']
      },
      {
        day: 4,
        title: 'Lake Sevan & Dilijan - Armenia\'s Switzerland',
        description: 'Drive to the blue eye of Armenia—Lake Sevan. Visit Sevanavank monastery. Drive through the lush green forests of Dilijan, exploring the ancient Haghartsin monastery.',
        activities: ['Sevanavank climb', 'Dilijan historic street tour', 'Traditional wood carving shop visit', 'Overnight in Dilijan resort']
      },
      {
        day: 5,
        title: 'Khor Virap, Areni Winery & Tatev Cable Car',
        description: 'Drive south with epic views of Mount Ararat at Khor Virap. Taste ancient wine in Areni Cave (6,100 years old). Board the Wings of Tatev cable car to reach the spectacular 9th-century Tatev Monastery.',
        activities: ['Khor Virap monastery visit', 'Areni cave wine tasting', 'Wings of Tatev aerial tramway flight', 'Stay in Goris luxury lodge']
      },
      {
        day: 6,
        title: 'Noravank Gorge & Return to Yerevan',
        description: 'Drive back through the red cliffs of Noravank canyon. Stop at Noravank monastery, a masterpiece of medieval architecture. Return to Yerevan for souvenir shopping at the Vernissage market.',
        activities: ['Noravank tour', 'Canyon picnic lunch', 'Vernissage handicraft market shopping', 'Gala dinner in Yerevan']
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Breakfast at the hotel, souvenir shopping, and private transfer to Zvartnots Airport for your flight back home.',
        activities: ['Breakfast', 'Airport transfer']
      }
    ],
    included: [
      'Roundtrip flights with standard baggage allowance',
      '6 nights in premium 5-star & boutique resort hotels',
      'All meals (Breakfast, lunch, and dinner)',
      'Wings of Tatev & all monastery entrance fees',
      'Professional English/Russian speaking tour guide',
      'Private air-conditioned transportation'
    ],
    excluded: [
      'Travel insurance (available as add-on)',
      'Personal alcoholic beverage purchases outside wine tastings',
      'Tips for guides and drivers'
    ]
  },
  {
    id: 'paris-french-riviera-france',
    title: 'Parisian Elegance & French Riviera Magic',
    destination: 'France',
    durationDays: 8,
    durationNights: 7,
    price: 1850,
    originalPrice: 2200,
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e9bc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Experience the ultimate French getaway. From the glowing Eiffel Tower and artistic Louvre in Paris, to the sun-soaked beaches, luxury yachts, and azure waters of Nice and Monaco.',
    featured: true,
    tags: ['Best Seller', 'Romantic', 'Flight Included'],
    flightDetails: {
      airline: 'Air France',
      departureCity: 'Global Hubs',
      arrivalCity: 'Paris Charles de Gaulle (CDG) & Nice (NCE)',
      flightDuration: 'Variable (includes domestic connection to Nice)',
      class: 'Economy Class'
    },
    hotelDetails: {
      name: 'Hôtel Regina Louvre (Paris) & Le Méridien (Nice)',
      stars: 5,
      roomType: 'Classic Queen Suite',
      description: 'Historical elegance in Paris near the Louvre, followed by sea-view luxury right on the Promenade des Anglais in Nice.',
      amenities: ['Free WiFi', 'Spa & Hammam', 'Sea View Room (Nice)', 'Fine dining bar', 'Concierge Service']
    },
    meals: 'Half Board: Gourmet breakfast every morning and 3-course dinners at local bistros.',
    itinerary: [
      {
        day: 1,
        title: 'Bonjour Paris - Seine Cruise',
        description: 'Arrive in Paris, VIP transfer to your hotel. In the evening, enjoy a sunset cruise down the River Seine with champagne.',
        activities: ['Airport pickup', 'Hotel check-in', 'Sunset River Cruise', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Louvre Museum & Eiffel Tower Priority Access',
        description: 'Skip the line at the Louvre to see the Mona Lisa. In the afternoon, ascend the Eiffel Tower to the summit, followed by dinner inside the tower.',
        activities: ['Louvre guided tour', 'Eiffel Tower Summit tour', 'Dinner at Madame Brasserie']
      },
      {
        day: 3,
        title: 'Palace of Versailles Grand Tour',
        description: 'Take a private excursion to the extravagant Palace of Versailles. Explore the Hall of Mirrors and the magnificent royal gardens.',
        activities: ['Versailles Royal Apartments tour', 'Musical gardens walk', 'Local bakery lunch']
      },
      {
        day: 4,
        title: 'Fly to Nice - Evening in Old Town Nice',
        description: 'Morning flight to Nice. Check in to your beachside hotel. Walk the Promenade des Anglais and eat fresh seafood in Vieux Nice.',
        activities: ['Flight to Nice', 'Promenade walk', 'Seafood dinner in Old Town Nice']
      },
      {
        day: 5,
        title: 'Monaco & Monte Carlo Glamour',
        description: 'Day trip to Monaco. Drive along the spectacular coastal Grand Corniche road. Visit the Prince’s Palace and the world-famous Monte Carlo Casino.',
        activities: ['Monaco day tour', 'Monte Carlo casino visit', 'Exotic garden tour']
      },
      {
        day: 6,
        title: 'Art in Antibes & Red Carpet Cannes',
        description: 'Visit the Picasso Museum in Antibes, then drive to Cannes to walk the Boulevard de la Croisette and take photos at the Palais des Festivals.',
        activities: ['Antibes historic market', 'Picasso museum tour', 'Cannes celebrity walk']
      },
      {
        day: 7,
        title: 'Leisure Day in Nice',
        description: 'Relax at the hotel spa, swim in the Mediterranean Sea, or shop at the luxury boutiques on Avenue Jean Médecin.',
        activities: ['Beach relaxation', 'Spa treatments', 'Farewell French dinner']
      },
      {
        day: 8,
        title: 'Au Revoir France',
        description: 'Enjoy a final croissant breakfast before your private transfer to Nice Côte d\'Azur Airport for your flight home.',
        activities: ['Breakfast', 'Airport transfer']
      }
    ],
    included: [
      'International flights and domestic flight to Nice',
      '7 nights in 5-star premium hotels',
      'Daily breakfast and 4 dinners',
      'All skip-the-line museum tickets',
      'Seine cruise & Versailles tours',
      'All transfers in private Mercedes vehicles'
    ],
    excluded: [
      'Monaco casino gambling chips',
      'Lunches and beverages not mentioned',
      'Personal shopping'
    ]
  },
  {
    id: 'tokyo-kyoto-japan',
    title: 'Future & Tradition: Tokyo, Kyoto & Mt. Fuji',
    destination: 'Japan',
    durationDays: 9,
    durationNights: 8,
    price: 2400,
    originalPrice: 2800,
    rating: 4.95,
    reviewCount: 220,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A spectacular journey showcasing Japan\'s contrast of ultra-modern cities and age-old spiritual temples. Ride bullet trains, eat authentic sushi, and see majestic Mount Fuji.',
    featured: true,
    tags: ['Trending', 'All-Inclusive', 'Highly Rated'],
    flightDetails: {
      airline: 'Japan Airlines',
      departureCity: 'Global Hubs',
      arrivalCity: 'Tokyo Haneda (HND) / Osaka Kansai (KIX)',
      flightDuration: 'Variable (Direct options)',
      class: 'Economy Class (Premium Economy upgrade available)'
    },
    hotelDetails: {
      name: 'Keio Plaza Hotel Tokyo & Ryokan Kyoto',
      stars: 5,
      roomType: 'Executive Room / Traditional Ryokan Futon',
      description: 'Luxury high-rise stay in Shinjuku, Tokyo, combined with a traditional Japanese hot-spring Ryokan in Kyoto.',
      amenities: ['Free WiFi', 'Onsen Hot Spring', 'Michelin-starred sushi bar', 'Metro connection', 'Traditional tea room']
    },
    meals: 'Full Board: Authentic Izakaya dinners, multi-course Kaiseki feasts, and premium Wagyu beef experiences.',
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Tokyo - Shinjuku Neon Night',
        description: 'Arrive in Tokyo. Check in to your luxury hotel. In the evening, explore the neon lights of Shinjuku and enjoy an Izakaya food tour.',
        activities: ['Airport greeting', 'Hotel check-in', 'Shinjuku neon walking tour', 'Izakaya dinner']
      },
      {
        day: 2,
        title: 'Asakusa Temple, Sushi Making & Shibuya Crossing',
        description: 'Visit Senso-ji, Tokyo’s oldest temple. Participate in a master sushi-making class led by a Michelin-trained chef. In the evening, witness the famous Shibuya Crossing.',
        activities: ['Senso-ji temple tour', 'Sushi making workshop', 'Shibuya Crossing & Hachiko statue', 'Shibuya Sky deck panoramic views']
      },
      {
        day: 3,
        title: 'Akihabara Tech & TeamLab Borderless Digital Art',
        description: 'Explore the digital wonders of TeamLab Borderless. In the afternoon, visit Akihabara, the anime and gaming capital of the world.',
        activities: ['TeamLab Borderless entry', 'Akihabara tour', 'Gundam cafe visit', 'Ramen tasting dinner']
      },
      {
        day: 4,
        title: 'Mount Fuji & Lake Ashi Bullet Train ride',
        description: 'Travel to Mount Fuji\'s 5th station for breathtaking views. Take a cruise on Lake Ashi, ride the Komagatake Ropeway, and board the Shinkansen (Bullet Train) to Kyoto.',
        activities: ['Mt. Fuji sightseeing', 'Lake Ashi cruise', 'Ropeway cable car', 'Bullet train ride to Kyoto']
      },
      {
        day: 5,
        title: 'Golden Pavilion & Arashiyama Bamboo Forest',
        description: 'Explore Kinkaku-ji (The Golden Pavilion) reflecting over its pond. Walk through the towering, green stalks of the Arashiyama Bamboo Grove and visit the monkey park.',
        activities: ['Kinkaku-ji tour', 'Arashiyama bamboo walk', 'Monkey Park Iwatayama hike', 'Kyoto style dinner']
      },
      {
        day: 6,
        title: 'Fushimi Inari Shrine & Traditional Tea Ceremony',
        description: 'Hike through the thousands of vermilion Torii gates at Fushimi Inari Shrine. In the afternoon, participate in a private, Zen-themed Matcha tea ceremony in a historic temple.',
        activities: ['Fushimi Inari torii gates hike', 'Zen garden meditation', 'Matcha tea ceremony', 'Maiko traditional dance dinner show']
      },
      {
        day: 7,
        title: 'Nara Deer Park Day Trip',
        description: 'Visit Nara to see the Todai-ji Temple houses the Great Buddha. Feed the friendly bowing deer in Nara Park.',
        activities: ['Nara Park deer feeding', 'Todai-ji temple tour', 'Kasuga Taisha shrine', 'Ryokan hot spring onsen bath']
      },
      {
        day: 8,
        title: 'Osaka Castle & Dotonbori Street Food Feast',
        description: 'Drive to Osaka. Tour the majestic Osaka Castle. In the evening, eat your way through Dotonbori, trying Takoyaki and Okonomiyaki.',
        activities: ['Osaka Castle tour', 'Dotonbori food walk', 'Farewell Kaiseki multi-course dinner']
      },
      {
        day: 9,
        title: 'Sayonara Japan',
        description: 'Private transfer from your Kyoto/Osaka Ryokan to Kansai International Airport for your return flight.',
        activities: ['Breakfast', 'Airport transfer']
      }
    ],
    included: [
      'Roundtrip international flights',
      '8 nights in premium hotels and a traditional hot-spring Ryokan',
      'All daily meals (Kaiseki dinners, Sushi class, street food tours)',
      '7-day Japan Rail Bullet Train Pass',
      'All local entrance tickets & TeamLab digital art ticket',
      'Professional local English-speaking guide'
    ],
    excluded: [
      'Onsen private bath reservation fee',
      'Personal shopping and baggage excess charges'
    ]
  },
  {
    id: 'maldives-luxury-escape',
    title: 'Pure Paradise: Maldives Overwater Luxury Villa Escape',
    destination: 'Maldives',
    durationDays: 6,
    durationNights: 5,
    price: 3200,
    originalPrice: 3800,
    rating: 4.98,
    reviewCount: 94,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Escape to ultimate luxury. Sleep in an overwater villa with direct access to turquoise waters, dive with sea turtles, relax with overwater spa treatments, and dine at an underwater restaurant.',
    featured: false,
    tags: ['Luxury', 'All-Inclusive', 'Honeymoon Choice'],
    flightDetails: {
      airline: 'Emirates / Qatar Airways',
      departureCity: 'Global Hubs',
      arrivalCity: 'Malé (MLE) & Seaplane to Resort',
      flightDuration: 'Variable (includes 45 min seaplane)',
      class: 'Business Class'
    },
    hotelDetails: {
      name: 'Conrad Maldives Rangali Island',
      stars: 5,
      roomType: 'Sunset Overwater Villa with Private Pool',
      description: 'Ultra-exclusive private island resort featuring the world\'s first underwater villa and fine dining.',
      amenities: ['Private Infinity Pool', 'Glass floor panels', 'Underwater dining', '24/7 Butler service', 'Direct ocean steps']
    },
    meals: 'All Inclusive: Unlimited premium drinks, fine dining, and floating breakfasts in your private pool.',
    itinerary: [
      {
        day: 1,
        title: 'Seaplane Arrival & Sunset Floating Dinner',
        description: 'Arrive at Male Airport, board a scenic seaplane to Conrad Resort. Check in to your Overwater Villa. Indulge in sunset cocktails and floating dinner.',
        activities: ['Seaplane transfer', 'Villa check-in & Butler greeting', 'Floating dinner in private pool', 'Stargazing on deck']
      },
      {
        day: 2,
        title: 'Private Snorkeling Safari & Coral Planting',
        description: 'Board a luxury speedboat for a private snorkeling tour. Swim alongside gentle manta rays and sea turtles. Participate in coral reef conservation.',
        activities: ['Snorkeling safari with biologist', 'Coral reef planting', 'Beachfront BBQ lunch', 'Sunset catamaran cruise']
      },
      {
        day: 3,
        title: 'Ithaa Underwater Restaurant Lunch',
        description: 'Dine 5 meters below the ocean surface at Ithaa, the world’s first all-glass undersea restaurant. Gaze at sharks and tropical fish while eating a 6-course lunch.',
        activities: ['Spa therapy session', 'Underwater restaurant dining', 'Paddleboarding on lagoon', 'Beachside open-air cinema']
      },
      {
        day: 4,
        title: 'Deserted Island Picnic & Sandbar Massage',
        description: 'Take a boat to an uninhabited sandbar. Enjoy a private chef picnic and an open-air massage under coconut trees.',
        activities: ['Sandbar boat excursion', 'Chef-prepared picnic', 'Sandbar massage', 'Kayaking at sunset']
      },
      {
        day: 5,
        title: 'Big Game Fishing & Farewell Yacht Party',
        description: 'Embark on a deep-sea fishing excursion in the morning. In the evening, board a luxury yacht for sunset drinks and live music party.',
        activities: ['Deep-sea fishing', 'Catch-of-the-day lunch', 'Yacht sunset party', 'Candlelit dinner on the beach']
      },
      {
        day: 6,
        title: 'Departure Maldives',
        description: 'One last breakfast overlooking the turquoise lagoon. Board your seaplane back to Male for your international connection.',
        activities: ['Floating breakfast', 'Seaplane back to Male', 'Airport departure']
      }
    ],
    included: [
      'Roundtrip international flights & seaplane transfers',
      '5 nights in a 5-star Overwater Villa with private pool',
      'All Inclusive gourmet meals & premium champagne',
      'Private snorkeling safari & manta ray swim',
      '6-course lunch at Ithaa Undersea Restaurant',
      'Daily spa massage treatment'
    ],
    excluded: [
      'Scuba diving certification course',
      'Motorized water-sports (Jet skis, etc.)'
    ]
  },
  {
    id: 'swiss-alps-explorer',
    title: 'Alpine Splendor: Swiss Alps & Scenic Trains',
    destination: 'Switzerland',
    durationDays: 7,
    durationNights: 6,
    price: 2100,
    originalPrice: 2500,
    rating: 4.9,
    reviewCount: 104,
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Explore the breathtaking snow-covered peaks, emerald lakes, and charming wooden chalets of Switzerland. Travel on the Glacier Express, ascend Jungfraujoch, and relax in thermal baths.',
    featured: false,
    tags: ['Nature & Adventure', 'Flight Included'],
    flightDetails: {
      airline: 'Swiss International Air Lines',
      departureCity: 'Global Hubs',
      arrivalCity: 'Zurich Airport (ZRH)',
      flightDuration: 'Variable',
      class: 'Economy Class'
    },
    hotelDetails: {
      name: 'Grand Hotel Zermatterhof (Zermatt)',
      stars: 5,
      roomType: 'Matterhorn View Double Room',
      description: 'Luxury hotel located in Zermatt offering stunning views of the Matterhorn, award-winning spa, and fine dining.',
      amenities: ['Matterhorn Views', 'Indoor Pool & Thermal Spa', 'Wood fireplace', 'Free WiFi', 'Horse carriage transfer']
    },
    meals: 'Half Board: Swiss breakfast buffet daily and gourmet dinners featuring Alpine cheese fondue and Swiss chocolate desserts.',
    itinerary: [
      {
        day: 1,
        title: 'Arrive Zurich & Scenic Rail to Lucerne',
        description: 'Arrive at Zurich airport. Walk straight to the rail platform and board the Swiss train to Lucerne. Walk the Chapel Bridge and enjoy a lakeside dinner.',
        activities: ['Airport rail transfer', 'Hotel check-in Lucerne', 'Chapel Bridge walk', 'Traditional Swiss dinner']
      },
      {
        day: 2,
        title: 'Mt. Pilatus Golden Roundtrip',
        description: 'Board a lake steamer, then ride the world’s steepest cogwheel railway to the summit of Mt. Pilatus. Descend via aerial cable cars.',
        activities: ['Lake Lucerne boat cruise', 'Cogwheel train ride', 'Mountaintop lunch', 'Cable car descent']
      },
      {
        day: 3,
        title: 'Interlaken & Jungfraujoch - Top of Europe',
        description: 'Travel to Grindelwald and take the Eiger Express cable car. Ride the cogwheel train up inside the mountain to Jungfraujoch, Europe\'s highest railway station at 3,454m.',
        activities: ['Jungfraujoch Sphinx Observatory', 'Ice Palace walk', 'Snow tubing on glacier', 'Overnight in Interlaken luxury hotel']
      },
      {
        day: 4,
        title: 'Zermatt & Matterhorn Glacier Paradise',
        description: 'Scenic train ride to car-free Zermatt. Board the highest 3S cableway to Matterhorn Glacier Paradise. Explore glacier crevices and admire the towering Matterhorn.',
        activities: ['Scenic train travel', 'Zermatt walking tour', 'Glacier Paradise cable car', 'Alpine spa evening']
      },
      {
        day: 5,
        title: 'Glacier Express Scenic Train to St. Moritz',
        description: 'Board the famous Glacier Express. Travel in the Excellence Class panorail car. Cross 291 bridges and go through 91 tunnels over 7 hours of breathtaking scenery.',
        activities: ['Glacier Express 7-hour journey', '5-course wine lunch on board', 'Check-in to St. Moritz luxury resort']
      },
      {
        day: 6,
        title: 'St. Moritz Lake Walk & Thermal Spas',
        description: 'Walk around Lake St. Moritz. Spend the afternoon soaking in warm, mineral-rich thermal waters overlooking snowy peaks.',
        activities: ['Lake walking tour', 'Thermal spa massage and baths', 'Farewell gala dinner']
      },
      {
        day: 7,
        title: 'Return to Zurich & Departure',
        description: 'Take the scenic Bernina Express link train back to Zurich Airport for your flight back home.',
        activities: ['Train to Zurich', 'Airport departure']
      }
    ],
    included: [
      'Roundtrip international flights to Zurich',
      '6 nights in premium 5-star Swiss Alpine resorts',
      'All Swiss Travel Pass 1st Class train tickets',
      'Glacier Express train with on-board wine lunch',
      'All mountain cable cars & Jungfraujoch tickets',
      'Daily breakfast and traditional fondue dinners'
    ],
    excluded: [
      'Ski gear rentals',
      'Personal tour guides (trains are self-guided with audio guides)',
      'Lunches'
    ]
  },
  {
    id: 'rome-amalfi-italy',
    title: 'Vatican Treasures & Amalfi Coast Sunsets',
    destination: 'Italy',
    durationDays: 8,
    durationNights: 7,
    price: 1690,
    originalPrice: 1990,
    rating: 4.85,
    reviewCount: 192,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531572753726-0ff349f548be?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Walk through history in Rome and relax in the beautiful cliffs of Positano and Amalfi. See the Colosseum, Vatican museums, taste original Neapolitan pizza, and sail to Capri Island.',
    featured: false,
    tags: ['Best Seller', 'Romantic'],
    flightDetails: {
      airline: 'ITA Airways',
      departureCity: 'Global Hubs',
      arrivalCity: 'Rome Fiumicino (FCO)',
      flightDuration: 'Variable',
      class: 'Economy Class'
    },
    hotelDetails: {
      name: 'Palazzo Manfredi (Rome) & Hotel Santa Caterina (Amalfi)',
      stars: 5,
      roomType: 'Colosseum View Double / Junior Suite Sea View',
      description: 'Luxury accommodation directly looking at the Colosseum in Rome, combined with cliffside elegance in Amalfi.',
      amenities: ['Colosseum views', 'Cliffside infinity pool', 'Private beach club access', 'Michelin-starred dining', 'Free WiFi']
    },
    meals: 'Half Board: Daily Italian breakfast, hand-stretched pizza making class, and dinners in romantic vineyards.',
    itinerary: [
      {
        day: 1,
        title: 'Benvenuti a Roma - Ancient Rome walking',
        description: 'Arrive in Rome, private Mercedes transfer to your hotel. Evening walk around Trevi Fountain and Spanish Steps.',
        activities: ['Airport transfer', 'Hotel check-in', 'Trevi Fountain wish making', 'Welcome pasta dinner']
      },
      {
        day: 2,
        title: 'Colosseum Dungeon & Vatican Museums VIP Tour',
        description: 'Get skip-the-line access to the Colosseum Underground and Arena Floor. In the afternoon, visit the Vatican Museums and stand in the Sistine Chapel.',
        activities: ['Colosseum underground tour', 'Vatican VIP private tour', 'Sistine Chapel viewing', 'Local Trattoria dinner']
      },
      {
        day: 3,
        title: 'Pizza Making Masterclass & Trastevere nightlife',
        description: 'Learn the secrets of Roman pizza from a master Pizzaiolo. Spend the evening exploring the Bohemian alleys of Trastevere.',
        activities: ['Pizza making class & lunch', 'Free afternoon', 'Trastevere evening bar crawl']
      },
      {
        day: 4,
        title: 'Pompeii Excavations & Amalfi Coast drive',
        description: 'Drive south. Stop at Pompeii for a guided tour of the ancient Roman city preserved by volcanic ash. Continue along the narrow curves of Amalfi drive.',
        activities: ['Pompeii private archeologist tour', 'Scenic Amalfi drive', 'Check-in cliffside hotel', 'Dinner on the terrace']
      },
      {
        day: 5,
        title: 'Capri Island Private Boat Excursion',
        description: 'Board a private Gozo boat to Capri. Sail around the Faraglioni rocks, swim in the Green Grotto, and take the chairlift up Mt. Solaro.',
        activities: ['Private boat charter', 'Swim in cave grottos', 'Capri town tour & Limoncello tasting', 'Gourmet dinner in Capri']
      },
      {
        day: 6,
        title: 'Positano Pastel Streets & Sunset',
        description: 'Spend the day in Positano. Walk the steep streets, shop for linen clothing and custom sandals, and watch the sun set over the cliff houses.',
        activities: ['Positano tour', 'Beach lounge access', 'Sunset drinks', 'Seafood dinner']
      },
      {
        day: 7,
        title: 'Amalfi Hiking: Path of the Gods',
        description: 'Hike the famous Path of the Gods high above the coastline. Enjoy a picnic lunch on the mountain with fresh mozzarella and cured meats.',
        activities: ['Guided cliff hike', 'Local farm picnic lunch', 'Spa treatment back at hotel', 'Farewell Italian feast']
      },
      {
        day: 8,
        title: 'Arrivederci Italia',
        description: 'Private transfer back to Rome Fiumicino Airport for your international flight home.',
        activities: ['Breakfast', 'Airport transfer']
      }
    ],
    included: [
      'Roundtrip international flights to Rome',
      '7 nights in 5-star premium hotels',
      'Daily breakfast, pizza class, and 4 dinners',
      'All VIP skip-the-line tours in Rome & Pompeii',
      'Private boat cruise to Capri Island',
      'All luxury road transfers'
    ],
    excluded: [
      'Blue Grotto rowboat entry fee (optional)',
      'Lunches not listed'
    ]
  },
  {
    id: 'bali-tropical-paradise',
    title: 'Exotic Escape: Bali Temples & Private Villa Pool',
    destination: 'Indonesia',
    durationDays: 8,
    durationNights: 7,
    price: 1350,
    originalPrice: 1650,
    rating: 4.78,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da9050393c2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Find inner peace and tropical adventures in Bali. Sleep in private pool villas in Ubud and beachfront luxury in Seminyak. Swing over rice terraces, hike volcanic craters, and see sacred temples.',
    featured: false,
    tags: ['Trending', 'Nature & Adventure'],
    flightDetails: {
      airline: 'Singapore Airlines',
      departureCity: 'Global Hubs',
      arrivalCity: 'Denpasar Bali (DPS)',
      flightDuration: 'Variable (includes Singapore layover)',
      class: 'Economy Class'
    },
    hotelDetails: {
      name: 'Maya Ubud Resort & W Bali Seminyak',
      stars: 5,
      roomType: 'Private Pool Forest Sanctuary Villa',
      description: 'Lush valley pool villas in Ubud, followed by high-energy beach club luxury at W Bali in Seminyak.',
      amenities: ['Private Pool', 'Forest Views & Beach Access', 'Yoga Pavilion', 'Full Spa and massages', 'Free WiFi']
    },
    meals: 'Full Board: Floating breakfasts, organic farm-to-table lunches, and seafood dinners on Jimbaran beach.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ubud Jungle Sanctuary',
        description: 'Arrive at Denpasar Airport, transfer to your private jungle villa in Ubud. Unwind with a complimentary Balinese head and neck massage.',
        activities: ['Airport pickup', 'Villa check-in', 'Welcome massage', 'Healthy organic dinner']
      },
      {
        day: 2,
        title: 'Tegalalang Rice Terraces & Sacred Monkey Forest',
        description: 'Walk through the emerald-green rice terraces of Tegalalang. Try the famous Bali Swing over the canopy. Walk through the Sacred Monkey Forest.',
        activities: ['Rice terrace walk', 'Bali swing photo session', 'Monkey Forest tour', 'Ubud Royal Palace visit']
      },
      {
        day: 3,
        title: 'Tirta Empul Holy Springs & Waterfall Tour',
        description: 'Participate in a purification ritual at Tirta Empul Holy Water Temple. Trek down to the spectacular Tegenungan Waterfall for a swim.',
        activities: ['Holy spring bathing ritual', 'Tegenungan waterfall swim', 'Balinese lunch at local cooperative', 'Woodcarving village visit']
      },
      {
        day: 4,
        title: 'Mount Batur Sunrise Volcano Trek',
        description: 'Wake up early for a guided sunrise trek up Mount Batur volcano. Enjoy breakfast cooked by volcanic steam at the summit. Soak in natural hot springs afterwards.',
        activities: ['Volcano sunrise hike (2:00 AM start)', 'Steam cooked breakfast', 'Toya Devasya hot springs', 'Relaxing afternoon spa']
      },
      {
        day: 5,
        title: 'Transfer to Seminyak - Beachfront Luxury',
        description: 'Drive down to Seminyak beach. Check in to W Bali. Watch the sunset from Potato Head Beach Club with custom drinks.',
        activities: ['Transfer to Seminyak', 'Beach check-in', 'Sunset beach club lounge', 'DJ & cocktail evening']
      },
      {
        day: 6,
        title: 'Nusa Penida Island Speedboat Day Trip',
        description: 'Take a speedboat to Nusa Penida. Visit the famous T-Rex cliff at Kelingking Beach, swim in Angel’s Billabong, and snorkel with giant manta rays.',
        activities: ['Speedboat cruise', 'Kelingking Beach hike', 'Broken Beach & Angel Billabong', 'Manta ray snorkeling']
      },
      {
        day: 7,
        title: 'Uluwatu Cliff Temple & Kecak Fire Dance',
        description: 'Visit the sea-cliff temple of Uluwatu. In the evening, watch the dramatic Kecak Fire Dance performed against the sunset. Enjoy a farewell seafood dinner right on the sand at Jimbaran Bay.',
        activities: ['Uluwatu temple tour', 'Kecak Fire Dance ticket', 'Jimbaran Bay seafood dinner']
      },
      {
        day: 8,
        title: 'Farewell Bali',
        description: 'Enjoy a floating pool breakfast before packing up. Private transfer to Denpasar Airport for your return flight.',
        activities: ['Floating pool breakfast', 'Airport transfer']
      }
    ],
    included: [
      'Roundtrip international flights on Singapore Airlines',
      '7 nights in 5-star private pool villas & beachfront resorts',
      'All meals (floating breakfasts, organic lunches, seafood dinners)',
      'Mount Batur volcano trek with mountain guide',
      'Nusa Penida island private day tour & speedboat tickets',
      'All tour entrance fees & 2 spa massage sessions'
    ],
    excluded: [
      'Alcoholic beverages at beach club VIP lounges',
      'Tips for private driver'
    ]
  },
  {
    id: 'santorini-sunset-athens',
    title: 'Grecian Odysseys: Athens Acropolis & Santorini Sunset',
    destination: 'Greece',
    durationDays: 7,
    durationNights: 6,
    price: 1550,
    originalPrice: 1800,
    rating: 4.82,
    reviewCount: 135,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608753239843-f66107386d52?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Walk in the footsteps of philosophers at the Parthenon in Athens, then fly to Santorini to stay in cliffside caves with infinity pools overlooking the volcanic caldera.',
    featured: false,
    tags: ['Best Seller', 'Romantic'],
    flightDetails: {
      airline: 'Aegean Airlines',
      departureCity: 'Global Hubs',
      arrivalCity: 'Athens (ATH) & Santorini (JTR)',
      flightDuration: 'Variable (includes short domestic flight)',
      class: 'Economy Class'
    },
    hotelDetails: {
      name: 'Electra Metropolis (Athens) & Canaves Oia Luxury Suites (Santorini)',
      stars: 5,
      roomType: 'Acropolis View Double / Caldera View Suite with Pool',
      description: 'Elegant modern hotel near Plaka in Athens, and ultra-luxury cave suites in Oia, Santorini.',
      amenities: ['Rooftop Acropolis view pool', 'Private outdoor plunge pool', 'Free WiFi', 'Volcano caldera views', 'Champagne bar']
    },
    meals: 'Half Board: Buffet breakfasts and romantic sunset dinners featuring fresh Greek salads, octopus, and local wines.',
    itinerary: [
      {
        day: 1,
        title: 'Arrive Athens - Acropolis view cocktails',
        description: 'Arrive in Athens, private luxury transfer to your hotel. Meet your group on the rooftop for drinks looking at the illuminated Acropolis.',
        activities: ['Airport pickup', 'Hotel check-in', 'Rooftop cocktail welcome', 'Greek tavern dinner']
      },
      {
        day: 2,
        title: 'Acropolis Parthenon & Ancient Agora Tour',
        description: 'Take a private guided walking tour of the Acropolis, Parthenon temple, and the Acropolis Museum. Wander the historic streets of Plaka.',
        activities: ['Acropolis guided tour', 'Museum skip-the-line entry', 'Plaka historic walking tour', 'Gyro food tasting']
      },
      {
        day: 3,
        title: 'Fly to Santorini - Caldera walk',
        description: 'Take a morning flight to Santorini. Check into your cave suite. Walk the cliffside path from Fira to Firostefani and watch the caldera sunset.',
        activities: ['Flight to Santorini', 'Cave suite check-in', 'Caldera rim walk', 'Traditional Greek dinner']
      },
      {
        day: 4,
        title: 'Santorini Volcano & Hot Springs Cruise',
        description: 'Board a luxury sailing catamaran. Cruise inside the flooded volcano caldera. Swim in warm sulfur hot springs, and enjoy a fresh BBQ meal on the boat.',
        activities: ['Catamaran cruise tour', 'Volcano hike & hot springs swim', 'Onboard BBQ lunch & wine', 'Sunset sailing photography']
      },
      {
        day: 5,
        title: 'Akrotiri Prehistoric City & Wine Tasting',
        description: 'Visit the excavations of Akrotiri, a Minoan bronze age city buried by volcanic ash. In the afternoon, visit a cliffside winery for Assyrtiko wine tasting.',
        activities: ['Akrotiri archaeological tour', 'Red Beach photo stop', 'Cliffside winery tour & 5-glass tasting']
      },
      {
        day: 6,
        title: 'Oia Village Sunset Exploration',
        description: 'Spend the day exploring Oia. Walk past the blue-domed churches and windmills. Watch the world\'s most famous sunset from the Byzantine castle ruins.',
        activities: ['Oia walking tour', 'Blue dome photo session', 'Sunset viewing at castle ruins', 'Farewell Mediterranean gala dinner']
      },
      {
        day: 7,
        title: 'Departure Greece',
        description: 'A final breakfast of Greek yogurt and honey. Private transfer to Santorini Airport for your flight back home.',
        activities: ['Breakfast', 'Airport transfer']
      }
    ],
    included: [
      'Roundtrip international flights & domestic connection to Santorini',
      '6 nights in premium 5-star hotels & cave suites',
      'Daily breakfast and catamaran BBQ lunch & 3 dinners',
      'Private Acropolis & Akrotiri guided tours',
      '5-glass volcanic wine tasting experience',
      'All private road transfers'
    ],
    excluded: [
      'Cable car in Fira (optional, €6)',
      'Lunches not specified'
    ]
  }
];
