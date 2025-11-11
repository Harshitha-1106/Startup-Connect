# Momentum Link - Startup Connect Platform

A modern platform connecting startups with investors, mentors, and users to accelerate growth through data-driven insights and networking.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)

## Technologies Used

| Category          | Technology                  |
|-------------------|-----------------------------|
| **Frontend**     | React 18, TypeScript, Vite |
| **UI Framework** | shadcn/ui, Tailwind CSS    |
| **Backend**      | Supabase                   |
| **State Management** | React Query            |
| **Routing**      | React Router DOM          |

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd momentum-link
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will run on `http://localhost:4205`.

### Available Scripts

| Script          | Description                  |
|-----------------|------------------------------|
| `npm run dev`  | Start development server    |
| `npm run build` | Build for production        |
| `npm run build:dev` | Build for development   |
| `npm run lint` | Run ESLint                  |
| `npm run preview` | Preview production build    |

## Project Structure

```
momentum-link/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── integrations/      # External service integrations
├── supabase/              # Supabase configuration
└── package.json
```

## Features

- User authentication (Login/Signup)
- Dashboard for managing connections
- Investor, Mentor, and User profiles
- Networking platform
- Responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
