import usePageTitle from '../hooks/usePageTitle'
import Button from '../components/Button'

export default function NotFound() {
  usePageTitle('Page Not Found | Glow Beauty Studio')

  return (
    <section className="bg-dark text-text-light py-28 sm:py-36 flex flex-col items-center text-center gap-6 min-h-[60vh] justify-center">
      <p className="label-eyebrow text-gold">Error 404</p>
      <h1 className="heading-display text-5xl sm:text-7xl text-text-light">
        This page wandered off.
      </h1>
      <p className="text-text-light/70 max-w-sm text-lg">
        The page you're looking for doesn't exist or may have moved. Let's
        get you back to somewhere beautiful.
      </p>
      <div className="mt-2">
        <Button to="/" variant="primary">
          Back to Home &rarr;
        </Button>
      </div>
    </section>
  )
}

