// ============================================================
// CENTRAL BUSINESS CONFIGURATION
// Change everything about the brand/content from this one file.
// ============================================================

const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const business = {
  name: 'Glow Beauty Studio',
  shortName: 'Glow',
  tagline: 'Where Beauty Meets Confidence.',
  city: 'Tirunelveli',
  state: 'Tamil Nadu',
  country: 'India',
  address: '14, Trivandrum Road, Vannarpettai, Tirunelveli, Tamil Nadu 627003',
  phone: '+91 93613 68600',
  phoneRaw: '+919361368600',
  whatsapp: '+919361368600',
  email: 'hello@glowbeautystudio.in',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Tirunelveli,Tamil+Nadu&output=embed',
  mapsLinkUrl: 'https://maps.google.com/?q=Tirunelveli,Tamil+Nadu',
  hours: [
    { day: 'Monday – Saturday', time: '9:30 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
}


export const whatsappLink = (message) => {
  const text = encodeURIComponent(
    message ||
      `Hi ${business.name}, I would like to book an appointment. Please share the available timings.`
  )
  return `https://wa.me/${business.whatsapp.replace('+', '')}?text=${text}`
}

export const telLink = `tel:${business.phoneRaw}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '10+', label: 'Beauty Services' },
  { value: '5+', label: 'Years Experience' },
  { value: '1000+', label: 'Happy Clients' },
]

export const services = [
  {
    slug: 'hair-cut-styling',
    number: '01',
    name: 'Hair Cut & Styling',
    description:
      'Precision cuts and finishing styled to your face shape and lifestyle, from soft layers to sharp editorial lines.',
    price: '₹499',
    image: img('photo-1521590832167-7bcbfaa6381f'),
  },
  {
    slug: 'hair-spa',
    number: '02',
    name: 'Hair Spa',
    description:
      'Deep-conditioning rituals that restore shine and strength, tailored to dry, damaged or colour-treated hair.',
    price: '₹899',
    image: img('photo-1522336284037-91f7da073525'),
  },
  {
    slug: 'facial',
    number: '03',
    name: 'Facial',
    description:
      'Results-driven facials that cleanse, brighten and renew, using techniques suited to your skin type.',
    price: '₹799',
    image: img('photo-1544161515-4ab6ce6db874'),
  },
  {
    slug: 'bridal-makeup',
    number: '04',
    name: 'Bridal Makeup',
    description:
      'A full bridal experience — trial included — for a look that photographs beautifully and lasts the whole day.',
    price: '₹15,000',
    image: img('photo-1519741497674-611481863552'),
  },
  {
    slug: 'party-makeup',
    number: '05',
    name: 'Party Makeup',
    description:
      'Glamorous, long-wear makeup for engagements, receptions and nights out, styled to the occasion.',
    price: '₹2,500',
    image: img('photo-1487412720507-e7ab37603c6f'),
  },
  {
    slug: 'manicure',
    number: '06',
    name: 'Manicure',
    description:
      'Shape, buff and polish with a hand massage, finished with a colour of your choice.',
    price: '₹399',
    image: img('photo-1604654894610-df63bc536371'),
  },
  {
    slug: 'pedicure',
    number: '07',
    name: 'Pedicure',
    description:
      'A relaxing foot ritual that exfoliates and softens, finished with a flawless polish.',
    price: '₹499',
    image: img('photo-1519014816548-bf5fe059798b'),
  },
  {
    slug: 'saree-draping',
    number: '08',
    name: 'Saree Draping',
    description:
      'Expert draping for weddings and functions, tailored to the fabric and the occasion.',
    price: '₹699',
    image: img('photo-1610030181087-540f829cb87c'),
  },
  {
    slug: 'hair-coloring',
    number: '09',
    name: 'Hair Coloring',
    description:
      'Global colour, balayage and root touch-ups using ammonia-friendly formulas for healthy-looking colour.',
    price: '₹1,499',
    image: img('photo-1560869713-7d0a29430803'),
  },
  {
    slug: 'skin-care',
    number: '10',
    name: 'Skin Care',
    description:
      'Personalised skincare consultations and treatments addressing pigmentation, acne and ageing concerns.',
    price: '₹999',
    image: img('photo-1596462502278-27bfdc403348'),
  },
]

export const galleryImages = [
  { id: 1, src: img('photo-1522337660859-02fbefca4702', 1600), alt: 'Bridal makeup application in progress', category: 'Makeup', size: 'large' },
  { id: 2, src: img('photo-1560066984-138dadb4c035', 1000), alt: 'Modern salon interior with styling chairs', category: 'Salon', size: 'tall' },
  { id: 3, src: img('photo-1519699047748-de8e457a634e', 1000), alt: 'Client receiving a facial treatment', category: 'Skincare', size: 'small' },
  { id: 4, src: img('photo-1487412720507-e7ab37603c6f', 1000), alt: 'Manicured hands with polish', category: 'Nails', size: 'small' },
  { id: 5, src: img('photo-1595476108010-b4d1f102b1b1', 1400), alt: 'Elegant bridal hair styling', category: 'Bridal', size: 'wide' },
  { id: 6, src: img('photo-1519014816548-bf5fe059798b', 1000), alt: 'Hair styling with round brush', category: 'Hair', size: 'small' },
  { id: 7, src: img('photo-1470259078422-826894b933aa', 1000), alt: 'Precision hair cutting', category: 'Hair', size: 'small' },
  { id: 8, src: img('photo-1633681926035-ec1ac984418a', 1000), alt: 'Hair colouring in progress', category: 'Color', size: 'small' },
  { id: 9, src: img('photo-1522335789203-aabd1fc54bc9', 1400), alt: 'Finished party makeup look', category: 'Makeup', size: 'wide' },
  { id: 10, src: img('photo-1600948836101-f9ffda59d250', 1000), alt: 'Relaxing spa treatment room', category: 'Salon', size: 'small' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Raghavan',
    location: 'Tirunelveli',
    category: 'Bridal',
    rating: 5,
    service: 'Bridal Makeup & Saree Draping',
    date: 'August 2026',
    verified: true,
    quote:
      'My bridal look was beyond anything I imagined. The team understood exactly what I wanted for my wedding morning, kept me calm throughout, and the makeup stayed flawless for 14 hours straight!',
  },
  {
    id: 2,
    name: 'Meena Selvaraj',
    location: 'Palayamkottai',
    category: 'Hair Care',
    rating: 5,
    service: 'Hair Spa & Precision Cut',
    date: 'July 2026',
    verified: true,
    quote:
      'My hair has never felt this healthy and soft. The senior stylist took 20 minutes just to evaluate my hair texture before recommending a customized spa treatment. Highly recommended studio!',
  },
  {
    id: 3,
    name: 'Divya Krishnan',
    location: 'Vannarpettai',
    category: 'Facial & Skin',
    rating: 5,
    service: 'Radiance Skin Facial',
    date: 'August 2026',
    verified: true,
    quote:
      'A genuinely soothing and luxurious experience from start to finish. The ambience is serene and my skin had a visible glow the very next day without any irritation.',
  },
  {
    id: 4,
    name: 'Anjali Pillai',
    location: 'Tirunelveli',
    category: 'Party Glam',
    rating: 5,
    service: 'Party Makeup & Hair Styling',
    date: 'June 2026',
    verified: true,
    quote:
      'Booked on short notice for a family reception and they accommodated me seamlessly. The makeup was elegant, light on the skin, and looked so natural in high-res photographs.',
  },
  {
    id: 5,
    name: 'Kavitha Natarajan',
    location: 'Tenkasi',
    category: 'Bridal',
    rating: 5,
    service: 'Full Bridal Package & Trial',
    date: 'May 2026',
    verified: true,
    quote:
      'The trial session made all the difference! They customized the lip shade and eye makeup according to my silk saree colors. Every relative asked where I got styled.',
  },
  {
    id: 6,
    name: 'Shalini Sundaram',
    location: 'Tirunelveli',
    category: 'Facial & Skin',
    rating: 5,
    service: 'Hydra Renewal & De-Tan',
    date: 'September 2026',
    verified: true,
    quote:
      'I visit Glow Studio every month for their facial care. Cleanliness is top tier, staff is gentle, and they never push unnecessary products.',
  },
]


export const heroSliderImages = [
  {
    id: 1,
    src: img('photo-1560066984-138dadb4c035', 1800),
    alt: 'Luxury Glow Beauty Studio Interior',
    caption: 'Luxury Atmosphere & Professional Care',
  },
  {
    id: 2,
    src: img('photo-1522337660859-02fbefca4702', 1800),
    alt: 'Bridal Artistry at Glow Beauty Studio',
    caption: 'Bespoke Bridal & Occasion Styling',
  },
  {
    id: 3,
    src: img('photo-1521590832167-7bcbfaa6381f', 1800),
    alt: 'Precision Hair Styling & Treatment',
    caption: 'Precision Cuts & Rejuvenating Hair Spas',
  },
  {
    id: 4,
    src: img('photo-1544161515-4ab6ce6db874', 1800),
    alt: 'Radiant Skincare & Facial Rituals',
    caption: 'Customized Skincare & Renewal Treatments',
  },
  {
    id: 5,
    src: img('photo-1580618672591-eb180b1a973f', 1800),
    alt: 'Expert Salon Team Consultation',
    caption: 'Personalized Consultations Suited to You',
  },
]

export const teamPhilosophy = {
  heroImage: img('photo-1580618672591-eb180b1a973f', 1600),
  storyImage: img('photo-1522337660859-02fbefca4702', 1400),
}

