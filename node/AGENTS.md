## Tech Stack
- Backend: Node.js + Express.js + React DOM for SSR
- Frontend: React 19 with SSR
- Routing: React Router DOM v6
- Styling & UI: Tailwind CSS v4 + ShadCN components
- Package Manager: npm
## Current Features
- Server-Side Rendering (SSR) - Pages are rendered on the server
- Client-Side Hydration - React takes over on the client
- File-based Routing - Routes defined in src/routes.jsx
- Three Pages: Home (/), About (/about), Contact (/contact) + 404
- ShadCN UI Components - Pre-configured button component
- Production-ready - Compression, static file serving, error handling
## Available Scripts 
- You should not need to run scripts after code changes. This App comes with a PM2 (App Process Mananger) already setup which will build the code after changes and run the dev server. It uses vite to build and node JS and express to run the server. 
## Current Pages
- Home: Simple welcome page
- About: Basic about page
- Contact: Basic contact page
- 404: Not found page