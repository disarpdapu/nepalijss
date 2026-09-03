# Nepali Janasamparka Samiti – Spain

Official bilingual website for Nepali Janasamparka Samiti – Spain (Nepalese People Co-ordination Committee, Spain), an overseas committee of Nepali Congress.

The site introduces the committee and its history while centring its work in Spain: organising Dashain, Tihar, Teej, and Nepali New Year celebrations, bringing Nepali people together, and participating in meetings hosted by NRNA.

## Live site

[nepalijss.vercel.app](https://nepalijss.vercel.app/)

## Technology

- React 18 and TypeScript
- Vite 8
- React Router
- Tailwind CSS
- Vitest and Testing Library

## Local development

Node.js 22.13 or newer and npm are required.

```sh
npm ci
npm run dev
```

The development server runs at `http://localhost:8080`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview a completed production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check the application and build configuration types |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run check` | Run lint, type checks, tests, and a production build |

## Routes

| Route | Content |
| --- | --- |
| `/` | Committee identity, community focus, and Nepali Congress affiliation |
| `/about` | Committee background, focus, party history, and activities |
| Any other route | Localised 404 page with a return link |

The Vercel rewrite in `vercel.json` sends direct visits to client-side routes through the React application.

## Internationalisation

English and Nepali copy lives in `src/i18n/translations.ts`. The language switcher persists the selected language in local storage under `njs-language` and updates the document’s `lang` attribute.

## Structure

```text
src/
├── assets/       Brand and national symbols
├── components/   Shared navigation, footer, and page shell
├── contexts/     Language state and persistence
├── i18n/         English and Nepali content
├── pages/        Home, About, and Not Found pages
└── test/         Application tests and browser-like setup
```

## Accessibility

The interface includes semantic landmarks and headings, a skip link, visible keyboard focus, active navigation state, labelled controls, responsive 44px touch targets, correct language metadata, and reduced-motion handling.
