# Chester's Village Website

## Project overview

Marketing and community site for Chester's Village, a dog owner community founded by Sonal Ravi (Sona). This is v1: a three-page site that showcases the community, honors the founder's dog Chester, and drives WhatsApp community sign-ups.

**Domain:** chestersvillage.com
**Deployment target:** Vercel (Hobby tier, free)
**Primary CTA:** "Join now" leading to the Chester's Village WhatsApp community

## Stack

- Next.js 15 (App Router) with TypeScript
- Tailwind CSS
- shadcn/ui for base components
- Content in typed TypeScript files under `/content/` (no CMS for v1)
- Photos in `/public/images/` for v1, migrate to Cloudinary if archive exceeds ~50 images

## Site structure

Three routes:

- `/` — homepage: hero, story preview, meetup visuals, live-ish member count, join CTA, footer
- `/chester` — tribute page: full story of Chester, Sona's journey with him (India to SF), bucket list moments, curated Chester photo gallery
- `/pups` — village directory: grid of member dogs with each pup's name displayed below

## Design system

### Colors (final)

```
Background       #FBF7EF   warm cream, base for entire site
Ink              #2B2019   deep warm espresso, primary text (never pure black)
Muted ink        #6B5D50   secondary text, captions
Teal             #7AAFA8   primary accent, CTAs, links
Lavender         #C9AFD3   secondary accent
Olive            #A8B368   tertiary accent
Honey            #E8B04A   Chester anchor, sparkles, hero flourishes
Card surface     #FFFFFF   cards lifted from cream background
```

Set these as CSS variables in `globals.css` and expose them through Tailwind's `theme.extend.colors` so they're usable as utility classes (`bg-cream`, `text-ink`, `text-teal`, etc.).

### Typography

- **Fraunces** (Google Fonts): display everywhere, plus body text on `/chester`
- **Inter** (Google Fonts): body text on `/` and `/pups`
- **Caveat** (Google Fonts): pup names on `/pups` ONLY, nowhere else

Load via `next/font/google`. Three-typeface budget, don't add more.

### Illustration system

- One hand-drawn Chester silhouette (adult, sitting pose, line drawing) as the primary brand mark. Use sparingly: favicon, footer signature, watermark at top of `/chester`, occasional divider on `/pups`. Never more than once per screen. **Placeholder for now — a real SVG asset will be added later.**
- One 4-point sparkle glyph, used exactly three places on the entire site: next to the hero tagline, next to the member count number, next to the join CTA.
- Paw print icon as list markers on `/pups` only.
- **Explicitly avoid:** banners, starbursts, balloons, party-industry decorative motifs.

### Motion and interaction

- Transitions: ~300ms ease-out. Nothing snappy.
- Photos: 2% scale on hover with no filters or darkening.
- `/chester` has NO parallax and no scroll-triggered animations. It reads like a book.
- `/pups` desktop-only delight: hovering a pup card reveals a caption (neighborhood or one-word vibe). Mobile stays static.

### Layout

- `/chester`: content column max 640px, full-bleed photos punctuate the prose
- `/` and `/pups`: content max 1200px
- Mobile-first, 375px minimum target width
- Generous vertical rhythm, section separation via whitespace, not divider lines

## Voice and tone

Warm, earnest, slightly literary. Never corporate, never nonprofit-formal, never event-industry-peppy. Emotional acknowledgment when relevant but efficient. Think Kinfolk magazine crossed with a small-town bulletin board.

### Established brand elements

- **Tagline:** Your dog's village in your pocket.
- **Vision:** Social infrastructure so every dog has a family that extends beyond their front door.
- **Mission:** Bring pet parents together and create a trusted support system that helps them navigate every stage of pet parenthood as a village.
- **Member noun:** villagers
- **Meetup names:** Sniff it out, Beach n Brunch, Frosty Paws, Happy hour with the hoomans

### Content sources

- Instagram: @chestersvillage
- Email: chestersvillage@gmail.com
- LinkedIn: https://www.linkedin.com/company/chester-s-village/
- WhatsApp community invite: https://chat.whatsapp.com/HNFyxdyh5mh1rARHJ47z64
- Origin story and mission details: full brand document exists (ask Sona for the markdown file)

## Writing conventions

- American English throughout
- Active voice, contractions welcome
- Oxford comma
- **No em dashes anywhere.** Use commas, semicolons, or parentheses instead.
- "0-1" not "zero-to-one"
- Sentence case for headings
- Banned phrases: "I hope this finds you well," "delighted to," "leverage," "at scale," "we're on a mission to," "join our community" (say "join the village")

## Development workflow

- Review all code changes before committing
- Small focused commits with clear messages
- Deploy to Vercel by pushing to main
- Content edits happen by editing typed TypeScript files under `/content/`
- Member count is hardcoded in `/content/site.ts`, updated manually when Sona wants to bump it

## Current build phase

Initial scaffolding. Placeholder content is fine; polish comes after structure works. Priority order:

1. Scaffold Next.js with palette, fonts, and route stubs
2. Build homepage sections in order: Hero, Story, Meetups, MemberCount, JoinCTA, Footer
3. Deploy to Vercel and connect chestersvillage.com
4. Build `/pups` grid with placeholder pup data
5. Build `/chester` tribute page (this one gets slower, more careful design)
6. Real content pass (copy, photos, testimonials)
