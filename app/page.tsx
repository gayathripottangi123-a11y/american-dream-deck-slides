'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroSlide from './slides/IntroSlide'
import DestinationSlide from './slides/DestinationSlide'
import RetailSlide from './slides/RetailSlide'
import EntertainmentSlide from './slides/EntertainmentSlide'
import EventsSlide from './slides/EventsSlide'
import CTASlide from './slides/CTASlide'

const slides = [
  { id: 1, component: IntroSlide, title: 'American Dream' },
  { id: 2, component: DestinationSlide, title: 'Destination' },
  { id: 3, component: RetailSlide, title: 'Retail' },
  { id: 4, component: EntertainmentSlide, title: 'Entertainment' },
  { id: 5, component: EventsSlide, title: 'Events Platform' },
  { id: 6, component: CTASlide, title: 'Partner With Us' },
]

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Keyboard navigation
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 z-50 h-full w-64 bg-black/90 border-r border-white/10 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-light text-white">American Dream</h2>
          <p className="text-sm text-white/50">Sales Deck</p>
        </div>

        <div className="space-y-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-full text-left px-4 py-3 rounded transition-all ${
                currentSlide === index
                  ? 'bg-white text-black'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="text-xs font-medium mb-1">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="text-sm">{slide.title}</div>
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-xs text-white/50 mb-2">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="ml-64 h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all z-50"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all z-50"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </div>
  )
}