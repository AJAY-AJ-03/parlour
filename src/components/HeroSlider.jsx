import { useState, useEffect, useRef, useCallback } from 'react'
import { heroSliderImages } from '../data/salonData'

export default function HeroSlider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSliderImages.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSliderImages.length) % heroSliderImages.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, handleNext])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 40) {
      handleNext()
    } else if (distance < -40) {
      handlePrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <div
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-dark text-text-light group border-b border-gold/15"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Cinematic Auto-Slide Crossfade */}
      {heroSliderImages.map((image, idx) => {
        const isActive = idx === currentIndex
        return (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1200 ease-soft ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Dark Overlay for Supreme Text Contrast */}
            <div className="absolute inset-0 bg-dark/65 bg-gradient-to-t from-dark via-dark/50 to-dark/70" />
          </div>
        )
      })}

      {/* Hero Centered Content Slot */}
      <div className="relative z-10 my-auto w-full">
        {children}
      </div>

      {/* Bottom Control & Info Bar (Without arrow icons) */}
      <div className="relative z-10 container-page pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-light/60 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>Tirunelveli, Tamil Nadu &bull; +91 93613 68600</span>
        </div>

        {/* Slide Indicators / Dots */}
        <div className="flex items-center gap-2 pointer-events-auto bg-dark/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/25 shadow-lg">
          {heroSliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 bg-gold shadow-[0_0_10px_rgba(201,162,39,0.9)]'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
