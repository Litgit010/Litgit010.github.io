# Build a Digital Observatory

## Goal
Create a production-quality astronomy publication that feels cinematic, scientifically credible, and image-led across desktop and mobile. The experience will use authoritative observational imagery and carefully distinguish real observations from scientific visualizations.

## Site structure
- **Cosmos — `/`**: near-full-screen astronomical image, restrained motion, carefully qualified universe statistics, and an editorial journey through the main topics.
- **Solar System — `/solar-system`**: horizontal planetary explorer from the Sun through Neptune, with selectable bodies, NASA imagery, core measurements, atmosphere/surface notes, and a clear not-to-scale label.
- **Deep Space — `/deep-space`**: full-bleed editorial viewer for galaxies, clusters, remnants, and other distant objects, with keyboard-accessible previous/next controls and scientific metadata.
- **Nebulas — `/nebulas`**: image-dominant gallery with a large-view dialog, common/scientific names, type, approximate distance, telescope, and verified credit.
- **Supernovas — `/supernovas`**: a visual narrative explaining stellar death, Type Ia versus core-collapse events, nucleosynthesis, and remnants.
- **Black Holes — `/black-holes`**: observation-led explanation of event horizons, accretion, gravity, stellar and supermassive black holes, including precise EHT attribution and explicit observation/visualization labels.
- **Missions — `/missions`**: editorial mission timeline covering JWST, Hubble, Voyager, Cassini, Mars exploration, New Horizons, Juno, and Parker Solar Probe.
- **Discoveries — `/discoveries`**: publication-style source index using dated, verifiable agency material; clearly presented as curated source material rather than live news.

## Visual and interaction system
- Establish a deep near-black/navy palette with graphite surfaces, cool-white typography, restrained blue/violet accents, and limited warm stellar highlights.
- Use an editorial display face paired with a technical sans serif, oversized cinematic titles, compact uppercase metadata, and tabular scientific data.
- Build a fixed translucent navigation bar, desktop section navigation, accessible mobile drawer, search overlay across the curated site content, reading/scroll progress, and a restrained footer with source links and non-affiliation language.
- Use real downloaded astronomical assets served locally for reliability and performance. Every major image will include meaningful alt text, its verified source credit, and a link to the originating institution where available.
- Apply subtle image drift, section reveals, and scale transitions using CSS and requestAnimationFrame only where they reinforce spatial depth; honor reduced-motion preferences.

## Signature experiences
- **Hero**: immersive real deep-space observation with legible editorial overlay, qualified cosmic statistics, and one focused exploration action.
- **Planet explorer**: a visually continuous system rather than a card grid, with selectable orbital markers and an adaptive information stage.
- **Cosmic scale**: stepped, scroll-linked progression from human scale to the observable universe, with approximate orders of magnitude and a fixed visual reference line.
- **Image viewer**: reusable, keyboard-operable full-screen viewing for deep-space and nebula imagery, with caption and attribution always available.
- **Mission timeline**: chronological rail with imagery, agency, dates, destination, status, and concise verified achievements.

## Technical approach
- Create shared navigation, footer, image-with-credit, section heading, data label, gallery viewer, and editorial content primitives.
- Keep scientific datasets and source records centralized and typed so facts, credits, URLs, and labels remain consistent across routes.
- Use native responsive images where source variants permit; otherwise cache high-resolution agency assets locally, crop with `object-fit`, lazy-load below the fold, and reserve dimensions to prevent layout shift.
- Add unique metadata for every route, semantic landmarks and headings, visible focus treatment, screen-reader labels, Escape handling for dialogs, touch-sized controls, and deliberate tablet/mobile compositions.
- Avoid generic card grids, excessive glass effects, decorative glow, fabricated news, exact-scale claims, and unlabelled artist concepts.

## Verification
- Check every factual statement, number, image credit, and observation/visualization label against NASA, ESA, STScI, JPL, EHT, or another primary scientific source.
- Review key pages at 1440px desktop, tablet, and mobile widths; verify image crops, navigation, dialogs, keyboard use, reduced motion, overflow, and readability.
- Run targeted code checks and inspect the live site for runtime, console, and failed-image errors.
- Finish with a senior design pass focused on hierarchy, repetition, alignment, visual credibility, and removing anything that feels template-like.
