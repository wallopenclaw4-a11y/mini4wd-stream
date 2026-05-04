# Mini 4WD STREAM — QA Test Plan

## Test Environment
- **Device:** iPad Mini / iPad Air (or tablet-sized browser)
- **Browser:** Safari or Chrome
- **Language:** zh-HK primary, English secondary
- **URL:** https://mini4wd-stream.zeabur.app (placeholder — Wallace will set up)
- **Local dev:** `cd /home/node/mini4wd-stream && yarn dev`

---

## Build Verification

### ✅ Build Pass
- [ ] `yarn build` passes without errors
- [ ] All 8 pages generate as static HTML in `out/`:
  - `out/index.html` — Home
  - `out/parts/index.html` — Parts Explorer
  - `out/assembly/index.html` — Assembly Guide
  - `out/designer/index.html` — My Car Designer
  - `out/games/math/index.html` — Math Games
  - `out/404.html` — Not Found fallback
  - `out/404/index.html`
- [ ] No TypeScript errors (`yarn tsc --noEmit` clean)
- [ ] No console.log debugging statements in production build

### ⚠️ Debug Console.log Found — Flag for Cleanup
The following files contain `console.log` debugging statements that should be removed before production:
```
app/designer/components/CarCanvas.tsx:5
app/games/math/components/SortBySize.tsx:5
app/games/math/components/SpeedCompare.tsx:5
app/games/math/components/CountHoles.tsx:5
app/parts/components/PartCard.tsx:5
app/parts/components/PartGrid.tsx:5
app/parts/components/PartModal.tsx:7
app/parts/components/ExplodedView.tsx:5
app/assembly/components/ToolHint.tsx:7
app/assembly/components/StepView.tsx:5
```

---

## Test Coverage Areas

### Home Page (`/`)
- [ ] Page loads with 3 section cards (Parts Explorer, Assembly Guide, My Car Designer)
- [ ] Each card navigates to correct section
- [ ] Card animations work (hover/tap scale effects via Framer Motion)
- [ ] Bilingual text displays correctly (Chinese primary, English secondary)
- [ ] No overflow on tablet portrait (768px width)
- [ ] Touch targets ≥ 44px

### Parts Explorer (`/parts`)
- [ ] Page loads with 10 parts displayed in 2-column grid
- [ ] Tap on part opens modal (PartModal)
- [ ] Modal shows bilingual name + description
- [ ] STREAM badge visible on each card
- [ ] Long-press triggers exploded view (ExplodedView overlay)
- [ ] Swipe/scroll works smoothly
- [ ] PartCard animations (hover/tap) work

### Assembly Guide (`/assembly`)
- [ ] 12 steps displayed
- [ ] Swipe navigation between steps works
- [ ] Progress indicator shows current step (StepProgress)
- [ ] Tool hint animations bounce correctly (ToolHint)
- [ ] Confetti plays on step complete (Confetti component)
- [ ] Parent hints display in Chinese
- [ ] Can navigate back to previous steps
- [ ] Assembly complete celebration at final step

### My Car Designer (`/designer`)
- [ ] Car body SVG renders (CarCanvas)
- [ ] Color picker works — tapping a color then the car fills it (ColorPicker)
- [ ] Stickers appear when tapped (StickerLibrary)
- [ ] Stickers can be dragged to reposition
- [ ] Save button stores to localStorage (SaveButton)
- [ ] Clear button resets canvas
- [ ] Share button shows share sheet (or graceful fallback)

### Math Mini-Games (`/games/math`)
- [ ] CountHoles: chassis SVG shows, tap counts correctly
- [ ] SortBySize: gears drag to correct slots, wrong slots reject
- [ ] SpeedCompare: slider moves, speed display updates

---

## Accessibility
- [ ] Touch targets ≥ 44px
- [ ] Text contrast ratio ≥ 4.5:1
- [ ] No content lost on 768px width
- [ ] No walls of text — max 1 line per label

---

## Known Issues to Watch For

1. **console.log debugging statements** — Many components have `console.log` that should be stripped before production (see build section above)

2. **TODO placeholders** — Several components are stubs:
   - `CountHoles.tsx` — placeholder UI, no actual count game
   - `SortBySize.tsx` — placeholder UI, no actual drag-sort game
   - `SpeedCompare.tsx` — placeholder UI, no actual slider game
   - `CarCanvas.tsx` — placeholder, no real SVG car or fill/sticker logic

3. **Spin Wheel & Letter Match** — Not found in current codebase. If these were intended features, they need to be built. If they should be removed, no action needed.

4. **Browser beforeunload warning** — Check if still present (was an issue in previous phonics-world project)

5. **Touch interactions on iOS vs Android tablet** — Test on actual device if possible

---

## Notes
- This is a static Next.js export — all pages are pre-rendered
- Framer Motion is used for animations
- Parts data appears to be hardcoded (no external data source)
- Assembly steps are mocked/stubbed (StepView just logs step number)