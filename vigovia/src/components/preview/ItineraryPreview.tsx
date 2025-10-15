import { forwardRef } from 'react'
import type { ForwardedRef, ReactNode } from 'react'
import type { ItineraryData } from '../../types'

interface ItineraryPreviewProps {
  data: ItineraryData
}

const infoItems = [
  { label: 'Departure From', key: 'departureCity' },
  { label: 'Departure', key: 'departureDate' },
  { label: 'Arrival', key: 'arrivalDate' },
  { label: 'Destination', key: 'destination' },
  { label: 'No. of Travellers', key: 'travelerCount' }
] as const

const ItineraryPreviewComponent = ({ data }: ItineraryPreviewProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className="mx-auto flex w-full max-w-[940px] flex-col gap-8 rounded-[48px] border border-[#ece8ff] bg-white p-8 text-[#1f1247]"
  >
    <HeroSection data={data} />
    <DaysSection data={data} />
    <FlightsSection data={data} />
    <HotelsSection data={data} />
    <NotesSection data={data} />
    <ScopeSection data={data} />
    <InclusionSection data={data} />
    <ActivitiesSection data={data} />
    <PaymentSection data={data} />
    <VisaSection data={data} />
    <FooterSection data={data} />
  </div>
)

const HeroSection = ({ data }: ItineraryPreviewProps) => (
  <div className="overflow-hidden rounded-[36px]">
    <div className="bg-gradient-to-r from-[#5d4bff] via-[#6f5cff] to-[#2cc6ff] px-10 pb-10 pt-12 text-white">
      <div className="text-sm uppercase tracking-[0.3rem] text-white/70">
        vigovia planning co.
      </div>
      <div className="mt-6 text-3xl font-semibold">Hi, {data.overview.travelerName}!</div>
      <div className="text-4xl font-semibold leading-tight">{data.overview.tripTitle}</div>
      <p className="mt-3 text-lg font-light">{data.overview.durationLabel}</p>
      <div className="mt-6 flex items-center justify-start gap-3">
        {['✈️', '🏨', '🚌', '🎫'].map((emoji) => (
          <span
            key={emoji}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg"
            aria-hidden
          >
            {emoji}
          </span>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl bg-white/20 p-5 text-sm backdrop-blur lg:grid-cols-5">
        {infoItems.map((item) => (
          <div key={item.key} className="rounded-2xl bg-white/40 px-4 py-3 text-center">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
              {item.label}
            </div>
            <div className="mt-2 text-lg font-semibold text-white">
              {String(data.overview[item.key])}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white px-10 pb-6 pt-8 text-right text-sm font-semibold uppercase tracking-widest text-[#5d4bff]">
      {data.overview.brandLine}
    </div>
  </div>
)

const DaysSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-5">
    <SectionHeading title="Daily Itinerary" accent="Day-by-day plan" />
    <div className="space-y-6">
      {data.days.map((day) => (
        <div
          key={day.id}
          className="grid gap-6 rounded-[32px] border border-[#efeaff] bg-white px-6 py-6 shadow-card lg:grid-cols-[120px_1fr]"
        >
          <div className="flex flex-col items-center justify-start gap-4">
            <span className="rounded-full bg-[#4827a5] px-4 py-2 text-xs font-semibold uppercase text-white">
              {day.dayLabel}
            </span>
            <div className="rounded-2xl border border-[#4827a5]/20 bg-[#4827a5]/10 px-4 py-2 text-center text-xs font-medium text-[#4827a5]">
              {day.dateLabel}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
            <div className="overflow-hidden rounded-[28px] border border-[#efeaff] bg-[#ede9ff]">
              {day.imageUrl ? (
                <img
                  src={day.imageUrl}
                  alt={day.headline}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full min-h-[220px] items-center justify-center text-sm text-[#4827a5]">
                  Image not provided
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#361b86]">{day.headline}</h3>
                <p className="mt-1 text-sm text-slate-600">{day.tagline}</p>
                {day.additionalNotes ? (
                  <p className="mt-2 text-xs text-slate-500">{day.additionalNotes}</p>
                ) : null}
              </div>
              <div className="space-y-4">
                {day.segments.map((segment, index) => (
                  <div key={segment.id} className="grid gap-4 sm:grid-cols-[120px_1fr]">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <span className="rounded-full bg-[#4827a5] px-4 py-1 text-xs font-semibold uppercase text-white">
                          {segment.label}
                        </span>
                        {index !== day.segments.length - 1 ? (
                          <span className="mt-1 h-12 w-[1px] bg-[#cfc2ff]" aria-hidden />
                        ) : null}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {segment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

const FlightsSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Flight Summary" accent="All flights include meals" />
    <div className="grid gap-4 lg:grid-cols-2">
      {data.flights.map((flight) => (
        <div
          key={flight.id}
          className="flex flex-col gap-2 rounded-[28px] border border-[#efeaff] bg-gradient-to-r from-[#f6f3ff] to-[#f1f9ff] px-6 py-5 shadow-sm"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-[#5d4bff]">
            {flight.dateLabel}
          </div>
          <div className="text-base font-semibold text-[#1f1247]">{flight.airline}</div>
          <div className="text-sm text-slate-600">{flight.route}</div>
          {flight.note ? <div className="text-xs text-slate-500">{flight.note}</div> : null}
        </div>
      ))}
    </div>
  </section>
)

const HotelsSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Hotel Bookings" accent="Final vouchers shared post confirmation" />
    <div className="overflow-hidden rounded-[28px] border border-[#efeaff]">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-[#4827a5] text-white">
          <tr>
            <TableHeader>City</TableHeader>
            <TableHeader>Check In</TableHeader>
            <TableHeader>Check Out</TableHeader>
            <TableHeader>Nights</TableHeader>
            <TableHeader>Hotel Name</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.hotels.map((hotel, index) => (
            <tr key={hotel.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f7f4ff]'}>
              <TableCell>{hotel.city}</TableCell>
              <TableCell>{hotel.checkIn}</TableCell>
              <TableCell>{hotel.checkOut}</TableCell>
              <TableCell>{hotel.nights}</TableCell>
              <TableCell className="text-left">{hotel.hotelName}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

const NotesSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Important Notes" accent="Please review before confirming" />
    <div className="grid gap-4 md:grid-cols-2">
      {data.notes.map((note) => (
        <div key={note.id} className="flex h-full flex-col gap-2 rounded-[28px] border border-[#efeaff] bg-[#f7f4ff] px-6 py-5">
          <div className="text-base font-semibold text-[#361b86]">{note.point}</div>
          <p className="text-sm leading-relaxed text-slate-600">{note.details}</p>
        </div>
      ))}
    </div>
  </section>
)

const ScopeSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Scope of Service" accent="Our commitment" />
    <div className="overflow-hidden rounded-[28px] border border-[#efeaff]">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-[#4827a5] text-white">
          <tr>
            <TableHeader>Service</TableHeader>
            <TableHeader>Details</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.services.map((service, index) => (
            <tr key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f7f4ff]'}>
              <TableCell>{service.service}</TableCell>
              <TableCell className="text-left">{service.details}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

const InclusionSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Inclusion Summary" accent="Status overview" />
    <div className="overflow-hidden rounded-[28px] border border-[#efeaff]">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-[#4827a5] text-white">
          <tr>
            <TableHeader>Category</TableHeader>
            <TableHeader>Count</TableHeader>
            <TableHeader>Details</TableHeader>
            <TableHeader>Status / Comments</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.inclusions.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f7f4ff]'}>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell className="text-left">{item.details}</TableCell>
              <TableCell className="text-left capitalize">{item.status}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

const ActivitiesSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Activity Table" accent="Reference timings" />
    <div className="overflow-hidden rounded-[28px] border border-[#efeaff]">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-[#4827a5] text-white">
          <tr>
            <TableHeader>City</TableHeader>
            <TableHeader>Activity</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Time Required</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.activities.map((activity, index) => (
            <tr key={activity.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f7f4ff]'}>
              <TableCell>{activity.city}</TableCell>
              <TableCell className="text-left">{activity.activity}</TableCell>
              <TableCell>{activity.type}</TableCell>
              <TableCell>{activity.timeRequired}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

const PaymentSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Payment Plan" accent="Installment breakdown" />
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4 rounded-[28px] border border-[#efeaff] bg-[#f7f4ff] px-6 py-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#5d4bff]">
            Total Amount
          </div>
          <div className="mt-2 text-lg font-semibold text-[#1f1247]">
            {data.paymentPlan.totalAmount}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#5d4bff]">TCS</div>
          <div className="mt-2 text-base font-medium text-[#1f1247]">{data.paymentPlan.tcs}</div>
        </div>
      </div>
      <div className="space-y-3">
        {data.paymentPlan.installments.map((installment) => (
          <div
            key={installment.id}
            className="rounded-[24px] border border-[#efeaff] bg-white px-5 py-4 shadow-sm"
          >
            <div className="text-sm font-semibold text-[#361b86]">{installment.label}</div>
            <div className="mt-1 text-base font-semibold text-[#1f1247]">
              {installment.amount}
            </div>
            <div className="text-xs uppercase tracking-wide text-[#5d4bff]">
              {installment.dueDate}
            </div>
            {installment.note ? (
              <div className="mt-2 text-xs text-slate-500">{installment.note}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </section>
)

const VisaSection = ({ data }: ItineraryPreviewProps) => (
  <section className="space-y-4">
    <SectionHeading title="Visa Details" accent="Documentation overview" />
    <div className="overflow-hidden rounded-[28px] border border-[#efeaff]">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-[#4827a5] text-white">
          <tr>
            <TableHeader>Visa Type</TableHeader>
            <TableHeader>Validity</TableHeader>
            <TableHeader>Processing Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <TableCell>{data.visa.type}</TableCell>
            <TableCell>{data.visa.validity}</TableCell>
            <TableCell>{data.visa.processingDate}</TableCell>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

const FooterSection = ({ data }: ItineraryPreviewProps) => (
  <footer className="rounded-[36px] border border-[#efeaff] bg-gradient-to-r from-white via-[#f7f4ff] to-white px-8 py-6">
    <div className="grid gap-6 text-sm text-slate-600 lg:grid-cols-3">
      <div>
        <div className="text-base font-semibold text-[#361b86]">{data.contact.companyName}</div>
        <p className="mt-2 leading-relaxed">{data.contact.address}</p>
      </div>
      <div className="space-y-2">
        <div className="font-medium text-[#361b86]">Phone:</div>
        <div>{data.contact.phone}</div>
        <div className="font-medium text-[#361b86]">Email:</div>
        <div>{data.contact.email}</div>
      </div>
      <div className="space-y-2">
        <div className="font-medium text-[#361b86]">CIN</div>
        <div>{data.contact.cin}</div>
        <div className="text-center text-lg font-semibold text-[#4827a5]">
          {data.contact.tagline}
        </div>
      </div>
    </div>
  </footer>
)

const SectionHeading = ({ title, accent }: { title: string; accent: string }) => (
  <div className="flex flex-col gap-1">
    <div className="text-xs font-semibold uppercase tracking-[0.3rem] text-[#5d4bff]">{accent}</div>
    <h2 className="text-2xl font-semibold text-[#1f1247]">{title}</h2>
  </div>
)

const TableHeader = ({ children }: { children: ReactNode }) => (
  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
    {children}
  </th>
)

const TableCell = ({ children, className }: { children: ReactNode; className?: string }) => (
  <td className={`px-4 py-4 text-center align-top text-sm text-slate-600 ${className ?? ''}`}>
    {children}
  </td>
)

export const ItineraryPreview = forwardRef<HTMLDivElement, ItineraryPreviewProps>(ItineraryPreviewComponent)

ItineraryPreview.displayName = 'ItineraryPreview'
