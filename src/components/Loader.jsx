import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { business } from '../data/salonData'

export default function Loader() {
  const location = useLocation()
  const [initialLoading, setInitialLoading] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)
  const [progress, setProgress] = useState(0)

  // Route transition loader state
  const [routeNavigating, setRouteNavigating] = useState(false)

  // Initial Full Screen Splash Loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const diff = Math.random() * 30 + 20
        return Math.min(prev + diff, 100)
      })
    }, 120)

    const timer = setTimeout(() => {
      setFadingOut(true)
      const hideTimer = setTimeout(() => {
        setInitialLoading(false)
      }, 600)
      return () => clearTimeout(hideTimer)
    }, 1200)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  // Page Navigation Route Loader Effect
  useEffect(() => {
    if (initialLoading) return

    setRouteNavigating(true)
    const navTimer = setTimeout(() => {
      setRouteNavigating(false)
    }, 450)

    return () => clearTimeout(navTimer)
  }, [location.pathname, initialLoading])

  return (
    <>
      {/* 1. INITIAL FULLSCREEN SPLASH LOADER */}
      {initialLoading && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark transition-all duration-700 ease-soft ${
            fadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
          }`}
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Brand Eyebrow */}
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-gold mb-3 animate-rise">
              {business.city} &bull; {business.state}
            </span>

            {/* Brand Title */}
            <h1 className="font-serif text-3xl sm:text-4xl text-text-light tracking-tight mb-2">
              {business.name}
            </h1>

            <p className="text-xs text-text-light/60 tracking-widest uppercase mb-10">
              Luxury Salon &amp; Bridal Studio
            </p>

            {/* Elegant Gold Progress Indicator Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-dark-card rounded-full overflow-hidden relative mb-4">
              <div
                className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ease-out shadow-[0_0_12px_rgba(201,162,39,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Numeric Counter */}
            <div className="flex items-center justify-between w-48 sm:w-64 text-[11px] text-gold/80 tracking-widest uppercase font-mono">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. PAGE ROUTE TRANSITION LOADER BAR */}
      {routeNavigating && !initialLoading && (
        <div className="fixed top-0 inset-x-0 z-[99998] h-[3px] bg-dark pointer-events-none">
          <div className="h-full bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_0_12px_rgba(201,162,39,0.9)] animate-progressLine" />
        </div>
      )}
    </>
  )
}
