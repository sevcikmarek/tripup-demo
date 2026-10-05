# Architecture

## From export to site

The original deliverable was a self-contained HTML export containing base64 assets and a full-screen loading thumbnail. This repository stores the assets as ordinary files and keeps application logic, styles, and templates in `src/`.

The build copies `static/` to `public/`, adds the stylesheet, and inserts `src/prototype.js` into the component script in `src/index.html`. The DC export runtime expects that inline script, so the insertion happens at build time. Browser scripts load in order: resource map, React, ReactDOM, then the DC runtime. The former thumbnail loader is no longer used.

The runtime under `static/assets/vendor/` is generated export code. Make application changes in `src/`; preserve the runtime unless intentionally replacing the export architecture. The HTML contains custom `x-dc` templates and `sc-*` bindings rather than handwritten React components.

## State and interactions

`src/prototype.js` defines the mock itinerary, people, venue suggestions, expense helpers, and component interactions. A navigation stack starts with `trips` and `trip`, placing Lisbon on screen while retaining back navigation. Every page load uses the initial state; saved navigation and flow progress are never restored.

Demo progress stays in component memory and resets on refresh or when the link opens in another window. On startup, the obsolete local storage key `tripup-proto-ds-v6` is removed so older saved sessions cannot resume. The reset control or Esc also restarts the scenario within the current page. The separate image cache (`tripup-imgs-v2`) can persist across resets. No user account or backend is involved.

Expense allocation supports equal splits, weighted shares, fixed amounts, percentages, and a separate portion for selected participants. Tests exercise those calculations and invalid allocations. The ledger deliberately keeps a small amount owed in some scenarios to demonstrate settlement; it is not a financial accounting system.

## Assets and network use

Icons, avatars, fonts, React, ReactDOM, and the DC runtime are served locally. Runtime resource identifiers are resolved by `static/resource-map.js`. Venue and activity pictures can be loaded from Wikimedia Commons and LoremFlickr; unavailable images may leave fallbacks in the demo. No API credentials are required.

The page uses `touch-action: manipulation` to remove double-tap zoom while retaining scrolling and pinch zoom. It keeps the standard responsive viewport without disabling user scaling.

## Validation and deployment

`npm run check` builds the site, parses the application and runtime JavaScript, and verifies local asset references. `npm test` runs behavior tests with Node's built-in test runner. GitHub Actions repeats both checks on pushes to main and pull requests. Vercel runs the build and serves the resulting `public/` directory.
