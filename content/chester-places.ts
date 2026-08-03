// Chester's footprint — places he went in the Bay Area and beyond.
// Sona will expand this list. Photos live in /public/images/chester/places/.
// HEIC files have been converted to JPG in the same directory.

export type ChesterPlace = {
  name: string;
  region: string;
  coords: [number, number]; // [lat, lng]
  photo: string;
  caption?: string;
};

export const chesterPlaces: ChesterPlace[] = [
  {
    name: "Ocean Beach",
    region: "San Francisco",
    coords: [37.7694, -122.5107],
    photo: "/images/chester/places/ocean-beach.jpg",
    caption: "His favorite sprint. Full speed, straight into the surf.",
  },
  {
    name: "Mountain Lake Park",
    region: "San Francisco",
    coords: [37.7854, -122.4769],
    photo: "/images/chester/places/mountain-lake-park.JPG",
    caption: "Morning regulars became morning friends here.",
  },
  {
    name: "Tilden Regional Park",
    region: "East Bay",
    coords: [37.8999, -122.2440],
    photo: "/images/chester/places/tilden-regional-park.jpg",
    caption: "The hills gave him purpose.",
  },
  {
    name: "Briones Regional Park",
    region: "East Bay",
    coords: [37.9268, -122.1317],
    photo: "/images/chester/places/briones-regional-park.jpg",
    caption: "Off-leash and in his element.",
  },
  {
    name: "Monte Rio Beach",
    region: "Sonoma County",
    coords: [38.4618, -122.9046],
    photo: "/images/chester/places/monte-rio-beach.JPG",
    caption: "The river, the redwoods, and a very happy dog.",
  },
  {
    name: "Half Moon Bay",
    region: "Bay Area",
    coords: [37.4636, -122.4286],
    photo: "/images/chester/places/half-moon-bay.jpg",
    caption: "Pumpkin season, every year without fail.",
  },
  {
    name: "Truckee",
    region: "Sierra Nevada",
    coords: [39.3280, -120.1833],
    photo: "/images/chester/places/truckee.JPEG",
    caption: "Snow was his idea of a good time.",
  },
  {
    name: "Mill Valley",
    region: "Marin County",
    coords: [37.9060, -122.5450],
    photo: "/images/chester/places/mill-valley.jpg",
    caption: "Redwoods and off-leash trails. His idea of perfect.",
  },
  {
    name: "Mt. Tamalpais",
    region: "Marin County",
    coords: [37.9235, -122.5965],
    photo: "/images/chester/places/mt-tam.JPEG",
    caption: "The view from the top was wasted on him. He was busy sniffing.",
  },
  {
    name: "Lassen Volcanic National Park",
    region: "Northern California",
    coords: [40.4977, -121.4207],
    photo: "/images/chester/places/lassen-volcanic-national-park.jpg",
    caption: "The furthest north he ever went. He approved.",
  },
  {
    name: "Lake Tahoe",
    region: "Sierra Nevada",
    coords: [39.0968, -120.0324],
    photo: "/images/chester/places/lake-tahoe.jpg",
    caption: "The clearest water he ever ignored in favor of the shore.",
  },
  {
    name: "Bernal Heights",
    region: "San Francisco",
    coords: [37.7449, -122.4151],
    photo: "/images/chester/places/bernal-heights.jpg",
    caption: "The hill where he'd sit and survey his city.",
  },
  {
    name: "Strawberry Hill",
    region: "San Francisco",
    coords: [37.7696, -122.4756],
    photo: "/images/chester/places/strawberry-hill.JPG",
    caption: "Golden Gate Park, his second home.",
  },
  {
    name: "Siskiyou Lake",
    region: "Northern California",
    coords: [41.3099, -122.3108],
    photo: "/images/chester/places/siskiyou-lake.jpg",
    caption: "He swam here. Twice. Very proud.",
  },
];
