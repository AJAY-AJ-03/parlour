import { whatsappLink } from '../data/salonData'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hi Glow Beauty Studio, I would like to enquire about your services & appointments.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Glow Beauty Studio on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 group focus:outline-none"
    >
      {/* Tooltip text visible on hover */}
      <span className="hidden sm:inline-block bg-dark/95 text-text-light text-xs font-semibold px-3.5 py-2 rounded-full border border-gold/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp (+91 93613 68600)
      </span>

      {/* Floating Button Icon */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] group-hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-all duration-300">
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current relative z-10"
        >
          <path d="M12.031 0C5.394 0 0 5.391 0 12.028c0 2.121.553 4.188 1.604 6.007L0 24l6.147-1.612a12.007 12.007 0 0 0 5.884 1.527h.005c6.634 0 12.027-5.391 12.027-12.028C24.063 5.391 18.668 0 12.031 0zm.005 22.012h-.004a9.983 9.983 0 0 1-5.09-1.393l-.365-.217-3.784.993 1.01-3.687-.238-.379a9.957 9.957 0 0 1-1.528-5.301c0-5.513 4.486-9.999 10.002-9.999 5.514 0 10.001 4.486 10.001 9.999 0 5.514-4.486 10.004-10.001 10.004zm5.485-7.489c-.301-.15-1.782-.879-2.057-.979-.275-.101-.476-.15-.676.15-.2.301-.776.979-.951 1.179-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.424-1.496-.897-.798-1.503-1.784-1.678-2.085-.176-.301-.019-.464.131-.613.136-.135.301-.351.451-.526.15-.176.2-.301.301-.501.101-.201.05-.376-.025-.526-.075-.15-.676-1.63-.926-2.231-.244-.585-.494-.506-.676-.515-.175-.009-.376-.009-.576-.009s-.526.075-.801.376c-.275.301-1.051 1.027-1.051 2.504 0 1.478 1.076 2.905 1.226 3.106.15.201 2.118 3.235 5.132 4.536.717.31 1.277.495 1.713.633.72.228 1.376.196 1.894.118.579-.087 1.782-.727 2.032-1.428.25-.701.25-1.302.175-1.428-.075-.125-.275-.201-.576-.351z" />
        </svg>
      </div>
    </a>
  )
}
