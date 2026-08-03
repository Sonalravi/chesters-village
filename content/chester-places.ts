// Chester's footprint — built from files in /public/images/chester/places/.
// Sorted alphabetically. First entry (Bernal Heights) is featured: pre-opens on map load.
// Coordinates are approximate geocodes. Captions left for Sona to add.

export type ChesterPlace = {
  name: string;
  region: string;
  coords: [number, number]; // [lat, lng]
  photo: string;
  caption?: string;
  featured?: boolean; // pre-opens on map load
};

export const chesterPlaces: ChesterPlace[] = [
  {
    name: "Bernal Heights",
    region: "San Francisco",
    coords: [37.7449, -122.4151],
    photo: "/images/chester/places/bernal-heights.jpg",
    featured: true,
  },
  {
    name: "Briones Regional Park",
    region: "East Bay",
    coords: [37.9268, -122.1317],
    photo: "/images/chester/places/briones-regional-park.jpg",
  },
  {
    name: "Donner Pass",
    region: "Sierra Nevada",
    coords: [39.3123, -120.3241],
    photo: "/images/chester/places/donner-pass.jpg",
  },
  {
    name: "Half Moon Bay",
    region: "Bay Area",
    coords: [37.4636, -122.4286],
    photo: "/images/chester/places/half-moon-bay.jpg",
  },
  {
    name: "Lake Tahoe",
    region: "Sierra Nevada",
    coords: [39.0968, -120.0324],
    photo: "/images/chester/places/lake-tahoe.jpg",
  },
  {
    name: "Lassen Volcanic National Park",
    region: "Northern California",
    coords: [40.4977, -121.4207],
    photo: "/images/chester/places/lassen-volcanic-national-park.jpg",
  },
  {
    name: "Mill Valley",
    region: "Marin County",
    coords: [37.9060, -122.5450],
    photo: "/images/chester/places/mill-valley.jpg",
  },
  {
    name: "Monte Rio Beach",
    region: "Sonoma County",
    coords: [38.4618, -122.9046],
    photo: "/images/chester/places/monte-rio-beach.JPG",
  },
  {
    name: "Mountain Lake Park",
    region: "San Francisco",
    coords: [37.7854, -122.4769],
    photo: "/images/chester/places/mountain-lake-park.JPG",
  },
  {
    name: "Mt Shasta",
    region: "Northern California",
    coords: [41.4092, -122.1949],
    photo: "/images/chester/places/mt-shasta.jpg",
  },
  {
    name: "Mt Tam",
    region: "Marin County",
    coords: [37.9235, -122.5965],
    photo: "/images/chester/places/mt-tam.JPEG",
  },
  {
    name: "Ocean Beach",
    region: "San Francisco",
    coords: [37.7694, -122.5107],
    photo: "/images/chester/places/ocean-beach.jpg",
  },
  {
    name: "Reno",
    region: "Nevada",
    coords: [39.5296, -119.8138],
    photo: "/images/chester/places/reno.jpg",
  },
  {
    name: "Siskiyou Lake",
    region: "Northern California",
    coords: [41.3099, -122.3108],
    photo: "/images/chester/places/siskiyou-lake.jpg",
  },
  {
    name: "Strawberry Hill",
    region: "San Francisco",
    coords: [37.7696, -122.4756],
    photo: "/images/chester/places/strawberry-hill.JPG",
  },
  {
    name: "Tilden Regional Park",
    region: "East Bay",
    coords: [37.8999, -122.2440],
    photo: "/images/chester/places/tilden-regional-park.jpg",
  },
  {
    name: "Truckee",
    region: "Sierra Nevada",
    coords: [39.3280, -120.1833],
    photo: "/images/chester/places/truckee.JPEG",
  },
  {
    name: "Virginia City",
    region: "Nevada",
    coords: [39.3097, -119.6490],
    photo: "/images/chester/places/virginia-city.jpg",
  },
];
