# NodeDrop

NodeDrop is a hackathon discovery and collaboration platform for builders who want to find worthwhile events, meet potential teammates, and prepare stronger projects. It combines a React/Vite frontend with an Express API, MongoDB persistence, JWT authentication, and an optional OpenAI-powered assistant.

## Features

### Hackathon discovery

- Home page with a typewriter hero, animated feature sections, and a "How It Works" workflow.
- Hackathon catalogue at `/hackathons` with search across titles, descriptions, and themes.
- Organizer filters, event cards, dates, locations, prize information, themes, and a worldwide map.
- Responsive Material UI layouts, video background, transitions, and mobile-friendly navigation.

The current catalogue uses frontend demo data. The backend also exposes MongoDB-backed hackathons, but the React catalogue does not yet consume that endpoint. Registration buttons and some event detail links are currently presentation-only.

### Accounts and authentication

- Registration with name, email, password, GitHub URL, and LinkedIn URL.
- Password hashing with `bcryptjs` and JWT login responses.
- Protected profile and team routes that redirect unauthenticated visitors to `/login`.
- Existing JWT validation through `/api/auth/profile` on application startup.
- Invalid tokens are removed from local storage, and logout clears the browser token.

The frontend stores the token under `hackpack_token`. JWTs contain the user ID and expire after one hour. Refresh tokens and server-side token revocation are not implemented.

### Team formation

The `/team` workspace is designed to help builders search for collaborators and create teams. Member search is connected to the backend API. Team persistence is incomplete because the frontend calls `/api/teams`, while no matching backend route currently exists.

### Profiles

The protected `/profile` page provides overview, projects, teams, and settings tabs. It includes skills, hackathon statistics, recent activity, project links, and social/profile actions. Much of the current content is demo data and is not yet connected to the authenticated user's profile.

### NodeDrop AI

The floating NodeDrop AI assistant is available throughout the React application. It provides guidance for finding hackathons, forming teams, generating project ideas, and preparing projects. It includes these starter prompts:

- Find a hackathon
- How do I form a team?
- Project ideas

The frontend keeps conversation state locally and sends the latest ten messages to `POST /api/chat`. The backend takes the latest user message and:

1. Returns a local keyword-based response when `OPENAI_API_KEY` is not configured.
2. Calls an OpenAI-compatible Chat Completions endpoint when a key is available.
3. Uses `OPENAI_MODEL`, defaulting to `gpt-4o-mini`.
4. Returns a local fallback response when the provider fails or times out.

The provider timeout is 20 seconds. Chat does not stream tokens or persist conversations. The endpoint currently has no authentication, rate limiting, request-size validation, or content policy layer, so those controls should be added before production use.

## Application Routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/` | Public | Home, feature highlights, and workflow overview |
| `/about` | Public | Mission and platform description |
| `/hackathons` | Public | Searchable hackathon catalogue and map |
| `/login` | Public | User login |
| `/signup` | Public | User registration |
| `/profile` | Authenticated | Profile dashboard |
| `/team` | Authenticated | Team formation workspace |

Shared layout features include the navigation bar, user menu, footer, persistent video background, and floating chatbot.

## Architecture

```text
React + Vite frontend
	|
	| /api requests through Vite proxy
	v
Express + Node.js backend
	|
	+--> MongoDB via Mongoose
	+--> OpenAI-compatible Chat Completions API (optional)
```

Vite proxies `/api` to `http://localhost:5000` during development. The frontend uses React 18, React Router, Material UI, Emotion, Framer Motion, React Spring, React Intersection Observer, D3 scale, and React Simple Maps. The backend uses Express, Mongoose, `bcryptjs`, `jsonwebtoken`, `dotenv`, CORS, and Axios.

## API Reference

### Public endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Returns backend health status |
| `POST` | `/api/auth/register` | Creates a user and returns authentication data |
| `POST` | `/api/auth/login` | Authenticates a user and returns a JWT |
| `GET` | `/api/hackathons` | Reads hackathons from MongoDB |
| `POST` | `/api/chat` | Returns an AI or fallback assistant response |

### Authenticated endpoints

Authenticated requests use `Authorization: Bearer <token>`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/auth/profile` | Returns the current user profile |
| `GET` | `/api/auth/members?search=...` | Searches registered members |

The frontend API wrapper also defines `POST /api/teams`, but that backend route is not implemented yet. The `/api/hackathons` endpoint reads records from the MongoDB `Hackathon` collection; there is no seed command or CRUD/admin endpoint.

## Data Models

### User

The Mongoose user model includes required `name`, unique `email`, and hashed `password` fields; optional `linkedin` and `github` URLs; verification data (`q1` and `verified`); scraped LinkedIn projects and GitHub repositories; and automatic `createdAt` and `updatedAt` timestamps. Member responses also receive display defaults such as role, skills, experience, and avatar.

### Hackathon

The hackathon model contains `name`, `date`, `location`, and `link`.

## Project Structure

```text
hackpack_platform-main/
├── index.html                 Frontend HTML entry point
├── package.json               Vite, React, build, and test scripts
├── vite.config.js             Vite configuration and API proxy
├── public/                    Static public assets
├── dist/                      Generated production build
├── src/
│   ├── App.js                 Router and providers
│   ├── components/            Shared layout and feature components
│   ├── contexts/              Authentication context
│   ├── pages/                 Home, catalogue, auth, profile, and team views
│   └── services/api.js        Frontend API wrapper
└── backend/
    ├── server.js              Express server and route mounting
    ├── auth.js                Authentication handlers
    ├── authMiddleware.js      JWT middleware
    ├── chatRoutes.js          AI and fallback chat endpoint
    ├── hackathonRoutes.js     MongoDB hackathon endpoint
    ├── User.js                User schema
    ├── Hackathon.js           Hackathon schema
    └── db.js                  MongoDB connection setup
```

Legacy standalone dashboard files remain under `backend/`, including `backend/index.html`, `backend/dashboard.html`, and `backend/script.js`. They are separate from and not used by the active React application.

## Requirements

- Node.js 18 or newer recommended.
- npm.
- MongoDB for registration, authentication, members, and database-backed hackathons.
- An OpenAI API key only for model-powered chat. Local fallback responses work without one.

## Installation

From the repository root:

```bash
cd hackpack_platform-main
npm install
cd backend
npm install
```

Create `backend/.env` locally. Never commit this file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/hackathon_platform
JWT_SECRET=replace-with-a-long-random-string
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
# Optional OpenAI-compatible endpoint
# OPENAI_API_URL=https://api.openai.com/v1/chat/completions
```

Use [backend/.env.example](backend/.env.example) as the safe template. Keep API keys, database credentials, and JWT secrets out of Git. Rotate any credential that has been exposed.

## Running Locally

Start MongoDB, then use two terminals.

Frontend:

```bash
cd hackpack_platform-main
npm run dev
```

Backend:

```bash
cd hackpack_platform-main/backend
npm run dev
```

The frontend runs at `http://localhost:3000` and the API runs at `http://localhost:5000`.

## Available Scripts

### Frontend

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm start` | Alias for the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run the Vitest test command |

### Backend

Run these from `backend/`:

| Command | Purpose |
| --- | --- |
| `npm start` | Start Express with Node |
| `npm run dev` | Start Express with Nodemon |

## Current Limitations

NodeDrop is an active prototype. Current gaps include:

- The React hackathon list is hard-coded demo data and currently shows 2025 events.
- The frontend does not yet consume the MongoDB hackathon endpoint.
- Registration, invites, notifications, connect/message actions, and many social buttons are placeholders.
- There is no `/hackathons/:id` detail route even though one card link uses that pattern.
- Team creation has no complete backend implementation, and team search response shapes need alignment.
- Profile content is primarily demo data rather than authenticated user data.
- Verification, settings, edit profile, and notification workflows are not fully wired.
- The map loads world geography from a remote `world-atlas` source.
- Password reset, email verification, refresh tokens, roles, permissions, seed data, and deployment configuration are not implemented.
- The existing test file contains stale Create React App expectations and should be updated for Vite.

## Security Notes

- Never commit `backend/.env` or an API key.
- Use a long random `JWT_SECRET` outside local experiments.
- Restrict CORS to trusted frontend origins in production.
- Add authentication and rate limiting to `/api/chat` before exposing it publicly.
- Validate and normalize registration fields, URLs, and chat payloads on the backend.
- Rotate credentials immediately if they appear in Git history, logs, screenshots, or terminal output.

## Development Notes

The repository and some internal compatibility identifiers still use the original `hackpack` naming, including the local-storage token key and backend package metadata. These should be migrated only with a coordinated compatibility plan; the visible product branding is NodeDrop.
