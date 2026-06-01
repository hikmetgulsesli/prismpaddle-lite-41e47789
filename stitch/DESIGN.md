---
name: PrismPulse
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#ebffc7'
  on-tertiary: '#223600'
  tertiary-container: '#a3f100'
  on-tertiary-container: '#466a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#a9f900'
  tertiary-fixed-dim: '#94db00'
  on-tertiary-fixed: '#121f00'
  on-tertiary-fixed-variant: '#334f00'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  stat-value:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style
The design system is a high-octane fusion of retro-arcade nostalgia and futuristic precision. It targets a competitive, fast-paced gaming audience that values clarity under pressure and a high-energy aesthetic. The visual language is defined by a **Retro-Modern Arcade** style—mixing the structure of a dark-mode SaaS interface with the kinetic energy of 80s synthwave.

The UI evokes an emotional response of "Focused Excitement." This is achieved through a "Prism" twist: light is treated as a physical material, breaking into vibrant neon spectrums against a deep, infinite void. Movement and depth are prioritized, using layered translucency and light-emitting strokes to guide the eye toward critical gameplay data and interactive controls.

## Colors
This design system utilizes a "Deep Space" foundation with "Hyper-Neon" accents. The palette is designed to maximize contrast and simulate the look of light-emitting hardware.

- **Base Background:** Deep Midnight Navy (#0A0E17) is used for all primary surfaces to allow neon elements to "pop."
- **Accent Trio:** Cyan (#00F2FF) is for primary actions and player 1 indicators. Magenta (#FF00E5) is for secondary actions and high-alert warnings. Lime (#ADFF00) is used for "ready" states and performance success metrics.
- **Prism Glass:** Use semi-transparent white (5-10% opacity) for container surfaces to create the "Glassmorphism" effect, allowing background grid patterns to subtly bleed through.

## Typography
The typography system balances high-energy geometric impact with technical precision. 

- **Headlines:** Sora provides a futuristic, wide-set geometric look that feels structural and modern. Use it for game titles, scores, and major section headers.
- **Body:** Outfit is used for all UI instructions and descriptions due to its excellent legibility and friendly but modern circularity.
- **Labels & Data:** JetBrains Mono is utilized for "HUD" elements, technical stats, and small labels to reinforce a "coded" or "system-monitored" feeling.

## Layout & Spacing
The layout follows a **Fixed Grid** model for HUD elements and a **Fluid Content** model for menus.

- **Background Grid:** Apply a subtle 32px square grid pattern across the entire background at 5% opacity using the Cyan primary color. This anchors the UI elements in a physical "space."
- **HUD Layout:** Critical game stats (Score, Health, Level) should be pinned to the corners with a 24px safe-area margin.
- **Responsive Behavior:** On desktop, use a 12-column grid. On mobile, transition to a single-column stack with maximized padding to prevent accidental touches near the screen edges.

## Elevation & Depth
Elevation in this design system is not achieved through traditional shadows, but through **Luminance and Translucency**.

- **Surfaces:** Use high-contrast glass panels. Each panel has a `backdrop-filter: blur(12px)` and a 1px solid border at 20% opacity of the primary Cyan.
- **Glows:** Instead of black shadows, use "Outer Glows." Interactive elements should have a 0px 0px 15px shadow using their respective neon accent color at 40% opacity.
- **Layering:** HUD elements sit at the highest z-index, featuring a slightly brighter glass tint than background menu panels to denote "proximity" to the player.

## Shapes
Shapes are "Soft" but lean toward technical precision. While edges are slightly rounded to feel modern and premium, they maintain enough sharpness to feel like a high-performance instrument.

- **Default Radius:** 0.25rem for small UI components (chips, checkboxes).
- **Panel Radius:** 0.75rem for large HUD containers and settings cards.
- **Specialty Shapes:** Use 45-degree chamfered corners (clipped corners) for "Score" and "Level Up" announcements to reinforce the arcade aesthetic.

## Components
Consistent styling across components ensures the "Prism" effect is maintained.

- **Translucent Buttons:** Use a background of `rgba(255, 255, 255, 0.05)` with a 1.5px solid neon border. On hover, the background fill increases to 20% and the border glow intensifies.
- **HUD Chips:** Small, pill-shaped containers for stats. These should have a "Dark Glass" fill with a left-accented colored stripe indicating the stat type (Cyan for Speed, Magenta for Power).
- **Input Fields:** Bottom-border only, using a 2px Cyan stroke. When focused, the stroke glows and a subtle gradient fill rises from the bottom.
- **Status Indicators:** Use pulsing "Glow Dots." A Lime green dot with a CSS pulse animation signifies a stable connection or "Ready" state.
- **Prism Dividers:** Instead of grey lines, use thin 1px gradients that transition from transparent to Cyan to transparent.