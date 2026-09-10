const sizeClasses = {
  large: 'sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-auto',
  wide: 'sm:col-span-2 aspect-[16/10]',
  tall: 'aspect-[3/4]',
  small: 'aspect-[4/5]',
}

export default function GalleryItem({ image, onOpen }) {
  return (
    <button
      onClick={() => onOpen(image)}
      className={`group relative overflow-hidden rounded-2xl w-full h-full border border-gold/10 hover:border-gold/50 shadow-md hover:shadow-2xl transition-all duration-500 text-left focus:outline-none ${sizeClasses[image.size] || 'aspect-[4/5]'}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-108"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="text-text-light text-sm font-semibold tracking-wide translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          {image.alt}
        </span>
        <span className="bg-gold/90 text-dark font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.category}
        </span>
      </div>
    </button>
  )
}

