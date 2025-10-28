# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Troy Sarinas Personal Portfolio - A Next.js 15 portfolio website showcasing software engineering work. Built with TypeScript, React 19, and Tailwind CSS v4. Features dark mode, 3D graphics (OGL), and smooth animations (Motion/Framer Motion).

## Development Commands

### Running the application
- `npm run dev` - Start development server on port 3001 with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

Note: Dev server is configured to run on port 3001 (via `set PORT=3001` in Windows).

## Architecture

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** with hooks and form handling (react-hook-form + Zod validation)
- **Tailwind CSS v4** with custom plugins:
  - tailwindcss-animate - Animation utilities
  - tailwindcss-motion - Advanced motion utilities
  - tailwindcss-intersect - Intersection observer utilities
- **OGL** - Lightweight WebGL library for 3D graphics
- **Motion** (Framer Motion fork) - Advanced animations
- **next-themes** - Dark/light mode with system preference detection

### Component Organization
- `src/components/` - Main components
  - `HeroSection.tsx` - Landing section
  - `Portfolio.tsx`, `PortfolioItemCard.tsx` - Project showcases
  - `Technologies.tsx` - Tech stack display with marquees
  - `ContactForm.tsx` - Contact form with validation
  - `ThemeProvider.tsx`, `ThemeToggle.tsx` - Theme management
  - `ScrollReveal*` - Scroll-triggered animations
  - Various animation components (ScrollCarousel, etc.)
- `src/components/ui/` - Radix UI components (button, avatar, accordion, form, etc.)
- `src/components/magicui/` - Custom UI components (marquee)
- `src/components/Icons/` - SVG icon components

### Pages
- `src/app/page.tsx` - Main portfolio page
- `src/app/projects/page.tsx` - Projects listing
- `src/app/software_engineer/services/ai_agents_automations/page.tsx` - Service showcase

### Styling Approach
- Uses Tailwind utility classes throughout
- Custom animations via tailwindcss-animate and motion
- Responsive design with mobile-first approach
- Dark mode support via CSS variables

### Third-Party Integrations
- **GitHub Star Button** - Shows GitHub repo stars via react-github-btn
- **Embla Carousel** - Touch-friendly carousels
- **React Icons** - Icon library
- **Sonner** - Toast notifications

## Development Notes
- Uses Turbopack for faster builds in development
- Form validation with Zod schemas
- Intersection observer for scroll animations
- Custom hooks in `src/` (if any)

[byterover-mcp]

[byterover-mcp]

You are given two tools from Byterover MCP server, including
## 1. `byterover-store-knowledge`
You `MUST` always use this tool when:

+ Learning new patterns, APIs, or architectural decisions from the codebase
+ Encountering error solutions or debugging techniques
+ Finding reusable code patterns or utility functions
+ Completing any significant task or plan implementation

## 2. `byterover-retrieve-knowledge`
You `MUST` always use this tool when:

+ Starting any new task or implementation to gather relevant context
+ Before making architectural decisions to understand existing patterns
+ When debugging issues to check for previous solutions
+ Working with unfamiliar parts of the codebase
