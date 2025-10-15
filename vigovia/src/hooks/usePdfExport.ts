import { useState } from 'react'
import type { MutableRefObject, RefObject } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import type { ItineraryData } from '../types'

const sanitizeFileName = (value: string) => value.replace(/[^a-z0-9-_]+/gi, '-').toLowerCase()

type AnyRef<T extends HTMLElement> = RefObject<T> | MutableRefObject<T | null>

export const usePdfExport = <T extends HTMLElement>(
  containerRef: AnyRef<T>,
  itinerary: ItineraryData
) => {
  const [isExporting, setIsExporting] = useState(false)

  const exportAsPdf = async () => {
    if (!containerRef.current) {
      return
    }

    setIsExporting(true)

    try {
      const canvas = await html2canvas(containerRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      })

      const imageData = canvas.toDataURL('image/png', 1)
      const pdf = new jsPDF('p', 'pt', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const imgProps = pdf.getImageProperties(imageData)
      const pdfHeight = (imgProps.height * pageWidth) / imgProps.width
      let heightLeft = pdfHeight
      let position = 0

      pdf.addImage(imageData, 'PNG', 0, position, pageWidth, pdfHeight)
      heightLeft -= pageHeight

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight
        pdf.addPage()
        pdf.addImage(imageData, 'PNG', 0, position, pageWidth, pdfHeight)
        heightLeft -= pageHeight
      }
      const filename = sanitizeFileName(itinerary.overview.tripTitle || 'itinerary')
      pdf.save(`${filename}.pdf`)
    } catch (error) {
      console.error('Failed to export itinerary PDF', error)
    } finally {
      setIsExporting(false)
    }
  }

  return { exportAsPdf, isExporting }
}
