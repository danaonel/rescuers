# Website Template

This project is a configurable website template built with React, Express, and Tailwind CSS. All content is dynamically managed via a JSON file.

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone the repository (or download the files).
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser to `http://localhost:3000`.
3. To update content, edit `server/content.json`.

## Deployment to Netlify

Since this project uses an Express backend and a PostgreSQL database, a standard static deployment on Netlify requires adjustments.

### Option A: Static Only (GitHub Pages / Netlify)
If you only want a static site and don't need the Express backend:
1. Move your content from `server/content.json` to a frontend file (e.g., `client/src/content.ts`).
2. Update the frontend to import this file directly instead of fetching from `/api/content`.
3. Build the project:
   ```bash
   npm run build
   ```
4. Deploy the contents of the `dist/public` folder to Netlify or GitHub Pages.

### Option B: Fullstack (Replit / Render / Fly.io)
For full dynamic functionality with the database and API:
1. **Replit**: Click the **Publish** button in the Replit interface. It handles the database and hosting automatically.
2. **Netlify Functions**: You would need to rewrite the Express routes as [Netlify Functions](https://docs.netlify.com/functions/overview/) and use an external PostgreSQL provider (like Supabase or Neon) for the `DATABASE_URL`.

## Project Structure
- `client/`: React frontend code.
- `server/`: Express backend and storage logic.
- `shared/`: Shared schemas and API route definitions.
- `server/content.json`: The source of truth for your website's content.
