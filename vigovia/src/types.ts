export type TimeOfDay = 'Morning' | 'Afternoon' | 'Evening' | 'Night'

export interface DaySegment {
  id: string
  label: TimeOfDay | string
  description: string
}

export interface DayPlan {
  id: string
  dayLabel: string
  dateLabel: string
  headline: string
  tagline: string
  imageUrl: string
  segments: DaySegment[]
  additionalNotes?: string
}

export interface FlightSegment {
  id: string
  dateLabel: string
  airline: string
  route: string
  note?: string
}

export interface HotelBooking {
  id: string
  city: string
  checkIn: string
  checkOut: string
  nights: string
  hotelName: string
}

export interface ImportantNote {
  id: string
  point: string
  details: string
}

export interface ServiceScope {
  id: string
  service: string
  details: string
}

export interface InclusionItem {
  id: string
  category: string
  count: string
  details: string
  status: string
}

export interface ActivityEntry {
  id: string
  city: string
  activity: string
  type: string
  timeRequired: string
}

export interface Installment {
  id: string
  label: string
  amount: string
  dueDate: string
  note?: string
}

export interface PaymentPlan {
  totalAmount: string
  tcs: string
  installments: Installment[]
}

export interface VisaDetails {
  type: string
  validity: string
  processingDate: string
  note?: string
}

export interface ContactInfo {
  companyName: string
  address: string
  phone: string
  email: string
  cin?: string
  website?: string
  tagline: string
}

export interface TripOverview {
  travelerName: string
  tripTitle: string
  durationLabel: string
  departureCity: string
  departureDate: string
  arrivalDate: string
  destination: string
  arrivalCity: string
  travelerCount: number
  brandLine: string
}

export interface ItineraryData {
  overview: TripOverview
  days: DayPlan[]
  flights: FlightSegment[]
  hotels: HotelBooking[]
  notes: ImportantNote[]
  services: ServiceScope[]
  inclusions: InclusionItem[]
  activities: ActivityEntry[]
  paymentPlan: PaymentPlan
  visa: VisaDetails
  contact: ContactInfo
}
