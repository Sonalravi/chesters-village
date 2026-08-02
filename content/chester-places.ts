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
];
