# DCORE - Adaptive Systems & Runtime Intelligence Platform

A cinematic infrastructure-grade intelligence platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the platform.

### Production Build

```bash
npm run build
npm start
```

## 🏗️ Architecture

### Routes

- **`/`** - Home with cinematic intro and featured systems
- **`/systems`** - Infrastructure modules showcase
- **`/reden`** - Primary runtime module with pricing and documentation
- **`/about`** - Company mission and technology foundation
- **`/contact`** - Contact form and team information
- **`/auth`** - Multi-step authentication interface
- **`/dashboard`** - Operational intelligence and metrics

### Tech Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for cinematic transitions
- **UI Components**: Custom glass-morphism components

## 🎨 Design System

### Colors

- **Dark**: `#0a0e27` (dark-950), `#050810` (dark-900)
- **Accent**: `#3b82f6` (blue-500)
- **Glass**: `rgba(255, 255, 255, 0.1)` with backdrop blur

### Animations

- `glow-pulse` - Pulsing glow effect
- `float` - Floating motion
- `slide-in-left/right` - Directional slides
- `fade-in` - Smooth fade transitions
- `scale-in` - Scale animations

### Components

- **GlassCard** - Glassmorphism panels (sm, md, lg sizes)
- **IntelligenceNode** - Animated glowing node
- **StatusBadge** - Runtime status indicators
- **RuntimeGrid** - Atmospheric background with SVG grids
- **Navigation** - Responsive navbar with mobile menu

## 📦 Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── globals.css             # Global styles
├── providers.tsx           # App providers
├── systems/
│   └── page.tsx            # Systems showcase
├── reden/
│   └── page.tsx            # REDEN module
├── about/
│   └── page.tsx            # About page
├── contact/
│   └── page.tsx            # Contact page
├── auth/
│   └── page.tsx            # Authentication
└── dashboard/
    └── page.tsx            # Dashboard

components/
├── global/
│   ├── runtime-grid.tsx    # Background grid
│   └── navigation.tsx      # Navigation bar
└── ui/
    ├── glass-card.tsx      # Glass panel component
    ├── intelligence-node.tsx # Animated node
    └── status-badge.tsx    # Status indicator
```

## 🎯 Features

- ✨ Cinematic intro animations
- 🌌 Atmospheric runtime grids
- 💎 Premium glassmorphism UI
- 🎬 Smooth Framer Motion transitions
- 📱 Responsive mobile-first design
- 🔐 Multi-step authentication flow
- 📊 Operational dashboard
- ⚡ Production-grade infrastructure aesthetic

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚢 Deployment

Ready for deployment on:

- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting

## 📄 License

MIT License - Feel free to use for commercial projects

## 👨‍💼 Support

For inquiries or support:

- Email: contact@dcore.io
- Sales: sales@dcore.io

---

**DCORE** - Infrastructure-grade intelligence platform. Beyond Static Systems.
