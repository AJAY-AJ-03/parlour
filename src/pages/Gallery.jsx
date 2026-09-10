import { useEffect, useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import GalleryItem from '../components/GalleryItem'
import { galleryImages } from '../data/salonData'

const categories = ['All', 'Makeup', 'Hair', 'Bridal', 'Skincare', 'Salon', 'Nails']

export default function Gallery() {
  usePageTitle('Gallery | Glow Beauty Studio')
  const [active, setActive] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <>
      {/* HEADER BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-16 sm:py-24 border-b border-gold/15">
        <div className="container-page">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gold" />
            <p className="label-eyebrow text-gold">Portfolio</p>
          </div>
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-text-light">
            Our Work
          </h1>
          <p className="text-text-light/75 max-w-md text-base sm:text-lg mt-4 leading-relaxed">
            Hair, skincare, nail artistry and bridal styling photographed on the studio floor.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gold text-dark shadow-md'
                    : 'bg-dark-card text-text-light/70 hover:text-text-light border border-white/10 hover:border-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID (Dark #171717) */}
      <section className="bg-dark-card text-text-light py-16 sm:py-24 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-6">
            {filteredImages.map((image) => (
              <GalleryItem key={image.id} image={image} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-rise"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close preview"
            className="absolute top-6 right-6 text-gold hover:text-gold-light w-12 h-12 rounded-full bg-dark-card border border-gold/30 flex items-center justify-center text-3xl font-serif z-10 transition-colors"
          >
            &times;
          </button>
          <figure
            className="max-w-4xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-2xl bg-dark max-h-[75vh]">
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <figcaption className="text-text-light text-center text-base sm:text-lg font-serif">
              <span className="text-gold font-semibold mr-2">[{active.category}]</span>
              <span>{active.alt}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
