# Miro Clone

A full-featured collaborative whiteboarding application built with modern web technologies. This project replicates the core functionality of Miro, enabling real-time collaboration, drawing tools, and board management.

**Tutorial Reference:** Based on [Code with Antonio's Tutorial](https://www.youtube.com/@codewithantonio)

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)

---

## Features

- ✨ **Real-time Collaboration** - Multiple users can edit simultaneously with live cursor tracking
- 🎨 **Drawing Tools** - Rectangles, ellipses, paths, text, and more
- 🎭 **Color Picker** - Customize colors for shapes and elements
- 👥 **User Presence** - See who's on the board and their cursors
- 💾 **Board Management** - Create, rename, and organize boards
- ⭐ **Favorites** - Mark boards as favorites for quick access
- 🔐 **Authentication** - Secure user authentication and organization management
- 📱 **Responsive Design** - Works across different screen sizes
- 🌙 **Layer Management** - Organize elements with layer preview and selection tools

---

## Technology Stack

### Frontend Framework

- **[Next.js 14](https://nextjs.org/)** - React framework for production
  - Why: Provides server-side rendering (SSR), static site generation (SSG), API routes, and excellent performance optimization
  - Key Benefits: Built-in image optimization, automatic code splitting, and seamless TypeScript support

### UI Component Library

- **[shadcn/ui](https://ui.shadcn.com/)** + **[Radix UI](https://www.radix-ui.com/)**
  - Why: High-quality, unstyled components that are fully composable and accessible
  - Components Used:
    - Alert Dialog - For confirmation modals
    - Avatar - For user profile pictures
    - Button - Base button component
    - Dialog - Modal dialogs for user interactions
    - Dropdown Menu - Context menus and navigation
    - Input - Form inputs
    - Skeleton - Loading placeholders
    - Tooltip - Helpful hints on hover
  - Key Benefits: Complete control over styling, accessibility standards (WCAG compliant), small bundle size

### Real-time Collaboration

- **[Liveblocks](https://liveblocks.io/)**
  - Why: Industry-standard solution for real-time collaboration features
  - Features Used:
    - Real-time presence tracking (cursor positions, user awareness)
    - Conflict-free state management with CRDT (Conflict-free Replicated Data Types)
    - LiveMap, LiveList, and LiveObject for collaborative data structures
  - Key Benefits: Handles network synchronization, conflict resolution, and presence without manual implementation

### Backend & Database

- **[Convex](https://www.convex.dev/)**
  - Why: Serverless backend platform that replaces traditional database setup
  - Features Used:
    - Define schema and queries/mutations in TypeScript
    - Automatic database schema validation
    - Full-text search with search indexes
    - Relational data with indexes for performance
  - Key Benefits: No server management, TypeScript-first, real-time subscriptions, automatic deployments

### Authentication & Authorization

- **[Clerk](https://clerk.com/)** (@clerk/nextjs)
  - Why: Comprehensive authentication and user management solution
  - Features Used:
    - Multi-factor authentication
    - Social login (OAuth providers)
    - Organization management (multi-tenant support)
    - Session management
  - Key Benefits: Pre-built UI components, production-ready security, middleware integration

### Styling & CSS

- **[Tailwind CSS](https://tailwindcss.com/)**
  - Why: Utility-first CSS framework for rapid UI development
  - Features Used:
    - Responsive design utilities
    - Custom color schemes
    - Dark mode support via next-themes
  - Key Benefits: Small production bundle, highly customizable, excellent developer experience

- **[TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)**
  - Why: Animation utilities for Tailwind CSS
  - Used for: Smooth transitions and UI animations

- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**
  - Why: Utility for merging Tailwind CSS classes without conflicts
  - Key Benefits: Prevents style conflicts when composing components

- **[Class Variance Authority (CVA)](https://cva.style/)**
  - Why: CSS-in-JS solution for creating component variants
  - Used for: Defining component variations (sizes, colors, states) in a type-safe way

### Drawing & Canvas

- **[Perfect Freehand](https://github.com/steveruizok/perfect-freehand)**
  - Why: Smooth, responsive drawing library
  - Used for: Rendering smooth pen strokes and paths
  - Key Benefits: Natural-looking brush strokes, high performance

### State Management

- **[Zustand](https://github.com/pmndrs/zustand)**
  - Why: Lightweight state management library
  - Used for: Global UI state (rename modals, selection state, etc.)
  - Key Benefits: Minimal boilerplate, small bundle size, TypeScript support

### Utilities & Helpers

- **[date-fns](https://date-fns.org/)**
  - Why: Modern date utility library
  - Used for: Date formatting and manipulation

- **[nanoid](https://github.com/ai/nanoid)**
  - Why: Tiny, secure URL-friendly unique string ID generator
  - Used for: Generating unique IDs for shapes and elements

- **[query-string](https://github.com/sindresorhus/query-string)**
  - Why: Parse and stringify URL query strings
  - Used for: URL parameter management

- **[clsx](https://github.com/lukeed/clsx)**
  - Why: Tiny utility for constructing className strings conditionally
  - Used for: Dynamic CSS class composition

- **[Lucide React](https://lucide.dev/)**
  - Why: Beautiful, consistent icon library
  - Used for: UI icons throughout the application

- **[react-contenteditable](https://www.npmjs.com/package/react-contenteditable)**
  - Why: React component for contenteditable elements
  - Used for: Editable text elements on the canvas

- **[usehooks-ts](https://usehooks-ts.com/)**
  - Why: Collection of TypeScript-ready React hooks
  - Used for: Reusable hook utilities

- **[sonner](https://sonner.emilkowal.ski/)**
  - Why: Beautiful toast notification library
  - Used for: User feedback and notifications

- **[next-themes](https://github.com/pacocoursey/next-themes)**
  - Why: Theme management for Next.js
  - Used for: Light/dark mode support

### Development Tools

- **[TypeScript](https://www.typescriptlang.org/)**
  - Why: Adds static typing to JavaScript
  - Benefits: Better IDE support, catch errors at compile time, improved code documentation

- **[ESLint](https://eslint.org/)**
  - Why: JavaScript linter
  - Used for: Code quality and consistency enforcement

- **[PostCSS](https://postcss.org/) + [Autoprefixer](https://autoprefixer.github.io/)**
  - Why: CSS transformation tools
  - Used for: Vendor prefixing and CSS compatibility

- **[Bun](https://bun.sh/)**
  - Why: Fast JavaScript runtime (alternative to Node.js)
  - Used for: Faster package management and script execution

---

## Project Structure

```
miro-clone/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   └── liveblocks-auth/      # Liveblocks authentication endpoint
│   ├── (dashboard)/              # Dashboard layout group
│   │   ├── _components/          # Dashboard components
│   │   │   ├── boardCard/        # Board card component
│   │   │   ├── boardList.tsx     # Board listing
│   │   │   ├── navbar.tsx        # Navigation bar
│   │   │   ├── orgSidebar.tsx    # Organization sidebar
│   │   │   ├── sidebar/          # Sidebar components
│   │   │   └── ...
│   │   ├── layout.tsx            # Dashboard layout
│   │   └── page.tsx              # Dashboard page
│   └── boards/
│       └── [boardId]/            # Dynamic board routes
│           ├── _components/      # Canvas & board components
│           │   ├── canvas.tsx    # Main drawing canvas
│           │   ├── toolbar.tsx   # Drawing tools
│           │   ├── colorPicker.tsx
│           │   ├── cursor.tsx    # User cursors
│           │   └── ...
│           └── page.tsx          # Board page
├── components/                   # Global components
│   ├── modals/                   # Modal dialogs
│   ├── ui/                       # shadcn/ui components
│   └── auth/                     # Authentication components
├── convex/                       # Backend logic
│   ├── schema.ts                 # Database schema
│   ├── board.ts                  # Board mutations
│   ├── boards.ts                 # Board queries
│   └── auth.config.js            # Clerk integration
├── hooks/                        # Custom React hooks
│   ├── useApiMutation.ts        # Convex mutation wrapper
│   ├── useDeleteLayers.ts       # Layer deletion logic
│   └── useSelectionBounds.ts    # Selection calculation
├── lib/                          # Utility functions
│   └── utils.ts                  # General utilities
├── providers/                    # Context providers
│   ├── convexClientProvider.tsx # Convex initialization
│   └── modalProvider.tsx         # Modal state provider
├── store/                        # Zustand stores
│   └── useRenameModal.ts        # Rename modal state
├── types/                        # TypeScript type definitions
│   └── canvas.ts                # Canvas-related types
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js configuration
└── package.json                  # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager
- Convex account (for backend)
- Liveblocks account (for real-time collaboration)
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd miro-clone
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Convex
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-key>
   CLERK_SECRET_KEY=<your-clerk-secret>

   # Liveblocks
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<your-liveblocks-key>
   LIVEBLOCKS_SECRET_KEY=<your-liveblocks-secret>
   ```

4. **Initialize Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Development

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build the project for production
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality checks

### Key Development Concepts

#### Real-time Collaboration Flow
1. User connects to a board via Clerk authentication
2. Liveblocks establishes a real-time connection
3. Canvas state is synchronized across all users
4. Drawing changes are broadcasted instantly to all participants

#### Board Management Flow
1. Boards are stored in Convex database
2. User authentication determines board access via organizations
3. Boards are indexed by `orgId` for efficient queries
4. Full-text search allows users to find boards by title

#### Authentication Flow
1. Clerk handles user sign-up and sign-in
2. Organizations enable multi-tenant board management
3. Middleware validates authenticated routes
4. User information is passed to Convex and Liveblocks

---

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Production Considerations

- All TypeScript is compiled to JavaScript
- Static assets are optimized by Next.js
- API routes are serverless functions
- Real-time features work through Liveblocks infrastructure
- Database operations go through Convex API

---

## Architecture Highlights

### Why This Tech Stack?

**Next.js + TypeScript** - Type safety and server-side capabilities for better performance and DX

**Convex** - Serverless backend eliminates DevOps overhead while providing real-time subscriptions

**Liveblocks** - Handles complex real-time synchronization so we focus on product features

**Clerk** - Production-ready authentication without security implementation concerns

**Tailwind CSS** - Rapid UI development with utility classes and consistent design

**Zustand** - Minimal state management for local UI state without boilerplate

**shadcn/ui + Radix** - Accessible, unstyled components with full customization

---

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

## License

This project is open source and available under the MIT License.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev/)
- [Liveblocks Documentation](https://liveblocks.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tutorial by Code with Antonio](https://www.youtube.com/watch?v=ADJKbuayubE)

---

**Last Updated:** December 2024
