// Homepage: Hero → Story → Meetups → MemberCount → JoinCTA → Footer

import Hero from "@/components/sections/hero";
import StoryPreview from "@/components/sections/story-preview";
import Meetups from "@/components/sections/meetups";
import MemberCount from "@/components/sections/member-count";
import JoinCTA from "@/components/sections/join-cta";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <StoryPreview />
      <Meetups />
      <MemberCount />
      <JoinCTA />
    </main>
  );
}
