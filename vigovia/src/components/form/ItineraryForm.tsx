import type { ReactNode } from 'react'
import type {
  ActivityEntry,
  DayPlan,
  DaySegment,
  FlightSegment,
  HotelBooking,
  ImportantNote,
  InclusionItem,
  Installment,
  ItineraryData,
  ServiceScope
} from '../../types'
import { createId } from '../../utils/id'

interface ItineraryFormProps {
  data: ItineraryData
  onChange: (next: ItineraryData) => void
}

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200'
const textareaClass =
  'w-full min-h-[90px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200'

const SectionHeading = ({ title, description }: { title: string; description?: string }) => (
  <div className="space-y-1">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    {description ? <p className="text-sm text-slate-500">{description}</p> : null}
  </div>
)

const FieldLabel = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
    <span>{label}</span>
    {children}
  </label>
)

export const ItineraryForm = ({ data, onChange }: ItineraryFormProps) => {
  const updateItinerary = (updater: (draft: ItineraryData) => ItineraryData) => {
    onChange(updater(data))
  }

  return (
    <div className="space-y-8 ">
      <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur">
        <SectionHeading title="Trip Overview" description="Key trip details shown in the hero banner." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <FieldLabel label="Traveler Name">
            <input
              className={inputClass}
              value={data.overview.travelerName}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, travelerName: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Trip Title">
            <input
              className={inputClass}
              value={data.overview.tripTitle}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, tripTitle: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Duration Label">
            <input
              className={inputClass}
              value={data.overview.durationLabel}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, durationLabel: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Brand Line">
            <input
              className={inputClass}
              value={data.overview.brandLine}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, brandLine: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Departure City">
            <input
              className={inputClass}
              value={data.overview.departureCity}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, departureCity: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Departure Date">
            <input
              className={inputClass}
              value={data.overview.departureDate}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, departureDate: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Arrival Date">
            <input
              className={inputClass}
              value={data.overview.arrivalDate}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, arrivalDate: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Destination">
            <input
              className={inputClass}
              value={data.overview.destination}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, destination: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Arrival City">
            <input
              className={inputClass}
              value={data.overview.arrivalCity}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: { ...draft.overview, arrivalCity: event.target.value }
                }))
              }
            />
          </FieldLabel>
          <FieldLabel label="Traveler Count">
            <input
              className={inputClass}
              type="number"
              value={data.overview.travelerCount}
              onChange={(event) =>
                updateItinerary((draft) => ({
                  ...draft,
                  overview: {
                    ...draft.overview,
                    travelerCount: Number.parseInt(event.target.value || '0', 10)
                  }
                }))
              }
            />
          </FieldLabel>
        </div>
      </section>

      <DaysSection data={data} updateItinerary={updateItinerary} />
      <FlightsSection data={data} updateItinerary={updateItinerary} />
      <HotelsSection data={data} updateItinerary={updateItinerary} />
      <NotesSection data={data} updateItinerary={updateItinerary} />
      <ServicesSection data={data} updateItinerary={updateItinerary} />
      <InclusionsSection data={data} updateItinerary={updateItinerary} />
      <ActivitiesSection data={data} updateItinerary={updateItinerary} />
      <PaymentSection data={data} updateItinerary={updateItinerary} />
      <VisaSection data={data} updateItinerary={updateItinerary} />
      <ContactSection data={data} updateItinerary={updateItinerary} />
    </div>
  )
}

type Updater = (draft: ItineraryData) => ItineraryData

type SectionProps = {
  data: ItineraryData
  updateItinerary: (updater: Updater) => void
}

const DaysSection = ({ data, updateItinerary }: SectionProps) => {
  const addDay = () => {
    const newDay: DayPlan = {
      id: createId(),
      dayLabel: `Day ${data.days.length + 1}`,
      dateLabel: 'Date label',
      headline: 'New day highlight',
      tagline: 'Add a short description for this day.',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      segments: [
        { id: createId(), label: 'Morning', description: 'Describe morning plans.' },
        { id: createId(), label: 'Afternoon', description: 'Describe afternoon plans.' },
        { id: createId(), label: 'Evening', description: 'Describe evening plans.' }
      ]
    }

    updateItinerary((draft) => ({ ...draft, days: [...draft.days, newDay] }))
  }

  const updateDayField = (dayId: string, field: keyof DayPlan, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      days: draft.days.map((day) => (day.id === dayId ? { ...day, [field]: value } : day))
    }))
  }

  const removeDay = (dayId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      days: draft.days.filter((day) => day.id !== dayId)
    }))
  }

  const addSegment = (dayId: string) => {
    const newSegment: DaySegment = {
      id: createId(),
      label: 'Morning',
      description: 'Add details for this segment.'
    }

    updateItinerary((draft) => ({
      ...draft,
      days: draft.days.map((day) =>
        day.id === dayId ? { ...day, segments: [...day.segments, newSegment] } : day
      )
    }))
  }

  const updateSegment = (dayId: string, segmentId: string, field: keyof DaySegment, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      days: draft.days.map((day) =>
        day.id === dayId
          ? {
              ...day,
              segments: day.segments.map((segment) =>
                segment.id === segmentId ? { ...segment, [field]: value } : segment
              )
            }
          : day
      )
    }))
  }

  const removeSegment = (dayId: string, segmentId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      days: draft.days.map((day) =>
        day.id === dayId
          ? { ...day, segments: day.segments.filter((segment) => segment.id !== segmentId) }
          : day
      )
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading
          title="Daily Schedule"
          description="Control the day cards shown in the PDF itinerary."
        />
        <button
          type="button"
          onClick={addDay}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Day
        </button>
      </div>

      <div className="mt-5 space-y-6">
        {data.days.map((day, index) => (
          <div key={day.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-base font-semibold text-slate-900">
                {day.dayLabel || `Day ${index + 1}`}
              </h4>
              <button
                type="button"
                onClick={() => removeDay(day.id)}
                className="self-start rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Day
              </button>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <FieldLabel label="Day Label">
                <input
                  className={inputClass}
                  value={day.dayLabel}
                  onChange={(event) => updateDayField(day.id, 'dayLabel', event.target.value)}
                />
              </FieldLabel>
              <FieldLabel label="Date Label">
                <input
                  className={inputClass}
                  value={day.dateLabel}
                  onChange={(event) => updateDayField(day.id, 'dateLabel', event.target.value)}
                />
              </FieldLabel>
              <FieldLabel label="Headline">
                <input
                  className={inputClass}
                  value={day.headline}
                  onChange={(event) => updateDayField(day.id, 'headline', event.target.value)}
                />
              </FieldLabel>
              <FieldLabel label="Tagline">
                <input
                  className={inputClass}
                  value={day.tagline}
                  onChange={(event) => updateDayField(day.id, 'tagline', event.target.value)}
                />
              </FieldLabel>
              <FieldLabel label="Image URL">
                <input
                  className={inputClass}
                  value={day.imageUrl}
                  onChange={(event) => updateDayField(day.id, 'imageUrl', event.target.value)}
                />
              </FieldLabel>
              <FieldLabel label="Additional Notes (optional)">
                <input
                  className={inputClass}
                  value={day.additionalNotes ?? ''}
                  onChange={(event) => updateDayField(day.id, 'additionalNotes', event.target.value)}
                />
              </FieldLabel>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
                  Segments
                </h5>
                <button
                  type="button"
                  onClick={() => addSegment(day.id)}
                  className="rounded-full border border-indigo-200 px-3 py-1 text-xs font-medium text-indigo-600 transition hover:bg-indigo-50"
                >
                  + Add Segment
                </button>
              </div>

              {day.segments.map((segment) => (
                <div
                  key={segment.id}
                  className="grid gap-3 rounded-xl border border-slate-100 bg-indigo-50/60 p-4 sm:grid-cols-[140px_1fr]"
                >
                  <FieldLabel label="Label">
                    <input
                      className={inputClass}
                      value={segment.label}
                      onChange={(event) =>
                        updateSegment(day.id, segment.id, 'label', event.target.value)
                      }
                    />
                  </FieldLabel>
                  <div className="flex flex-col gap-2">
                    <FieldLabel label="Description">
                      <textarea
                        className={textareaClass}
                        value={segment.description}
                        onChange={(event) =>
                          updateSegment(day.id, segment.id, 'description', event.target.value)
                        }
                      />
                    </FieldLabel>
                    <button
                      type="button"
                      onClick={() => removeSegment(day.id, segment.id)}
                      className="self-end rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const FlightsSection = ({ data, updateItinerary }: SectionProps) => {
  const addFlight = () => {
    const newFlight: FlightSegment = {
      id: createId(),
      dateLabel: 'Date',
      airline: 'Airline (Flight No)',
      route: 'From Origin (AAA) To Destination (BBB)'
    }

    updateItinerary((draft) => ({ ...draft, flights: [...draft.flights, newFlight] }))
  }

  const updateFlight = (flightId: string, field: keyof FlightSegment, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      flights: draft.flights.map((flight) =>
        flight.id === flightId ? { ...flight, [field]: value } : flight
      )
    }))
  }

  const removeFlight = (flightId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      flights: draft.flights.filter((flight) => flight.id !== flightId)
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Flight Summary" description="Update flight legs and notes." />
        <button
          type="button"
          onClick={addFlight}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Flight
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {data.flights.map((flight) => (
          <div key={flight.id} className="grid gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 sm:grid-cols-3">
            <FieldLabel label="Date Label">
              <input
                className={inputClass}
                value={flight.dateLabel}
                onChange={(event) => updateFlight(flight.id, 'dateLabel', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Airline / Flight">
              <input
                className={inputClass}
                value={flight.airline}
                onChange={(event) => updateFlight(flight.id, 'airline', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Route">
              <input
                className={inputClass}
                value={flight.route}
                onChange={(event) => updateFlight(flight.id, 'route', event.target.value)}
              />
            </FieldLabel>
            <div className="sm:col-span-3">
              <FieldLabel label="Additional Note">
                <input
                  className={inputClass}
                  value={flight.note || ''}
                  onChange={(event) => updateFlight(flight.id, 'note', event.target.value)}
                />
              </FieldLabel>
            </div>
            <button
              type="button"
              onClick={() => removeFlight(flight.id)}
              className="sm:col-span-3 inline-flex justify-end text-xs font-semibold uppercase text-rose-500"
            >
              Remove Flight
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

const HotelsSection = ({ data, updateItinerary }: SectionProps) => {
  const addHotel = () => {
    const newHotel: HotelBooking = {
      id: createId(),
      city: 'City',
      checkIn: 'DD/MM/YYYY',
      checkOut: 'DD/MM/YYYY',
      nights: '1',
      hotelName: 'Hotel name'
    }

    updateItinerary((draft) => ({ ...draft, hotels: [...draft.hotels, newHotel] }))
  }

  const updateHotel = (hotelId: string, field: keyof HotelBooking, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      hotels: draft.hotels.map((hotel) =>
        hotel.id === hotelId ? { ...hotel, [field]: value } : hotel
      )
    }))
  }

  const removeHotel = (hotelId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      hotels: draft.hotels.filter((hotel) => hotel.id !== hotelId)
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Hotel Bookings" description="Control the hotel table entries." />
        <button
          type="button"
          onClick={addHotel}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Hotel
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {data.hotels.map((hotel) => (
          <div key={hotel.id} className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:grid-cols-5">
            <FieldLabel label="City">
              <input
                className={inputClass}
                value={hotel.city}
                onChange={(event) => updateHotel(hotel.id, 'city', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Check In">
              <input
                className={inputClass}
                value={hotel.checkIn}
                onChange={(event) => updateHotel(hotel.id, 'checkIn', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Check Out">
              <input
                className={inputClass}
                value={hotel.checkOut}
                onChange={(event) => updateHotel(hotel.id, 'checkOut', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Nights">
              <input
                className={inputClass}
                value={hotel.nights}
                onChange={(event) => updateHotel(hotel.id, 'nights', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Hotel Name">
              <input
                className={inputClass}
                value={hotel.hotelName}
                onChange={(event) => updateHotel(hotel.id, 'hotelName', event.target.value)}
              />
            </FieldLabel>
            <div className="sm:col-span-5 flex justify-end">
              <button
                type="button"
                onClick={() => removeHotel(hotel.id)}
                className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Hotel
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const NotesSection = ({ data, updateItinerary }: SectionProps) => {
  const addNote = () => {
    const newNote: ImportantNote = {
      id: createId(),
      point: 'Policy name',
      details: 'Add a note detailing the policy.'
    }

    updateItinerary((draft) => ({ ...draft, notes: [...draft.notes, newNote] }))
  }

  const updateNote = (noteId: string, field: keyof ImportantNote, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      notes: draft.notes.map((note) => (note.id === noteId ? { ...note, [field]: value } : note))
    }))
  }

  const removeNote = (noteId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      notes: draft.notes.filter((note) => note.id !== noteId)
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Important Notes" description="Edit fine-print policies and reminders." />
        <button
          type="button"
          onClick={addNote}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Note
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {data.notes.map((note) => (
          <div key={note.id} className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:grid-cols-2">
            <FieldLabel label="Point">
              <input
                className={inputClass}
                value={note.point}
                onChange={(event) => updateNote(note.id, 'point', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Details">
              <textarea
                className={textareaClass}
                value={note.details}
                onChange={(event) => updateNote(note.id, 'details', event.target.value)}
              />
            </FieldLabel>
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => removeNote(note.id)}
                className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Note
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const ServicesSection = ({ data, updateItinerary }: SectionProps) => {
  const addService = () => {
    const newService: ServiceScope = {
      id: createId(),
      service: 'Service name',
      details: 'Describe the service scope.'
    }

    updateItinerary((draft) => ({ ...draft, services: [...draft.services, newService] }))
  }

  const updateService = (serviceId: string, field: keyof ServiceScope, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      services: draft.services.map((service) =>
        service.id === serviceId ? { ...service, [field]: value } : service
      )
    }))
  }

  const removeService = (serviceId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      services: draft.services.filter((service) => service.id !== serviceId)
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Scope of Service" description="Control delivery promises and support details." />
        <button
          type="button"
          onClick={addService}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Service
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {data.services.map((service) => (
          <div key={service.id} className="grid gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 sm:grid-cols-2">
            <FieldLabel label="Service">
              <input
                className={inputClass}
                value={service.service}
                onChange={(event) => updateService(service.id, 'service', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Details">
              <textarea
                className={textareaClass}
                value={service.details}
                onChange={(event) => updateService(service.id, 'details', event.target.value)}
              />
            </FieldLabel>
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => removeService(service.id)}
                className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const InclusionsSection = ({ data, updateItinerary }: SectionProps) => {
  const addInclusion = () => {
    const newInclusion: InclusionItem = {
      id: createId(),
      category: 'Category',
      count: '1',
      details: 'Describe the inclusion.',
      status: 'Status note'
    }

    updateItinerary((draft) => ({ ...draft, inclusions: [...draft.inclusions, newInclusion] }))
  }

  const updateInclusion = (inclusionId: string, field: keyof InclusionItem, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      inclusions: draft.inclusions.map((item) =>
        item.id === inclusionId ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeInclusion = (inclusionId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      inclusions: draft.inclusions.filter((item) => item.id !== inclusionId)
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Inclusion Summary" description="Edit inclusions or exclusions." />
        <button
          type="button"
          onClick={addInclusion}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Item
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {data.inclusions.map((item) => (
          <div key={item.id} className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:grid-cols-4">
            <FieldLabel label="Category">
              <input
                className={inputClass}
                value={item.category}
                onChange={(event) => updateInclusion(item.id, 'category', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Count">
              <input
                className={inputClass}
                value={item.count}
                onChange={(event) => updateInclusion(item.id, 'count', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Details">
              <textarea
                className={textareaClass}
                value={item.details}
                onChange={(event) => updateInclusion(item.id, 'details', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Status / Comments">
              <input
                className={inputClass}
                value={item.status}
                onChange={(event) => updateInclusion(item.id, 'status', event.target.value)}
              />
            </FieldLabel>
            <div className="sm:col-span-4 flex justify-end">
              <button
                type="button"
                onClick={() => removeInclusion(item.id)}
                className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const ActivitiesSection = ({ data, updateItinerary }: SectionProps) => {
  const addActivity = () => {
    const newActivity: ActivityEntry = {
      id: createId(),
      city: 'City',
      activity: 'Activity details',
      type: 'Activity type',
      timeRequired: '2-3 Hours'
    }

    updateItinerary((draft) => ({ ...draft, activities: [...draft.activities, newActivity] }))
  }

  const updateActivity = (activityId: string, field: keyof ActivityEntry, value: string) => {
    updateItinerary((draft) => ({
      ...draft,
      activities: draft.activities.map((activity) =>
        activity.id === activityId ? { ...activity, [field]: value } : activity
      )
    }))
  }

  const removeActivity = (activityId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      activities: draft.activities.filter((activity) => activity.id !== activityId)
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading title="Activity Table" description="Manage the city-wise activity reference table." />
        <button
          type="button"
          onClick={addActivity}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-indigo-500"
        >
          + Add Activity
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {data.activities.map((activity) => (
          <div key={activity.id} className="grid gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 sm:grid-cols-4">
            <FieldLabel label="City">
              <input
                className={inputClass}
                value={activity.city}
                onChange={(event) => updateActivity(activity.id, 'city', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Activity">
              <textarea
                className={textareaClass}
                value={activity.activity}
                onChange={(event) => updateActivity(activity.id, 'activity', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Type">
              <input
                className={inputClass}
                value={activity.type}
                onChange={(event) => updateActivity(activity.id, 'type', event.target.value)}
              />
            </FieldLabel>
            <FieldLabel label="Time Required">
              <input
                className={inputClass}
                value={activity.timeRequired}
                onChange={(event) => updateActivity(activity.id, 'timeRequired', event.target.value)}
              />
            </FieldLabel>
            <div className="sm:col-span-4 flex justify-end">
              <button
                type="button"
                onClick={() => removeActivity(activity.id)}
                className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Activity
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const PaymentSection = ({ data, updateItinerary }: SectionProps) => {
  const addInstallment = () => {
    const newInstallment: Installment = {
      id: createId(),
      label: `Installment ${data.paymentPlan.installments.length + 1}`,
      amount: '₹0',
      dueDate: 'Due date',
      note: ''
    }

    updateItinerary((draft) => ({
      ...draft,
      paymentPlan: {
        ...draft.paymentPlan,
        installments: [...draft.paymentPlan.installments, newInstallment]
      }
    }))
  }

  const updateInstallment = (
    installmentId: string,
    field: keyof Installment,
    value: string
  ) => {
    updateItinerary((draft) => ({
      ...draft,
      paymentPlan: {
        ...draft.paymentPlan,
        installments: draft.paymentPlan.installments.map((installment) =>
          installment.id === installmentId ? { ...installment, [field]: value } : installment
        )
      }
    }))
  }

  const removeInstallment = (installmentId: string) => {
    updateItinerary((draft) => ({
      ...draft,
      paymentPlan: {
        ...draft.paymentPlan,
        installments: draft.paymentPlan.installments.filter(
          (installment) => installment.id !== installmentId
        )
      }
    }))
  }

  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
      <SectionHeading
        title="Payment Plan"
        description="Configure total amount, TCS information, and installment schedule."
      />

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FieldLabel label="Total Amount">
          <input
            className={inputClass}
            value={data.paymentPlan.totalAmount}
            onChange={(event) =>
              updateItinerary((draft) => ({
                ...draft,
                paymentPlan: { ...draft.paymentPlan, totalAmount: event.target.value }
              }))
            }
          />
        </FieldLabel>
        <FieldLabel label="TCS">
          <input
            className={inputClass}
            value={data.paymentPlan.tcs}
            onChange={(event) =>
              updateItinerary((draft) => ({
                ...draft,
                paymentPlan: { ...draft.paymentPlan, tcs: event.target.value }
              }))
            }
          />
        </FieldLabel>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Installments
          </h4>
          <button
            type="button"
            onClick={addInstallment}
            className="rounded-full border border-indigo-200 px-3 py-1 text-xs font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            + Add Installment
          </button>
        </div>

        {data.paymentPlan.installments.map((installment) => (
          <div key={installment.id} className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:grid-cols-4">
            <FieldLabel label="Label">
              <input
                className={inputClass}
                value={installment.label}
                onChange={(event) =>
                  updateInstallment(installment.id, 'label', event.target.value)
                }
              />
            </FieldLabel>
            <FieldLabel label="Amount">
              <input
                className={inputClass}
                value={installment.amount}
                onChange={(event) =>
                  updateInstallment(installment.id, 'amount', event.target.value)
                }
              />
            </FieldLabel>
            <FieldLabel label="Due Date / Trigger">
              <input
                className={inputClass}
                value={installment.dueDate}
                onChange={(event) =>
                  updateInstallment(installment.id, 'dueDate', event.target.value)
                }
              />
            </FieldLabel>
            <FieldLabel label="Note (optional)">
              <input
                className={inputClass}
                value={installment.note || ''}
                onChange={(event) =>
                  updateInstallment(installment.id, 'note', event.target.value)
                }
              />
            </FieldLabel>
            <div className="sm:col-span-4 flex justify-end">
              <button
                type="button"
                onClick={() => removeInstallment(installment.id)}
                className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase text-rose-500 transition hover:bg-rose-50"
              >
                Remove Installment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const VisaSection = ({ data, updateItinerary }: SectionProps) => (
  <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
    <SectionHeading title="Visa Details" description="Update visa information block." />
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      <FieldLabel label="Visa Type">
        <input
          className={inputClass}
          value={data.visa.type}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              visa: { ...draft.visa, type: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="Validity">
        <input
          className={inputClass}
          value={data.visa.validity}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              visa: { ...draft.visa, validity: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="Processing Date">
        <input
          className={inputClass}
          value={data.visa.processingDate}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              visa: { ...draft.visa, processingDate: event.target.value }
            }))
          }
        />
      </FieldLabel>
    </div>
  </section>
)

const ContactSection = ({ data, updateItinerary }: SectionProps) => (
  <section className="rounded-3xl bg-white/90 p-6 shadow-card backdrop-blur max-h-screen overflow-y-auto">
    <SectionHeading title="Contact & Footer" description="Company details displayed in the footer." />
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <FieldLabel label="Company Name">
        <input
          className={inputClass}
          value={data.contact.companyName}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              contact: { ...draft.contact, companyName: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="Tagline">
        <input
          className={inputClass}
          value={data.contact.tagline}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              contact: { ...draft.contact, tagline: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="Address">
        <textarea
          className={textareaClass}
          value={data.contact.address}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              contact: { ...draft.contact, address: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="Phone">
        <input
          className={inputClass}
          value={data.contact.phone}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              contact: { ...draft.contact, phone: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="Email">
        <input
          className={inputClass}
          value={data.contact.email}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              contact: { ...draft.contact, email: event.target.value }
            }))
          }
        />
      </FieldLabel>
      <FieldLabel label="CIN / Registration">
        <input
          className={inputClass}
          value={data.contact.cin || ''}
          onChange={(event) =>
            updateItinerary((draft) => ({
              ...draft,
              contact: { ...draft.contact, cin: event.target.value }
            }))
          }
        />
      </FieldLabel>
    </div>
  </section>
)
