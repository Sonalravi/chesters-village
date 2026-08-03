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
    body: "The night I lost Bean, I was dog-sitting for a friend. He slipped out through a gap in my patio while I wasn't watching. I panicked. I posted in the group. And then the village did what it does. For twelve hours, people I'd never asked walked their own neighborhoods with their phones out, calling his name. Someone spotted him. Posted a photo. His human came running, and Bean barked the second he heard his person's voice. I started Chester's Village. That night, the village held me back.",
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
