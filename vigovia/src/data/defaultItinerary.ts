import type { ItineraryData } from '../types'

export const defaultItinerary: ItineraryData = {
  overview: {
    travelerName: 'Rahul',
    tripTitle: 'Singapore Itinerary',
    durationLabel: '4 Days 3 Nights',
    departureCity: 'Mumbai',
    departureDate: '31/10/2025',
    arrivalDate: '01/11/2025',
    destination: 'Singapore',
    arrivalCity: 'Singapore',
    travelerCount: 4,
    brandLine: 'Plan.Pack.Go!'
  },
  days: [
    {
      id: 'day-1',
      dayLabel: 'Day 1',
      dateLabel: '27th November',
      headline: 'Arrival in Singapore & City Exploration',
      tagline: 'Arrive in Singapore. Transfer from airport to hotel.',
      imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
      segments: [
        {
          id: 'day-1-morning',
          label: 'Morning',
          description: 'Arrive in Singapore. Transfer from airport to hotel.'
        },
        {
          id: 'day-1-afternoon',
          label: 'Afternoon',
          description:
            'Check-in into your hotel. Visit Sentosa Island: Sky Park (2-3 Hours), Wings of Time, S.E.A Aquarium. Stroll along Marina Bay Waterfront Promenade or Helix Bridge.'
        },
        {
          id: 'day-1-evening',
          label: 'Evening',
          description:
            'Explore Gardens by the Bay (including Super Tree Grove) (3-4 Hours).'
        }
      ]
    },
    {
      id: 'day-2',
      dayLabel: 'Day 2',
      dateLabel: '27th November',
      headline: 'Singapore City Excursion',
      tagline: 'Discover iconic sights across the city.',
      imageUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
      segments: [
        {
          id: 'day-2-morning',
          label: 'Morning',
          description: 'Arrive in Singapore. Transfer from airport to hotel.'
        },
        {
          id: 'day-2-afternoon',
          label: 'Afternoon',
          description:
            'Check-in into your hotel. Visit Sentosa Island: Sky Park (2-3 Hours), Wings of Time, S.E.A Aquarium. Stroll along Marina Bay Waterfront Promenade or Helix Bridge.'
        },
        {
          id: 'day-2-evening',
          label: 'Evening',
          description:
            'Explore Gardens by the Bay (including Super Tree Grove) (3-4 Hours).'
        }
      ]
    },
    {
      id: 'day-3',
      dayLabel: 'Day 3',
      dateLabel: '27th November',
      headline: 'Gardens by the Bay & Marina Bay',
      tagline: 'Immerse yourself in lush greenery and skyline views.',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      segments: [
        {
          id: 'day-3-morning',
          label: 'Morning',
          description: 'Arrive in Singapore. Transfer from airport to hotel.'
        },
        {
          id: 'day-3-afternoon',
          label: 'Afternoon',
          description:
            'Check-in into your hotel. Visit Sentosa Island: Sky Park (2-3 Hours), Wings of Time, S.E.A Aquarium. Stroll along Marina Bay Waterfront Promenade or Helix Bridge.'
        },
        {
          id: 'day-3-evening',
          label: 'Evening',
          description:
            'Explore Gardens by the Bay (including Super Tree Grove) (3-4 Hours).'
        }
      ]
    },
    {
      id: 'day-4',
      dayLabel: 'Day 4',
      dateLabel: '27th November',
      headline: 'Arrive in Genting and Relax',
      tagline: 'Leisure day to unwind and explore at your pace.',
      imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
      segments: [
        {
          id: 'day-4-morning',
          label: 'Morning',
          description: 'Arrive in Singapore. Transfer from airport to hotel.'
        },
        {
          id: 'day-4-afternoon',
          label: 'Afternoon',
          description:
            'Check-in into your hotel. Visit Marina Bay Sands Sky Park (2-3 Hours). Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.'
        },
        {
          id: 'day-4-evening',
          label: 'Evening',
          description:
            'Explore Gardens by the Bay (including Super Tree Grove) (3-4 Hours).'
        }
      ]
    }
  ],
  flights: [
    {
      id: 'flight-1',
      dateLabel: 'Thu 10 Jan’24',
      airline: 'Fly Air India (AX-123)',
      route: 'From Delhi (DEL) To Singapore (SIN)'
    },
    {
      id: 'flight-2',
      dateLabel: 'Thu 10 Jan’24',
      airline: 'Fly Air India (AX-123)',
      route: 'From Delhi (DEL) To Singapore (SIN)'
    },
    {
      id: 'flight-3',
      dateLabel: 'Thu 10 Jan’24',
      airline: 'Fly Air India (AX-123)',
      route: 'From Delhi (DEL) To Singapore (SIN)'
    },
    {
      id: 'flight-4',
      dateLabel: 'Thu 10 Jan’24',
      airline: 'Fly Air India (AX-123)',
      route: 'From Delhi (DEL) To Singapore (SIN)'
    }
  ],
  hotels: [
    {
      id: 'hotel-1',
      city: 'Singapore',
      checkIn: '24/02/2024',
      checkOut: '24/02/2024',
      nights: '2',
      hotelName: 'Super Townhouse Oak Vasth (Formerly Blu Diamond)'
    },
    {
      id: 'hotel-2',
      city: 'Singapore',
      checkIn: '24/02/2024',
      checkOut: '24/02/2024',
      nights: '2',
      hotelName: 'Super Townhouse Oak Vasth (Formerly Blu Diamond)'
    },
    {
      id: 'hotel-3',
      city: 'Singapore',
      checkIn: '24/02/2024',
      checkOut: '24/02/2024',
      nights: '2',
      hotelName: 'Super Townhouse Oak Vasth (Formerly Blu Diamond)'
    },
    {
      id: 'hotel-4',
      city: 'Singapore',
      checkIn: '24/02/2024',
      checkOut: '24/02/2024',
      nights: '2',
      hotelName: 'Super Townhouse Oak Vasth (Formerly Blu Diamond)'
    }
  ],
  notes: [
    {
      id: 'note-1',
      point: 'Airlines Standard Policy',
      details:
        'In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.'
    },
    {
      id: 'note-2',
      point: 'Flight/Hotel Cancellation',
      details:
        'In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.'
    },
    {
      id: 'note-3',
      point: 'Trip Insurance',
      details:
        'In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.'
    },
    {
      id: 'note-4',
      point: 'Hotel Check-In & Check-Out',
      details:
        'In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.'
    },
    {
      id: 'note-5',
      point: 'Visa Rejection',
      details:
        'In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any cost.'
    }
  ],
  services: [
    {
      id: 'service-1',
      service: 'Flight Tickets and Hotel Vouchers',
      details: 'Delivered 3 days post full payment.'
    },
    {
      id: 'service-2',
      service: 'Web Check-In',
      details: 'Boarding pass delivery via email/WhatsApp.'
    },
    {
      id: 'service-3',
      service: 'Support',
      details: 'Chat support – response time 4 hours.'
    },
    {
      id: 'service-4',
      service: 'Cancellation Support',
      details: 'Provided.'
    },
    {
      id: 'service-5',
      service: 'Trip Support',
      details: 'Response time: 5 minutes.'
    }
  ],
  inclusions: [
    {
      id: 'inclusion-1',
      category: 'Flight',
      count: '2',
      details: 'All flights mentioned',
      status: 'Awaiting confirmation'
    },
    {
      id: 'inclusion-2',
      category: 'Tourist Tax',
      count: '2',
      details: 'Votel (Singapore), Goldcoast (Sydney), Mercure (Cairns), Novatel (Gold Coast), Holiday Inn (Melbourne)',
      status: 'Awaiting confirmation'
    },
    {
      id: 'inclusion-3',
      category: 'Hotel',
      count: '2',
      details: 'Airport to Hotel Transfers, Day Trips if any',
      status: 'Included'
    }
  ],
  activities: [
    {
      id: 'activity-1',
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Nature/Sightseeing',
      timeRequired: '2-3 Hours'
    },
    {
      id: 'activity-2',
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airline Standard',
      timeRequired: '3 Hours'
    },
    {
      id: 'activity-3',
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airline Standard',
      timeRequired: '2-3 Hours'
    },
    {
      id: 'activity-4',
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airline Standard',
      timeRequired: '2-3 Hours'
    },
    {
      id: 'activity-5',
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airline Standard',
      timeRequired: '2-3 Hours'
    },
    {
      id: 'activity-6',
      city: 'Rio De Janeiro',
      activity: 'Sydney Harbour Cruise & Taronga Zoo',
      type: 'Airline Standard',
      timeRequired: '2-3 Hours'
    }
  ],
  paymentPlan: {
    totalAmount: '₹ 9,00,000 For 3 Pax (Inclusive Of GST)',
    tcs: 'Not Collected',
    installments: [
      {
        id: 'installment-1',
        label: 'Installment 1',
        amount: '₹2,50,000',
        dueDate: 'Initial Payment'
      },
      {
        id: 'installment-2',
        label: 'Installment 2',
        amount: '₹4,00,000',
        dueDate: 'Post Visa Approval'
      },
      {
        id: 'installment-3',
        label: 'Installment 3',
        amount: 'Remaining',
        dueDate: '20 Days Before Departure'
      }
    ]
  },
  visa: {
    type: '123456',
    validity: '123456',
    processingDate: '123456'
  },
  contact: {
    companyName: 'Vigovia Tech Pvt. Ltd',
    address: 'Registered Office: HD-19 Qimbusar Hills, Links Business Park, Karnataka, India.',
    phone: '+91-9504061112',
    email: 'trips@vigovia.com',
    cin: 'U07110KA2024PTC019980',
    tagline: 'PLAN.PACK.GO!'
  }
}
