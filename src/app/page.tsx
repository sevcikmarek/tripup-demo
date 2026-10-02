"use client";

import { useState } from "react";

const steps = [
  { title: "Trips" },
  { title: "Lisbon trip" },
  { title: "Add Ren", note: "JTBD: Add Ren to trip" },
  { title: "Dinner options", note: "JTBD: Decide on dinner plans" },
  { title: "Voting" },
  { title: "Add expense", note: "JTBD: Split dinner expense" },
  { title: "How it was split" },
  { title: "Settle up", note: "JTBD: Settle expenses" },
];

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  );
}

function PhonePreview({ activeStep }: { activeStep: number }) {
  return (
    <div className="phone" aria-label="TripUp mobile preview">
      <div className="phone-screen">
        <div className="status-bar" aria-hidden="true">
          <strong>17:42</strong>
          <span className="dynamic-island" />
          <div className="status-icons"><span>▮▮▮</span><span>⌁</span><span className="battery" /></div>
        </div>

        <div className="app-scroll">
          <header className="app-header">
            <button className="icon-button" aria-label="Go back"><ChevronLeft /></button>
            <button className="icon-button" aria-label="More options"><MoreIcon /></button>
          </header>

          <h1>Lisbon</h1>

          <section className="people" aria-label="Trip members">
            {["You", "Marco", "Mia", "Nic", "Leo"].map((name, index) => (
              <div className="person" key={name}>
                <span className={`avatar avatar-${index + 1}`}>{name.slice(0, 1)}</span>
                <span>{name}</span>
              </div>
            ))}
            <button className="add-person" aria-label="Add member">+</button>
          </section>

          <section className="balance-card">
            <div><span>BALANCE</span><strong>You owe €335</strong></div>
            <button>＋ <span>add expense</span></button>
          </section>

          <div className="plan-heading">
            <strong>PLAN · TODAY</strong>
            <button>Show earlier (1)</button>
          </div>

          <section className="timeline-card">
            <div className="suggestion-card">
              <div className="sparkle">✦</div>
              <div>
                <strong>TripUp suggests · 3 nearby places your group mentioned</strong>
                <p>From the Lisbon group chat · near Bairro Alto</p>
                <ul>
                  <li><span>Taberna da Rua das Flores</span><small>6 min walk</small></li>
                  <li><span>Sea Me – Peixaria Moderna</span><small>5 min walk</small></li>
                  <li><span>Cervejaria Trindade</span><small>4 min walk</small></li>
                </ul>
                <button>Choose dinner <span>→</span></button>
              </div>
            </div>

            <div className="timeline-item">
              <time>22:30</time><span className="timeline-dot" />
              <div><strong>Drinks in Bairro Alto</strong><p><span className="mini-avatar">M</span> by Marco · 4 joining</p></div>
            </div>
            <div className="timeline-item">
              <time>☾</time><span className="timeline-dot" />
              <div><strong>Stay at The Lumiares</strong><p>Bairro Alto · last night</p></div>
            </div>
            <div className="timeline-item tomorrow">
              <time>06:30</time><span className="timeline-dot" />
              <div><small>TOMORROW</small><strong>Flight to Milan</strong><p>TAP · LIS T1 → MXP</p></div>
            </div>
          </section>
        </div>

        <button className="floating-action" aria-label="Add item">+</button>
        <div className="home-indicator" aria-hidden="true" />
        {activeStep !== 2 && <div className="step-toast">Previewing step {activeStep}</div>}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <main className="demo-shell">
      <aside className="demo-controls">
        <div><p className="eyebrow">Interactive demo</p><h2>TripUp click-through</h2></div>
        <nav aria-label="Demo steps">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            return (
              <button className={activeStep === stepNumber ? "active" : ""} key={step.title} onClick={() => setActiveStep(stepNumber)} aria-current={activeStep === stepNumber ? "step" : undefined}>
                <span className="step-number">{stepNumber}</span>
                <span><strong>{step.title}</strong>{step.note && <small>{step.note}</small>}</span>
              </button>
            );
          })}
        </nav>
        <button className="restart" onClick={() => setActiveStep(1)}>↻ Restart demo</button>
      </aside>
      <section className="preview-stage">
        <div className="preview-label"><span className="live-dot" /> Live prototype</div>
        <PhonePreview activeStep={activeStep} />
      </section>
    </main>
  );
}
