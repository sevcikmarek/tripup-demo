# TripUp demo

Responsive interactive prototype shell built with Next.js, TypeScript, and Tailwind CSS.

- On mobile, the prototype fills the screen like a native app.
- On desktop, it appears inside a phone frame with walkthrough controls.
- The project is configured for automatic Vercel deployments from GitHub.

## Prototype foundation

The demo is driven by a typed reducer rather than isolated mock screens:

- `src/lib/demo-data.ts` contains the Lisbon case, members, starting debts, dinner options, and itinerary.
- `src/lib/demo-logic.ts` contains navigation, voting, expense, split, balance, and settlement logic.
- `src/app/demo-app.tsx` renders the eight-step interactive flow.

Ren joins as the fifth traveler during the invite step. Earlier balances remain assigned only to the original four people; new expenses can include Ren.

Text and decimal fields use native inputs on screens up to 760px wide, so phones open the real device keyboard. The desktop phone preview makes the same inputs read-only and supplies an on-screen mock keyboard. The app content scrolls inside the phone frame at both breakpoints.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```
