export const client = {
  // Business Details
  name: "Williams Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bristol.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07717 405630",
  email: "",
  website: "",

  // Location
  address: "Bristol",
  city: "Bristol",
  county: "",
  postcode: "",
  basedIn: "Bristol",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Harry Robinson", rating: 5, text: "Williams Landscapes recently completed a major landscaping project for us and the quality is exceptional. The team worked through some challenging weather but still delivered on time. Genuinely thrilled with the outcome.", date: "2 years ago" },
    { name: "George Jones", rating: 5, text: "From start to finish, working with Williams Landscapes was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "a month ago" },
    { name: "Claire Harris", rating: 5, text: "Had a wonderful experience with Williams Landscapes. From the design phase right through to the final clean-up, everything was handled brilliantly. The new patio and planting scheme look amazing.", date: "6 months ago" },
    { name: "Rachel Robinson", rating: 5, text: "Would give Williams Landscapes 10 stars if I could. They transformed our tired-looking garden into a beautiful, functional space. The team were a pleasure to deal with and the price was very competitive for Bristol.", date: "4 months ago" },
    { name: "Nicola T.", rating: 5, text: "Absolutely delighted with the work Williams Landscapes did on our garden. From the initial consultation to the finished result, everything was handled professionally. The team were punctual, tidy, and the quality of workmanship was outstanding. Ou...", date: "2 years ago" },
    { name: "Nick Bennett", rating: 5, text: "We had Williams Landscapes come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, every plant...", date: "5 months ago" },
    { name: "Sean Marshall", rating: 5, text: "After getting several quotes, we went with Williams Landscapes and it was the best decision. Not the cheapest, but the quality of work is in a different league. Professional, reliable, and the results are gorgeous.", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Williams Landscapes | Landscaper in Bristol",
    description: "Professional landscaper in Bristol. 5.0-star rated on Google. Call for a free quote.",
  },
};
