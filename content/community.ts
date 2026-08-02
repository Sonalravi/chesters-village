// Community stories for homepage preview + /village community section
// Bean rescue is the first real story. Others are placeholders for Sona to fill.

export type CommunityStory = {
  id: string;
  title: string;
  body: string;
  placeholder: boolean; // true = show dashed placeholder card
};

export const communityStories: CommunityStory[] = [
  {
    id: "bean-rescue",
    title: "How the village saved Bean",
    body: "When Bean's family had to travel unexpectedly, they posted in the group at 11pm. By 7am the next morning, three villagers had offered to split the care. Bean spent the week on a rotating schedule of walks, cuddles, and snacks he definitely wasn't supposed to have. He came home fatter and happier. The village came through the way villages do.",
    placeholder: false,
  },
  {
    id: "story-placeholder-1",
    title: "Your story goes here",
    body: "",
    placeholder: true,
  },
  {
    id: "story-placeholder-2",
    title: "Your story goes here",
    body: "",
    placeholder: true,
  },
];
