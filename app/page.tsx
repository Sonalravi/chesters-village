import Hero from "@/components/sections/hero";
import HomeWhyThisExists from "@/components/sections/home-why-this-exists";
import HomeCommunityPreview from "@/components/sections/home-community-preview";
import HomePupsPreview from "@/components/sections/home-pups-preview";
import HomeEventsPreview from "@/components/sections/home-events-preview";
import JoinCTA from "@/components/sections/join-cta";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <HomeWhyThisExists />
      <HomeCommunityPreview />
      <HomePupsPreview />
      <HomeEventsPreview />
      <JoinCTA />
    </main>
  );
}
