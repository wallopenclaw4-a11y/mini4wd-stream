# Mini 4WD STREAM Learning App — Feature Specification
# Mini 4WD STREAM 學習應用 — 功能規格說明書

---

## 1. Project Overview | 項目概覽

| Field | Detail |
|-------|--------|
| **Project Name** | Mini 4WD STREAM Learning App (Mini4WD-STREAM) |
| **Target Users** | Parents and children (aged 5) in Hong Kong doing mini 4WD assembly together |
| **Language** | Bilingual — Traditional Chinese (zh-HK) primary, English secondary |
| **Device** | Tablet (iPad / Android tablet), touch-first UI |
| **Tech Stack** | Next.js |
| **Structure** | Multi-section, multiple screens |

### Target Hardware Base | 目標硬件
Typical Tamiya entry-level chassis (e.g. TT-02):
`chassis, gearbox, gears, motor, wheels, axles, screws, body (shell), wings, carbon tape`

### Design Principles for a 5-Year-Old | 5歲兒童設計原則
- Single concept per screen
- Immediate joyful feedback on every interaction
- No walls of text
- Audio support for both languages
- Exploded view animations for parts
- Celebration / confetti when a step completes
- Tool hint animations (bouncing arrows)

---

## 2. Core Sections | 核心版塊

### 2.1 🔍 Parts Explorer | 零件探索區
**Purpose:** Let children tap a part → see its name + animation in both languages + hear audio pronunciation.

#### Features
| Feature | Detail |
|---------|--------|
| **Part Grid** | Scrollable 2-column grid of part illustrations (PNG/SVG) |
| **Tap to Explore** | Tap a part → pop-up shows: Chinese name + English name + animated tooltip + auto-play audio |
| **Bilingual Labels** | Each part shows 螺絲 / screw, 齒輪 / gear inline |
| **Animation on Tap** | Tooltip animates in (scale + fade), part glows, sound plays |
| **Audio** | Cantonese/粵語 narration for Chinese name + English word pronunciation |
| **Exploded View** | Long-press part → exploded view animation showing how it fits with adjacent parts |
| **STREAM Tag** | Each part has an STREAM badge (S/T/R/E/A/M) in corner |

#### Parts List
- 底盤 (Chassis)
- 波箱 (Gearbox)
- 齒輪 (Gear)
- 摩打 (Motor)
- 車輪 (Wheels)
- 車軸 (Axles)
- 螺絲 (Screws)
- 車殼 (Body / Shell)
- 定風翼 (Wings)
- 碳纖貼 (Carbon Tape)

#### Interaction Flow
```
Tap Part → Part highlights + pulses → Pop-up slides in (300ms ease-out)
→ Bilingual text displays → Audio plays automatically
→ Child taps "Got it!" → Pop-up dismisses + star reward animates
```

---

### 2.2 🧩 Assembly Guide | 組裝指南
**Purpose:** Step-by-step animated assembly tutorial. Parent and child follow swiping through steps.

#### Features
| Feature | Detail |
|---------|--------|
| **Swipe Navigation** | Horizontal swipe to advance/go-back steps; swipe hint arrow on first step |
| **Animated Steps** | Each step shows an animated exploded/assembled view (Lottie or CSS keyframe) |
| **Step Counter** | "Step 3 of 12" progress indicator |
| **Part Highlight** | Current part needed pulses with a bouncing arrow tool hint |
| **Audio Cue** | Each step has a short audio instruction (粵語 + English) |
| **Completion Celebration** | Confetti burst + cheerful sound when step completes |
| **Retry/Undo** | "Try again" button if step requires drag interaction |
| **Assembly Complete** | At final step → full car assembled view + "Well done!" banner |

#### STREAM Element Mapping
| Step | STREAM Element |
|------|----------------|
| Tap part in Parts Explorer first | R (Reading) — bilingual names |
| Screwdriver use animation | T (Technology) — tool use |
| Which part does what? | S (Science) — function of part |
| Follow sequence order | E (Engineering) — assembly sequence |
| Decorate at end | A (Arts) — optional coloring step |

#### Interaction Flow
```
Screen loads → Step 1 animation plays → Tap "Next" or swipe right
→ Confetti + sound → Step 2 loads → ... → Final step → Celebration
```

---

### 2.3 🎨 My Car Designer | 我的戰車設計師
**Purpose:** Simple color and decoration canvas for the car body.

#### Features
| Feature | Detail |
|---------|--------|
| **Car Body Canvas** | Pre-drawn car body outline (SVG) on canvas |
| **Color Fill** | 6–8 large color buttons; tap area to fill with selected color |
| **Sticker Stamps** | Pre-made sticker library (stars, lightning bolts, numbers, flames) |
| **Drag Stickers** | Drag-and-drop stickers onto car body |
| **Save Artwork** | "Save" button → stores to localStorage as PNG |
| **Clear Button** | "Start over" with confirmation |
| **Share** | "Share" button → native share sheet |

#### Sticker Library
- ⭐ Star
- ⚡ Lightning Bolt
- 🔥 Flame
- 1, 2, 3 Number circles
- 🏁 Checkered flag
- 💨 Speed lines

#### Interaction Flow
```
Open Designer → Default gray car body shown → Tap color → Tap body to paint
→ Tap sticker → Tap car to place → Drag to reposition
→ Tap "Save" → Thumbnail preview + confirmation
```

---

## 3. STREAM Framework Mapping | STREAM 框架對照

| Letter | Domain | How It Maps |
|--------|--------|-------------|
| **S** | Science | "What does this part do?" — tooltip animations on tap explain function |
| **T** | Technology | Drag-and-drop tool use — screwdriver, snap-together parts animation |
| **R** | Reading | Bilingual part names (螺絲/screw, 齒輪/gear). Tap to hear pronunciation |
| **E** | Engineering | Step-by-step assembly sequence with swipe-through animated steps |
| **A** | Arts | Decorate & color the car body. Drawing canvas + sticker stamps |
| **M** | Math | Count holes, sort parts by size, compare speeds. Sorting mini-game |

### Math Mini-Game | 數學小遊戲 (within Parts Explorer or separate screen)
- **Count the holes** — tap to count screw holes on chassis (1–4)
- **Sort by size** — drag small/medium/large gears into correct slots
- **Speed comparison** — slider to compare motor speeds (slow/fast)

---

## 4. Bilingual Content Strategy | 雙語內容策略

| Language | Role |
|----------|------|
| **Traditional Chinese (zh-HK)** | Primary UI language, Cantonese audio narration |
| **English** | Secondary labels, English pronunciation audio |

### Content Rules
- All UI labels in both languages (豬仔螺絲 / Pig Screw)
- Audio plays Cantonese first, then English
- No walls of text — max 1 line per label
- Font: Large, rounded, child-friendly (e.g. Noto Sans HK or system emoji)
- Tap anywhere for audio replay

### Bilingual Part Names (zh-HK + English)
| Part | 中文 | English |
|------|------|---------|
| Chassis | 底盤 | Chassis |
| Gearbox | 波箱 | Gearbox |
| Gear | 齒輪 | Gear |
| Motor | 摩打 | Motor |
| Wheels | 車輪 | Wheels |
| Axles | 車軸 | Axles |
| Screws | 螺絲 | Screws |
| Body | 車殼 | Body / Shell |
| Wings | 定風翼 | Wings |
| Carbon Tape | 碳纖貼 | Carbon Tape |

---

## 5. Animation & UX Requirements | 動畫與用戶體驗要求

| Animation | Spec |
|-----------|------|
| **Pop-up Entry** | scale(0.8)→scale(1) + opacity 0→1, 300ms ease-out |
| **Part Pulse** | scale 1→1.05→1, 600ms ease-in-out, infinite during highlight |
| **Tool Hint Bounce** | translateY 0→-10px→0, 800ms ease-in-out, infinite |
| **Confetti** | Canvas-based confetti burst, 2s duration, auto-dismiss |
| **Swipe Slide** | translateX ±100%→0, 250ms ease-out |
| **Exploded View** | Parts animate outward with 400ms stagger |
| **Step Complete** | Checkmark scale in + confetti, 500ms |

### Audio Spec
- Format: MP3 or WebM
- Cantonese narration: ~2s per label
- English pronunciation: ~1s per word
- Sound effects: pop, swoosh, cheerful ding, confetti pop

---

## 6. Suggested Component Structure | 建議組件結構

```
app/
├── layout.tsx                  # Root layout, font, global styles
├── page.tsx                   # Home screen — 3 section cards
│
├── parts/
│   └── page.tsx              # Parts Explorer
│   └── components/
│       ├── PartGrid.tsx       # 2-col grid of PartCard
│       ├── PartCard.tsx       # Tappable part card with badge
│       ├── PartModal.tsx      # Popup with name, audio, animation
│       └── ExplodedView.tsx   # Long-press exploded view overlay
│
├── assembly/
│   └── page.tsx              # Assembly Guide
│   └── components/
│       ├── StepView.tsx       # Single step with animation
│       ├── StepProgress.tsx   # "Step N of M" indicator
│       ├── ToolHint.tsx       # Bouncing arrow for tool
│       └── Confetti.tsx       # Celebration effect
│
├── designer/
│   └── page.tsx              # My Car Designer
│   └── components/
│       ├── CarCanvas.tsx      # SVG canvas with fill + stickers
│       ├── ColorPicker.tsx    # Color button row
│       ├── StickerLibrary.tsx # Draggable sticker grid
│       └── SaveButton.tsx     # localStorage + share
│
└── games/
    └── math/page.tsx          # Math mini-games
        └── components/
            ├── CountHoles.tsx # Count game
            ├── SortBySize.tsx  # Sort game
            └── SpeedCompare.tsx # Speed slider
```

---

## 7. Home Screen Layout | 主頁面佈局

Three large illustrated cards, each tappable:

| Card | Chinese | English |
|------|---------|---------|
| 🔍 | 零件探索區 | Parts Explorer |
| 🧩 | 組裝指南 | Assembly Guide |
| 🎨 | 我的戰車設計師 | My Car Designer |

Below cards (optional): **Math Games** shortcut badge.

Navigation: Bottom tab bar (3 tabs) OR top back button + home icon.

---

## 8. Technical Notes | 技術備註

- **Next.js App Router** (no SSR needed, static export acceptable)
- **Lottie** for complex animations (install lottie-react)
- **Framer Motion** for simple transitions
- **CSS Modules** or Tailwind for styling
- **localStorage** for saving artwork + progress
- **Web Audio API** or `<audio>` tag for sound
- **No external backend** — fully client-side
- **Responsive:** Optimized for tablet portrait mode; functional on phone in portrait
