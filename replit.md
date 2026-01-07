# replit.md

## Overview

This is a configurable website template for organizations (currently themed as an environmental initiative). The application is a fullstack web app built with React on the frontend and Express on the backend. All website content (name, tagline, images, donation info, social links) is dynamically managed via a JSON configuration file, making it easy to customize without code changes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with CSS variables for theming, plus shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth page transitions and scroll reveals
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: Simple REST API with a single endpoint (`/api/content`) that serves site configuration
- **Storage Layer**: File-based storage reading from `server/content.json` - abstracted behind an `IStorage` interface for future extensibility
- **Database Setup**: Drizzle ORM configured for PostgreSQL (currently not actively used - content comes from JSON file, but schema infrastructure is in place for future features)

### Content Management Pattern
- All site content lives in `server/content.json` (source of truth)
- A duplicate exists at `client/src/content.json` as fallback for static deployments
- The frontend fetches from `/api/content` first, falling back to bundled JSON if the API is unavailable
- Content schema is validated using Zod in `shared/schema.ts`

### Build and Development
- Development: `npm run dev` runs Express server with Vite middleware for HMR
- Production: `npm run build` creates optimized bundles using esbuild (server) and Vite (client)
- Database migrations: `npm run db:push` using Drizzle Kit

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (Hero, Gallery, Footer, etc.)
    components/ui # shadcn/ui primitives
    hooks/        # Custom React hooks
    pages/        # Page components
    lib/          # Utilities and query client
server/           # Express backend
  content.json    # Site content configuration
  routes.ts       # API route definitions
  storage.ts      # Data access layer
shared/           # Shared code between frontend/backend
  schema.ts       # Zod schemas and TypeScript types
  routes.ts       # API route type definitions
```

## External Dependencies

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- Components are copied into the codebase (not installed as a package) at `client/src/components/ui/`

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database access and migrations
- Currently the database is provisioned but not actively used for content (content comes from JSON)

### Key npm Packages
- `@tanstack/react-query`: Data fetching and caching
- `framer-motion`: Animations
- `zod`: Schema validation
- `wouter`: Client-side routing
- `lucide-react`: Icon library

### Deployment Options
- **Replit**: Full dynamic deployment with database support (use Publish button)
- **Static Hosting** (Netlify/GitHub Pages): Can deploy frontend only using bundled content.json fallback
- **Other Platforms** (Render/Fly.io): Full deployment with external PostgreSQL provider