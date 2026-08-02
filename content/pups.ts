// Pup directory — real photos in /public/images/pups/
// Sorted alphabetically by name.
// caption: neighborhood or one-word vibe, shown on desktop hover only.

export type Pup = {
  name: string;
  image: string;
  caption: string;
};

export const pups: Pup[] = [
  { name: "Bertie", image: "/images/pups/bertie.JPG", caption: "Dignified" },
  { name: "Chikku", image: "/images/pups/chikku.JPG", caption: "Full of opinions" },
  { name: "Darcy", image: "/images/pups/darcy.JPG", caption: "Noe Valley" },
  { name: "Dil", image: "/images/pups/dil.JPG", caption: "Soft and steady" },
  { name: "Josie", image: "/images/pups/josie.JPG", caption: "The Sunset" },
  { name: "Lilo", image: "/images/pups/lilo.JPG", caption: "Beach regular" },
  { name: "Lucy", image: "/images/pups/lucy.JPG", caption: "Pacific Heights" },
  { name: "Maui", image: "/images/pups/maui.jpg", caption: "Golden hour regular" },
  { name: "Myra", image: "/images/pups/myra.JPG", caption: "Gentle giant" },
  { name: "Nacho", image: "/images/pups/nacho.JPG", caption: "Chaotic good" },
  { name: "Nico", image: "/images/pups/nico-golden.JPG", caption: "Very diplomatic" },
  { name: "Oreo", image: "/images/pups/oreo.JPG", caption: "The Mission" },
  { name: "Remi", image: "/images/pups/remi.JPG", caption: "Unbothered" },
  { name: "Sam", image: "/images/pups/sam.jpg", caption: "Founding villager" },
  { name: "Snowflake", image: "/images/pups/snowflake.jpg", caption: "Pure of heart" },
  { name: "Toffee", image: "/images/pups/toffee.jpg", caption: "Sweetest in the pack" },
  { name: "Toto", image: "/images/pups/toto.JPG", caption: "Always first to arrive" },
  { name: "Whiskey", image: "/images/pups/whiskey.JPG", caption: "Chaotic good" },
  { name: "Yuki", image: "/images/pups/yuki.JPG", caption: "Deeply unbothered" },
  { name: "Zeus", image: "/images/pups/zeus.JPG", caption: "Commands the room" },
];
