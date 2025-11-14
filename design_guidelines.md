# ShadowCoder Website Design Guidelines

## Design Approach
**Cyberpunk/Futuristic Tech Style** - Drawing inspiration from modern portfolio sites like Awwwards winners, with heavy animation influence from sites like stripe.com and linear.app, adapted for a bold, tech-forward aesthetic.

## Color Palette
- Primary: Deep violet (#8B5CF6, #A78BFA)
- Accent: Sky blue (#0EA5E9, #38BDF8)
- Background: Deep black (#0A0A0A, #1A1A1A)
- Text: White (#FFFFFF) with violet/blue glows for emphasis
- Gradients: Violet-to-blue transitions for highlights and effects

## Typography
- **Headlines**: Bold, futuristic sans-serif (e.g., Space Grotesk, Orbitron) - 3xl to 6xl sizes
- **Body**: Clean modern sans-serif (Inter or similar) - base to lg sizes
- **Code**: Monospace font (JetBrains Mono) for live typing effects
- **Slogan**: Extra large display text (7xl-8xl) with gradient treatment

## Layout System
- Tailwind spacing: Use 4, 8, 12, 16, 24 units consistently (p-4, m-8, gap-12, py-16, etc.)
- Max width containers: max-w-7xl for content sections
- Full-width sections with strategic use of negative space

## Core Components

### Navigation
- Sticky header with blur backdrop
- Animated underline indicators for active page
- Hamburger menu for mobile with slide-in animation
- Glowing hover states on links

### Hero Section (Home Page)
- Full viewport height (min-h-screen)
- Animated logo entrance with fade + scale
- Large centered slogan with gradient text effect
- Particle system background (floating dots/shapes)
- Subtle parallax on scroll
- **Image**: Abstract tech/code background with dark overlay, particles overlaid

### Timeline (About Page)
- Vertical timeline with animated connections
- Cards that slide in on scroll
- Glowing connector lines between milestones
- Interactive hover states revealing more details

### Skills Grid
- 2x2 grid on desktop (grid-cols-1 md:grid-cols-2)
- Each card features icon, title, description
- Live code typing animation in Developer card
- Animated gallery carousel for Graphiste section
- Interactive chatbot simulation for Support IT
- Hover effects: lift, glow, border animation

### Portfolio Grid
- Masonry-style layout with varying card heights
- Filter buttons with active state animations
- Card hover: image zoom, overlay fade-in with project details
- Modal lightbox for project details with smooth transitions
- **Images**: Project mockups, screenshots, design samples

### Contact Form
- Floating label inputs with glow focus states
- Animated send button with loading state
- Social media icons with bounce hover effect
- WhatsApp integration button with distinctive styling

## Animation Strategy
**Heavy use throughout - this is a key requirement:**

- **Page transitions**: Smooth fade + slide morphing between pages
- **Scroll animations**: Elements fade/slide in as they enter viewport
- **Parallax**: Background elements move at different speeds
- **Particle system**: Continuous floating particles (use particles.js or similar)
- **Typing effect**: Text that types out character-by-character
- **Hover glows**: Luminous borders and shadows on interactive elements
- **Loading animations**: Skeleton screens with shimmer effect
- **Micro-interactions**: Button ripples, icon rotations, card lifts

## Technical Specifications
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Dark mode by default with light mode toggle
- Smooth scroll behavior
- Icon library: Heroicons or Font Awesome
- Backdrop blur effects: backdrop-blur-md for cards/nav

## Images
- **Hero**: Dark abstract tech background (code matrix, circuit boards, or geometric patterns) with 40% opacity overlay
- **About**: Optional portrait with glowing border effect
- **Portfolio**: Project screenshots, UI mockups, graphic design samples
- **Skills**: Icon-based, supplemented with illustrative backgrounds

## Page-Specific Notes
- **Home**: Maximum visual impact with logo animation, particles, and bold typography
- **About**: Timeline should be central visual element with animated progression
- **Skills**: Each section should feel distinct - code animation, image gallery, chat interface
- **Portfolio**: Focus on showcasing work with large, high-quality images
- **Contact**: Clean, accessible form with prominent social links and WhatsApp CTA