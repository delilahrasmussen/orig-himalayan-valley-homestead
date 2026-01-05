export const CONTACT = {
  phones: ['+919877865729', '+919872925078'],
  whatsapp: '+919872925078',
  email: 'himalayavalleyhomestead@gmail.com',
  address: {
    line1: 'Dharaman Utrala Road, Sornu',
    line2: 'Palampur, Himachal Pradesh – 176061',
    full: 'Dharaman Utrala Road, Sornu, Palampur, Himachal Pradesh – 176061',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Dharaman+Utrala+Road+Sornu+Palampur+Himachal+Pradesh+176061',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13512.952!2d76.5367!3d32.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b479b6f23e2e5%3A0x9c8c0c0c0c0c0c0c!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
  social: {
    airbnb: 'https://www.airbnb.co.in/rooms/1398901259393587165',
    makemytrip: 'https://www.makemytrip.com',
    goibibo: 'https://www.goibibo.com',
  },
};

export const PROPERTY = {
  name: 'Himalayan Valley Homestead',
  tagline: 'A Serene Himalayan Homestead in Palampur',
  subtagline: 'Private Rooms · 2BHK · Entire Home',
  description: 'Surrounded by mountains, balconies, and open skies.',
  stats: {
    bedrooms: 5,
    bathrooms: 4,
    kitchens: 3,
    parking: 5,
  },
  locationHighlights: [
    'Approx. 9.5 km from Palampur town',
    'Scenic mountain surroundings',
    'Peaceful residential area',
  ],
  distanceFrom: {
    palampur: '9.5 km',
    dharamshala: '35 km',
    kangra: '38 km',
    pathankot: '110 km',
    chandigarh: '259 km',
    delhi: '483 km',
  },
};

export const TRUST_HIGHLIGHTS = [
  { title: 'Mountain & valley views', icon: 'Mountain' },
  { title: 'Rooftop terrace & verandas', icon: 'Home' },
  { title: 'Gated property with parking', icon: 'Car' },
  { title: 'Wi-Fi & power backup', icon: 'Wifi' },
  { title: 'Ideal for families & groups', icon: 'Users' },
];

export const STAY_OPTIONS = [
  {
    id: 'private-rooms',
    title: 'Private Rooms',
    shortTitle: 'Private Rooms',
    subtitle: 'Comfortable rooms with shared balconies and access to common areas.',
    description: 'Ideal for solo travelers, couples, or short getaways, our private rooms offer comfort, privacy, and access to shared balconies and common spaces.',
    features: [
      'Queen or double beds',
      'Attached bathrooms',
      'Wi-Fi access',
      'Extra mattress on request',
      'Access to common living areas',
    ],
    idealFor: ['Solo travelers', 'Couples', 'Short getaways'],
    cta: 'View Rooms',
    ctaLink: '/stay-options#private-rooms',
    image: '/room-hhs.avif',
  },
  {
    id: '2bhk',
    title: '2BHK Himalayan Homestay',
    shortTitle: '2BHK Homestay',
    subtitle: 'A private two-bedroom unit with kitchen, living space, and veranda.',
    description: 'Perfect for families or small groups, the 2BHK unit offers a private, self-contained stay with all the comforts of home.',
    features: [
      '2 bedrooms with attached bathrooms',
      'Private living area',
      'Kitchen',
      'Large veranda & balcony access',
      'Dedicated workspace',
      'Ideal for longer stays',
    ],
    idealFor: ['Families', 'Small groups', 'Long stays', 'Remote work'],
    cta: 'View 2BHK Details',
    ctaLink: '/stay-options#2bhk',
    image: '/hhs-2bhk.jpeg',
  },
  {
    id: 'entire-homestead',
    title: 'Whole Home Retreat',
    shortTitle: 'Entire Homestead',
    subtitle: 'Ideal for families or groups wanting privacy, space, and exclusivity.',
    description: 'For larger families, reunions, or group retreats, the entire homestead can be booked for exclusive use—offering maximum privacy and shared experiences.',
    features: [
      'Multiple bedrooms & bathrooms',
      'Spacious living and dining areas',
      'Multiple kitchens',
      'Rooftop terrace & verandas',
      'Gated property with parking',
    ],
    idealFor: ['Large families', 'Family reunions', 'Group retreats', 'Corporate offsites'],
    cta: 'Enquire for Whole Home',
    ctaLink: '/booking',
    image: '/hhs-hero-6.jpg',
  },
];

export const AMENITIES = {
  essentials: {
    title: 'Essentials',
    items: [
      { name: 'Wi-Fi', icon: 'Wifi' },
      { name: 'Power backup', icon: 'Zap' },
      { name: 'Clean linen & blankets', icon: 'Bed' },
      { name: 'Housekeeping support', icon: 'Sparkles' },
    ],
  },
  outdoors: {
    title: 'Outdoors & Views',
    items: [
      { name: 'Rooftop terrace', icon: 'Sun' },
      { name: 'Mountain-facing balconies', icon: 'Mountain' },
      { name: 'Veranda seating', icon: 'Armchair' },
    ],
  },
  parking: {
    title: 'Parking & Access',
    items: [
      { name: 'Gated property', icon: 'Shield' },
      { name: 'On-site parking (5 cars)', icon: 'Car' },
    ],
  },
  addons: {
    title: 'Add-On Services',
    items: [
      { name: 'Airport transfers (on request)', icon: 'Plane' },
    ],
  },
};

export const NEARBY_ATTRACTIONS = [
  {
    name: 'Palampur Tea Gardens',
    description: 'Famous tea estates with scenic walks and factory tours.',
    distance: '8 km',
    image: '/palampur-tea-plantation.webp',
  },
  {
    name: 'Chamunda Devi Temple',
    description: 'Ancient temple dedicated to Goddess Chamunda.',
    distance: '15 km',
    image: '/chamunda-devi.webp',
  },
  {
    name: 'Sobha Singh Art Gallery',
    description: 'Gallery showcasing works of renowned artist Sobha Singh.',
    distance: '12 km',
    image: '/shobha-singh-art-gallery.jpg',
  },
  {
    name: 'Baijnath Shiva Temple',
    description: 'Historic 13th-century temple with stunning architecture.',
    distance: '16 km',
    image: '/baijnath-temple-palampur.jpg',
  },
  {
    name: 'Bir Billing',
    description: 'World-famous paragliding destination and Tibetan settlement.',
    distance: '35 km',
    image: '/bir-billing.jpg',
  },
];

export const SLOW_EXPERIENCES = [
  {
    title: 'Morning tea on the terrace',
    description: 'Start your day with chai and panoramic Himalayan views.',
    icon: 'Coffee',
  },
  {
    title: 'Work-from-the-hills stays',
    description: 'Reliable Wi-Fi and peaceful workspace for remote work.',
    icon: 'Laptop',
  },
  {
    title: 'Stargazing & quiet evenings',
    description: 'Clear mountain skies perfect for stargazing.',
    icon: 'Star',
  },
  {
    title: 'Family time in shared spaces',
    description: 'Spacious common areas for quality family moments.',
    icon: 'Heart',
  },
];

export const GALLERY_IMAGES = [
  {
    src: '/hhs-hero1.jpg',
    category: 'Exteriors',
    alt: 'Homestead exterior with mountain backdrop',
  },
  {
    src: '/room-hhs.avif',
    category: 'Rooms',
    alt: 'Cozy bedroom with mountain views',
  },
  {
    src: '/hhs-2bhk.jpeg',
    category: '2BHK',
    alt: '2BHK unit interior',
  },
  {
    src: '/life-at-homestead.jpg',
    category: 'Common Areas',
    alt: 'Life at the homestead',
  },
  {
    src: '/outdoor-view.jpeg',
    category: 'Rooftop & Views',
    alt: 'Mountain views from the property',
  },
  {
    src: '/palampur-tea-plantation.webp',
    category: 'Surroundings',
    alt: 'Tea gardens near Palampur',
  },
  {
    src: '/hhs-hero2.jpg',
    category: 'Exteriors',
    alt: 'Homestead building view',
  },
  {
    src: '/hote-essentials.jpg',
    category: 'Rooms',
    alt: 'Room essentials and amenities',
  },
  {
    src: '/bir-billing.jpg',
    category: 'Surroundings',
    alt: 'Bir Billing paragliding destination',
  },
  {
    src: '/entrance-road.jpg',
    category: 'Exteriors',
    alt: 'Entrance road to the homestead',
  },
  {
    src: '/hhs-hero-6.jpg',
    category: 'Exteriors',
    alt: 'Homestead full exterior view',
  },
  {
    src: '/hhs-hero-5.jpg',
    category: 'Rooftop & Views',
    alt: 'Views from the rooftop terrace',
  },
  {
    src: '/baijnath-temple-palampur.jpg',
    category: 'Surroundings',
    alt: 'Baijnath Shiva Temple',
  },
  {
    src: '/chamunda-devi.webp',
    category: 'Surroundings',
    alt: 'Chamunda Devi Temple',
  },
  {
    src: '/shobha-singh-art-gallery.jpg',
    category: 'Surroundings',
    alt: 'Sobha Singh Art Gallery',
  },
  {
    src: '/hhs-hero3.jpeg',
    category: 'Exteriors',
    alt: 'Homestead exterior at dusk',
  },
];

export const POLICIES = [
  {
    title: 'Check-in & Check-out',
    content: 'Check-in and check-out times are confirmed at the time of booking. Early check-in and late check-out may be available on request, subject to availability.',
  },
  {
    title: 'Identification',
    content: 'Valid government-issued ID is required for all guests at the time of check-in. This includes Aadhaar Card, Passport, Driving License, or Voter ID.',
  },
  {
    title: 'Age Requirement',
    content: 'The primary guest making the booking must be 18 years of age or older.',
  },
  {
    title: 'Pet Policy',
    content: 'Pets are currently not permitted at the homestead to ensure a comfortable stay for all guests.',
  },
  {
    title: 'Quiet Hours',
    content: 'As the property is located in a peaceful residential setting, we request guests to respect quiet hours, especially during late evenings and early mornings.',
  },
  {
    title: 'Smoking',
    content: 'Smoking is permitted only in designated outdoor areas. Smoking inside the rooms or common areas is not allowed.',
  },
  {
    title: 'Cancellation',
    content: 'Cancellation policies vary based on the booking platform used. For direct bookings, please contact us for our cancellation terms.',
  },
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Stay Options', path: '/stay-options' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Location', path: '/location' },
  { name: 'Policies', path: '/policies' },
  { name: 'Contact', path: '/contact' },
];
