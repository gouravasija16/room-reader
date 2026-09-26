# Room Reader

Room Reader is a browser-based escape-room game. Explore themed rooms, solve timed puzzles, and create your own mysteries to play.

## Features

- Browse rooms and filter by name or difficulty.
- Play through puzzles against a countdown timer, with optional hints.
- Review your completion time and hint count, and track your personal best for each room.
- Create rooms, add and edit puzzles, and preview your room before playing.
- View completed rooms and best times in your play history.
- Adjust ambient music and reduced-motion preferences.

Room content, preferences, and play records are stored in the browser's local storage. The login flow is a lightweight local demo and does not provide server-backed authentication.

## Getting started

### Requirements

- Node.js and npm

### Install and run

```sh
npm install
npm run dev
```

Vite prints the local URL when the development server is ready.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Tech stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- Lucide icons
