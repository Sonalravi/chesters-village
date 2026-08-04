"use client";

// Interactive book carousel for /chester — three chapters, two-page spread on desktop,
// single-page portrait on mobile. Wraps react-pageflip (HTMLFlipBook).

import { useRef, useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import PawPrint from "@/components/ui/paw-print";

// ── Paper texture ──────────────────────────────────────────────────────────────
// Very low-opacity feTurbulence SVG applied as CSS background-image on every page.
const NOISE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

const PAGE_STYLE: React.CSSProperties = {
  backgroundColor: "#FBF7EF",
  backgroundImage: NOISE_BG,
};

// ── BookPage — forwardRef wrapper required by react-pageflip ───────────────────
const BookPage = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; hasBorderRight?: boolean }
>(({ children, hasBorderRight }, ref) => (
  <div
    ref={ref}
    style={PAGE_STYLE}
    className={`relative h-full overflow-hidden${hasBorderRight ? " border-r border-ink/[0.06]" : ""}`}
  >
    {children}
  </div>
));
BookPage.displayName = "BookPage";

// ── Left page — centered photo ─────────────────────────────────────────────────
function LeftContent({ photo, alt }: { photo?: string; alt?: string }) {
  return (
    <div className="flex h-full items-center justify-center p-6 sm:p-10">
      {photo ? (
        <div className="relative w-full max-w-[260px] overflow-hidden rounded-2xl shadow-warm">
          <Image
            src={photo}
            alt={alt ?? ""}
            width={260}
            height={340}
            className="w-full object-cover"
            sizes="260px"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/5] w-full max-w-[220px] items-center justify-center rounded-2xl border-2 border-dashed border-olive/40">
          <p className="font-caveat text-sm text-muted-ink/50">photo goes here</p>
        </div>
      )}
    </div>
  );
}

// ── Right page — chapter number + title + prose ────────────────────────────────
function RightContent({
  chapter,
  title,
  prose,
}: {
  chapter: string;
  title: string;
  prose: string[];
}) {
  return (
    <div className="relative flex h-full flex-col justify-start overflow-hidden p-6 sm:p-10">
      {/* Chapter number — top-right corner */}
      <p className="absolute right-5 top-5 font-fraunces text-[11px] tracking-widest text-muted-ink/40 uppercase">
        {chapter}
      </p>

      {/* Honey paw + chapter title */}
      <div className="mt-8 mb-5">
        <PawPrint className="mb-3 h-5 w-5 text-honey" />
        <h3 className="font-fraunces text-2xl font-bold leading-tight text-ink sm:text-3xl">
          {title}
        </h3>
      </div>

      {/* Prose */}
      <div className="space-y-3 overflow-y-auto pr-1">
        {prose.map((p, i) => (
          <p key={i} className="font-fraunces text-sm leading-relaxed text-ink/72 sm:text-[0.9rem]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Chapter data ───────────────────────────────────────────────────────────────
const CHAPTERS = [
  {
    number: "Chapter 01",
    title: "Air Bud",
    photo: undefined,
    prose: [
      "[Placeholder.] His name was Chester, and from the very beginning, it was clear he was something. Not in the way people say that about things they love and want to protect. In the way you sense it before you can name it.",
      "[Placeholder.] He ran the way things run when they're not thinking about running. He moved through space like it was made for him, like every room had been quietly arranged in his favor before he arrived. Strangers stopped to watch. Kids pointed. Adults pretended not to look.",
      "[Placeholder.] This is the part of the story that's hardest to explain to someone who never met him. He was a dog. He was also, unambiguously, more than that. He had the quality that great athletes have: a certainty in his body that read, from across the room, as joy.",
    ],
  },
  {
    number: "Chapter 02",
    title: "Bangalore",
    photo: "/images/chester/story/baby-01.jpg",
    prose: [
      "[Placeholder.] He came home in 2015, small enough to fit in two hands, already certain of himself. He had opinions about his food bowl. He had opinions about the couch. He had opinions about which neighbors deserved to be greeted at the gate.",
      "[Placeholder.] Bangalore gave him a city to practice on. Mornings in the park with the same cast of regulars until they weren't strangers anymore. Afternoons napping in patches of sun. He grew fast, which golden retrievers do, and yet somehow stayed puppy-shaped in the ways that mattered.",
      "[Placeholder.] He learned what he loved: people, mostly. Then movement. Then people who were also moving. He built a social life that most humans would envy, organized entirely around who was walking past and whether they seemed like the kind of person who would stop.",
    ],
  },
  {
    number: "Chapter 03",
    title: "San Francisco",
    photo: "/images/chester/story/hero-adult.jpg",
    prose: [
      "[Placeholder.] When they came to San Francisco, he arrived like he'd always been on his way. The fog didn't bother him. The hills were an invitation. Ocean Beach became his cathedral — the particular combination of salt and space and the option to run as fast as he could.",
      "[Placeholder.] He made friends the way he always had, but more. The city gave him more people to practice on. Regulars at Mountain Lake Park. Families at Bernal Heights. Strangers on every trail who became, after Chester, strangers he recognized.",
      "[Placeholder.] What he was building, without knowing it, was a village. Person by person, park by park, introduction by introduction. The kind of community that forms slowly and then feels, in retrospect, inevitable. The kind that outlasts the reason it started.",
    ],
  },
];

// ── ChesterBook ────────────────────────────────────────────────────────────────
export default function ChesterBook() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageW, setPageW] = useState(380);
  const [pageH, setPageH] = useState(480);
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setPortrait(mobile);
      setPageW(mobile ? 320 : 400);
      setPageH(mobile ? 460 : 500);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleFlip = (e: any) => setCurrentPage(e.data);
  const activeChapter = Math.floor(currentPage / 2);
  const totalSpreads = CHAPTERS.length;

  const goNext = () => bookRef.current?.pageFlip()?.flipNext();
  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const goTo = (chapterIdx: number) =>
    bookRef.current?.pageFlip()?.flip(chapterIdx * 2);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Book */}
      <div className="w-full overflow-hidden rounded-2xl shadow-warm">
        <HTMLFlipBook
          ref={bookRef}
          width={pageW}
          height={pageH}
          size="fixed"
          usePortrait={portrait}
          drawShadow
          flippingTime={700}
          onFlip={handleFlip}
          className=""
          style={{}}
          startPage={0}
          minWidth={280}
          maxWidth={500}
          minHeight={400}
          maxHeight={600}
          showCover={false}
          mobileScrollSupport
          useMouseEvents
          clickEventForward
          maxShadowOpacity={0.25}
          showPageCorners
          disableFlipByClick={false}
          autoSize={false}
          startZIndex={0}
          swipeDistance={30}
        >
          {/* Chapter 1 */}
          <BookPage hasBorderRight>
            <LeftContent />
          </BookPage>
          <BookPage>
            <RightContent
              chapter={CHAPTERS[0].number}
              title={CHAPTERS[0].title}
              prose={CHAPTERS[0].prose}
            />
          </BookPage>

          {/* Chapter 2 */}
          <BookPage hasBorderRight>
            <LeftContent photo={CHAPTERS[1].photo} alt="Chester as a puppy in Bangalore" />
          </BookPage>
          <BookPage>
            <RightContent
              chapter={CHAPTERS[1].number}
              title={CHAPTERS[1].title}
              prose={CHAPTERS[1].prose}
            />
          </BookPage>

          {/* Chapter 3 */}
          <BookPage hasBorderRight>
            <LeftContent photo={CHAPTERS[2].photo} alt="Chester in San Francisco" />
          </BookPage>
          <BookPage>
            <RightContent
              chapter={CHAPTERS[2].number}
              title={CHAPTERS[2].title}
              prose={CHAPTERS[2].prose}
            />
          </BookPage>
        </HTMLFlipBook>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <button
          onClick={goPrev}
          disabled={currentPage === 0}
          className="font-fraunces text-sm text-muted-ink/60 transition-colors hover:text-ink disabled:opacity-25"
          aria-label="Previous chapter"
        >
          ← Previous
        </button>

        {/* Chapter dot indicators */}
        <div className="flex items-center gap-3">
          {CHAPTERS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to chapter ${i + 1}`}
              className={`font-fraunces text-xs tracking-wider transition-colors ${
                activeChapter === i ? "text-honey" : "text-muted-ink/35 hover:text-muted-ink/70"
              }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentPage >= (totalSpreads - 1) * 2}
          className="font-fraunces text-sm text-muted-ink/60 transition-colors hover:text-ink disabled:opacity-25"
          aria-label="Next chapter"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
