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

Desktop controls can switch between Ari and Maya so balances, “you” labels, votes, payments, and expense ownership are rendered from different perspectives. The preview can also switch between static screenshot-style Lock and Home Screens and TripUp; only useful demo hotspots such as the TripUp notification remain interactive. The frame follows the iPhone 18 Pro’s official physical and display proportions, with a compact Dynamic Island and rendered cellular, Wi-Fi, and battery status graphics. On actual mobile widths these presentation controls are removed and the prototype always starts in Ari’s primary app flow. Reset is available from both the desktop rail and the mobile app header.

The desktop expense field uses a dedicated translucent numeric keypad with iOS-style number and letter groupings. Mobile continues to use the device’s native decimal keyboard.

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
