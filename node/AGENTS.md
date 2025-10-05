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
## Running the App
- This app has PM2 (process manager) running in the background. It renders the app as it is in the /dist folder. You should run `npm run build` after you make changes in order to update them on the App. The build command will restart pm2 after build is completed.
## Current Pages
- Home: Simple welcome page
- About: Basic about page
- Contact: Basic contact page
- 404: Not found page