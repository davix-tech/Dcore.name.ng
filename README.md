# 🎬 DCORE Infrastructure Platform

> Next-generation cinematic infrastructure-grade intelligence platform

## ✨ Features

- **Cinematic UI**: Glowing nodes, smooth animations, and atmospheric design
- **Real-time Monitoring**: Live infrastructure status with instant alerts
- **AI-Powered Analysis**: Advanced analytics and predictive insights
- **7 Complete Routes**: Home, Systems, REDEN, About, Contact, Auth, Dashboard
- **Production Ready**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Dark Theme**: Premium dark UI with blue accents and glass morphism

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/davix-tech/Dcore.name.ng.git
cd Dcore.name.ng

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Dcore.name.ng/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── providers.tsx        # React providers
│   ├── page.tsx             # Home page
│   ├── systems/page.tsx     # Infrastructure systems
│   ├── reden/page.tsx       # REDEN runtime module
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact form
│   ├── auth/page.tsx        # Multi-step authentication
│   └── dashboard/page.tsx   # Operational dashboard
├── components/
│   ├── global/
│   │   ├── runtime-grid.tsx # SVG atmospheric grid
│   │   └── navigation.tsx   # Responsive navbar
│   └── ui/
│       ├── glass-card.tsx   # Glassmorphism component
│       ├── intelligence-node.tsx  # Animated node
│       └── status-badge.tsx # Status indicators
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js config
└── README.md                # This file
```

## 🎨 Design System

### Colors
- **Dark**: `#0a0e27` (Primary background)
- **Blue**: `#3b82f6` (Accent/Primary)
- **Blue Glow**: `#60a5fa` (Hover/Secondary)
- **Graphite**: `#1f2937` (Secondary background)

### Components
- **GlassCard**: Glassmorphism panels with hover effects
- **IntelligenceNode**: Animated glowing nodes
- **StatusBadge**: Real-time status indicators
- **RuntimeGrid**: Atmospheric SVG background
- **Navigation**: Responsive navigation bar

## 🔧 Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React**: UI library

## 📱 Pages

### Home (`/`)
Hero section with featured systems and call-to-action buttons.

### Systems (`/systems`)
5 infrastructure modules with status indicators and module information.

### REDEN (`/reden`)
Primary runtime module with real-time metrics and features.

### About (`/about`)
Mission, values, and company information.

### Contact (`/contact`)
Contact form and business information.

### Auth (`/auth`)
Multi-step authentication flow with email, verification, and password setup.

### Dashboard (`/dashboard`)
Operational intelligence with metrics, system status, and activities.

## 🔐 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_AUTH_ENABLED=true
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance

- ⚡ Optimized images and code splitting
- 🎯 SEO-friendly metadata
- 📱 Mobile-first responsive design
- 🔍 Production-ready performance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 📞 Support

For support, email hello@dcore.ng or visit our contact page.

---

**Built with ❤️ by DCORE Team**
