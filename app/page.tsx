import Hero from "@/components/sections/hero";
import HomePupsPreview from "@/components/sections/home-pups-preview";
import HomeEventsPreview from "@/components/sections/home-events-preview";
import HomeCommunityPreview from "@/components/sections/home-community-preview";
import JoinCTA from "@/components/sections/join-cta";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <HomePupsPreview />
      <HomeEventsPreview />
      <HomeCommunityPreview />
      <JoinCTA />
    </main>
  );
}
