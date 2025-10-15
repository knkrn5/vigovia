import { useRef, useState } from 'react'
import './App.css'
import { ItineraryForm } from './components/form/ItineraryForm'
import { ItineraryPreview } from './components/preview/ItineraryPreview'
import { defaultItinerary } from './data/defaultItinerary'
import { usePdfExport } from './hooks/usePdfExport'
import type { ItineraryData } from './types'

function App() {
  const [itinerary, setItinerary] = useState<ItineraryData>(() => defaultItinerary)
  const previewRef = useRef<HTMLDivElement>(null)
  const { exportAsPdf, isExporting } = usePdfExport(previewRef, itinerary)

  return (
    <div className="app-shell bg-[#f8f7ff] px-4 py-10">
      <div className="mx-auto grid max-w-[1680px] gap-8 lg:grid-cols-[minmax(0,480px)_1fr]">
        <div className="flex flex-col gap-6">
          <header className="rounded-3xl bg-white/90 px-6 py-6 shadow-card backdrop-blur">
            <h1 className="text-2xl font-semibold text-[#1f1247]">Vigovia Itinerary Builder</h1>
            <p className="mt-1 text-sm text-slate-600">
              Enter trip details on the left and preview the production-ready itinerary on the right.
            </p>
            <button
              type="button"
              onClick={exportAsPdf}
              disabled={isExporting}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5d4bff] to-[#2cc6ff] px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isExporting ? 'Generating PDF…' : 'Download PDF'}
            </button>
          </header>
          <ItineraryForm data={itinerary} onChange={setItinerary} />
        </div>
        <div className="flex justify-center pb-12">
          <ItineraryPreview ref={previewRef} data={itinerary} />
        </div>
      </div>
    </div>
  )
}

export default App
