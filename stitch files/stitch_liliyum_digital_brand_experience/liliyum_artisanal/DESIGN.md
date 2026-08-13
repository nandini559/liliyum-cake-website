---
name: Liliyum Artisanal
colors:
  surface: '#fff8f5'
  surface-dim: '#e0d8d6'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ef'
  surface-container: '#f4ece9'
  surface-container-high: '#eee7e4'
  surface-container-highest: '#e8e1de'
  on-surface: '#1e1b19'
  on-surface-variant: '#504443'
  inverse-surface: '#33302e'
  inverse-on-surface: '#f7efec'
  outline: '#827472'
  outline-variant: '#d4c3c1'
  surface-tint: '#795553'
  primary: '#321716'
  on-primary: '#ffffff'
  primary-container: '#4a2c2a'
  on-primary-container: '#bd928f'
  inverse-primary: '#eabcb8'
  secondary: '#b80049'
  on-secondary: '#ffffff'
  secondary-container: '#e2165f'
  on-secondary-container: '#fffbff'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#eabcb8'
  on-primary-fixed: '#2e1413'
  on-primary-fixed-variant: '#5f3e3c'
  secondary-fixed: '#ffd9de'
  secondary-fixed-dim: '#ffb2be'
  on-secondary-fixed: '#400014'
  on-secondary-fixed-variant: '#900038'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fff8f5'
  on-background: '#1e1b19'
  surface-variant: '#e8e1de'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is a harmonious blend of **"lil' yum"**—an approachable, joyful spirit—and high-end artisanal craftsmanship. It targets a discerning audience that seeks celebration in everyday moments.

The visual style is **Contemporary Tactile**. It leverages the softness of organic shapes and layered cards to create a physical sense of depth, reminiscent of a beautifully plated pastry. This design system uses subtle gradients to mimic the sheen of ganache and the softness of frosting, while maintaining a premium feel through generous whitespace and refined typography. The emotional goal is to evoke indulgence, warmth, and a festive sense of "treat yourself."

## Colors

The palette is anchored by **Deep Chocolate Brown** (Primary), providing a sophisticated, grounding foundation that ensures legibility and premium contrast. **Raspberry Pink** (Secondary) is used for high-energy call-to-actions and brand highlights, while **Aged Gold** (Tertiary) adds a touch of luxury to borders, icons, and decorative elements.

The background uses a warm **Almond Cream** (Neutral) instead of pure white to maintain a soft, inviting atmosphere. The soft pastels (Mint, Peach, Lavender) are reserved for background containers, card surfaces, and illustrative organic shapes, creating a "variety box" aesthetic that feels colorful yet curated.

## Typography

This design system utilizes a high-contrast typographic pairing to signal the "Artisanal" brand pillar. **Playfair Display** brings an editorial, sophisticated weight to headings, evoking the feel of a luxury menu or high-end magazine.

For functional text, **Manrope** provides a clean, modern counter-balance. Its geometric nature ensures clarity in product descriptions and navigation. Display styles should use tight letter spacing for a more "designed" look, while labels utilize increased tracking and uppercase styling to provide clear hierarchy in dense interfaces like menus or checkout flows.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous safe areas to emphasize the "luxury" aspect of the brand. On desktop, a 12-column grid is used with wide 64px outer margins to "frame" the content like a piece of art. 

Spacing follows a strict 8px base unit. To maintain a "joyful" and "airy" feel, section gaps are intentionally large (up to 120px), preventing the interface from feeling cluttered. Content should be grouped in layered containers with varied padding—larger padding for hero sections and tighter, focused padding for product cards.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**. Surfaces should not appear floating high above the page; instead, they should feel like stacked layers of premium cardstock.

1.  **Base Layer:** Almond Cream neutral background.
2.  **Mid Layer:** Pastel-colored containers (Mint/Peach/Lavender) with a slight `20px` blur shadow at 5% opacity.
3.  **Top Layer:** Primary buttons or featured product modals using a subtle gradient (e.g., Raspberry to a slightly deeper pink) and a more defined gold-tinted shadow to signify interactivity.
4.  **Glassmorphism:** Use backdrop-blur (12px) on navigation bars and "Add to Cart" overlays to maintain context while keeping the visual focus on the indulgent imagery.

## Shapes

The shape language is fundamentally **Rounded** to echo the soft forms of pastries and desserts. 
- Standard components (buttons, input fields) use a 0.5rem (8px) radius.
- Product cards and decorative containers use a 1rem (16px) radius to feel more significant and friendly.
- Decorative "blobs" and organic background shapes should have completely fluid, non-geometric radii to mimic spilled chocolate or dollops of cream.

## Components

### Buttons
- **Primary:** Raspberry Pink background, white text, 8px rounded corners. Includes a subtle inner-glow to look "plump."
- **Secondary:** Transparent with a 2px Deep Chocolate border or Gold border for luxury emphasis.
- **Tertiary/Ghost:** Deep Chocolate text with no background, used for "Learn More" links.

### Cards
Cards are the hero of the system. They should use pastel background colors (e.g., a Mint card for a pistachio eclair). Every card should feature a 1px Gold border or a slightly darker tonal border to define the edge against the cream background.

### Input Fields
Soft Peach or Cream backgrounds with a Deep Chocolate label. Focus states should transition the border to Gold.

### Chips & Tags
Used for dietary labels (e.g., "Gluten Free," "Vegan"). These are pill-shaped and use the secondary color at 10% opacity with 100% opacity text for a soft, integrated look.

### Decorative Elements
Incorporate "Organic Blobs"—large, low-opacity pastel shapes that sit behind product photography to create a sense of movement and celebration. Use Gold for thin, artisanal line-art icons (whisks, wheat, cocoa beans).