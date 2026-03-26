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
    { name: "John Odriscoll", rating: 5, text: "Shane and his team were professional from start to finish and done an amazing job totally transformed our garden would highly recommend", date: "6 months ago" },
    { name: "Jennifer Shackley", rating: 5, text: "Shane & team have recently revamped my back garden. They were brilliant, worked efficiently and quickly. The garden, though small, was finished and looks absolutely lovely. Most impressed and happy to recommend.", date: "11 months ago", badge: "Local Guide" },
    { name: "Elaine Howard", rating: 5, text: "Shane and his team installed new fencing for us and we are very happy with the quality of his work. Completed the job in foul weather and arrived at the times stated. We are very pleased with the job and would recommend him to anyone.", date: "3 years ago" },
    { name: "Elaine Dean", rating: 5, text: "I  was recommended Williams Landscape as we were  wanting a patio area, where the land needed to be absolutely flat and that's what we got. I would agree with the gentleman previously, they were absolutely trustworthy and honest , very punctual, courteous, and very tidy. their attention to detail was very impressive too. I would definitely recommend Shane and his work team.", date: "4 years ago", badge: "Local Guide" },
    { name: "Ross Martin", rating: 5, text: "Absolute top notch work by Shane and his team, very respectful and attentive to detail. Fair pricing and hard working. They do a great job and make sure everything is cleaned up well after their job is complete.  A great recommendation for landscaping on small or large projects.", date: "4 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Williams Landscapes | Landscaper in Bristol",
    description: "Professional landscaper in Bristol. 5.0-star rated on Google. Call for a free quote.",
  },
};
