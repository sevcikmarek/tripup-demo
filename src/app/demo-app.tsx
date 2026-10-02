"use client";

import { useReducer, useState, useSyncExternalStore } from "react";
import {
  calculateBalances,
  createInitialState,
  demoReducer,
  getCurrentUserBalance,
  getSplitAmount,
  getVoteCounts,
  previousScreen,
  screenLabels,
  screenOrder,
  type DemoState,
  type ScreenId,
} from "@/lib/demo-logic";
import {
  dinnerOptions,
  itinerary,
  ren,
  type Member,
} from "@/lib/demo-data";

type DeviceView = "lock" | "home" | "app";

const euro = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function subscribeMobile(callback: () => void) {
  const query = window.matchMedia("(max-width: 760px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function useIsMobile() {
  return useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia("(max-width: 760px)").matches,
    () => false,
  );
}

function Avatar({ member, small = false }: { member: Member; small?: boolean }) {
  return (
    <span className={`avatar avatar-${member.color}${small ? " avatar-small" : ""}`}>
      {member.initials}
    </span>
  );
}

function BackIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>;
}

function PhoneHeader({ state, goBack, reset }: { state: DemoState; goBack: () => void; reset: () => void }) {
  const isTrips = state.screen === "trips";
  return (
    <>
      <div className="status-bar" aria-hidden="true">
        <strong>9:30</strong><span className="dynamic-island" />
        <StatusGraphics />
      </div>
      <header className="app-header">
        {isTrips ? <span className="header-spacer" /> : <button className="icon-button" aria-label="Go back" onClick={goBack}><BackIcon /></button>}
        <span className="header-title">{isTrips ? "" : "Lisbon"}</span>
        <button className="icon-button reset-icon" aria-label="Reset demo" onClick={reset}>↻</button>
      </header>
    </>
  );
}

function MemberStrip({ state, onAdd }: { state: DemoState; onAdd: () => void }) {
  return (
    <section className="people" aria-label="Trip members">
      {state.members.map((member) => (
        <div className="person" key={member.id}>
          <Avatar member={member} />
          <span>{member.id === state.activeUserId ? "You" : member.name.split(" ")[0]}</span>
        </div>
      ))}
      {!state.invitedRen && <button className="add-person" aria-label="Add Ren" onClick={onAdd}>+</button>}
    </section>
  );
}

function BalanceCard({ state, onExpense }: { state: DemoState; onExpense: () => void }) {
  const balance = getCurrentUserBalance(state);
  return (
    <section className="balance-card">
      <div><span>BALANCE</span><strong>{state.settledUserIds.includes(state.activeUserId) ? "You’re settled" : balance < 0 ? `You owe ${euro.format(Math.abs(balance))}` : `You are owed ${euro.format(balance)}`}</strong></div>
      <button onClick={onExpense}>＋ <span>add expense</span></button>
    </section>
  );
}

function TripsScreen({ state, goToOverview }: { state: DemoState; goToOverview: () => void }) {
  const balance = getCurrentUserBalance(state);
  return (
    <div className="screen trips-screen">
      <div className="screen-title-row"><h1>Trips</h1><button className="pill-button">＋ add trip</button></div>
      <p className="section-label">NOW</p>
      <button className="trip-card active-trip" onClick={goToOverview}>
        <span><strong>Lisbon</strong><small>20–27 September</small></span>
        <span className="trip-card-meta"><span className="stacked-avatars">AR · MY · BO · EM</span><b>{balance < 0 ? `You owe ${euro.format(Math.abs(balance))}` : `You’re owed ${euro.format(balance)}`}</b></span>
      </button>
      <p className="section-label">UPCOMING</p>
      <div className="trip-card"><span><strong>Porto Conference</strong><small>20–22 October</small></span><em>Organising</em></div>
      <div className="trip-card"><span><strong>Thailand Bikes</strong><small>9–22 November</small></span></div>
    </div>
  );
}

function OverviewScreen({ state, goTo }: { state: DemoState; goTo: (screen: ScreenId) => void }) {
  return (
    <div className="screen overview-screen">
      <h1>Lisbon</h1>
      <MemberStrip state={state} onAdd={() => goTo("invite")} />
      <BalanceCard state={state} onExpense={() => goTo("expense")} />
      <div className="section-row"><p className="section-label">ITINERARY</p><button onClick={() => goTo("dinner")}>See suggestions</button></div>
      <section className="timeline-card">
        <button className="suggestion-card" onClick={() => goTo("dinner")}>
          <span className="sparkle">✦</span><span><strong>Dinner location still open</strong><small>3 nearby places from your group chat</small><b>Choose dinner place →</b></span>
        </button>
        {itinerary.map((item) => (
          <div className="timeline-item" key={item.title}>
            <time>{item.time}</time><span className="timeline-dot" />
            <div>{item.tomorrow && <small>TOMORROW</small>}<strong>{item.title}</strong><p>{item.meta}</p></div>
          </div>
        ))}
      </section>
    </div>
  );
}

function InviteScreen({ state, query, setQuery, invite, isMobile }: { state: DemoState; query: string; setQuery: (value: string) => void; invite: () => void; isMobile: boolean }) {
  return (
    <div className="screen invite-screen">
      <h1>Lisbon</h1><MemberStrip state={state} onAdd={() => undefined} /><BalanceCard state={state} onExpense={() => undefined} />
      <section className="bottom-sheet">
        <div className="sheet-handle" /><h2>Invite to Lisbon</h2>
        <label className="search-field"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} readOnly={!isMobile} inputMode="text" autoComplete="off" placeholder="Name or phone number" aria-label="Search people" /></label>
        <button className="invite-link"><span>↗</span><span><strong>Share invite link</strong><small>tripup.app/i/lisbon</small></span></button>
        <p className="section-label">CONTACTS</p>
        <button className="contact-row" onClick={invite}>
          <Avatar member={ren} /><span><strong>{state.invitedRen ? "Ren is already joining" : ren.name}</strong><small>@renokafor · Amsterdam</small></span><b>{state.invitedRen ? "Added" : "Invite"}</b>
        </button>
      </section>
    </div>
  );
}

function DinnerScreen({ state, toggle, continueToVote }: { state: DemoState; toggle: (id: string) => void; continueToVote: () => void }) {
  return (
    <div className="screen list-screen">
      <h2>Choose options for dinner</h2>
      <label className="search-field"><span>⌕</span><input placeholder="Search places or write options" aria-label="Search dinner options" /></label>
      <p className="source-note">Suggestions from your <span>●</span> Lisbon group chat</p>
      <div className="option-list">
        {dinnerOptions.map((option) => {
          const checked = state.selectedDinnerIds.includes(option.id);
          return <button key={option.id} className="option-row" onClick={() => toggle(option.id)}><span><strong>{option.name}</strong><small>{option.detail}　·　{option.walk} walk　·　{option.price}</small></span><i className={checked ? "checked" : ""}>{checked ? "✓" : ""}</i></button>;
        })}
      </div>
      <div className="sticky-action"><small>Select multiple to create a poll</small><button disabled={state.selectedDinnerIds.length < 2} onClick={continueToVote}>Add to itinerary</button></div>
    </div>
  );
}

function VoteScreen({ state, vote, submit }: { state: DemoState; vote: (id: string) => void; submit: () => void }) {
  const voteCounts = getVoteCounts(state);
  return (
    <div className="screen vote-screen">
      <div className="vote-hero"><h1>Voting on dinner</h1><div className="vote-people">{state.members.map((member) => <div key={member.id}><Avatar member={member} /><small>{state.votes[member.id] ? "Voted" : member.name.split(" ")[0]}</small></div>)}</div></div>
      <div className="vote-options">
        {dinnerOptions.filter((option) => state.selectedDinnerIds.includes(option.id)).map((option) => {
          const selected = state.votes[state.activeUserId] === option.id;
          return <button className={selected ? "selected" : ""} key={option.id} onClick={() => vote(option.id)}><i>{selected ? "✓" : ""}</i><span>{option.name}</span><b>{voteCounts[option.id] ?? 0} vote{voteCounts[option.id] === 1 ? "" : "s"}</b></button>;
        })}
        <button className="primary-action" disabled={!state.votes[state.activeUserId]} onClick={submit}>Submit vote</button>
      </div>
      <BalanceCard state={state} onExpense={submit} />
    </div>
  );
}

function ExpenseScreen({ state, setAmount, setDescription, isMobile, openKeyboard, goToSplit }: { state: DemoState; setAmount: (value: string) => void; setDescription: (value: string) => void; isMobile: boolean; openKeyboard: () => void; goToSplit: () => void }) {
  const payer = state.members.find((member) => member.id === state.expenseDraft.payerId)!;
  return (
    <div className="screen expense-screen">
      <h2>Add expense</h2>
      <label className="expense-name"><input value={state.expenseDraft.description} readOnly={!isMobile} onChange={(event) => setDescription(event.target.value)} placeholder="What was it for?" aria-label="Expense description" /></label>
      <div className="amount-input"><span>€</span><input value={state.expenseDraft.amount} readOnly={!isMobile} inputMode="decimal" onFocus={openKeyboard} onClick={openKeyboard} onChange={(event) => setAmount(event.target.value)} aria-label="Expense amount" /></div>
      <div className="expense-meta"><span>Paid by</span><button><Avatar member={payer} small /> you</button><span>split</span><button>equally</button></div>
      <button className="primary-action bottom-action" onClick={goToSplit}>Review split</button>
    </div>
  );
}

function SplitScreen({ state, toggle, confirm }: { state: DemoState; toggle: (id: string) => void; confirm: () => void }) {
  const share = getSplitAmount(state);
  return (
    <div className="screen split-screen">
      <h2>How should {euro.format(Number(state.expenseDraft.amount || 0))} be split?</h2>
      <div className="split-tabs"><button className="active">Equally</button><button>Amounts</button><button>Shares</button></div>
      <section className="split-list">
        {state.members.map((member) => {
          const checked = state.expenseDraft.participantIds.includes(member.id);
          return <button key={member.id} onClick={() => toggle(member.id)}><i className={checked ? "checked" : ""}>{checked ? "✓" : ""}</i><Avatar member={member} small /><span>{member.name}{member.id === state.activeUserId ? " (you)" : ""}</span><b>{checked ? euro.format(share) : "—"}</b></button>;
        })}
      </section>
      <div className="split-summary"><strong>{state.expenseDraft.participantIds.length} people included</strong><small>Ren only joins costs added after their invite.</small></div>
      <button className="primary-action bottom-action" onClick={confirm}>Confirm split</button>
    </div>
  );
}

function SettleScreen({ state, settle }: { state: DemoState; settle: () => void }) {
  const balances = calculateBalances(state);
  const currentBalance = balances[state.activeUserId] ?? 0;
  const youOwe = Math.max(0, -currentBalance);
  const isSettled = state.settledUserIds.includes(state.activeUserId);
  const recipient = state.members
    .filter((member) => member.id !== state.activeUserId)
    .sort((a, b) => (balances[b.id] ?? 0) - (balances[a.id] ?? 0))[0];
  const currentMember = state.members.find((member) => member.id === state.activeUserId)!;
  const isCreditor = currentBalance > 0;
  return (
    <div className="screen settle-screen">
      <div className="settle-hero"><h1>{isSettled ? "You’re settled up" : isCreditor ? "You’re owed" : "Settling up"}</h1><p>{isSettled ? "Your Lisbon balance is clear." : isCreditor ? "Your friends can settle with one tap." : "One payment closes your part of the trip."}</p></div>
      <section className="payment-card">
        <Avatar member={isCreditor ? currentMember : recipient} /><span><small>{isCreditor ? "Group owes you" : "You pay"}</small><strong>{isCreditor ? currentMember.name : recipient.name}</strong></span><b>{isSettled ? "Paid" : euro.format(isCreditor ? currentBalance : youOwe)}</b>
      </section>
      <button className="wallet-button" disabled={isSettled || isCreditor} onClick={settle}><span>{isCreditor ? "Payment requests sent" : "G Pay"}</span><b>{isCreditor ? "Waiting" : "VISA •••• 1234"}</b></button>
      <p className="settle-note">Suggested payments minimize transfers · Ren has no earlier balance</p>
      <BalanceCard state={state} onExpense={() => undefined} />
      <section className="balance-breakdown"><h3>Group balances</h3>{state.members.map((member) => <div key={member.id}><span><Avatar member={member} small /> {member.name}{member.id === state.activeUserId ? " (you)" : ""}</span><b className={(balances[member.id] ?? 0) >= 0 ? "positive" : "negative"}>{isSettled && member.id === state.activeUserId ? "Settled" : euro.format(balances[member.id] ?? 0)}</b></div>)}</section>
    </div>
  );
}

function SystemStatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`system-status ${dark ? "system-status-dark" : ""}`} aria-hidden="true">
      <strong>9:30</strong><span className="dynamic-island" />
      <StatusGraphics />
    </div>
  );
}

function StatusGraphics() {
  return (
    <div className="status-graphics" aria-hidden="true">
      <span className="cellular-signal"><i /><i /><i /><i /></span>
      <svg className="wifi-symbol" viewBox="0 0 20 15"><path d="M1.5 4.8a13 13 0 0 1 17 0M4.4 8a8.6 8.6 0 0 1 11.2 0M7.5 11.1a3.8 3.8 0 0 1 5 0" /><circle cx="10" cy="13.2" r="1" /></svg>
      <span className="battery-symbol"><i /></span>
    </div>
  );
}

function LockScreen({ state, openApp, openHome }: { state: DemoState; openApp: () => void; openHome: () => void }) {
  const person = state.members.find((member) => member.id === state.activeUserId)!;
  const isAri = state.activeUserId === "ari";
  return (
    <div className="ios-system lock-screen">
      <SystemStatusBar dark />
      <div className="wallpaper-orb orb-one" /><div className="wallpaper-orb orb-two" />
      <div className="lock-date">Friday, October 2</div><div className="lock-time">9:30</div>
      <section className="glass-notifications" aria-label="Notifications">
        <button className="glass-notification" onClick={openApp}>
          <span className="tripup-app-icon">T</span>
          <span><b>TRIPUP</b><small>now</small><strong>{isAri ? "Maya voted for Taberna da Rua das Flores" : "Ari added the €250 dinner expense"}</strong><p>{isAri ? "Lisbon · The dinner poll is ready for your vote." : "Lisbon · Review how the group bill was split."}</p></span>
        </button>
        <div className="glass-notification compact-notification"><span className="calendar-app-icon">2</span><span><b>CALENDAR</b><small>in 1h</small><strong>Lisbon planning check-in</strong><p>Call with {person.name} and the group</p></span></div>
      </section>
      <div className="lock-actions"><button aria-label="Flashlight">⌁</button><span>Swipe up to open</span><button aria-label="Camera">◎</button></div>
      <button className="system-home-bar" aria-label="Open Home Screen" onClick={openHome} />
    </div>
  );
}

function HomeScreen({ state, openApp, lock }: { state: DemoState; openApp: () => void; lock: () => void }) {
  const balance = getCurrentUserBalance(state);
  const apps = [
    ["◉", "Camera", "charcoal"], ["▣", "Photos", "spectrum"], ["▤", "Calendar", "red"], ["☀", "Weather", "blue"],
    ["♫", "Music", "pink"], ["✦", "Maps", "green"], ["✉", "Mail", "cyan"], ["⚙", "Settings", "silver"],
  ];
  return (
    <div className="ios-system home-screen">
      <SystemStatusBar dark />
      <div className="wallpaper-orb orb-one" /><div className="wallpaper-orb orb-two" />
      <section className="glass-widget">
        <div><small>UPCOMING TRIP</small><strong>Lisbon</strong><span>20–27 September · 5 friends</span></div>
        <b>{balance < 0 ? `You owe ${euro.format(Math.abs(balance))}` : `${euro.format(balance)} owed to you`}</b>
      </section>
      <div className="app-grid">
        <button className="app-tile" onClick={openApp}><span className="tripup-app-icon large-icon">T</span><small>TripUp</small></button>
        {apps.map(([symbol, label, color]) => <button className="app-tile" key={label}><span className={`generic-app-icon icon-${color}`}>{symbol}</span><small>{label}</small></button>)}
      </div>
      <button className="glass-search" aria-label="Search"><span>⌕</span> Search</button>
      <div className="glass-dock"><button><span className="generic-app-icon icon-green">☎</span></button><button><span className="generic-app-icon icon-blue">◉</span></button><button><span className="generic-app-icon icon-cyan">✉</span></button><button><span className="generic-app-icon icon-pink">♫</span></button></div>
      <button className="system-home-bar" aria-label="Lock iPhone" onClick={lock} />
    </div>
  );
}

function MockKeyboard({ mode, value, onChange, onDone }: { mode: "number" | null; value: string; onChange: (value: string) => void; onDone: () => void }) {
  if (!mode) return null;
  const keys = [
    ["1", ""], ["2", "ABC"], ["3", "DEF"], ["4", "GHI"], ["5", "JKL"], ["6", "MNO"],
    ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"], [".", ""], ["0", ""], ["⌫", ""],
  ];
  return <div className="mock-keyboard numeric-keyboard" aria-label="Numeric keyboard"><div className="keyboard-glass-bar"><span>TripUp</span><button type="button" onClick={onDone}>Done</button></div>{keys.map(([key, letters]) => <button type="button" key={key} aria-label={key === "⌫" ? "Delete" : key === "." ? "Decimal point" : key} className={key === "⌫" ? "delete-key" : ""} onClick={() => onChange(key === "⌫" ? value.slice(0,-1) : `${value}${key}`)}><strong>{key}</strong>{letters && <small>{letters}</small>}</button>)}</div>;
}

export default function DemoApp() {
  const [state, dispatch] = useReducer(demoReducer, undefined, createInitialState);
  const [inviteQuery, setInviteQuery] = useState("Ren");
  const [deviceView, setDeviceView] = useState<DeviceView>("app");
  const [keyboardOpen, setKeyboardOpen] = useState(true);
  const isMobile = useIsMobile();
  const activeIndex = screenOrder.indexOf(state.screen);
  const effectiveDeviceView: DeviceView = isMobile ? "app" : deviceView;

  function resetDemo() {
    dispatch({ type: "RESET" });
    setInviteQuery("Ren");
    setDeviceView("app");
    setKeyboardOpen(true);
  }

  function goTo(screen: ScreenId) {
    if (screenOrder.indexOf(screen) >= screenOrder.indexOf("dinner") && !state.invitedRen) dispatch({ type: "INVITE_REN" });
    if (screen === "expense") setKeyboardOpen(true);
    if (screen === "settle" && state.expenses.length === 0) {
      dispatch({ type: "CONFIRM_EXPENSE" });
      return;
    }
    dispatch({ type: "GO_TO", screen });
  }

  function renderScreen() {
    switch (state.screen) {
      case "trips": return <TripsScreen state={state} goToOverview={() => goTo("overview")} />;
      case "overview": return <OverviewScreen state={state} goTo={goTo} />;
      case "invite": return <InviteScreen state={state} query={inviteQuery} setQuery={setInviteQuery} invite={() => dispatch({ type: "INVITE_REN" })} isMobile={isMobile} />;
      case "dinner": return <DinnerScreen state={state} toggle={(optionId) => dispatch({ type: "TOGGLE_DINNER", optionId })} continueToVote={() => goTo("vote")} />;
      case "vote": return <VoteScreen state={state} vote={(optionId) => dispatch({ type: "VOTE", optionId })} submit={() => goTo("expense")} />;
      case "expense": return <ExpenseScreen state={state} setAmount={(amount) => dispatch({ type: "SET_EXPENSE_AMOUNT", amount })} setDescription={(description) => dispatch({ type: "SET_DESCRIPTION", description })} isMobile={isMobile} openKeyboard={() => setKeyboardOpen(true)} goToSplit={() => goTo("split")} />;
      case "split": return <SplitScreen state={state} toggle={(memberId) => dispatch({ type: "TOGGLE_PARTICIPANT", memberId })} confirm={() => dispatch({ type: "CONFIRM_EXPENSE" })} />;
      case "settle": return <SettleScreen state={state} settle={() => dispatch({ type: "SETTLE" })} />;
    }
  }

  const keyboardMode = state.screen === "expense" && keyboardOpen ? "number" : null;

  return (
    <main className="demo-shell">
      <aside className="demo-controls">
        <h2>TripUp</h2>
        <div className="control-group"><span>VIEW AS</span><div className="segmented-control">{state.members.slice(0, 2).map((member) => <button className={state.activeUserId === member.id ? "active" : ""} key={member.id} onClick={() => dispatch({ type: "SET_PERSONA", memberId: member.id })}><Avatar member={member} small />{member.name}</button>)}</div></div>
        <div className="control-group no-label"><div className="segmented-control device-control">{(["lock", "home", "app"] as DeviceView[]).map((view) => <button className={deviceView === view ? "active" : ""} key={view} onClick={() => setDeviceView(view)}>{view === "lock" ? "Lock" : view === "home" ? "Home" : "TripUp"}</button>)}</div></div>
        <nav aria-label="Demo steps">{screenOrder.map((screen, index) => <button className={state.screen === screen ? "active" : ""} key={screen} onClick={() => goTo(screen)} aria-current={state.screen === screen ? "step" : undefined}><span className="step-number">{index + 1}</span><span><strong>{screenLabels[screen].title}</strong></span></button>)}</nav>
        <div className="desktop-actions"><button className="restart" onClick={resetDemo}>↻ Reset prototype</button><span>Step {activeIndex + 1} of {screenOrder.length}</span></div>
      </aside>

      <section className="preview-stage">
        <div className="phone" aria-label="TripUp mobile preview">
          <div className="phone-screen">
            {effectiveDeviceView === "lock" && <LockScreen state={state} openApp={() => setDeviceView("app")} openHome={() => setDeviceView("home")} />}
            {effectiveDeviceView === "home" && <HomeScreen state={state} openApp={() => setDeviceView("app")} lock={() => setDeviceView("lock")} />}
            {effectiveDeviceView === "app" && <>
              <PhoneHeader state={state} goBack={() => goTo(previousScreen(state.screen))} reset={resetDemo} />
              <div className="app-scroll">{renderScreen()}</div>
              <MockKeyboard mode={keyboardMode} value={state.expenseDraft.amount} onChange={(amount) => dispatch({ type: "SET_EXPENSE_AMOUNT", amount })} onDone={() => setKeyboardOpen(false)} />
              <div className="home-indicator" aria-hidden="true" />
            </>}
          </div>
        </div>
      </section>
    </main>
  );
}
