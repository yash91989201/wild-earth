---
name: WildEarth
description: Direct India safari planning with grounded field expertise and premium confidence.
colors:
  reserve-forest: "oklch(0.387 0.088 150.434)"
  deep-reserve-forest: "oklch(0.327 0.075 151.394)"
  ranger-ochre: "oklch(0.807 0.108 85.99)"
  strong-ranger-ochre: "oklch(0.761 0.126 82.231)"
  parchment-sand: "oklch(0.968 0.009 84.573)"
  warm-sand: "oklch(0.951 0.01 72.66)"
  field-note-ink: "oklch(0.231 0.024 139.956)"
  trail-brown: "oklch(0.548 0.073 72.649)"
  soft-border: "oklch(0.908 0.022 76.523)"
typography:
  display:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
  headline:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Satoshi, Source Sans 3 Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Satoshi, Source Sans 3 Variable, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  soft-card: "40px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.reserve-forest}"
    textColor: "{colors.parchment-sand}"
    rounded: "{rounded.pill}"
    padding: "16px 40px"
  button-primary-hover:
    backgroundColor: "{colors.deep-reserve-forest}"
    textColor: "{colors.parchment-sand}"
    rounded: "{rounded.pill}"
    padding: "16px 40px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.field-note-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  input-default:
    backgroundColor: "{colors.warm-sand}"
    textColor: "{colors.field-note-ink}"
    rounded: "{rounded.pill}"
    height: "36px"
  card-default:
    backgroundColor: "oklch(1 0 0)"
    textColor: "{colors.field-note-ink}"
    rounded: "{rounded.soft-card}"
    padding: "24px"
---

# Design System: WildEarth

## 1. Overview

**Creative North Star: "Field Lodge Ledger"**

WildEarth should feel like the planning desk inside a remote safari lodge: field notes, permit confidence, warm hospitality, and a calm operator who knows the terrain. The system is brand-first, but every flourish must earn trust or aid discovery.

The visual language uses restrained natural materials: reserve green, ranger ochre, parchment sand, and grounded typography. It rejects generic travel agency polish, overdone resort luxury, adventure-bro urgency, and NGO guilt. Premium comes from specificity, spacing, imagery, and direct operational clarity.

**Key Characteristics:**
- Grounded, premium, and field-aware.
- Image-led, but never stock-vacation generic.
- Soft utility components with clear focus states.
- Quiet discovery paths that lead naturally to inquiry.

## 2. Colors

The palette is forest, ochre, and parchment: quiet field materials with one warm signal color.

### Primary
- **Reserve Forest**: Primary brand color for CTAs, mobile navigation surfaces, active states, and moments that need direct operational confidence.
- **Deep Reserve Forest**: Hover and compressed dark surface color. Use for stronger green states, never as a decorative dark-mode default.

### Secondary
- **Ranger Ochre**: Safari signal color for badges, labels, icon highlights, and limited emphasis. It should feel like brass hardware or dry grass at low sun.
- **Strong Ranger Ochre**: Focus and ring accent. Use where visibility matters more than decoration.

### Tertiary
- **Trail Brown**: Grounding text accent for secondary links, metadata, and lodge or itinerary details.

### Neutral
- **Parchment Sand**: Page background and warm negative space.
- **Warm Sand**: Muted section backgrounds and low-contrast fields.
- **Field Note Ink**: Primary text and deep foreground.
- **Soft Border**: Dividers, control strokes, and low-noise outlines.

### Named Rules
**The Ochre Rarity Rule.** Ranger Ochre is a signal, not a wash. Use it for labels, icons, and focus cues, not for large decorative blocks.

**The No Pure Neutral Rule.** Avoid pure black and pure white in new UI. Neutrals must stay slightly warm or green-tinted.

## 3. Typography

**Display Font:** Gambetta (with Georgia fallback)  
**Body Font:** Satoshi (with Source Sans 3 Variable fallback)  
**Label Font:** Satoshi

**Character:** Gambetta gives the brand cultivated hospitality and destination gravity. Satoshi keeps forms, navigation, and practical copy clear enough for booking decisions.

### Hierarchy
- **Display** (700, `clamp(3rem, 8vw, 6rem)`, 1.05): Hero headlines and decisive destination moments.
- **Headline** (700, `clamp(2.25rem, 5vw, 4.5rem)`, 1.1): Section leads and page titles.
- **Title** (700, `1.5rem`, 1.2): Cards, lodge names, form panels, and destination modules.
- **Body** (400, `1rem`, 1.65): Explanatory copy. Keep paragraphs under 75ch.
- **Label** (700, `0.75rem`, `0.2em`, uppercase): Eyebrows, trust badges, and small category markers only.

### Named Rules
**The Field Note Hierarchy Rule.** Use serif type for voice and place, sans type for action and clarity. Do not blur those roles.

## 4. Elevation

WildEarth is flat field notes by default. Depth comes from imagery, tone shifts, large radii, and generous spacing. Shadows are allowed only for functional lift: cards that need separation, floating controls, or active hover states.

### Shadow Vocabulary
- **Card Lift** (`shadow-md` with a faint foreground ring): Shared UI cards and contained modules.
- **Premium Panel Lift** (`shadow-2xl`): Booking form panel and decisive conversion surfaces.
- **Floating Action Lift** (`0 8px 25px rgba(37, 211, 102, 0.4)`): WhatsApp affordance only.

### Named Rules
**The Flat First Rule.** If a surface can be separated by spacing, background tone, or image composition, do that before adding shadow.

## 5. Components

Components should feel like confident soft utility: rounded, clear, calm, and ready for action without becoming generic SaaS controls.

### Buttons
- **Shape:** Pill by default (`9999px`) for marketing CTAs, extra-soft capsule (`44px`) in shared primitives.
- **Primary:** Reserve Forest background with Parchment Sand text, heavy weight, generous horizontal padding (`16px 40px` or larger in heroes).
- **Hover / Focus:** Darken to Deep Reserve Forest, lift with `translateY(-2px)` only on pointer hover, show Ranger Ochre focus ring.
- **Secondary / Ghost:** Use transparent or soft tinted backgrounds. Preserve clear contrast over imagery.

### Chips
- **Style:** Rounded capsule, thin border or translucent dark overlay depending on image context.
- **State:** Use Ranger Ochre icon or label accents for verified, category, and trust markers.

### Cards / Containers
- **Corner Style:** Large lodge radius (`40px`) for marketing panels, `44px` for shared card primitives.
- **Background:** Parchment Sand, Warm Sand, or card white only when it improves readability.
- **Shadow Strategy:** Flat first, card lift only when content needs separation from a busy surface.
- **Border:** Soft Border or subtle foreground ring. Never a colored side stripe.
- **Internal Padding:** `24px` minimum, `32px` to `48px` for conversion panels.

### Inputs / Fields
- **Style:** Pill fields (`36px` height), transparent border at rest, Warm Sand fill.
- **Focus:** Ranger Ochre ring with visible border shift. Keep focus obvious on keyboard.
- **Error / Disabled:** Destructive states must use copy and iconography, not color alone.

### Navigation
- **Style, typography, states, mobile treatment:** Desktop nav is fixed, calm, and transparent over hero imagery until scroll. Scrolled state uses warm white translucency and blur only as a readability tool. Mobile nav becomes a full Reserve Forest panel with large serif destination links.

### Hero and Booking Surfaces
Hero sections are image-led with dark overlays for legibility, large serif headlines, and clear primary or secondary CTAs. Booking surfaces pair Reserve Forest context copy with a soft high-radius form panel so inquiry feels guided, not like a quote trap.

## 6. Do's and Don'ts

### Do:
- **Do** use real wildlife, lodge, terrain, or park imagery when a surface is destination-led.
- **Do** lead with specific operational proof: direct teams, permits, response expectations, and park knowledge.
- **Do** use Reserve Forest for decisive actions and Ranger Ochre for rare signals.
- **Do** respect WCAG AA contrast, visible focus, reduced motion, and multilingual-ready copy structure.
- **Do** keep motion on opacity and transform with `cubic-bezier(0.16, 1, 0.3, 1)`.

### Don't:
- **Don't** create generic travel agency design: deal-heavy packages, vague superlatives, stock vacation polish, or quote-trap forms.
- **Don't** create overdone luxury resort design: gold excess, perfume-ad drama, or visuals detached from terrain and wildlife.
- **Don't** use adventure-bro positioning: conquest language, extreme-sports urgency, or loud adrenaline-first visuals.
- **Don't** use NGO campaign tone: guilt-forward conservation messaging that overwhelms the travel job.
- **Don't** use colored side-stripe borders, gradient text, decorative glassmorphism, nested card stacks, or identical icon-card grids.
