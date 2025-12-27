# School Hub - Codebase Documentation

This document provides an overview of the School Hub management system codebase, its structure, and key technologies.

## Tech Stack

- **Framework**: [React](https://reactjs.org/) (Version 18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Lucide Icons)
- **Routing**: [React Router](https://reactrouter.com/) (Version 6)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) (for data fetching)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## Project Structure

```text
school-hub-main/
├── netlify.toml          # Netlify deployment configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── src/
    ├── App.tsx           # Main application component & routing
    ├── main.tsx          # Application entry point
    ├── index.css         # Global styles
    ├── components/
    │   ├── dashboard/    # Dashboard-specific components (StatCard, QuickActions)
    │   ├── layout/       # Layout components (Sidebar, Navbar)
    │   └── ui/           # Reusable Shadcn UI component primitives
    ├── data/             # Sample data for the application
    ├── hooks/            # Custom React hooks (e.g., use-mobile.tsx)
    ├── lib/              # Utility functions (e.g., utils.ts for tailwind-merge)
    └── pages/            # Page components (Dashboard, Student management, etc.)
```

## Core Features

- **Dashboard**: Real-time overview of school statistics (students, teachers, fees).
- **Student Management**: Interface for managing student records, admissions, and profiles.
- **Teacher Management**: Staff directory and management.
- **Attendance & Exams**: Modules for tracking attendance and managing examinations.
- **Fee Management**: Overview of collections and pending payments.
- **Calendar**: Academic calendar and event scheduling.

## Development and Deployment

### Running Locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

### Building for Production
- Build command: `npm run build`
- Output directory: `dist`

### Deployment (Netlify)
The project is configured for easy deployment to Netlify via the included `netlify.toml`. It handles client-side routing automatically by redirecting all requests to `index.html`.
