import FadeIn from "@/components/ui/fade-in";

export default function HomeWhyThisExists() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="max-w-[680px] font-fraunces text-xl italic leading-relaxed text-ink sm:text-2xl md:text-3xl">
            Chester&rsquo;s Village started because someone had to sit alone in the ER with her dog.
            And then a neighbor showed up. And another. What no app had built, one dog and a few
            strangers did on their own.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
