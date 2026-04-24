# Aabhushanam E‑commerce (Frontend)

Aabhushanam is a **jewellery e‑commerce storefront** built as a **single-page application (SPA)**. This repository contains the **customer-facing frontend only**: product discovery, merchandising, cart and checkout UI, account area, and authentication screens. Product data and order flows are currently **mocked on the client** for demonstration; wiring a real API is the natural next step for production.

---

## Tech stack

| Layer | Technology |
|--------|------------|
| **UI framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (~5.9) |
| **Build & dev server** | [Vite 8](https://vitejs.dev/) with [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) |
| **Routing** | [React Router 7](https://reactrouter.com/) (`BrowserRouter`, nested routes) |
| **Components & layout** | [Material UI (MUI) 7](https://mui.com/) with [Emotion](https://emotion.sh/) for styling |
| **Icons** | [`@mui/icons-material`](https://mui.com/material-ui/material-icons/) |
| **Server state (ready for APIs)** | [TanStack Query (React Query) 5](https://tanstack.com/query/latest) |
| **Session (demo)** | [`js-cookie`](https://github.com/js-cookie/js-cookie) for lightweight auth flags |

**Tooling:** ESLint 9, Prettier 3, `typescript-eslint`, Husky + lint-staged for pre-commit quality checks.

---

## Features (high level)

- Responsive **home**, **catalog (PLP)**, **product detail (PDP)** with gallery and recommendation-style rails  
- **Cart**, **checkout** UI, **wishlist**, **store locator**, and **account** shell (profile, addresses, payment, orders)  
- **Auth** routes: login, signup, forgot password, logout (cookie-based session for the demo)  
- **Merchandising** blocks: featured collections, product rails, trust and footer content  

---

## Getting started

**Requirements:** Node.js **20+** (recommended) and npm.

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

The dev server URL is printed in the terminal (typically `http://localhost:5173`).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite in development mode |
| `npm run build` | Type-check (`tsc -b`) then output an optimized production bundle |
| `npm run preview` | Serve the built app locally |
| `npm run lint` | Run ESLint on the project |

---

## Project layout (overview)

```
src/
├── components/     # Shared UI (layout, header, footer, product cards, carousels)
├── context/        # Client state (e.g. cart, wishlist, recently viewed)
├── data/           # Static / mock catalogue data
├── pages/          # Route-level screens (home, products, account, auth, cart)
├── providers/      # App-wide providers (router, theme, query client)
├── routes/         # Route configuration and auth route table
├── types/          # Shared TypeScript types
└── utils/          # Helpers (cookies, HTTP placeholder, etc.)
```

---

## Configuration notes

- **Environment:** No `.env` is required for the current mock UI. When you connect a backend, add env variables as needed and document them here.
- **Auth:** The demo uses cookies for a simple “logged in” flag. Replace with your real identity provider or session API before production.
- **API:** `src/utils/http.ts` and related auth hooks may reference patterns from other projects; align them with your actual backend before shipping.

---

## Contributing

1. Create a branch from `main`.  
2. Run `npm run lint` (and fix issues) before opening a pull request.  
3. Pre-commit hooks (via Husky) run lint-staged on staged TypeScript/JavaScript files.