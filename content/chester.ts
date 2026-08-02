// Chester memorial page content.
// 9 sections, stub copy — replace with Sona's full brand document text.
// Dates updated to reflect 2015–2026.

export type ChesterSection = {
  id: string;
  heading: string;
  body: string;
};

export const chesterContent = {
  dates: "2015–2026",
  lede: "Ten years, one village.",

  sections: [
    {
      id: "the-two-of-us",
      heading: "The two of us",
      body: "Before there was a village, there were two of us. Chester came home small enough to carry in one arm, already certain he was the most important thing in any room. He was right. From the first morning we walked out the door together, something shifted. The world got a little warmer, a little more possible. This is that story.",
    },
    {
      id: "a-boy-from-bangalore",
      heading: "A boy from Bangalore",
      body: "Chester was born in Bangalore in 2015, into a litter that didn't know it was about to change someone's life. He arrived on a Tuesday and immediately began organizing the household around his own schedule. By Friday, we had forgotten what the apartment felt like before him. He had a gift for that, making you forget the before.",
    },
    {
      id: "the-move",
      heading: "The move",
      body: "Moving a dog across the world is equal parts paperwork and devotion. There are vaccinations and titer tests and government stamps and airline cargo holds and a checklist that grows longer every time you think you're done. Chester endured all of it with the patience of someone who trusted the destination would be worth it. He was right about that too.",
    },
    {
      id: "life-in-san-francisco",
      heading: "Life in San Francisco",
      body: "San Francisco suited Chester in a way Mumbai never quite had. The hills gave him purpose. The fog gave him mystery. The people, so many people, gave him what he actually came here for: an audience. He turned sidewalks into gathering places. He turned strangers into friends. He turned a city full of people trying to mind their own business into something that felt, improbably, like a neighborhood.",
    },
    {
      id: "a-brother-named-shadow",
      heading: "A brother named Shadow",
      body: "Shadow arrived three years after Chester and spent the first week uncertain about the arrangement. Chester spent that same week being relentlessly, aggressively welcoming in the way only golden retrievers can be. By week two, they had established a hierarchy and a rhythm. Chester led; Shadow followed. Chester befriended; Shadow observed. They balanced each other in ways we still don't fully understand.",
    },
    {
      id: "making-friends",
      heading: "Making friends",
      body: "Chester had a theory about people that he never stopped testing. The theory was that everyone, given the right introduction, would turn out to be interesting. He introduced himself to thousands of people in his ten years. He was right about almost all of them. The ones who crouched down, who laughed, who pulled out their phones to show you their own dog, those are the people who built this village.",
    },
    {
      id: "the-diagnosis",
      heading: "The diagnosis",
      body: "In the autumn of 2025, Chester was diagnosed with hemangiosarcoma. It is a cancer that moves quickly and announces itself late, and the vet who delivered the news was kind in the way that good vets learn to be. We had months, maybe. We had the village, definitely. Chester did not seem particularly concerned. He had walks to take and people to meet, and he saw no reason to stop.",
    },
    {
      id: "the-village-showed-up",
      heading: "The village showed up",
      body: "What happened next is the reason Chester's Village exists as something more than a memory. People came. They sent meals and walked with us and sat with Chester on the good days. They texted at midnight when they were worried and showed up in the morning when they said they would. The village he had spent ten years building turned around and held him. We did not expect that. He probably did.",
    },
    {
      id: "closing",
      heading: "Closing",
      body: "Chester died on a Tuesday morning in January 2026, at home, with both of us beside him. He was ten years old and had used every single one of them. The village he made is still here. It meets for morning walks and beach brunches and winter treats. It checks in on each other and shares vet recommendations and remembers his name. That's what villages do. That's what he knew they would do. We're just keeping it going.",
    },
  ] satisfies ChesterSection[],

  // Gallery images for the SF Life carousel
  gallery: [
    {
      src: "/images/chester/01.jpg",
      alt: "Chester at Ocean Beach",
      caption: "Ocean Beach, 2018",
      tint: "bg-honey/15",
    },
    {
      src: "/images/chester/02.jpg",
      alt: "Chester on a hike at Lands End",
      caption: "Lands End, 2019",
      tint: "bg-teal/15",
    },
    {
      src: "/images/chester/03.jpg",
      alt: "Chester at the Farmers Market",
      caption: "Ferry Building, 2020",
      tint: "bg-lavender/20",
    },
    {
      src: "/images/chester/04.jpg",
      alt: "Chester in Yosemite",
      caption: "Yosemite, 2021",
      tint: "bg-olive/15",
    },
    {
      src: "/images/chester/05.jpg",
      alt: "Chester with Shadow",
      caption: "Home, 2022",
      tint: "bg-honey/20",
    },
  ],
};
