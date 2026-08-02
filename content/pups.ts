// Pup directory — real photos in /public/images/pups/
// Sorted alphabetically by name.
// caption: neighborhood or one-word vibe, shown on desktop hover only.

export type Pup = {
  name: string;
  image: string;
  caption: string;
};

export const pups: Pup[] = [
  { name: "Maui", image: "/images/pups/maui.jpg", caption: "Golden hour regular" },
  { name: "Nico", image: "/images/pups/nico.jpg", caption: "Very diplomatic" },
  { name: "Sam", image: "/images/pups/sam.jpg", caption: "Founding villager" },
  { name: "Snowflake", image: "/images/pups/snowflake.jpg", caption: "Pure of heart" },
  { name: "Toffee", image: "/images/pups/toffee.jpg", caption: "Sweetest in the pack" },
  { name: "Toto", image: "/images/pups/toto.JPG", caption: "Always first to arrive" },
  { name: "Whiskey", image: "/images/pups/whiskey.JPG", caption: "Chaotic good" },
  { name: "Yuki", image: "/images/pups/yuki.JPG", caption: "Deeply unbothered" },
];
