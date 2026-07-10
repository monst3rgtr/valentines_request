# A Digital Love Letter

A single-page, no-framework website (HTML + CSS + vanilla JS) built as a love letter. Loading screen, animated hero, a story timeline, 100 flip-card reasons, a live love counter, a photo gallery with lightbox, a typewriter letter, an interactive heart, a spinning "reasons wheel," future dreams, floating sticky notes, a music player, a confetti surprise button, a final scene, and a handful of easter eggs.

## Run it

No build step, no dependencies. Just open `index.html` in a browser, or serve the folder locally:

```
npx serve .
```

or in Python:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Personalize it — everything lives in one place

Open `script.js` and edit the `CONFIG` object at the top of the file:

| Field | What it does |
|---|---|
| `herName` / `yourName` | Shown in the hero subheading and the final signature |
| `startDate` | ISO date string used for the live love counter |
| `timeline` | The "Our Story" cards — title, date label, short paragraph |
| `reasons` | The 100 reasons — also feeds the flip-card grid and the spin wheel |
| `gallery` | Captions for the photo grid (see "Adding real photos" below) |
| `dreams` | The "Future Dreams" cards |
| `notes` | The floating sticky notes (short text + the longer message revealed on click) |
| `playlist` | Track titles/artists/file paths for the music player |
| `loveLetter` | The full text that types itself out in the letter section |

Your name and her name in the hero/final section can also be edited directly in `index.html` if you prefer (look for `data-edit="her-name"` and `data-edit="your-name"`), but `script.js` will overwrite them with `CONFIG.herName` / `CONFIG.yourName` on load, so editing the config is the reliable way.

## Adding real photos

The gallery and timeline currently use styled placeholder blocks (so the site runs with zero assets). To use real photos:

1. Drop image files into `assets/images/`.
2. In `script.js`, inside `initGallery()`, replace the `<div class="gallery-media">...</div>` line with an `<img src="assets/images/your-file.jpg" alt="...">`.
3. Do the same for `.timeline-media` inside `initTimeline()` if you want photos in the story section.

## Adding real music

1. Drop audio files (mp3/ogg) into `assets/music/`.
2. In `script.js`, set the `src` field for each track in `CONFIG.playlist`, e.g. `src: "assets/music/our-song.mp3"`.
3. Playback, previous/next, volume, and the progress bar all work automatically once a `src` is present. Browsers block autoplay with sound until the user interacts with the page, so the player is play-button-triggered by design.

## Easter eggs

- **Konami code** (&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a) unlocks a hidden message.
- Typing **"I LOVE YOU"** anywhere on the page triggers a burst of hearts.
- **Double-clicking** the background spawns floating hearts.
- Pressing **H** makes hearts rain.

## Notes on structure

- `index.html` — semantic markup for every section, content-light (dynamic parts like the reasons grid, timeline, gallery, notes, and dreams are rendered from `CONFIG` in `script.js`).
- `style.css` — design tokens as CSS variables at the top, then one block per section. Includes a `prefers-reduced-motion` override and mobile/tablet/landscape breakpoints.
- `script.js` — one `init...()` function per feature, all called from a single `DOMContentLoaded` listener. No external libraries.
- `assets/images/`, `assets/music/`, `assets/fonts/` — empty on purpose; see above for how to populate them. Google Fonts (Poppins, Playfair Display) are loaded from a CDN in `index.html`, so `assets/fonts/` is only needed if you want to self-host.

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables ambient animation).
- Visible focus states on all interactive elements.
- Custom cursor and mouse-follow glow disable automatically on touch devices.
- Canvas starfield and confetti are lightweight and clean themselves up after use.
