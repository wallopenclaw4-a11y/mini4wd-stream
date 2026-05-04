# Mini 4WD STREAM Learning App — Design System Specification
# Mini 4WD STREAM 學習應用 — 設計系統規格說明書

---

## 1. Color Palette | 色彩系統

### Primary Colors | 主色
| Name | Hex | Usage |
|------|-----|-------|
| **Mini Red** | `#FF3B30` | Primary actions, important CTAs, car accent |
| **Racing Blue** | `#007AFF` | Secondary actions, links, info states |
| **Speed Yellow** | `#FFCC00` | Highlights, warnings, active states |
| **Success Green** | `#34C759` | Success states, completion, positive feedback |
| **Energy Orange** | `#FF9500` | Accent, tool hints, bouncing arrows |

### Background Colors | 背景色
| Name | Hex | Usage |
|------|-----|-------|
| **Cloud White** | `#FFFFFF` | Card backgrounds, canvas areas |
| **Soft Gray** | `#F5F5F7` | Screen backgrounds |
| **Warm Cream** | `#FFF8E7` | Home screen background (warmth) |
| **Deep Navy** | `#1C1C3E` | Dark mode / contrast sections |

### Text Colors | 文字色
| Name | Hex | Usage |
|------|-----|-------|
| **Text Primary** | `#1A1A2E` | Headings, important text |
| **Text Secondary** | `#4A4A6A` | Supporting text, labels |
| **Text Light** | `#FFFFFF` | Text on dark/colored backgrounds |

### STREAM Badge Colors | STREAM 標籤色彩
| Badge | Background | Text | Border |
|-------|-----------|------|--------|
| **S** Science | `#FF6B6B` | `#FFFFFF` | `#FF4757` |
| **T** Technology | `#4ECDC4` | `#FFFFFF` | `#26A69A` |
| **R** Reading | `#FFE66D` | `#1A1A2E` | `#FFD93D` |
| **E** Engineering | `#6C5CE7` | `#FFFFFF` | `#5849C4` |
| **A** Arts | `#FD79A8` | `#FFFFFF` | `#E84393` |
| **M** Math | `#00B894` | `#FFFFFF` | `#00A185` |

### Kid-Friendly Palette Notes
- All colors pass WCAG AA contrast for large text (4.5:1 minimum)
- Bright but not garish — avoid neon values
- Use `#FF3B30` sparingly (Mini Red is powerful)
- Background `#FFF8E7` (Warm Cream) reduces eye strain and feels playful

---

## 2. Typography | 字體系統

### Font Families | 字體選擇
```
Primary (Chinese): "Noto Sans HK", system-ui, sans-serif
  → Weights: 400 (Regular), 700 (Bold)

Secondary (English): "Nunito", "Comic Sans MS", system-ui, sans-serif
  → Weights: 400 (Regular), 600 (SemiBold), 800 (ExtraBold)

Rounded variant: "Fredoka One" for display/headers (playful rounded)
```

### Type Scale | 字體大小比例
| Token | Size | Usage | Line Height |
|-------|------|-------|-------------|
| **display** | 48px / 3rem | Celebration banners, "Well done!" | 1.2 |
| **h1** | 36px / 2.25rem | Screen titles, section headers | 1.3 |
| **h2** | 28px / 1.75rem | Card titles, modal headings | 1.35 |
| **h3** | 22px / 1.375rem | Part names in modal | 1.4 |
| **body** | 18px / 1.125rem | Body text, labels | 1.5 |
| **label** | 16px / 1rem | Secondary labels, UI hints | 1.5 |
| **caption** | 14px / 0.875rem | Metadata, audio timestamps | 1.4 |

### Bilingual Size Ratio | 雙語字體比例
- Chinese text: 100% of type scale (e.g., body = 18px)
- English text: 85% of Chinese size (e.g., body = 15px)
- This prevents English from dominating the layout

### Font Weight Usage
| Weight | Usage |
|--------|-------|
| 400 Regular | Body text, descriptions |
| 600 SemiBold | Part names, button labels |
| 700 Bold | Screen titles, CTAs |
| 800 ExtraBold | Display text, celebration text |

### Letter Spacing
- Chinese: `0.02em` (slight breathing room)
- English: `0.05em` (more natural for Latin)
- All caps English (STREAM badges): `0.1em`

---

## 3. Spacing & Layout | 空間與佈局系統

### Base Unit | 基礎單位
**8px grid system** — all spacing is a multiple of 8

| Token | Size | Usage |
|-------|------|-------|
| `space-xs` | 4px | Icon padding, tight gaps |
| `space-sm` | 8px | Inline element spacing |
| `space-md` | 16px | Component internal padding |
| `space-lg` | 24px | Card padding, section gaps |
| `space-xl` | 32px | Screen margins |
| `space-2xl` | 48px | Large section dividers |

### Component Padding
| Component | Padding |
|-----------|---------|
| Cards | 24px |
| Buttons (large) | 16px vertical, 32px horizontal |
| Modals | 24px |
| Tab bar | 16px vertical, 8px horizontal |
| Part cards | 16px |

### Grid System | 柵格系統
**Tablet (768px+)**: 2-column grid for Part Cards
**Tablet (1024px+)**: 3-column option for Parts Explorer
**Grid gap**: 16px (mobile), 24px (tablet)

### Safe Area Guidance | 安全區域
```
Top: 44px (avoid notch/rounded corners on iPad)
Bottom: 34px (home indicator space)
Left/Right: 16px (edge padding)
Content area: Full width minus 32px margins
```

### Screen Margins
| Device | Margin |
|--------|--------|
| Phone Portrait | 16px |
| Tablet Portrait | 24px |
| Tablet Landscape | 32px |

---

## 4. Component Patterns | 組件模式

### 4.1 PartCard | 零件卡片
**Purpose:** Tappable card in the Parts Explorer grid

**Visual Spec:**
- Size: Full-width in 2-col grid, aspect ratio 1:1
- Background: `#FFFFFF` with 12px border-radius
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Border: none (default), 3px `#FF3B30` (selected)
- Part illustration: centered SVG/PNG, 60% of card height
- STREAM badge: 28px circle, top-right corner, 8px inset
- Bilingual label: Part name at bottom, Chinese primary (18px bold), English secondary (15px regular)
- Audio icon: 🔊 (24px) at bottom-right, tap target 44x44px

**Interaction Spec:**
- Tap → scale(0.95) for 100ms, release → scale(1) + border highlight
- Part image pulses (scale 1→1.05→1, 600ms, infinite while highlighted)
- Long-press (500ms) → trigger ExplodedView

**States:**
| State | Visual Change |
|-------|--------------|
| Default | White bg, subtle shadow |
| Highlighted | Red border, pulsing part image |
| Pressed | scale(0.95), deeper shadow |
| Disabled | opacity 0.5, no interaction |

---

### 4.2 PartModal | 零件彈窗
**Purpose:** Popup showing part details after tapping

**Visual Spec:**
- Size: 85% screen width, auto height
- Position: centered, 60px from top
- Background: `#FFFFFF`, 20px border-radius
- Shadow: `0 8px 32px rgba(0,0,0,0.15)`
- Entry animation: scale(0.8)→scale(1) + opacity 0→1, 300ms ease-out
- Part image: centered, 40% of modal height
- Chinese name: h3 size, centered, `#1A1A2E`
- English name: body size, below Chinese, `#4A4A6A`
- STREAM badge: centered below text, 32px circle
- Audio replay button: 🔊, 44x44px tap target, centered
- "Got it!" button: Mini Red bg, white text, 48px height, full-width

**Interaction Spec:**
- Tap outside → dismiss
- Tap audio icon → replay audio
- Tap "Got it!" → modal scales out + star burst animation

---

### 4.3 StepView | 步驟視圖
**Purpose:** Single step in the Assembly Guide

**Visual Spec:**
- Full-screen container with step illustration centered
- Step indicator: "Step N of M" at top-center, caption size, `#4A4A6A`
- Progress bar: 8px height, Mini Red fill, beneath step counter
- Step illustration: 50% of screen height, centered
- Tool hint: bouncing arrow at part location (see ToolHint spec)
- Instruction text: body size, centered, max 1 line, both languages stacked
- Navigation buttons: "← Back" (left), "Next →" (right), 48px height
- Swipe gesture: horizontal swipe detected for navigation

**States:**
| State | Visual |
|-------|--------|
| Loading | Skeleton pulse |
| Active | Full content + tool hint animation |
| Completed | Checkmark overlay, confetti |
| Final | "Well done!" banner |

---

### 4.4 Confetti Effect | 彩帶慶祝效果
**Purpose:** Celebration when step completes or final assembly done

**Visual Spec:**
- Canvas-based, full-screen overlay
- Colors: Mix of Primary palette + STREAM badge colors
- Particle count: 150-200 particles
- Shapes: circles, squares, rectangles, small ribbons
- Physics: gravity fall + slight horizontal drift
- Duration: 2s total
- Entry: particles burst from bottom-center, spread upward
- Exit: fade out last 300ms

**Technical:**
```javascript
// Canvas 2D implementation
- requestAnimationFrame loop
- Each particle: {x, y, vx, vy, rotation, color, shape, size}
// Confetti colors array: ['#FF3B30', '#FFCC00', '#34C759', '#007AFF', '#FF9500', '#6C5CE7', '#FD79A8']
// Gravity: 0.3, air resistance: 0.99
```

---

### 4.5 ToolHint | 工具提示動畫
**Purpose:** Bouncing arrow pointing at the current part

**Visual Spec:**
- Arrow icon: custom SVG, 32px height
- Color: `#FF9500` (Energy Orange) with white inner
- Drop shadow: `0 2px 4px rgba(0,0,0,0.2)` for depth
- Position: anchored to the target part, offset 8px above

**Animation Spec:**
```
translateY: 0 → -10px → 0
Duration: 800ms
Easing: ease-in-out
Repeat: infinite
```

**When to show:**
- Step loads → delay 500ms → bounce animation starts
- Stops when part is tapped or step advances

---

### 4.6 CarCanvas | 戰車畫布
**Purpose:** SVG canvas in My Car Designer for coloring and decorating

**Visual Spec:**
- Size: 90% screen width, 16:9 aspect ratio
- Car body outline: SVG path, `#E0E0E0` stroke, filled `#F5F5F5`
- Grid background: subtle dotted grid `#E8E8E8` for alignment help (optional toggle)
- Touch tolerance: 20px — allows slightly imprecise taps from kids

**Fill Interaction:**
- Tap color → color becomes active (border highlight on color button)
- Tap car body area → fill with active color (flood fill or predefined zones)
- Undo: last fill action reversible

---

### 4.7 ColorPicker | 顏色選擇器
**Purpose:** Row of color buttons for car painting

**Visual Spec:**
- Layout: horizontal row, centered, 8px gap between colors
- Color buttons: 48px circles with 3px white border + shadow
- Selected state: 4px mini-red ring around button
- Colors offered:
  1. `#FF3B30` (Mini Red)
  2. `#007AFF` (Racing Blue)
  3. `#FFCC00` (Speed Yellow)
  4. `#34C759` (Success Green)
  5. `#FF9500` (Energy Orange)
  6. `#6C5CE7` (Purple)
  7. `#FD79A8` (Pink)
  8. `#FFFFFF` (White)
  9. `#1A1A2E` (Black)
  10. `#F5F5F5` (Silver Gray)

**Interaction:**
- Tap → select color, previous deselects
- Selected color shows ring

---

### 4.8 StickerLibrary | 貼紙庫
**Purpose:** Grid of stickers to drag onto car

**Visual Spec:**
- Layout: 4-column grid, scrollable
- Sticker size: 56px each
- Category rows: Stars, Lightning/Flames, Numbers, Flags
- Section label: caption size, `#4A4A6A`
- Background: `#F5F5F7`, 16px padding

**Sticker Designs:**
| Category | Stickers |
|----------|----------|
| Stars | ⭐ Gold Star, ⭐⭐ Double Star |
| Energy | ⚡ Lightning Bolt, 🔥 Flame, 💨 Speed Lines |
| Numbers | 1️⃣ 2️⃣ 3️⃣ (in circles) |
| Flags | 🏁 Checkered Flag |
| Decorative | 🎀 Bow, 💎 Diamond |

**Interaction:**
- Tap sticker → activates for placement mode
- Tap on car canvas → places sticker at tap location
- Long-press placed sticker → removes it

---

### 4.9 Home Section Card | 主頁卡片
**Purpose:** Three large cards on the home screen

**Visual Spec:**
- Size: Full width minus 32px margins, height 180px
- Border-radius: 20px
- Shadow: `0 4px 16px rgba(0,0,0,0.1)`
- Background: gradient from section's primary color (light) to white
- Icon: 64px emoji or SVG, centered left
- Title: h2 size Chinese, body size English below
- "Go" indicator: right side, → arrow or "開始 →"

**Card Layout (3 cards):**
```
┌─────────────────────────────────────────┐
│ [Icon 64px]  Title (Chinese)            │
│               Title (English)      [→]  │
└─────────────────────────────────────────┘
```

**Card Colors:**
| Card | Background Gradient |
|------|---------------------|
| 🔍 Parts Explorer | `#FFF0F0` → `#FFFFFF` (light red tint) |
| 🧩 Assembly Guide | `#F0F8FF` → `#FFFFFF` (light blue tint) |
| 🎨 My Car Designer | `#FFF8E7` → `#FFFFFF` (warm cream) |

---

## 5. Animation Specs | 動畫規格

### 5.1 Pop-up Entry | 彈窗進入
```
Property: scale + opacity
From: scale(0.8), opacity 0
To: scale(1), opacity 1
Duration: 300ms
Easing: cubic-bezier(0.34, 1.56, 0.64, 1) [ease-out with slight overshoot]
```

### 5.2 Part Pulse | 零件脈動
```
Property: scale
From: 1
To: 1.05
Back to: 1
Duration: 600ms
Easing: ease-in-out
Repeat: infinite while highlighted
```

### 5.3 Tool Hint Bounce | 工具箭頭彈跳
```
Property: translateY
From: 0
To: -10px
Back to: 0
Duration: 800ms
Easing: ease-in-out
Repeat: infinite
```

### 5.4 Confetti Burst | 彩帶爆發
```
Duration: 2s total
Phase 1 (0-500ms): Particles burst upward from center-bottom
Phase 2 (500ms-1700ms): Particles fall with gravity + drift
Phase 3 (1700ms-2000ms): Fade out remaining particles
Particle count: 150-200
Colors: Primary palette mixed with STREAM colors
```

### 5.5 Swipe Slide | 滑動切換
```
Property: translateX
From: ±100%
To: 0
Duration: 250ms
Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) [ease-out]
Gesture: touch/swipe detected, threshold 50px
```

### 5.6 Step Complete Checkmark | 步驟完成勾選
```
Duration: 500ms
Sequence:
  1. (0-200ms) Green circle scales in from 0 to 1
  2. (200-400ms) White checkmark draws in
  3. (400-500ms) Confetti triggers
Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### 5.7 Card Hover/Tap | 卡片觸摸
```
Tap down: scale(0.96), shadow deepens
Tap up: scale(1), shadow normalizes
Duration: 100ms
```

---

## 6. Bilingual UI Guidelines | 雙語界面準則

### 6.1 Text Display Strategy | 文字顯示策略
**Primary approach: Stacked layout**
```
┌─────────────────────┐
│    中文文字          │  ← h3 size, primary color
│    English Text      │  ← body size, secondary color
└─────────────────────┘
```

**Inline approach (short labels only):**
```
標題 / Title
```

### 6.2 Font Size Ratio | 字體大小比例
| Context | Chinese | English |
|---------|---------|---------|
| Screen title | 36px (h1) | 30px |
| Card title | 28px (h2) | 24px |
| Part name (card) | 18px bold | 15px regular |
| Part name (modal) | 22px (h3) | 18px |
| Body text | 18px | 15px |
| Caption | 14px | 12px |

### 6.3 Audio Icon Styling | 音頻圖標樣式
- Size: 24px icon, 44px tap target
- Color: `#4A4A6A` (default), `#FF3B30` (playing)
- Animation when playing: scale pulse
- Placement: Below text, centered

### 6.4 STREAM Badge Styling | STREAM 標籤樣式
- Size: 28px circle (cards), 32px circle (modal)
- Font: "Nunito" ExtraBold, 14px, white text
- Position: top-right corner of component, 8px inset
- Shadow: `0 2px 4px rgba(0,0,0,0.15)`

### 6.5 Audio Playback Order | 音頻播放順序
1. Cantonese/粵語 narration first (~2s)
2. 300ms pause
3. English pronunciation second (~1s)

---

## 7. Assets Needed | 所需資源

### 7.1 SVG Illustrations | SVG 插圖

| Asset | Description | Format |
|-------|-------------|--------|
| Car Body Outline | Pre-drawn car shell outline for Designer | SVG, viewBox 400x300 |
| Part Illustrations | Each of 10 parts as clean SVG | SVG, 200x200 viewBox |
| Chassis exploded | Animated chassis with neighboring parts | SVG animation or Lottie |
| Tool Icons | Screwdriver, wrench icons for Assembly Guide | SVG, 48px |
| Arrow Tool Hint | Bouncing arrow pointing down | SVG, 32px |
| Checkered Flag | 🏁 for Sticker Library | SVG, 56px |

### 7.2 Icon Library | 圖標庫
**Recommendation: Lucide React**
- Clean, consistent stroke weight (2px)
- Includes: `volume-2`, `arrow-right`, `chevron-left`, `chevron-right`, `star`, `check`, `x`, `home`
- Supplement with custom SVGs for Mini 4WD specific icons

**Alternative: Phosphor Icons (Duotone variant)**
- Kid-friendly aesthetic with filled + outline dual-tone
- Good for the playful vibe

### 7.3 Sticker Designs | 貼紙設計
All stickers should be designed at 3x for retina display (168px @56px display size):

| Sticker | Description | Colors |
|---------|-------------|--------|
| ⭐ Gold Star | 5-point star with gradient | `#FFCC00` to `#FF9500` |
| ⚡ Lightning | Bold lightning bolt | `#FFCC00` with `#FF9500` outline |
| 🔥 Flame | Stylized flame | `#FF3B30` to `#FF9500` gradient |
| 1️⃣ Number Circle | Circle with number 1 | `#007AFF` bg, white text |
| 2️⃣ Number Circle | Circle with number 2 | `#34C759` bg, white text |
| 3️⃣ Number Circle | Circle with number 3 | `#FF3B30` bg, white text |
| 🏁 Checkered Flag | Racing flag pattern | Black + white squares |
| 💨 Speed Lines | 3 horizontal motion lines | `#007AFF` |
| 🎀 Bow | Decorative ribbon bow | `#FD79A8` |
| 💎 Diamond | Gem shape | `#00B894` with highlight |

### 7.4 Audio Files | 音頻文件
All audio files: MP3 format, 128kbps, normalized

| File | Duration | Description |
|------|----------|-------------|
| `part_chassis_zh.mp3` | ~2s | Cantonese pronunciation: 底盤 |
| `part_chassis_en.mp3` | ~1s | English: Chassis |
| (repeat for each part) | | |
| `sfx_pop.mp3` | ~0.3s | Tap feedback sound |
| `sfx_swoosh.mp3` | ~0.4s | Swipe/navigation sound |
| `sfx_ding.mp3` | ~0.5s | Step complete |
| `sfx_confetti.mp3` | ~0.8s | Celebration burst |
| `sfx_button.mp3` | ~0.2s | Button tap feedback |

### 7.5 Lottie Animations | Lottie 動畫
| Animation | Description | Duration |
|-----------|-------------|----------|
| Exploded view | Parts separating and coming together | ~3s loop |
| Confetti burst | Full celebration effect | ~2s |
| Step transition | Animated transition between steps | ~1s |
| Tool hint bounce | Bouncing arrow (can be CSS too) | ~0.8s loop |

### 7.6 Part Illustrations List | 零件插圖列表
Each part needs a clean illustration:

1. **底盤 / Chassis** — Flat view of TT-02 chassis frame
2. **波箱 / Gearbox** — Gearbox housing with gear cavity visible
3. **齒輪 / Gear** — Single gear with teeth detail
4. **摩打 / Motor** — Cylindrical motor with shaft
5. **車輪 / Wheels** — Front wheel with tire detail
6. **車軸 / Axles** — Straight axle with universal joint hints
7. **螺絲 / Screws** — Various screw types (pan head, countersunk)
8. **車殼 / Body** — Mini 4WD racing shell outline
9. **定風翼 / Wings** — Rear wing/spoiler
10. **碳纖貼 / Carbon Tape** — Roll of carbon tape strip

---

## 8. Implementation Notes | 實施備註

### CSS Custom Properties | CSS 變量
```css
:root {
  /* Colors */
  --color-mini-red: #FF3B30;
  --color-racing-blue: #007AFF;
  --color-speed-yellow: #FFCC00;
  --color-success-green: #34C759;
  --color-energy-orange: #FF9500;
  
  /* Backgrounds */
  --bg-cloud-white: #FFFFFF;
  --bg-soft-gray: #F5F5F7;
  --bg-warm-cream: #FFF8E7;
  
  /* Text */
  --text-primary: #1A1A2E;
  --text-secondary: #4A4A6A;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-modal: 0 8px 32px rgba(0,0,0,0.15);
  
  /* Transitions */
  --transition-fast: 100ms ease-out;
  --transition-normal: 250ms ease-out;
  --transition-slow: 400ms ease-out;
}
```

### Font Loading | 字體加載
```html
<!-- In layout.tsx head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;700&family=Nunito:wght@400;600;800&family=Fredoka+One&display=swap" rel="stylesheet">
```

### Animation Performance | 動畫性能
- Use `transform` and `opacity` for all animations (GPU-accelerated)
- Avoid `top/left` animations
- Use `will-change` sparingly for animated elements
- Target 60fps on iPad Air 2019 equivalent

---

*Document Version: 1.0*
*Last Updated: 2026-05-04*
*Author: UI-Orca (RoboQ Squad)*
