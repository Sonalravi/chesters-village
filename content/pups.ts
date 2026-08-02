// Pup directory — replace placeholder entries with real member submissions.
// image: path under /public/images/pups/ (add files there when photos arrive).
// caption: neighborhood or one-word vibe, shown on desktop hover only.

export type Pup = {
  name: string;
  image: string;
  caption: string;
};

export const pups: Pup[] = [
  { name: "Biscuit", image: "/images/pups/biscuit.jpg", caption: "Noe Valley" },
  { name: "Luna", image: "/images/pups/luna.jpg", caption: "Mellow" },
  { name: "Mango", image: "/images/pups/mango.jpg", caption: "The Sunset" },
  { name: "Olive", image: "/images/pups/olive.jpg", caption: "Spirited" },
  { name: "Pretzel", image: "/images/pups/pretzel.jpg", caption: "The Mission" },
  { name: "Waffles", image: "/images/pups/waffles.jpg", caption: "Chaotic good" },
  { name: "Cheddar", image: "/images/pups/cheddar.jpg", caption: "Pacific Heights" },
  { name: "Fig", image: "/images/pups/fig.jpg", caption: "Gentle" },
  { name: "Clover", image: "/images/pups/clover.jpg", caption: "Glen Park" },
  { name: "Nori", image: "/images/pups/nori.jpg", caption: "Unbothered" },
  { name: "Peanut", image: "/images/pups/peanut.jpg", caption: "The Castro" },
  { name: "Sage", image: "/images/pups/sage.jpg", caption: "Very serious" },
];
