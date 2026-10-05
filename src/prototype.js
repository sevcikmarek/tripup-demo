const P = 'tripup-ui/assets/';
const tint = n => ({ bg: `var(--tu-person-${n}-bg)`, fg: `var(--tu-person-${n}-fg)` });
const MEMBERS = [
  { k: 'sofia', name: 'You', full: 'Ari (you)', img: P + 'people/you.png', letter: 'A', ...tint(1) },
  { k: 'maya', name: 'Maya', full: 'Maya', last: 'Laine', img: P + 'people/maya.png', letter: 'M', ...tint(2) },
  { k: 'nic', name: 'Nic', full: 'Nic', img: P + 'people/nic.png', letter: 'N', ...tint(3) },
  { k: 'eleanor', name: 'Eleanor', full: 'Eleanor', img: P + 'people/eleanor.png', letter: 'E', ...tint(3) },
  { k: 'ren', name: 'Ren', full: 'Ren', img: P + 'people/ren.png', letter: 'R', ...tint(1) }
];
const VENUES = [
  { name: 'Taberna da Rua das Flores', cuisine: 'Traditional', price: '€€', walk: '6 min' },
  { name: 'Cervejaria Ramiro', cuisine: 'Seafood', price: '€€', walk: '12 min' },
  { name: 'A Cevicheria', cuisine: 'Peruvian', price: '€€', walk: '4 min' },
  { name: 'O Velho Eurico', cuisine: 'Tasca', price: '€', walk: '9 min' },
  { name: 'Prado', cuisine: 'Seasonal', price: '€€€', walk: '8 min' },
  { name: 'Tasca do Chico', cuisine: 'Fado', price: '€€', walk: '3 min' },
  { name: 'Bairro do Avillez', cuisine: 'Portuguese', price: '€€', walk: '5 min' },
  { name: 'Cantinho do Avillez', cuisine: 'Bistro', price: '€€', walk: '7 min' },
  { name: 'Cervejaria Trindade', cuisine: 'Beer hall', price: '€€', walk: '8 min' },
  { name: 'Sea Me', cuisine: 'Seafood', price: '€€€', walk: '9 min' },
  { name: 'Boa-Bao', cuisine: 'Asian', price: '€€', walk: '11 min' },
  { name: 'Mini Bar', cuisine: 'Small plates', price: '€€€', walk: '12 min' },
  { name: 'Pizzeria Lisboa', cuisine: 'Pizza', price: '€€', walk: '13 min' },
  { name: 'Belcanto', cuisine: 'Fine dining', price: '€€€', walk: '15 min' },
  { name: 'Bistro 100 Maneiras', cuisine: 'Tasting menu', price: '€€€', walk: '16 min' },
  { name: 'Alma', cuisine: 'Fine dining', price: '€€€', walk: '17 min' },
  { name: 'Pharmacia', cuisine: 'Petiscos', price: '€€', walk: '19 min' },
  { name: 'O Trevo', cuisine: 'Bifanas', price: '€', walk: '20 min' },
  { name: 'Tapisco', cuisine: 'Tapas', price: '€€', walk: '21 min' },
  { name: 'Time Out Market', cuisine: 'Food hall', price: '€€', walk: '23 min' },
  { name: 'Café de São Bento', cuisine: 'Steak', price: '€€€', walk: '24 min' },
  { name: 'Pinóquio', cuisine: 'Portuguese', price: '€€', walk: '25 min' },
  { name: 'Casa do Alentejo', cuisine: 'Alentejo', price: '€€', walk: '27 min' },
  { name: 'Gambrinus', cuisine: 'Classic', price: '€€€', walk: '28 min' },
  { name: 'Solar dos Presuntos', cuisine: 'Portuguese', price: '€€€', walk: '29 min' },
  { name: 'Taberna Moderna', cuisine: 'Tapas', price: '€€', walk: '31 min' },
  { name: 'Tasca da Esquina', cuisine: 'Modern tasca', price: '€€', walk: '32 min' },
  { name: 'Zé da Mouraria', cuisine: 'Tasca', price: '€', walk: '33 min' },
  { name: 'Taberna Sal Grosso', cuisine: 'Petiscos', price: '€€', walk: '35 min' }
];
const PLANS = [
  { name: 'Miradouro de Santa Catarina', cuisine: 'Sunset view', price: 'Free', walk: '6 min' },
  { name: 'Miradouro da Senhora do Monte', cuisine: 'Sunset view', price: 'Free', walk: '24 min' },
  { name: 'Tram 28 to Graça', cuisine: 'Tram ride', price: '€', walk: '8 min' },
  { name: 'Sunset sail on the Tejo', cuisine: 'Boat tour', price: '€€€', walk: '18 min' },
  { name: 'Elevador de Santa Justa', cuisine: 'Landmark', price: '€', walk: '5 min' },
  { name: 'Carmo Convent ruins', cuisine: 'History', price: '€', walk: '5 min' },
  { name: 'Cinema São Jorge', cuisine: 'Cinema', price: '€', walk: '7 min' },
  { name: 'Praça do Comércio', cuisine: 'Square', price: 'Free', walk: '9 min' },
  { name: 'Arco da Rua Augusta', cuisine: 'Viewpoint', price: '€', walk: '9 min' },
  { name: 'Lisbon Cathedral', cuisine: 'Church', price: '€', walk: '11 min' },
  { name: 'Cinema Ideal', cuisine: 'Cinema', price: '€', walk: '12 min' },
  { name: 'Castelo de São Jorge', cuisine: 'Castle', price: '€€', walk: '16 min' },
  { name: 'Alfama fado walk', cuisine: 'Walking tour', price: '€€', walk: '17 min' },
  { name: 'Feira da Ladra', cuisine: 'Flea market', price: 'Free', walk: '20 min' },
  { name: 'Museu Nacional do Azulejo', cuisine: 'Museum', price: '€', walk: '22 min' },
  { name: 'Calouste Gulbenkian Museum', cuisine: 'Museum', price: '€€', walk: '24 min' },
  { name: 'Spa at Corinthia Lisbon', cuisine: 'Spa', price: '€€€', walk: '26 min' },
  { name: 'Stand-up paddle on the Tejo', cuisine: 'Water sports', price: '€€', walk: '28 min' },
  { name: 'LX Factory', cuisine: 'Market', price: 'Free', walk: '30 min' },
  { name: 'MAAT', cuisine: 'Museum', price: '€€', walk: '32 min' },
  { name: 'Estádio da Luz tour', cuisine: 'Football', price: '€€', walk: '34 min' },
  { name: 'Mosteiro dos Jerónimos', cuisine: 'Monument', price: '€€', walk: '38 min' },
  { name: 'Torre de Belém', cuisine: 'Monument', price: '€€', walk: '40 min' },
  { name: 'Oceanário de Lisboa', cuisine: 'Aquarium', price: '€€€', walk: '45 min' },
  { name: 'Surf lesson in Carcavelos', cuisine: 'Surfing', price: '€€', walk: '50 min' }
];
const QUICK = [
  { name: 'Manteigaria', cuisine: 'Pastel de nata', price: '€', walk: '4 min' },
  { name: 'A Brasileira', cuisine: 'Historic café', price: '€', walk: '3 min' },
  { name: 'Livraria Bertrand', cuisine: 'Bookshop', price: 'Free', walk: '3 min' },
  { name: 'Elevador da Glória', cuisine: 'Funicular', price: '€', walk: '6 min' }
];
const LATE = [
  { name: 'Miradouro de São Pedro de Alcântara', cuisine: 'Night view', price: 'Free', walk: '4 min' },
  { name: 'Park Bar', cuisine: 'Rooftop bar', price: '€€', walk: '6 min' },
  { name: 'Santini', cuisine: 'Gelato', price: '€', walk: '8 min' },
  { name: 'Fado at Tasca do Chico', cuisine: 'Live fado', price: '€€', walk: '3 min' }
];
const ALL = [...VENUES, ...PLANS, ...QUICK, ...LATE];
const norm = t => (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const CONTACTS = [
  { k: 'ren', name: 'Ren Okafor', handle: '@renokafor', letter: 'R', on: true, img: P + 'people/ren.png', ...tint(1) },
  { k: 'vitor', name: 'Vitor Ferreira', handle: '@ferreirav', letter: 'V', on: true, ...tint(3) },
  { k: 'lucia', name: 'Lucía Ortega', handle: '@lucia.o', letter: 'L', on: true, ...tint(2) },
  { k: 'mark', name: 'Mark Barnsley', handle: 'Not on TripUp', letter: 'M' },
  { k: 'jim', name: 'Jim McKinnon', handle: 'Not on TripUp', letter: 'J' },
  { k: 'adam', name: 'Adam Varga', handle: 'Not on TripUp', letter: 'A' }
];
const KEYS = [['1', ''], ['2', 'ABC'], ['3', 'DEF'], ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'], ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'], ['.', ''], ['0', ''], ['del', '']];
const ORDER = ['trips', 'trip', 'choose', 'expense', 'split', 'balance'];
const LEGACY_STORE = 'tripup-proto-ds-v6';
const DASH = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='64'%3E%3Crect x='0.75' y='0.75' width='50.5' height='62.5' rx='11.25' fill='none' stroke='black' stroke-width='1.5' stroke-dasharray='6 8'/%3E%3C/svg%3E\") center/100% 100% no-repeat";
const BASE = ['sofia', 'maya', 'nic', 'eleanor'];
const keyset = keys => Object.fromEntries(keys.map(k => [k, true]));
const freshExp = (keys = BASE) => ({ amt: '', partOn: false, tab: 'part', partAmt: '', partName: '', incRest: keyset(keys), incPart: keyset(keys), kp: false, txt: false, poolRest: pool0(), poolPart: pool0() });
const IN = 0;
const DEMO_MIN = 5, DEMO_OWE = 20; // demo fail-safe: Ari always owes at least this at settle-up
const outOf = owe => owe > 0.005 ? Math.round((owe + IN) * 100) / 100 : IN;
const inOf = owe => Math.round((outOf(owe) - owe) * 100) / 100;
const TXT = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
const ITIN0 = ['xq', 'extra', 'sugg', 'dinner', 'xl', 'drinks', 'hotel'];
const ITEMS = ['xq', 'extra', 'dinner', 'xl', 'drinks', 'hotel', 'flight'];
const BASE_T = { xq: '18:30', extra: '19:00', dinner: '20:00', xl: '21:30', drinks: '22:00' };
const ITIN_NAMES = { drinks: 'Drinks at Bairro Alto', hotel: 'Night at the house in Alfama', flight: 'Flight home' };
const TX = [
  { t: 'Taxis from the airport', who: 'Nic', paid: 64, share: 16, day: 'Sunday' },
  { t: 'House in Alfama', who: 'Maya', paid: 2400, share: 600, day: 'Sunday' },
  { t: 'Groceries', who: 'You', paid: 80, share: 20, day: 'Monday' },
  { t: 'Fado night tickets', who: 'Eleanor', paid: 140, share: 35, day: 'Tuesday' }
];
const WK = { You: 'sofia', Maya: 'maya', Nic: 'nic', Eleanor: 'eleanor' };
function ledger(lastExp) {
  const bal = Object.fromEntries(Object.values(WK).map(k => [k, 0]));
  TX.forEach(x => { bal[WK[x.who]] += x.paid; Object.values(WK).forEach(k => { bal[k] -= x.share; }); });
  if (lastExp) { bal.sofia += lastExp.amt; Object.entries(lastExp.shares || { sofia: lastExp.my }).forEach(([k, v]) => { bal[k] = (bal[k] || 0) - v; }); }
  if (bal.sofia > -DEMO_MIN) { const top = Object.keys(bal).filter(k => k !== 'sofia').reduce((a, k) => bal[k] > bal[a] ? k : a, 'maya'), d = bal.sofia + DEMO_OWE; bal.sofia -= d; bal[top] += d; }
  Object.keys(bal).forEach(k => { bal[k] = Math.round(bal[k] * 100) / 100; });
  return bal;
}
const PAST = [
  { day: 'Sunday', items: [['12:40', 'Flight to Lisbon', 'Landed with everyone'], ['15:00', 'Check in at the house in Alfama', 'Booked by Maya'], ['20:30', 'Dinner at Cervejaria Ramiro', 'by Maya · 4 joined']] },
  { day: 'Monday', items: [['10:00', 'Pastéis de Belém', 'by You · 5 joined'], ['11:00', 'Mosteiro dos Jerónimos', 'by Eleanor · 3 joined'], ['19:30', 'Sunset at Miradouro de Santa Catarina', 'by Nic · 5 joined']] },
  { day: 'Tuesday', items: [['10:30', 'Tram 28 to Graça', 'by Eleanor · 4 joined'], ['13:00', 'Lunch at Time Out Market', 'Decided by vote'], ['21:00', 'Fado night at Tasca do Chico', 'by Eleanor · 4 joined']] },
  { day: 'Wednesday', items: [['09:00', 'Day trip to Sintra', 'by Nic · 5 joined'], ['13:30', 'Lunch in Sintra', 'by Maya · 5 joined']] },
  { day: 'Thursday', items: [['10:00', 'Surf lesson in Carcavelos', 'by Nic · 2 joined'], ['20:00', 'Dinner at Prado', 'Decided by vote']] },
  { day: 'Yesterday', items: [['11:00', 'LX Factory', 'by You · 4 joined'], ['15:00', 'MAAT', 'by Eleanor · 3 joined'], ['21:30', 'Park Bar', 'by Maya · 3 joined']] }
];
const TAGS = [
  [/seafood/i, ['seafood', 'prawns', 'oysters']], [/fado/i, ['fado', 'guitar', 'restaurant']], [/peruvian/i, ['ceviche', 'seafood', 'cocktail']],
  [/fine dining|tasting|seasonal/i, ['finedining', 'dessert', 'wine']], [/beer/i, ['beer', 'pretzel', 'restaurant']], [/asian/i, ['bao', 'dumplings', 'noodles']],
  [/pizza/i, ['pizza', 'pizzeria', 'pasta']], [/food hall/i, ['foodmarket', 'food', 'market']], [/steak/i, ['steak', 'wine', 'restaurant']],
  [/tapas|small plates|petiscos/i, ['tapas', 'wine', 'food']], [/bifanas/i, ['sandwich', 'beer', 'food']], [/sunset|night view|viewpoint/i, ['lisbon', 'sunset', 'cityscape']],
  [/tram|funicular/i, ['tram', 'lisbon', 'alfama']], [/boat/i, ['sailboat', 'sunset', 'river']], [/water sports/i, ['paddleboard', 'river', 'kayak']],
  [/landmark|history|square|church|monument|castle/i, ['lisbon', 'architecture', 'monument']], [/cinema/i, ['cinema', 'theater', 'popcorn']], [/museum/i, ['museum', 'art', 'gallery']],
  [/spa/i, ['spa', 'pool', 'sauna']], [/market|flea/i, ['market', 'vintage', 'street']], [/football/i, ['stadium', 'football', 'benfica']],
  [/aquarium/i, ['aquarium', 'jellyfish', 'fish']], [/surf/i, ['surfing', 'surf', 'beach']], [/walking tour/i, ['alfama', 'lisbon', 'street']],
  [/pastel/i, ['pasteldenata', 'pastry', 'coffee']], [/café/i, ['coffee', 'cafe', 'pastry']], [/bookshop/i, ['bookshop', 'books', 'library']],
  [/rooftop/i, ['rooftop', 'cocktail', 'lisbon']], [/gelato/i, ['gelato', 'icecream', 'dessert']]
];
const imgsFor = (cuisine, i) => { const hit = TAGS.find(([re]) => re.test(cuisine || '')); const t = hit ? hit[1] : ['restaurant', 'food', 'wine']; return t.map((tag, j) => 'https://loremflickr.com/264/192/' + tag + '?lock=' + (i * 3 + j + 11)); };
const MODES = ['equally', 'shares', 'amount', 'percent'];
const MODE_L = { equally: 'Equally', shares: 'Shares', amount: 'Amount', percent: 'Percent' };
const pool0 = () => ({ mode: 'equally', shares: {}, amts: {}, pcts: {} });
const cleanAmt = raw => { let t = String(raw || '').replace(/,/g, '.').replace(/[^0-9.]/g, ''); const i = t.indexOf('.'); if (i >= 0) t = t.slice(0, i + 1) + t.slice(i + 1).replace(/\./g, '').slice(0, 2); t = t.replace(/^0+(?=\d)/, ''); if (t[0] === '.') t = '0' + t; return t.slice(0, 8); };
const initial = () => ({
  morph: false, snap: false, bfReady: false, cutPx: null, settling: false, payFail: false, inRecv: false,
  stack: ['trips', 'trip'], sheet: null, phase: 'plan', suggHidden: false, bfHidden: false, adEnd: null, adPaused: null, adClock: null, dinner: null, dinnerFresh: false,
  afterDinner: false, expAdded: false, poll: null, sel: [], clock: '17:58', owe: -ledger(null).sofia, exp: freshExp(),
  paid: { eleanor: false, nic: false, ren: true, maya: true, sofia: false }, gpay: 'idle', allDone: false, pollLinger: false, fresh2: false, itinDay: {}, clockD: null, outside: false, square: false, confirming: false, invited: {}, renJoined: false, renInvited: false, addOpen: false, winner: null, xq: null, xl: null, freshSlot: null, chooseMode: 'dinner', extra: null, extraFresh: false, flying: false, customs: [], cq: '', cqFocus: false, q: '', qFocus: false, settle: null, gotIn: false, heroLabel: 'Vote on dinner', editing: false, itin: { order: ITIN0, removed: {} }, drag: null, nudged: false, lastExp: null, showPast: false, about: false
});
const r2 = n => Math.round(n * 100) / 100;
const fmt = n => { const v = r2(Math.abs(n)); return '€' + (v % 1 === 0 ? v.toFixed(0) : v.toFixed(2)); };
const count = o => Object.values(o).filter(Boolean).length;
function alloc(total, inc, p) {
  p = p || pool0();
  const ks = Object.keys(inc || {}).filter(k => inc[k]), out = {};
  let ok = ks.length > 0, info = {};
  if (p.mode === 'shares') { const w = k => p.shares[k] == null ? 1 : p.shares[k]; const sum = ks.reduce((a, k) => a + w(k), 0); ks.forEach(k => { out[k] = sum ? total * w(k) / sum : 0; }); ok = ok && sum > 0; info = { sum, per: sum ? total / sum : 0 }; }
  else if (p.mode === 'amount') { let sum = 0; ks.forEach(k => { const v = +p.amts[k] || 0; out[k] = v; sum += v; }); info = { sum: r2(sum), left: r2(total - sum) }; ok = ok && Math.abs(total - sum) < 0.005; }
  else if (p.mode === 'percent') { let sum = 0; ks.forEach(k => { const v = +p.pcts[k] || 0; out[k] = total * v / 100; sum += v; }); info = { sum: r2(sum), left: r2(100 - sum) }; ok = ok && Math.abs(100 - sum) < 0.005; }
  else { ks.forEach(k => { out[k] = total / ks.length; }); info = { each: ks.length ? total / ks.length : 0 }; }
  return { out, ok, info, n: ks.length };
}
function calc(exp) {
  const amt = +exp.amt || 0, part = exp.partOn ? Math.min(+exp.partAmt || 0, amt) : 0, rest = amt - part;
  const A = alloc(rest, exp.incRest, exp.poolRest), B = exp.partOn ? alloc(part, exp.incPart, exp.poolPart) : { out: {}, ok: true, info: {}, n: count(exp.incPart || {}) };
  return { amt, part, rest, nr: A.n, np: B.n, eachRest: A.info.each || 0, eachPart: B.info.each || 0, my: (A.out.sofia || 0) + (B.out.sofia || 0), A, B };
}

function splitFit(exp) {
  const amt = +exp.amt || 0, part = exp.partOn ? +exp.partAmt || 0 : 0;
  if (exp.partOn && part > amt + 0.004) return { ok: false, why: fmt(part) + ' ' + ((exp.partName || '').trim() || 'part') + ' is more than ' + fmt(amt) };
  const over = (p, inc, tot) => p && p.mode === 'amount' && Object.keys(inc || {}).filter(k => inc[k]).reduce((a, k) => a + (+p.amts[k] || 0), 0) > tot + 0.004;
  if (over(exp.poolRest, exp.incRest, amt - part) || (exp.partOn && over(exp.poolPart, exp.incPart, part))) return { ok: false, why: 'Set amounts add up to more than ' + fmt(amt) };
  return { ok: true };
}
function splitCustom(exp) { return !!exp.partOn || (exp.poolRest && exp.poolRest.mode !== 'equally') || Object.values(exp.incRest || {}).some(v => !v); }
class Component extends DCLogic {
  state = { pace: 'Slow', ...initial(), snack: { show: false, id: 0, title: '', sub: '', tone: 'accent', icon: 'sparkle', action: null }, pill: false, pillId: 0, vw: 1200, vh: 900, va: false, es: false, pulse: 0 };
  timers = [];
  after(ms, fn) { const d = (ms >= 600 ? ms * 1.5 : ms) / (this.spd || 1); const rec = { fn, due: Date.now() + d }; const run = () => { (this._pend || (this._pend = new Set())).delete(rec); if (this._paused) (this._q = this._q || []).push(fn); else fn(); }; rec.run = run; rec.t = setTimeout(run, d); (this._pend || (this._pend = new Set())).add(rec); this.timers.push(rec.t); return rec.t; }
  speedUp() { if (this.spd === 3) return; this.spd = 3; const now = Date.now(); (this._pend || new Set()).forEach(r => { clearTimeout(r.t); const left = Math.max(0, r.due - now) / 3; r.due = now + left; r.t = setTimeout(r.run, left); this.timers.push(r.t); }); const d = this.tapEl; if (d && d.style.transition && d.style.transition !== 'none') d.style.transition = d.style.transition.replace(/(\d+)ms/g, (x, n) => Math.round(n / 3) + 'ms'); }
  ctlDone() { this.spd = 1; const d = this.tapEl; if (d) { d.style.transition = ''; d.style.boxShadow = '0 1px 6px rgba(0,0,0,.25)'; d.style.background = 'rgba(0,0,0,.18)'; } }
  clearTimers() { this.timers.forEach(clearTimeout); this.timers = []; if (this._pend) this._pend.clear(); this.spd = 1; this._preSettle = false; this._pollGo = false; }
  pwIdx(el) { return Math.round(el.scrollLeft / 92); }
  pwScroll(el) {
    if (!el || !this._pw) return; this._pwT = performance.now(); const P = this._pw, key = el.getAttribute('data-pw');
    const L = key === 'at' ? P.AT_L : P.DURS, i = Math.max(0, Math.min(L.length - 1, this.pwIdx(el))), v = L[i];
    if (key === 'at') { if (v !== P.atM && v >= P.atMin) this.setState({ pollAt: v }); }
    else if (v !== P.dur) this.setState({ pollDur: v, pollAt: Math.max(P.atM, P.atFloor(v)) });
    clearTimeout(this._pwEnd); this._pwEnd = setTimeout(() => this.pwSettle(el), 160);
  }
  pwSettle(el) {
    if (this._pwDrag) return; const P = this._pw; if (!P) return; const key = el.getAttribute('data-pw');
    if (key === 'at') { const i = this.pwIdx(el), v = P.AT_L[Math.max(0, Math.min(P.AT_L.length - 1, i))]; if (v < P.atMin) { this.snack('Can’t go earlier', 'The poll closes at ' + String(Math.floor(((18 * 60 + P.dur) % 1440) / 60)).padStart(2, '0') + ':' + String((18 * 60 + P.dur) % 60).padStart(2, '0') + ' – shorten the poll first', 'info', null, 2600); } }
    this.pwSync(true);
  }
  pwSync(smooth) {
    const P = this._pw; if (!P) return; if (!smooth && performance.now() - (this._pwT || 0) < 300) return;
    [['at', P.AT_L.indexOf(P.atM)], ['dur', P.DURS.indexOf(P.dur)]].forEach(([k, i]) => { const el = document.querySelector('[data-pw="' + k + '"]'); if (!el || i < 0 || this._pwDrag === el) return; const t = i * 92; if (Math.abs(el.scrollLeft - t) > (smooth ? 1 : 46)) el.scrollTo({ left: t, behavior: smooth ? 'smooth' : 'auto' }); });
  }
  pwWire() {
    if (this._pwWired) return; this._pwWired = true;
    const host = el => el && el.closest && el.closest('[data-pw]');
    this._pwWheel = e => { const el = host(e.target); if (!el) return; const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; if (!d) return; e.preventDefault(); el.style.scrollSnapType = 'none'; el.scrollLeft += d; clearTimeout(this._pwW); this._pwW = setTimeout(() => { const t = Math.round(el.scrollLeft / 92) * 92; el.style.scrollSnapType = ''; el.scrollTo({ left: t, behavior: 'smooth' }); setTimeout(() => { if (Math.abs(el.scrollLeft - t) > 1) el.scrollLeft = t; }, 400); }, 120); };
    this._pwDown = e => { if (e.pointerType === 'touch') return; const el = host(e.target); if (!el) return; e.preventDefault(); const x0 = e.clientX, s0 = el.scrollLeft, sc = this.sc || 1; let last = x0, lt = performance.now(), vel = 0; this._pwDrag = el; el.style.scrollSnapType = 'none'; el.style.cursor = 'grabbing';
      const mv = ev => { const now = performance.now(); vel = (ev.clientX - last) / Math.max(1, now - lt); last = ev.clientX; lt = now; el.scrollLeft = s0 - (ev.clientX - x0) / sc; };
      const up = () => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); this._pwDrag = null; el.style.cursor = ''; const target = Math.round((el.scrollLeft - vel * 120 / sc) / 92) * 92; el.style.scrollSnapType = ''; el.scrollTo({ left: Math.max(0, target), behavior: 'smooth' }); setTimeout(() => { if (Math.abs(el.scrollLeft - Math.max(0, target)) > 1) el.scrollLeft = Math.max(0, target); }, 450); };
      window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up); };
    document.addEventListener('wheel', this._pwWheel, { passive: false });
    document.addEventListener('pointerdown', this._pwDown);
  }
  pwKick() { let n = 0; const tick = () => { if (this.dead) return; const P = this._pw, a = document.querySelector('[data-pw="at"]'), d = document.querySelector('[data-pw="dur"]'); if (P && a && d && a.clientWidth) { const ta = P.AT_L.indexOf(P.atM) * 92, td = P.DURS.indexOf(P.dur) * 92; if (Math.abs(a.scrollLeft - ta) > 1) a.scrollLeft = ta; if (Math.abs(d.scrollLeft - td) > 1) d.scrollLeft = td; if (Math.abs(a.scrollLeft - ta) <= 1 && Math.abs(d.scrollLeft - td) <= 1) return; } if (n++ < 60) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
  componentDidMount() {
    this.pwWire(); this.pwKick();
    window.__tuProto = this;
    if (window.__resources && !window.__resWired) {
      window.__resWired = true;
      const R = window.__resources, rx = /tripup-ui\/assets\/[^)"'\s,]+/g;
      const sub = (v) => v.replace(rx, (p) => R['r_' + p.replace(/[^a-z0-9]/gi, '_')] || p);
      const fix = (el) => { if (el.nodeType !== 1) return; for (const a of ['src', 'style', 'href']) { const v = el.getAttribute(a); if (v && v.includes('tripup-ui/assets/')) { const nv = sub(v); if (nv !== v) el.setAttribute(a, nv); } } };
      const all = (root) => { fix(root); root.querySelectorAll && root.querySelectorAll('[src*="tripup-ui/assets/"],[style*="tripup-ui/assets/"],[href*="tripup-ui/assets/"]').forEach(fix); };
      all(document.body);
      new MutationObserver((ms) => { for (const m of ms) { if (m.type === 'attributes') fix(m.target); else m.addedNodes.forEach(all); } }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['src', 'style', 'href'] });
    }
    this.subIv = setInterval(() => { this.subCheck(); const s = this.state; if (s.pollLinger && s.afterDinner) this.endLinger(); if (s.adEnd && s.adPaused == null && !s.afterDinner && s.phase === 'planned') { const lbl = this.gapLbl ? this.gapLbl() : null; if (lbl !== this._lastGap) { this._lastGap = lbl; this.forceUpdate(); } } }, 250);
    this.onResize = () => this.setState({ vw: window.innerWidth, vh: window.innerHeight });
    this.onResize(); window.addEventListener('resize', this.onResize);
    this.onKey = (e) => {
      const s = this.state, top = s.stack[s.stack.length - 1];
      const inInput = document.activeElement && document.activeElement.tagName === 'INPUT';
      if (e.key === 'Escape') { if (inInput) document.activeElement.blur(); e.preventDefault(); this.reset(); return; }
      if (e.key === 'ArrowRight' && !inInput) { e.preventDefault(); this.demoNext(); return; }
      if (inInput) { if (e.key === 'Enter' || e.key === 'Escape') { document.activeElement.blur(); this.setExp({ txt: false }); } return; }
      const num = top === 'expense' ? 'amt' : top === 'split' && s.exp.kp ? 'partAmt' : null;
      if (num) {
        if (/^[0-9]$/.test(e.key)) { this.key(num, e.key); e.preventDefault(); }
        else if (e.key === '.' || e.key === ',') { this.key(num, '.'); e.preventDefault(); }
        else if (e.key === 'Backspace') { this.key(num, 'del'); e.preventDefault(); }
        else if (e.key === 'Enter') { if (top === 'expense') this.saveExpense(); else this.setExp({ kp: false }); }
      }
    };
    window.addEventListener('keydown', this.onKey);
    try { const ic = JSON.parse(localStorage.getItem('tripup-imgs-v2') || 'null'); if (ic && typeof ic === 'object') this.setState({ imgCache: ic }); } catch (e) {}
    this.onAnyScroll = (e) => { const t = e.target; if (t && t.scrollTop != null && t.getAttribute && t.getAttribute('data-tu') !== 'phone' && t.closest && t.closest('[data-tu="phone"]')) { const up = t.scrollTop > 4; let eh = false; if (t.getAttribute('data-tu') === 'trip-scroll') { const hero = t.querySelector('[data-tu="hero"]'); if (hero) { const tr = t.getBoundingClientRect(), hr = hero.getBoundingClientRect(), k = this.sc || 1; eh = hr.bottom - tr.top > 60 * k; } } if (up !== !!this.state.edgeUp || eh !== !!this.state.edgeHero) this.setState({ edgeUp: up, edgeHero: eh }); } if (t && t.getAttribute && t.getAttribute('data-tu') === 'phone' && (t.scrollLeft || t.scrollTop)) { t.scrollLeft = 0; t.scrollTop = 0; } };
    document.addEventListener('scroll', this.onAnyScroll, true);
    this.onVV = () => { const vv = window.visualViewport; if (!vv || window.innerWidth >= 500) return; const vvh = Math.round(vv.height), vvt = Math.round(vv.offsetTop); if (vvh !== this.state.vvh || vvt !== this.state.vvt) this.setState({ vvh, vvt }); this.fixScroll(); };
    if (window.visualViewport) { window.visualViewport.addEventListener('resize', this.onVV); window.visualViewport.addEventListener('scroll', this.onVV); }
    this.chrome();
    this.takeBack = () => { if (!this.guiding && !this.busy) return; this.gTok = (this.gTok || 0) + 1; this.busy = false; this.guiding = false; this.ctlDone(); };
    this.inPhone = (e) => { const ph = document.querySelector('[data-tu="phone"]'); if (!ph || !e || e.clientX == null) return !!(e && e.target && e.target.closest && e.target.closest('[data-tu="phone"]')); const r = ph.getBoundingClientRect(); return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom; };
    this.onTake = (e) => { if (e && e.isTrusted && this.inPhone(e.touches && e.touches[0] ? e.touches[0] : e)) this.takeBack(); };
    document.addEventListener('wheel', this.onTake, { capture: true, passive: true }); document.addEventListener('touchstart', this.onTake, { capture: true, passive: true });
    this.onMove = (e) => {
      if (e && e.isTrusted && (this.guiding || this.busy) && Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0) > 2 && this.inPhone(e)) this.takeBack();
      if (this.guiding || this.busy) return;
      if (this.guiding) { this.guiding = false; this.ctlDone(); }
      const ph = document.querySelector('[data-tu="phone"]'), d = this.tapEl; if (!ph || !d) return;
      const r = ph.getBoundingClientRect(), sc = this.sc || 1;
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      d.style.opacity = inside ? 1 : 0;
      d.style.left = (e.clientX - r.left) / sc + 'px'; d.style.top = (e.clientY - r.top) / sc + 'px';
    };
    this.onDown = (e) => { if (e && e.isTrusted && this.inPhone(e)) this.takeBack();  const d = this.tapEl; if (d) { d.style.background = (this.busy || this.guiding) ? 'rgba(22,0,201,.4)' : 'rgba(0,0,0,.32)'; d.animate([{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: 'translate(-50%,-50%) scale(.72)' }], { duration: 110, fill: 'forwards', easing: 'ease-out' }); } };
    this.onUp = (e) => { if (e && e.isTrusted && this.inPhone(e)) this.takeBack();  const d = this.tapEl; if (d) { d.style.background = (this.busy || this.guiding) ? 'rgba(22,0,201,.22)' : 'rgba(0,0,0,.18)'; d.animate([{ transform: 'translate(-50%,-50%) scale(.72)' }, { transform: 'translate(-50%,-50%) scale(1)' }], { duration: 220, fill: 'forwards', easing: 'cubic-bezier(.34,1.56,.64,1)' }); } };
    this.onPanDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      const t = e.target; if (!t || !t.closest || !t.closest('[data-tu="phone"]')) return;
      if (t.closest('input,textarea,[aria-label="Drag to reorder"]')) return;
      let el = t; while (el && el.getAttribute('data-tu') !== 'phone') { const oy = getComputedStyle(el).overflowY; if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) break; el = el.parentElement; }
      if (!el || el.getAttribute('data-tu') === 'phone') return;
      const x0 = e.clientX, y0 = e.clientY, s0 = el.scrollTop, k = this.sc || 1; let mode = null, lastY = y0, lastT = performance.now(), vel = 0;
      cancelAnimationFrame(this.panRaf);
      const mv = (ev) => {
        const dx = (ev.clientX - x0) / k, dy = (ev.clientY - y0) / k;
        if (!mode) { if (Math.abs(dy) > 5 && Math.abs(dy) > Math.abs(dx)) { mode = 'y'; clearTimeout(this.lpT); el.style.scrollBehavior = 'auto'; } else if (Math.abs(dx) > 5) { mode = 'x'; } }
        if (mode !== 'y') return;
        ev.preventDefault(); el.scrollTop = s0 - dy;
        const now = performance.now(), dt = Math.max(1, now - lastT); vel = ((ev.clientY - lastY) / k) / dt; lastY = ev.clientY; lastT = now;
      };
      const up = () => {
        window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up);
        if (mode !== 'y') return;
        const kill = (ce) => { ce.stopPropagation(); ce.preventDefault(); window.removeEventListener('click', kill, true); }; window.addEventListener('click', kill, true); setTimeout(() => window.removeEventListener('click', kill, true), 0);
        let v = performance.now() - lastT > 80 ? 0 : vel * 16;
        const step = () => { if (Math.abs(v) < 0.3) { el.style.scrollBehavior = ''; return; } el.scrollTop -= v; v *= 0.94; this.panRaf = requestAnimationFrame(step); };
        step();
      };
      window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
    };
    window.addEventListener('pointerdown', this.onPanDown);
    window.addEventListener('pointermove', this.onMove); window.addEventListener('pointerdown', this.onDown); this.onWake = () => this.wakeHome(); window.addEventListener('pointerdown', this.onWake); window.addEventListener('pointerup', this.onUp);
    // Each page load starts at initial(); remove progress saved by older versions.
    try { localStorage.removeItem(LEGACY_STORE); } catch (e) {}
  }
  componentWillUnmount() { this.dead = true; if (this.onTake) { document.removeEventListener('wheel', this.onTake, true); document.removeEventListener('touchstart', this.onTake, true); } if (this._pwWheel) { document.removeEventListener('wheel', this._pwWheel); document.removeEventListener('pointerdown', this._pwDown); }
    clearInterval(this.subIv); this.clearTimers(); if (this.heroRO) this.heroRO.disconnect(); if (this.dragOff) this.dragOff(); document.removeEventListener('scroll', this.onAnyScroll, true); if (window.visualViewport) { window.visualViewport.removeEventListener('resize', this.onVV); window.visualViewport.removeEventListener('scroll', this.onVV); } window.removeEventListener('resize', this.onResize); window.removeEventListener('keydown', this.onKey); window.removeEventListener('pointermove', this.onMove); window.removeEventListener('pointerdown', this.onDown); window.removeEventListener('pointerdown', this.onPanDown); cancelAnimationFrame(this.panRaf); window.removeEventListener('pointerup', this.onUp); }
  rollClock(from, to) {
    const m = t => { const [h, mm] = String(t || '').split(':').map(Number); return isNaN(h) ? null : h * 60 + mm; };
    const a = m(from), b = m(to); if (a == null || b == null || a === b) return;
    cancelAnimationFrame(this.clkRaf); const t0 = performance.now(), D = Math.min(1600, 500 + Math.abs(b - a) * 6);
    const step = (now) => { const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3), v = Math.round(a + (b - a) * e); const s = String(Math.floor(v / 60) % 24) + ':' + String(v % 60).padStart(2, '0'); if (s !== this.state.clockD) this.setState({ clockD: p < 1 ? s : null }); if (p < 1) this.clkRaf = requestAnimationFrame(step); else this.setState({ clockD: null }); };
    this.clkRaf = requestAnimationFrame(step);
  }
  componentDidUpdate(pp, ps) { if (this.state.phase === 'settle' && !this.state.paid.sofia) { clearTimeout(this._fcA); this._fcA = setTimeout(() => this.fitCutA(), 60); } if (!this._pwDrag) requestAnimationFrame(() => this.pwSync(false)); { const open = (this.state.sel || []).length >= 1 && (this.state.stack || []).includes('choose'); if (open && !this._pwOpen) this.pwKick(); this._pwOpen = open; } if (this.state.paid.sofia && !(ps && ps.paid && ps.paid.sofia)) [60, 500, 1300].forEach(ms => setTimeout(() => this.fitCut(), ms)); { const c = this.state.clock; if (this._clk != null && this._clk !== c) this.rollClock(this._clk, c); this._clk = c; } const pp0 = ps && ps.poll || {}, pn = this.state.poll || {}; if (ps && (pp0.mine !== pn.mine || pp0.submitted !== pn.submitted || pp0.editing !== pn.editing || ps.poll !== this.state.poll || ps.phase !== this.state.phase || ps.stack !== this.state.stack || ps.sheet !== this.state.sheet)) setTimeout(() => this.subCheck(), 60); this.cdu0 && this.cdu0(pp, ps); }
  cdu0() {
    const s = this.state;
    this.chrome(); this.navCheck();
    if (!this.heroRO && window.ResizeObserver) { const hero = document.querySelector('[data-tu="hero"]'); if (hero) { this.heroRO = new ResizeObserver(() => this.fabCheck()); this.heroRO.observe(hero); } }
    if (this._ph !== s.phase) { this._ph = s.phase; this.fabCheck(); }
    if (s.stack[s.stack.length - 1] === 'choose' || s.phase === 'vote') this.loadImgs(s.chooseMode === 'plan' ? [...PLANS, ...QUICK, ...LATE] : VENUES);
  }
  snack(title, sub, tone = 'accent', action = null, ms = 2800) {
    const id = this.state.snack.id + 1;
    this.setState({ snack: { show: true, id, title, sub, tone, icon: tone === 'info' ? 'info' : tone === 'accent' ? 'sparkle' : 'check', action } });
    this.after(ms, () => { if (this.state.snack.id === id) this.setState(st => ({ snack: { ...st.snack, show: false } })); });
  }
  notPart = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const id = this.state.pillId + 1;
    this.setState({ pill: true, pillId: id });
    this.after(1700, () => { if (this.state.pillId === id) this.setState({ pill: false }); });
  };
  matches() { const s = this.state, q = (s.q || '').trim().toLowerCase(); return CONTACTS.filter(ct => !(ct.k === 'ren' && s.renJoined)).filter(ct => !q || ct.name.toLowerCase().split(' ').some(w => w.startsWith(q)) || ct.name.toLowerCase().startsWith(q) || ct.handle.toLowerCase().includes(q)); }
  V() { return [...ALL, ...(this.state.customs || []).map(n => ({ name: n, cuisine: 'Your option', price: '', walk: '', custom: true }))]; }
  addOwnOpt(name) {
    if (!name) return;
    const idx = ALL.length + (this.state.customs || []).length;
    this.setState(st => ({ customs: [...(st.customs || []), name], sel: [...st.sel, idx], cq: '' }));
    if (document.activeElement && document.activeElement.tagName === 'INPUT') document.activeElement.blur();
  }
  wakeHome() { const el = this.homeEl; if (!el) return; el.style.opacity = 1; clearTimeout(this.homeT); this.homeT = setTimeout(() => { if (this.homeEl) this.homeEl.style.opacity = 0.35; }, 3000); }
  ctx() { const s = this.state; return s.afterDinner || s.expAdded ? 'late' : s.extra ? 'quick' : 'sunset'; }
  slotOf(c) { return c === 'late' ? 'xl' : c === 'quick' ? 'xq' : 'extra'; }
  inviteRen() {
    this.setState(st => ({ renInvited: true, renJoined: true, invited: { ...st.invited, ren: true }, exp: { ...st.exp, incRest: { ...st.exp.incRest, ren: true }, incPart: { ...st.exp.incPart, ren: true } } }));
    this.snack('Ren added to the trip', 'Past expenses stay as they are', 'success');
    this.after(900, () => this.setState({ sheet: null }));
  }
  renJoin() {
    if (this.state.renJoined || !this.state.renInvited) return;
    this.setState(st => ({ renJoined: true, exp: { ...st.exp, incRest: { ...st.exp.incRest, ren: true }, incPart: { ...st.exp.incPart, ren: true } } }));
    this.snack('Ren added to the trip', 'Past expenses stay as they are', 'success');
  }
  skipMine() {
    const p = this.state.poll; if (!p || p.skipped) return;
    const first = p.submitted == null;
    this.scrollTrip();
    this.setState({ poll: { ...p, mine: null, submitted: null, editing: false, skipped: true }, subFloat: false }, () => this.voteClock());
    if (first) { this.after(2600, () => this.vote('maya', p.opts[0])); this.after(3800, () => this.closePoll()); }
  }
  submitMine(idx) {
    const p = this.state.poll; if (!p) return;
    const mine = idx != null ? idx : p.mine; if (mine == null) return;
    const first = p.submitted == null;
    this.scrollTrip();
    this.setState({ poll: { ...p, mine, submitted: mine, editing: false, skipped: false } }, () => this.voteClock());
    if (first) { const slow = this.state.pace !== 'Fast'; this.after(2600, () => this.vote('maya', mine)); this.after(slow ? 3800 : 2700, () => this.closePoll()); }
    else { this.snack('Vote changed', this.V()[mine].name, 'success', null, 1800); if (this.closeLater) { this.closeLater = false; this.after(2200, () => this.closePoll()); } }
  }
  seq(list) {
    this.busy = true; const tok = this.gTok || 0;
    const run = (k) => {
      if (tok !== (this.gTok || 0)) return;
      if (k >= list.length) { this.busy = false; if (!this.guiding) this.ctlDone(); return; }
      const [sel, fn, wait, fast] = list[k];
      const next = () => this.after(wait == null ? 500 : wait, () => run(k + 1));
      if (!sel) { fn(); next(); return; }
      this.guide(sel, () => { fn(); next(); }, fast);
    };
    run(0);
  }
  keySeq(target, str) { return [...str].map(ch => ['k-' + target + '-' + ch, () => this.key(target, ch), 60, true]); }
  typeIn(key, str) { [...str].forEach((ch, i) => this.after(160 + i * 170, () => this.setExp(ex => ({ [key]: (i === 0 ? '' : ex[key]) + ch })))); }
  togglePart(k) { this.setExp(ex => ({ incPart: { ...ex.incPart, [k]: !ex.incPart[k] }, kp: false })); }
  offPill(l) { clearTimeout(this.offT); this.setState({ offOn: true, offL: l }); this.offT = setTimeout(() => this.setState({ offOn: false }), 2800); }
  stepOk(i) {
    const s = this.state, top = s.stack[s.stack.length - 1], e = s.exp || {}, c = calc(e);
    return [null,
      () => top === 'trip' && !s.renJoined && !s.sheet,
      () => top === 'trip' && !s.sheet && !s.dinner && s.phase === 'plan',
      () => top === 'choose' && s.chooseMode === 'dinner',
      () => top === 'choose' && s.sel.length >= 2,
      () => s.phase === 'vote' && !!s.poll && s.poll.submitted == null && !s.pollLive,
      () => (top === 'trip' && !s.sheet && !s.expAdded && s.phase !== 'settle' && s.phase !== 'settled'),
      () => top === 'expense' && !(c.amt > 0),
      () => top === 'expense' && c.amt > 0,
      () => top === 'split' && !e.partOn,
      () => top === 'split' && !!e.partOn && !(c.part > 0),
      () => top === 'split' && !!e.partOn && c.part > 0,
      () => top === 'split',
      () => top === 'trip' && !s.sheet && !!s.expAdded && !s.paid.sofia && s.phase !== 'settled',
      () => s.sheet === 'gpay' && !s.paid.sofia
    ][i]?.() ?? false;
  }
  demoNext() {
    if (this.busy || this.guiding) { this.speedUp(); return; }
    if (Date.now() < (this.stepLock || 0)) return;
    const i = (this.dstep || 0) + 1;
    if (i >= 15) { this.offPill('That’s the end of the demo · Reset to start again'); return; }
    if (!this.stepOk(i)) { this.offPill('You’re off script · Pick a step to jump back in'); return; }
    this.stepLock = Date.now() + ({ 1: 1300, 4: 1700, 6: 1400, 13: 1800 }[i] || 900);
    const ff = () => { if (this.state.phase === 'vote' || !this.state.dinner) { this.clearTimers(); this.setState({ phase: 'planned', dinner: { idx: 0, how: 'vote' }, poll: null, winner: null }); } };
    const steps = [
      null,
      () => this.seq([['g-invite', () => this.setState({ sheet: 'invite', q: '' }), 700], ['c-ren', () => this.inviteRen()]]),
      () => this.seq([['g-choose', () => { this.setState({ sel: [], cq: '', chooseMode: 'dinner', chooseFromAdd: false }); this.push('choose'); }]]),
      () => this.seq([0, 1, 2].map(n => ['v-' + n, () => this.setState(st => ({ sel: st.sel.includes(n) ? st.sel : [...st.sel, n] })), 200])),
      () => this.seq([['g-confirm', () => this.createPoll()]]),
      () => { const p = this.state.poll; const o = p && p.opts[0]; if (o == null) return; this.seq([['opt-' + o, () => this.setState(st => ({ poll: { ...st.poll, mine: o } })), 250], ['g-submit', () => this.submitMine(o)]]); },
      () => { ff(); this.setState({ afterDinner: true, clock: '21:20' }); this.after(700, () => this.seq([['g-expense', () => { this.setState({ exp: freshExp(this.keys()) }); this.push('expense'); }]])); },
      () => this.seq(this.keySeq('amt', '250')),
      () => this.seq([['g-equally', () => this.push('split')]]),
      () => this.seq([['g-part', () => this.setExp({ partOn: true, tab: 'part', kp: true, txt: false, partAmt: '', partName: 'Wine' })]]),
      () => this.seq([...this.keySeq('partAmt', '60'), [null, () => this.setExp({ kp: false }), 300]]),
      () => this.seq(this.keys().filter(k => k === 'nic' || k === 'ren').map(k => ['r-' + k, () => this.togglePart(k), 200])),
      () => this.seq([['g-confirmsplit', () => this.saveExpense()]]),
      () => { const go = () => { if (this.state.paid.sofia) return; this.seq([['g-gpay', () => this.setState({ sheet: 'gpay', gpay: 'idle' })]]); }; if (this.state.phase !== 'settle') { this.clearTimers(); this.toSettle(); this.after(1300, go); } else go(); },
      () => { if (!this.state.paid.sofia) this.seq([['g-pay', () => this.confirmPay()]]); }
    ];
    if (i >= steps.length) return;
    this.dstep = i; steps[i]();
  }
  vState() { const s0 = this.state, pv = !!(s0.pollLive && s0.poll && (s0.phase !== 'settle' || s0.view === 'poll')); return pv ? { ...s0, phase: 'vote', pollLinger: false, heroLabel: s0.pollLabel || 'Vote on dinner' } : s0; }
  actInfo() {
    const s = this.vState(), p = s.poll;
    if (s.phase === 'vote' || s.pollLinger) {
      if (s.winner != null) return { label: p && p.mode === 'plan' ? 'Plan picked' : 'Dinner chosen', done: true };
      if (p && p.submitted != null && !p.editing) { const t = this.tally(p), voted = Object.values(t).reduce((a, x) => a + x.length, 0), n = Math.max(0, this.keys().length - voted); return { label: n ? 'Waiting on ' + n + (n > 1 ? ' votes' : ' vote') : (p.mode === 'plan' ? 'Plan picked' : 'Dinner chosen'), done: true }; }
      return { label: s.heroLabel, done: false };
    }
    if (s.phase === 'settle') {
      if (s.allDone) return { label: 'All settled', done: true };
      if (s.paid.sofia) return { label: 'Settling up', done: true };
      return { label: 'Trip ending, Settle up', done: false };
    }
    return { label: s.heroLabel, done: false };
  }
  isDone() { const s = this.vState(); return (s.phase === 'settle' && !!s.paid.sofia) || ((s.phase === 'vote' || !!s.pollLinger) && !!(s.poll && s.poll.submitted != null && !s.poll.editing)); }
  debtors() { const b = ledger(this.state.lastExp); return Object.keys(b).filter(k => b[k] < -0.005); }
  fitCutA() { const s = this.state; if (s.phase !== 'settle' || s.paid.sofia || (s.pollLive && s.view === 'poll')) return; const hero = document.querySelector('[data-tu="hero"]'), b = document.querySelector('[data-tu="g-gpay"]') || document.querySelector('[data-tu="rc-card"] [aria-disabled="true"]'); if (!hero || !b || !b.offsetHeight) return; const sc = this.sc || 1, br = b.getBoundingClientRect(), v = Math.round((hero.getBoundingClientRect().bottom - (br.top + br.height / 2)) / sc); if (v > 0 && Math.abs(v - (s.cutPxA || 0)) > 1) this.setState({ cutPxA: v }); }
  fitCut() { const s = this.state; if (s.phase !== 'settle' || !s.paid.sofia || (s.pollLive && s.view === 'poll')) return; const hero = document.querySelector('[data-tu="hero"]'), d = document.querySelector('[data-tu="rc-div"]'); if (!hero || !d) return; const sc = this.sc || 1, dr = d.getBoundingClientRect(), v = Math.round((hero.getBoundingClientRect().bottom - (dr.top + dr.height / 2)) / sc); if (Math.abs(v - (s.cutPx || 0)) > 1) this.setState({ cutPx: v }); }
  paidAt(k) { const s = this.state; return k === 'sofia' ? !!s.paid.sofia : k === 'nic' ? !!s.gotIn || !!s.paid.nic : !!s.paid[k]; }
  stl() { return this.state.settle || { out: outOf(this.state.owe), in: inOf(this.state.owe) }; }
  keys() { return this.state.renJoined ? [...BASE, 'ren'] : BASE; }
  act() { return MEMBERS.filter(m => this.state.renJoined || m.k !== 'ren'); }
  focusEl(sel) { if (this.state.vw >= 500) return; const el = document.querySelector(sel); if (el) try { el.focus({ preventScroll: true }); } catch (e) {} this.fixScroll(); }
  focusAmt() { this.focusEl('[data-tu="g-amt"] input'); }
  blurActive() { const a = document.activeElement; if (a && a.tagName === 'INPUT') try { a.blur(); } catch (e) {} }
  fixScroll() { const ph = document.querySelector('[data-tu="phone"]'); if (ph && (ph.scrollLeft || ph.scrollTop)) { ph.scrollLeft = 0; ph.scrollTop = 0; } }
  chrome() { const ph = document.querySelector('[data-tu="phone"]'); if (ph) { const v = this.state.vw < 500 ? 'max(env(safe-area-inset-top), 12px)' : '54px'; if (this._sb !== v) { ph.style.setProperty('--tu-status-bar', v); this._sb = v; } } this.fixScroll(); }
  itinVisNow() { const s = this.state, gone = s.afterDinner || s.expAdded, rm = (s.itin && s.itin.removed) || {}; const nat = { xq: !!s.xq && !gone, extra: !!s.extra && !gone, dinner: !!s.dinner && !gone, xl: !!s.xl, drinks: true, hotel: true, flight: true }; return Object.fromEntries(Object.keys(nat).map(k => [k, nat[k] && !rm[k]])); }
  itinName(id) { const s = this.state; if (id === 'dinner') return 'Dinner at ' + this.V()[s.dinner.idx].name; if (s[id] && s[id].idx != null) return this.V()[s[id].idx].name; return ITIN_NAMES[id] || ''; }
  imgInfo(v) {
    if (v.custom) return { hasImgs: false, imgs: [] };
    const urls = (this.state.imgCache || {})[v.name];
    if (!urls) return { hasImgs: true, imgs: [{}, {}, {}] };
    return { hasImgs: urls.length > 0, imgs: urls.map(src => ({ src, err: this.imgErr })) };
  }
  imgErr = (e) => { if (e && e.target) e.target.style.display = 'none'; };
  loadImgs(list) {
    this.imgReq = this.imgReq || {};
    const q = async (term) => {
      const u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url&iiurlwidth=264&gsrsearch=' + encodeURIComponent(term + ' filetype:bitmap');
      const j = await (await fetch(u)).json();
      return Object.values((j.query || {}).pages || {}).sort((a, b) => a.index - b.index).map(p => p.imageinfo && p.imageinfo[0] && p.imageinfo[0].thumburl).filter(Boolean);
    };
    list.forEach((v, li) => {
      const lim = li < 8 ? 6 : 3;
      if (v.custom || this.imgReq[v.name] || (this.state.imgCache || {})[v.name]) return;
      this.imgReq[v.name] = 1;
      (async () => {
        let urls = [];
        try { urls = await q(v.name + ' Lisbon'); if (urls.length < lim) urls = urls.concat(await q('Lisbon ' + v.cuisine)); } catch (e) {}
        urls = [...new Set(urls)].slice(0, lim);
        this.setState(st => ({ imgCache: { ...(st.imgCache || {}), [v.name]: urls } }), () => { try { localStorage.setItem('tripup-imgs-v2', JSON.stringify(this.state.imgCache)); } catch (e) {} });
      })();
    });
  }
  toggleTime = () => {
    const s = this.state;
    if (!this._paused) { this._paused = true; if (s.adEnd && s.adPaused == null && !s.afterDinner) { clearTimeout(this.adT); this.setState({ adPaused: Math.max(0, s.adEnd - Date.now()), timeOff: true }); } else this.setState({ timeOff: true }); return; }
    this._paused = false; this.setState({ timeOff: false });
    if (this.state.adPaused != null) this.schedAD(this.state.adPaused, true, true);
    const q = this._q || []; this._q = []; q.forEach((fn, i) => setTimeout(fn, 120 + i * 180));
  };
  gapLbl() { const s = this.state; if (!s.adEnd) return ''; const tot = this.adTotal || 12000, rem = s.adPaused != null ? s.adPaused : Math.max(0, s.adEnd - Date.now()); return Math.round(Math.min(1, Math.max(0, 1 - rem / tot)) * 200); }
  subCheck() {
    const s = this.state, poll = s.poll; let on = false;
    if (s.phase === 'vote' && poll && poll.mine != null && !(poll.submitted != null && !poll.editing) && s.stack[s.stack.length - 1] === 'trip' && !s.sheet) {
      const b = document.querySelector('[data-tu="g-submit"]'), sc = document.querySelector('[data-tu="trip-scroll"]');
      if (b && sc) { const br = b.getBoundingClientRect(), sr = sc.getBoundingClientRect(); on = br.bottom > sr.bottom - 4 || br.top < sr.top + 4; }
    }
    if (on !== !!s.subFloat) this.setState({ subFloat: on });
  }
  fabCheck() {
    const s = this.state, active = s.phase === 'vote' || s.phase === 'settle';
    let hide = false;
    if (active) { const ph = document.querySelector('[data-tu="phone"]'), hero = document.querySelector('[data-tu="hero"]'); if (ph && hero) { const pr = ph.getBoundingClientRect(), hr = hero.getBoundingClientRect(), sc = this.sc || 1; hide = hr.bottom > pr.bottom - 96 * sc; } }
    if (hide !== !!s.fabHide) this.setState({ fabHide: hide });
  }
  navCheck() {
    const sc = document.querySelector('[data-tu="trip-scroll"]'), nav = document.querySelector('[data-tu="trip-nav"]'); if (!sc || !nav) return;
    const nb = nav.getBoundingClientRect().bottom, hero = sc.querySelector('[data-tu="hero"]'), tt = sc.querySelector('[data-tu="trip-title"]');
    const card = sc.querySelector('[data-tu="itin-card"]');
    const n = { up: sc.scrollTop > 2, white: !!card && card.getBoundingClientRect().top < nb, hero: !!hero && hero.getBoundingClientRect().bottom > nb, title: !!tt && tt.getBoundingClientRect().bottom < nb + 2 };
    const o = this.state.nav || {}; if (o.up !== n.up || o.white !== n.white || o.hero !== n.hero || o.title !== n.title) this.setState({ nav: n });
  }
  scrollTrip(target) {
    const sc = document.querySelector('[data-tu="trip-scroll"]'); if (!sc) return;
    cancelAnimationFrame(this.stRaf); if (this.stStop) this.stStop();
    const t0 = performance.now(); let cur = sc.scrollTop, vel = 0;
    const want = () => {
      const max = Math.max(0, sc.scrollHeight - sc.clientHeight);
      if (target == null) return 0;
      const el = document.querySelector('[data-tu="' + target + '"]'); if (!el) return cur;
      const r = el.getBoundingClientRect(), cr = sc.getBoundingClientRect(), k = this.sc || 1;
      return Math.min(max, Math.max(0, sc.scrollTop + (r.top - cr.top) / k - sc.clientHeight * 0.35));
    };
    const stop = () => { cancelAnimationFrame(this.stRaf); sc.removeEventListener('wheel', stop); sc.removeEventListener('pointerdown', stop); sc.removeEventListener('touchstart', stop); this.stStop = null; };
    this.stStop = stop; sc.addEventListener('wheel', stop, { passive: true }); sc.addEventListener('pointerdown', stop); sc.addEventListener('touchstart', stop, { passive: true });
    const step = (now) => {
      cur = sc.scrollTop; const d = want() - cur;
      vel = vel * 0.78 + d * 0.035; if (Math.abs(vel) > Math.abs(d)) vel = d;
      sc.scrollTop = cur + vel;
      if ((Math.abs(d) < 0.5 && Math.abs(vel) < 0.3 && now - t0 > 900) || now - t0 > 3200) { stop(); return; }
      this.stRaf = requestAnimationFrame(step);
    };
    this.stRaf = requestAnimationFrame(step);
  }
  dragScroll = (e) => {
    if (!e || e.pointerType !== 'mouse') return;
    const el = e.currentTarget; if (!el) return;
    const x0 = e.clientX, s0 = el.scrollLeft, k = this.sc || 1; let moved = false;
    el.style.scrollSnapType = 'none'; el.style.scrollBehavior = 'auto';
    const mv = (ev) => { const dx = (ev.clientX - x0) / k; if (Math.abs(dx) > 4) moved = true; el.scrollLeft = s0 - dx; };
    const up = () => {
      window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up);
      el.style.scrollSnapType = ''; el.style.scrollBehavior = '';
      if (moved) { const kill = (ce) => { ce.stopPropagation(); ce.preventDefault(); window.removeEventListener('click', kill, true); }; window.addEventListener('click', kill, true); setTimeout(() => window.removeEventListener('click', kill, true), 0); }
    };
    window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
  };
  lpStart(e, id) {
    if (e && e.target && e.target.closest && e.target.closest('[data-nodrag]')) return;
    if (this.state.editing) { if (e && e.target && e.target.closest && e.target.closest('[data-nodrag]')) return; this.startDrag(e, id); return; }
    clearTimeout(this.lpT);
    const y0 = e && e.clientY != null ? e.clientY : 0, x0 = e && e.clientX != null ? e.clientX : 0;
    let last = { clientY: y0, clientX: x0 };
    const track = (ev) => { last = { clientY: ev.clientY, clientX: ev.clientX }; if (Math.abs(ev.clientY - y0) > 8 || Math.abs(ev.clientX - x0) > 8) this.lpEnd(); };
    window.addEventListener('pointermove', track); this.lpTrack = track;
    this.lpT = setTimeout(() => {
      window.removeEventListener('pointermove', track); this.lpTrack = null;
      try { navigator.vibrate && navigator.vibrate(10); } catch (er) {}
      this.lpGrab = true;
      this.setState({ editing: true, showPast: false, addOpen: false }, () => this.startDrag({ clientY: y0, clientX: x0 }, id));
    }, 450);
  }
  lpEnd = () => { clearTimeout(this.lpT); if (this.lpTrack) { window.removeEventListener('pointermove', this.lpTrack); this.lpTrack = null; } };
  shiftTime(id, d) {
    if ((this.state.itinDay || {})[id] === 'tmrw') { const toMin = t => +t.slice(0, 2) * 60 + +t.slice(3), toT = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); const m = Math.max(5 * 60, Math.min(8 * 60 + 15, toMin((this._tm || {})[id] || '07:30') + d)); this.setState(st => ({ itinT: { ...(st.itinT || {}), [id]: toT(m) } })); return; }
    const s = this.state, vis = this.itinVisNow(), order = s.itin.order, timed = order.filter(k => vis[k] && BASE_T[k] && (s.itinDay || {})[k] !== 'tmrw');
    const toMin = t => +t.slice(0, 2) * 60 + +t.slice(3), toT = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
    const cur = this._tm || {}, times = Object.fromEntries(timed.map(k => [k, toMin(cur[k] || BASE_T[k])]));
    const at = timed.indexOf(id), pv = timed[at - 1], nx = timed[at + 1], lo = pv ? times[pv] + 5 : 0, hi = nx ? times[nx] - 5 : 23 * 60 + 45;
    times[id] = Math.max(lo, Math.min(hi, times[id] + d));
    this.setState({ itin: { ...s.itin }, itinT: Object.fromEntries(Object.entries(times).map(([k, m]) => [k, toT(m)])) });
  }
  flightMin() { return 6 * 60 + 30; }
  startDrag(e, id) {
    if (e) { if (e.preventDefault) e.preventDefault(); if (e.stopPropagation) e.stopPropagation(); }
    if (!this.state.editing) return;
    if (this.dragOff) this.dragOff();
    this.setState({ drag: id });
    const move = (ev) => {
      const s = this.state, vis = this.itinVisNow(), order0 = s.itin.order;
      const lab = document.querySelector('[data-itin="tmrwlabel"]'), lr = lab && lab.offsetParent !== null ? lab.getBoundingClientRect() : null;
      if (lr && ev.clientY > lr.bottom) { if ((s.itinDay || {})[id] !== 'tmrw') { const fl = this.flightMin(); const tm0 = Math.max(0, fl - 60); this.setState(st => ({ itinDay: { ...(st.itinDay || {}), [id]: 'tmrw' }, itinT: { ...(st.itinT || {}), [id]: String(Math.floor(tm0 / 60)).padStart(2, '0') + ':' + String(tm0 % 60).padStart(2, '0') } })); } return; }
      const fromT = (s.itinDay || {})[id] === 'tmrw';
      if (fromT) { this._backFromT = true; this.setState(st => { const d = { ...(st.itinDay || {}) }; delete d[id]; return { itinDay: d }; }); }
      const TD = { ...(s.itinDay || {}) }; delete TD[id];
      const ids = order0.filter(k => vis[k] && BASE_T[k] && TD[k] !== 'tmrw'), others = ids.filter(k => k !== id);
      let idx = 0;
      const scl = this.sc || 1;
      others.forEach(k => { const el = document.querySelector('[data-itin="' + k + '"]'); if (!el) return; const r = el.getBoundingClientRect(); let ty = 0; try { const mt = new DOMMatrixReadOnly(getComputedStyle(el).transform); ty = mt.m42 || 0; } catch (er) {} const top = r.top - ty * scl; if (ev.clientY > top + r.height / 2) idx++; });
      const next = [...others]; next.splice(idx, 0, id);
      if (next.join() === ids.join() && !fromT && !this._backFromT) return; this._backFromT = false;
      const order = [...order0], slots = order.map((k, i) => ids.includes(k) ? i : -1).filter(i => i >= 0);
      slots.forEach((pos, j) => { order[pos] = next[j]; });
      const toMin = t => +t.slice(0, 2) * 60 + +t.slice(3), toT = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
      const cur = { ...BASE_T, ...(s.itinT || {}), ...(this._tm || {}) }, at = next.indexOf(id);
      const pv = next[at - 1], nx = next[at + 1], P = pv ? toMin(cur[pv]) : null, N = nx ? toMin(cur[nx]) : null;
      let m = P != null && N != null ? Math.round((P + N) / 2 / 15) * 15 : P != null ? P + 60 : N != null ? N - 30 : toMin(fromT ? BASE_T[id] : cur[id]);
      if (P != null && N != null) { if (N - P <= 10) m = P + Math.max(1, Math.floor((N - P) / 2)); else { m = Math.max(P + 5, Math.min(N - 5, m)); } } else { if (P != null && m <= P) m = P + 15; if (N != null && m >= N) m = N - 15; }
      m = Math.max(0, Math.min(23 * 60 + 45, m));
      this.setState({ itin: { ...s.itin, order }, itinT: { ...cur, [id]: toT(m) } });
    };
    const el0 = () => document.querySelector('[data-itin="' + id + '"]'), sc = this.sc || 1, y0 = e && e.clientY != null ? e.clientY : 0, top0 = el0() ? el0().offsetTop : 0, tr0 = el0() ? el0().style.transition : '', pos0 = el0() ? el0().style.position : '';
    const follow = (ev) => { const el = el0(); if (!el) return; const dy = top0 + (ev.clientY - y0) / sc - el.offsetTop; el.style.transition = 'none'; el.style.position = 'relative'; el.style.zIndex = '5'; el.style.transform = 'translateY(' + dy + 'px) scale(1.02)'; el.style.filter = 'drop-shadow(0 10px 22px rgba(0,0,0,.16)) drop-shadow(0 1px 3px rgba(0,0,0,.08))'; };
    const mv2 = (ev) => { const els = [...document.querySelectorAll('[data-itin]')], before = new Map(els.map(x => [x, x.offsetTop])); move(ev); follow(ev); requestAnimationFrame(() => { const me = el0(); els.forEach(x => { if (x === me) return; const d = before.get(x) - x.offsetTop; if (Math.abs(d) > 1) x.animate([{ transform: 'translateY(' + d + 'px)' }, { transform: 'none' }], { duration: 200, easing: 'cubic-bezier(.2,.7,.2,1)' }); }); follow(ev); }); };
    const up = () => { { const el = el0(); if (el) { const cur = el.style.transform; el.style.transform = ''; el.style.zIndex = ''; el.style.filter = ''; el.style.transition = tr0 || ''; el.style.position = pos0 || ''; if (cur && cur !== 'none') el.animate([{ transform: cur }, { transform: 'none' }], { duration: 200, easing: 'cubic-bezier(.2,.7,.2,1)' }); } } window.removeEventListener('pointermove', mv2); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up); this.dragOff = null; this.setState({ drag: null, itinT: { ...(this._tm || {}) } }); };
    window.addEventListener('pointermove', mv2); window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
    { const el = el0(); if (el) { el.style.position = 'relative'; el.style.zIndex = '5'; el.style.transition = 'transform 160ms cubic-bezier(.2,.7,.2,1), filter 160ms cubic-bezier(.2,.7,.2,1)'; void el.offsetWidth; el.style.transform = 'translateY(0px) scale(1.02)'; el.style.filter = 'drop-shadow(0 10px 22px rgba(0,0,0,.16)) drop-shadow(0 1px 3px rgba(0,0,0,.08))'; } }
    this.dragOff = up;
  }
  setPool(pk, fn) { this.setExp(ex => { const p = ex[pk] || pool0(); return { [pk]: { ...p, ...fn(p) } }; }); }
  ariPay() {
    if (!this.state.paid.sofia) return;
    this.setState(s => ({ owe: 0, gotIn: true, paid: { ...s.paid, nic: true } }));
    this.toSettled();
  }
  nudge = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const s = this.state; if (s.nudged || s.gotIn || !s.paid.sofia) return;
    this.setState({ nudged: true });
    this.snack('Nudge sent to Nic', 'A reminder to pay Maya ' + fmt(this._ariOwes || 0), 'neutral', null, 2200);
    clearTimeout(this.ariT); this.ariT = this.after(2800, () => this.ariPay());
  };
  push(name) { if (name !== 'expense') this.blurActive(); this.setState(s => ({ edgeUp: false, addOpen: false, editing: false, stack: [...s.stack.filter(x => x !== name), name] })); }
  back = (e) => { if (e) e.stopPropagation(); this.blurActive(); this.setState(s => ({ edgeUp: false, stack: s.stack.length > 1 ? s.stack.slice(0, -1) : s.stack, exp: { ...s.exp, kp: false } })); };

  vote(k, idx) { this.setState(s => s.poll ? ({ poll: { ...s.poll, votes: { ...s.poll.votes, [k]: idx } } }) : null, () => this.voteClock()); }
  voteClock() {
    const s = this.state, p = s.poll; if (!p || s.phase !== 'vote' || p.mode === 'plan') return;
    const ks = this.keys(), n = ks.filter(k => k === 'sofia' ? p.submitted != null : p.votes[k] != null).length, m = 18 * 60 + Math.round((p.dur || 30) * n / ks.length);
    const t = Math.floor((m % 1440) / 60) + ':' + String(m % 60).padStart(2, '0'); if (t !== s.clock) this.setState({ clock: t });
  }
  simVotes() {
    const o = this.state.poll.opts;
    [['eleanor', o[0], 1100], ['nic', o[1] != null ? o[1] : o[0], 1900], ...(this.state.renJoined ? [['ren', o[2] != null ? o[2] : o[0], 3400]] : [])].forEach(([k, idx, ms]) => {
      if (this.state.poll.votes[k] == null) this.after(ms, () => this.vote(k, idx));
    });
  }
  createPoll() {
    const opts = [...this.state.sel].sort((a, b) => a - b);
    const mode = this.state.chooseMode;
    if (!this._pollGo) { this._pollGo = true; this.setState({ stack: ['trips', 'trip'], sel: opts, slowHero: true }); this.scrollTrip(); clearTimeout(this.pollT); this.pollT = setTimeout(() => { this.setState({ sel: opts }, () => { this.createPoll(); this._pollGo = false; }); }, 1000); this.timers.push(this.pollT); this.after(3200, () => this.setState({ slowHero: false })); return; }
    const SLd = { extra: '19:00', xq: '18:30', xl: '21:30' }, slot0 = this.slotOf(this.ctx()), tM = t => +t.slice(0, 2) * 60 + +t.slice(3);
    const atDef = tM(mode === 'plan' ? (SLd[slot0] || '19:00') : '20:00'), dur = this.state.pollDur || 30, at = Math.max(Math.ceil((18 * 60 + dur) / 15) * 15, this.state.pollAt != null ? this.state.pollAt : atDef);
    this.setState({ pollAt: null, pollDur: 30, poll: { opts, mode, slot: slot0, at, atDef, dur, votes: {}, mine: null, submitted: null, editing: false }, phase: 'vote', heroLabel: mode === 'plan' ? 'Vote on plans' : 'Vote on dinner', clock: '18:00', stack: ['trips', 'trip'], sel: [] });
    this.after(10, () => this.simVotes());
    this.after(320, () => this.scrollTrip());
    this.after(400, () => this.snack('Poll created · Group notified', '', 'success', null, 2200));
  }
  tally(p) {
    const c = {}; p.opts.forEach(i => { c[i] = []; });
    Object.entries(p.votes || {}).forEach(([k, i]) => { if (typeof i === 'number' && c[i]) c[i].push(k); });
    if (p.submitted != null && c[p.submitted]) c[p.submitted].unshift('sofia');
    return c;
  }
  endLinger() {
    if (!this.state.pollLinger) return;
    const s = this.state, plan = s.poll && s.poll.mode === 'plan', slot = (s.poll && s.poll.slot) || 'extra';
    this.setState({ pollLinger: false, winner: null });
    clearTimeout(this.fresh1T); this.setState(plan ? { freshSlot: null } : { dinnerFresh: false });
    this.after(500, () => this.setState(plan ? { freshSlot: slot, fresh2: true } : { dinnerFresh: true, fresh2: true }));
    this.after(3900, () => this.setState(plan ? { freshSlot: null, fresh2: false } : { dinnerFresh: false, fresh2: false }));
  }
  closePoll() {
    const p = this.state.poll; if (!p || (this.state.phase !== 'vote' && !this.state.pollLive)) return;
    if (p.editing) { this.closeLater = true; return; }
    const t = this.tally(p);
    let idx = p.submitted != null ? p.submitted : p.opts[0];
    p.opts.forEach(i => { if (t[i].length > t[idx].length) idx = i; });
    const plan = p.mode === 'plan', slot = p.slot || 'extra', T = { extra: '19:00', xq: '18:30', xl: '21:30' }[slot];
    this.after(700, () => {
      if (this.state.pollLive) {
        const key = plan ? slot : 'dinner', atT = p.at != null ? String(Math.floor((p.at % 1440) / 60)).padStart(2, '0') + ':' + String(p.at % 60).padStart(2, '0') : null;
        this.setState(st => ({ pollLive: false, view: null, ...(plan ? { [slot]: { idx, how: 'vote' } } : { dinner: { idx, how: 'vote' } }), ...(p.at != null && p.at !== p.atDef ? { itinT: { ...(st.itinT || {}), [key]: atT }, ...(p.at >= 1440 ? { itinDay: { ...(st.itinDay || {}), [key]: 'tmrw' } } : {}) } : {}) }));
        this.snack('Poll closed', this.V()[idx].name + ' added to the plan' + (atT ? ' · ' + atT : ''), 'success');
        return;
      }
      this.setState(st => ({ winner: idx, pollLinger: true, ...(plan ? { phase: st.dinner ? 'planned' : 'plan', [slot]: { idx, how: 'vote' } } : { phase: 'planned', dinner: { idx, how: 'vote' }, clock: (() => { const m = (18 * 60 + (p.dur || 30)) % 1440; return Math.floor(m / 60) + ':' + String(m % 60).padStart(2, '0'); })() }), ...(p.at != null && p.at !== p.atDef ? { itinT: { ...(st.itinT || {}), [plan ? slot : 'dinner']: String(Math.floor((p.at % 1440) / 60)).padStart(2, '0') + ':' + String(p.at % 60).padStart(2, '0') }, ...(p.at >= 1440 ? { itinDay: { ...(st.itinDay || {}), [plan ? slot : 'dinner']: 'tmrw' } } : {}) } : {}) }), () => { const el = document.querySelector('[data-tu="trip-scroll"]'); if (el) el.scrollTo({ top: 0, behavior: 'smooth' }); });
      this.after(300, () => this.setState(plan ? { freshSlot: slot } : { dinnerFresh: true }));
      this.fresh1T = this.after(3700, () => this.setState(plan ? { freshSlot: null } : { dinnerFresh: false }));
      if (!plan) this.schedAD(9500); else this.after(4200, () => this.endLinger());
    });
  }
  flyStart(idx) {
    try {
      const el = document.querySelector('[data-tu="opt-' + idx + '"]'); if (!el) return null;
      const r = el.getBoundingClientRect(), sc = this.sc || 1, W = r.width / sc;
      const c = el.cloneNode(true);
      Object.assign(c.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: W + 'px', height: r.height / sc + 'px', margin: '0', transformOrigin: '0 0', transform: 'scale(' + sc + ')', zIndex: 9999, pointerEvents: 'none', willChange: 'transform, opacity' });
      document.body.appendChild(c);
      el.style.visibility = 'hidden';
      const lift = 'translate(0px,-4px) scale(' + sc * 1.02 + ')';
      c.animate([{ transform: 'scale(' + sc + ')', boxShadow: 'inset 0 0 0 2px #1600C9, 0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0)' }, { transform: lift, boxShadow: 'inset 0 0 0 2px #1600C9, 0 4px 12px rgba(0,0,0,.06), 0 16px 48px rgba(0,0,0,.14)' }], { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
      return { c, r, sc, W, lift, el };
    } catch (e) { return null; }
  }
  flyTo(f, done, target) {
    if (!f) { done(); return; }
    const t = document.querySelector('[data-tu="' + (target || 'dinner-row') + '"]');
    if (!t) { f.c.remove(); done(); return; }
    const tr = t.getBoundingClientRect();
    const end = 'translate(' + (tr.left - f.r.left) + 'px,' + (tr.top - f.r.top) + 'px) scale(' + tr.width / f.W + ')';
    const a = f.c.animate([
      { transform: f.lift, opacity: 1, offset: 0 },
      { opacity: 1, offset: 0.65 },
      { transform: end, opacity: 0, offset: 1 }
    ], { duration: 900, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' });
    this.after(560, done);
    a.onfinish = () => { f.c.remove(); if (f.el) f.el.style.visibility = ''; };
  }
  _unused() {
  }
  addSingle() {
    const idx = this.state.sel[0], s0 = this.state, plan0 = s0.chooseMode === 'plan';
    const def0 = plan0 ? ({ extra: 19, xq: 18.5, xl: 21.5 }[this.slotOf(this.ctx())] || 19) * 60 : 20 * 60;
    const at = Math.max(Math.ceil(18 * 60 / 15) * 15 + 15, s0.pollAt != null ? s0.pollAt : def0), atT = String(Math.floor((at % 1440) / 60)).padStart(2, '0') + ':' + String(at % 60).padStart(2, '0');
    const key0 = plan0 ? this.slotOf(this.ctx()) : 'dinner';
    const tm = at !== def0 ? { itinT: { ...(s0.itinT || {}), [key0]: atT }, ...(at >= 1440 ? { itinDay: { ...(s0.itinDay || {}), [key0]: 'tmrw' } } : {}) } : {};
    this.setState({ pollAt: null, ...tm });
    if (this.state.chooseMode === 'plan') {
      const slot = this.slotOf(this.ctx()), T = { extra: '19:00', xq: '18:30', xl: '21:30' }[slot];
      this.setState({ [slot]: { idx, how: 'you' }, stack: ['trips', 'trip'], sel: [] });
      this.after(380, () => this.snack('Added to the plan', this.V()[idx].name + ' · ' + (tm.itinT ? atT : T)));
      this.after(450, () => { this.setState({ freshSlot: slot }); this.scrollTrip(slot + '-row'); });
      this.after(3200, () => this.setState({ freshSlot: null }));
      return;
    }
    this.setState({ phase: 'planned', dinner: { idx, how: 'you' }, stack: ['trips', 'trip'], sel: [], clock: '18:00' });
    this.after(380, () => this.snack('Added to the plan', 'Dinner at ' + this.V()[idx].name + ' · ' + atT));
    this.after(450, () => { this.setState({ dinnerFresh: true }); this.scrollTrip('dinner-row'); });
    this.after(6200, () => this.setState({ dinnerFresh: false }));
    this.schedAD(8500);
  }
  schedAD(ms, raw, resume) { clearTimeout(this.adT); const real = raw ? ms : (ms >= 600 ? ms * (this.state.pace === 'Fast' ? 1 : 1.5) : ms); this.adT = setTimeout(() => this.toAfterDinner(), real); this.timers.push(this.adT); if (!resume) this.adTotal = real; this.setState(s => ({ adEnd: Date.now() + real, adPaused: null, adClock: s.afterDinner ? s.adClock : s.clock })); }
  gapTap = (e) => {
    if (e) e.stopPropagation(); const s = this.state;
    if (s.phase !== 'planned' || s.expAdded) return;
    if (s.afterDinner) {
      clearTimeout(this.fresh1T); clearTimeout(this.adT);
      const byVote = s.dinner && s.dinner.how === 'vote' && s.poll;
      this.setState({ afterDinner: false, dinnerFresh: false, clock: '18:30', adClock: '18:30', adEnd: null, adPaused: null, ...(byVote ? { winner: s.dinner.idx, pollLinger: true } : {}) }, () => { const el = document.querySelector('[data-tu="trip-scroll"]'); if (el) el.scrollTo({ top: 0, behavior: 'smooth' }); });
      this.after(300, () => this.setState({ dinnerFresh: true }));
      this.fresh1T = this.after(3700, () => this.setState({ dinnerFresh: false }));
      this.after(320, () => this.schedAD(9500));
      return;
    }
    if (s.adPaused != null) { this.schedAD(s.adPaused, true, true); return; }
    if (s.adEnd) { clearTimeout(this.adT); this.setState({ adPaused: Math.max(0, s.adEnd - Date.now()) }); }
  };
  toAfterDinner() {
    const s = this.state; if (s.afterDinner || s.expAdded || s.phase !== 'planned') return;
    this.setState(st => ({ afterDinner: true, clock: '21:20', pulse: st.pulse + 1 }));
  }
  toSettle() {
    if (this.state.phase === 'settle' || this.state.phase === 'settled') return;
    const m = t => { const [a, b] = String(t || '').split(':').map(Number); return a * 60 + b; };
    const diff = Math.abs(m('21:47') - m(this.state.clock));
    if (diff > 0 && !this._preSettle && !this.state.pollLive) { this._preSettle = true; this.setState({ clock: '21:47' }); clearTimeout(this.preT); this.preT = setTimeout(() => { this._preSettle = false; this.toSettle(); }, Math.min(1600, 500 + diff * 6) + 200); this.timers.push(this.preT); return; }
    this._preSettle = false;
    const sq = outOf(this.state.owe) < 0.005;
    this.setState(st => ({ bfReady: false, cutPx: null, inRecv: false, phase: 'settle', gotIn: true, heroLabel: 'Settling up', clock: st.pollLive ? st.clock : '21:47', settle: { out: outOf(st.owe), in: inOf(st.owe) }, square: sq, ...(sq ? { gpay: 'done', paid: { ...st.paid, sofia: true } } : {}) }));
    if (sq) this.ariT = this.after(2400, () => this.ariPay());
  }
  dualFlip() { const s = this.state; if (!s.pollLive || s.phase !== 'settle') return; this.setState({ view: s.view === 'poll' ? 'settle' : 'poll' }); }
  toSettled() {
    if (this.state.phase === 'settled' || this.state.allDone) return;
    this.setState(st => ({ allDone: true, inRecv: true, paid: { ...st.paid, eleanor: true } }));
    this.after(4600, () => this.setState({ morph: true }));
    this.after(5260, () => {
      const rc = document.querySelector('[data-tu="rc-card"]'), r0 = rc && rc.getBoundingClientRect();
      this.setState({ phase: 'settled', allDone: false, morph: false, clock: '21:49', owe: 0, snap: true }, () => {
        this.timers.push(setTimeout(() => this.setState({ snap: false }), 80));
        this.timers.push(setTimeout(() => this.setState({ bfReady: true }), 700));
        const bc = document.querySelector('[data-tu="bal-card"]'); if (!bc || !r0) return;
        const r1 = bc.getBoundingClientRect(), sc = this.sc || 1, dy = (r0.top - r1.top) / sc; if (!r1.height || Math.abs(dy) < 0.5) return;
        bc.animate([{ transform: 'translateY(' + dy + 'px)' }, { transform: 'none' }], { duration: 260, easing: 'cubic-bezier(.2,.8,.2,1)' });
      });
    });
  }
  reconcileSplit() {
    const e = this.state.exp; if (!(+e.amt > 0) || splitFit(e).ok) return true;
    const why = splitFit(e).why, all = Object.fromEntries(this.keys().map(k => [k, true]));
    this.setExp({ partOn: false, partAmt: '', partName: '', tab: 'part', poolRest: pool0(), poolPart: pool0(), incRest: all, incPart: { ...all } });
    return false;
  }
  setExp(patch) { this.setState(s => ({ exp: { ...s.exp, ...(typeof patch === 'function' ? patch(s.exp) : patch) } })); }
  key(target, d) {
    const T = target === 'partAmt' && this.state.exp.kpT;
    if (T) {
      const ed = v => { v = v || ''; if (d === 'del') return v.slice(0, -1); if (d === '') return null; if (d === '.') return v.includes('.') ? null : (v || '0') + '.'; if (v.includes('.') && v.split('.')[1].length >= 2) return null; if (v.replace('.', '').length >= (T.mode === 'percent' ? 3 : 6)) return null; return (v === '0' ? '' : v) + d; };
      this.setPool(T.pk, p => { const bag = T.mode === 'amount' ? 'amts' : 'pcts', nv = ed(p[bag][T.k]); if (nv == null) return {}; if (T.mode === 'percent' && +nv > 100) return {}; return { [bag]: { ...p[bag], [T.k]: nv } }; });
      return;
    }
    this.setExp(e => {
      let v = e[target];
      if (d === 'del') v = v.slice(0, -1);
      else if (d === '') return {};
      else if (d === '.') { if (v.includes('.')) return {}; v = (v || '0') + '.'; }
      else { if (v.includes('.') && v.split('.')[1].length >= 2) return {}; if (v.replace('.', '').length >= 6) return {}; const nv = (v === '0' ? '' : v) + d; if (target === 'partAmt' && +nv > (+e.amt || 0)) return {}; v = nv; }
      return { [target]: v };
    });
  }
  saveExpense = () => {
    if (this.state.stack[this.state.stack.length - 1] === 'expense') { if (!this.reconcileSplit()) return; const c0 = calc(this.state.exp); if (c0.amt > 0 && (!c0.A.ok || (this.state.exp.partOn && c0.part > 0 && !c0.B.ok))) { this.push('split'); return; } }
    const s = this.state, c = calc(s.exp);
    if (c.amt <= 0 || !c.A.ok || (s.exp.partOn && !(c.part > 0)) || (s.exp.partOn && c.part > 0 && !c.B.ok)) return;
    let owe = r2(s.owe - (c.amt - c.my)); if (owe < DEMO_MIN) owe = DEMO_OWE;
    this.blurActive();
    const lt = s.dinner && !s.exp.unlinked ? 'Dinner at ' + this.V()[s.dinner.idx].name : ((s.exp.name || '').trim() || 'Expense');
    this.setState({ owe, lastExp: { title: lt, amt: c.amt, my: r2(c.my), shares: Object.fromEntries(Object.keys({ ...c.A.out, ...c.B.out }).map(k => [k, r2((c.A.out[k] || 0) + (c.B.out[k] || 0))])) }, expAdded: s.expAdded || !!s.afterDinner, afterDinner: false, editing: false, stack: ['trips', 'trip'], exp: { ...s.exp, kp: false } });
    const bal = owe > 0.005 ? 'You owe ' + fmt(owe) + ' in total' : owe < -0.005 ? 'You get back ' + fmt(owe) : 'You’re square';
    this.after(380, () => this.snack('Expense added · ' + fmt(c.amt), bal, 'success'));
    if (s.afterDinner && s.phase !== 'vote') this.after(1500, () => this.toSettle());
  };
  confirmPay = () => {
    if (this.state.gpay !== 'idle') return;
    this.setState({ gpay: 'processing' });
    this.after(1100, () => this.setState({ gpay: 'done' }));
    this.after(1900, () => this.setState({ sheet: null, settling: true, payFail: false }));
    this.after(3500, () => this.setState(s => ({ settling: false, paid: { ...s.paid, sofia: true } }), () => this.ariPay()));
  };
  guide(sel, action, fast) {
    const ph = document.querySelector('[data-tu="phone"]'), t = document.querySelector('[data-tu="' + sel + '"]'), d = this.tapEl;
    if (!ph || !t || !d || this.state.vw < 500) { action(); return; }
    const r = ph.getBoundingClientRect(), tr = t.getBoundingClientRect(), sc = this.sc || 1;
    this.guiding = true; this.guideUntil = Date.now() + (fast ? 700 : 2400); const tok = this.gTok || 0, live = () => tok === (this.gTok || 0);
    const cl = parseFloat(d.style.left), ct = parseFloat(d.style.top), has = d.style.opacity === '1' && !isNaN(cl) && !isNaN(ct);
    d.style.transition = 'none'; d.style.opacity = 1; if (!has) { d.style.left = '201px'; d.style.top = '780px'; }
    d.style.boxShadow = '0 0 0 8px rgba(22,0,201,.3), 0 1px 6px rgba(0,0,0,.25)'; d.style.background = 'rgba(22,0,201,.22)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (!live()) return; const mv = Math.round((fast ? 200 : 750) / (this.spd || 1)); d.style.transition = 'left ' + mv + 'ms cubic-bezier(.65,0,.35,1), top ' + mv + 'ms cubic-bezier(.65,0,.35,1)';
      d.style.left = (tr.left + tr.width / 2 - r.left) / sc + 'px'; d.style.top = (tr.top + tr.height / 2 - r.top) / sc + 'px';
    }));
    const T1 = fast ? 230 : 950, T2 = fast ? 330 : 1120, T3 = fast ? 420 : 1500;
    this.after(T1, () => { if (live()) this.onDown(); });
    this.after(T2, () => { if (!live()) return; this.onUp(); action(); });
    this.after(T3, () => { if (!live()) return; this.guiding = false; if (!this.busy) this.ctlDone(); else d.style.transition = ''; });
  }
  jump(step) {
    this.dstep = { invite: 0, dinner: 1, split: 5, settle: 12 }[step];
    this.clearTimers(); this.guiding = false;
    const base = { ...initial(), stack: ['trips', 'trip'], snack: { ...this.state.snack, show: false }, pill: false };
    const dinner = { idx: 0, how: 'vote' };
    const go = (sel, fn) => this.after(450, () => this.guide(sel, fn));
    if (step === 'invite') { this.setState(base); go('g-invite', () => this.setState({ sheet: 'invite', q: '' })); }
    if (step === 'dinner') { this.setState(base); go('g-choose', () => { this.setState({ sel: [], cq: '', chooseMode: 'dinner', chooseFromAdd: false }); this.push('choose'); }); }
    if (step === 'split') { this.setState({ ...base, phase: 'planned', dinner, afterDinner: true, clock: '21:20' }); go('g-expense', () => { this.setState({ exp: freshExp(this.keys()) }); this.push('expense'); }); }
    if (step === 'settle') { this.setState({ ...base, phase: 'planned', dinner, expAdded: true, ...(() => { const keys = [...BASE, 'ren'], ex = { ...freshExp(keys), amt: '250', partOn: true, partAmt: '60', partName: 'Wine', incPart: { ...keyset(keys), nic: false, ren: false } }, c = calc(ex); const shares = Object.fromEntries(keys.map(k => [k, r2((c.A.out[k] || 0) + (c.B.out[k] || 0))])); const le = { title: 'Dinner at ' + VENUES[0].name, amt: c.amt, my: r2(c.my), shares }; return { lastExp: le, owe: -ledger(le).sofia }; })(), renJoined: true, renInvited: true, invited: { ren: true }, clock: '21:40' }); this.after(500, () => this.toSettle()); }
  }
  reset = () => { if (this._morphFin) this._morphFin(); if (this.dragOff) this.dragOff(); this.blurActive(); this.undoFn = null; this.dstep = 0; this.busy = false; this.clearTimers(); this.guiding = false; this.setState({ ...initial(), stack: ['trips', 'trip'], snack: { ...this.state.snack, show: false }, pill: false }); };

  renderVals() {
    const s0 = this.state, h = React.createElement;
    const pv = !!(s0.pollLive && s0.poll && (s0.phase !== 'settle' || s0.view === 'poll'));
    const s = pv ? { ...s0, phase: 'vote', pollLinger: false, heroLabel: s0.pollLabel || 'Vote on dinner' } : s0;
    const dualOn = !!(s0.pollLive && s0.poll && s0.phase === 'settle'), dualOnPoll = dualOn && s0.view === 'poll';
    const demoDone = s.phase === 'settled' || (s.phase === 'settle' && !!s.paid.sofia);
    const full = s.vw < 500, sc = Math.min(1, (s.vh - 140) / 874, (s.vw - (s.vw >= 1000 ? 640 : 40)) / 402);
    this.sc = full ? 1 : sc;
    const ACT = MEMBERS.filter(m => s.renJoined || m.k !== 'ren');
    const top = s.stack[s.stack.length - 1], tf = {};
    ORDER.forEach(n => { const i = s.stack.indexOf(n); tf[n] = n === top ? 'translateX(0)' : i >= 0 ? 'translateX(-30%)' : 'translateX(112%)'; });
    const vOn = s.phase === 'vote' || !!s.pollLinger;
    const active = vOn || (s.phase === 'settle' && !s.morph);
    const doneS = s.phase === 'settle' && !!s.paid.sofia, doneV = vOn && !!(s.poll && s.poll.submitted != null && !s.poll.editing), doneHero = doneS || doneV;
    const HDR = MEMBERS.filter(m => m.k !== 'ren' || s.renJoined || s.renInvited);
    const inviteLast = 16 + (HDR.length + 1) * 52 + HDR.length * 12 <= (full ? s.vw : 402);
    const poll = s.poll && Array.isArray(s.poll.opts) && (s.poll.submitted == null || typeof s.poll.submitted === 'number') ? { votes: {}, ...s.poll } : null;
    const members = HDR.map(m => {
      const pending = m.k === 'ren' && s.renInvited && !s.renJoined;
      let on = false, text = s.heroLabel === 'Settle up' ? 'Paid' : 'Voted';
      if ((s.phase === 'vote' || s.pollLinger) && poll) { on = m.k === 'sofia' ? poll.submitted != null : poll.votes[m.k] != null; text = 'Voted'; }
      else if (s.phase === 'settle') {
        const debt = this.debtors(), balances = ledger(s.lastExp), bl = balances[m.k] || 0;
        const payeeKey = Object.keys(balances).filter(k => k !== 'sofia').reduce((a, k) => balances[k] > balances[a] ? k : a, 'maya');
        if (m.k === 'sofia') { on = !s.morph && !!s.paid.sofia; text = 'Paid'; }
        else if (debt.includes(m.k)) { on = !s.morph && this.paidAt(m.k); text = 'Paid'; }
        else {
          on = !s.morph;
          const received = s.allDone || (s.paid.sofia && m.k === payeeKey);
          text = bl > 0.005 ? (received ? 'Settled' : 'Owed') : 'Even';
        }
      }
      const skip = m.k === 'sofia' && (s.phase === 'vote' || s.pollLinger) && poll && poll.skipped && poll.submitted == null;
      if (skip) { on = true; text = 'Skipped'; }
      if (pending) { on = true; text = 'Added'; }
      return { ...m, filter: pending ? 'grayscale(1) opacity(.45)' : skip ? 'opacity(.45)' : 'none', nameFg: pending || skip ? 'var(--tu-color-text-3)' : 'var(--tu-color-text)', nameW: m.k === 'sofia' ? '600' : '400', badgeFg: pending || skip ? 'var(--tu-color-text-2)' : (text === 'Paid' || text === 'Voted' || text === 'Settled') ? 'var(--tu-done-accent)' : 'var(--tu-color-text-2)', badgeSh: pending ? 'var(--tu-ring)' : 'none', badge: text, badgeO: on ? 1 : 0, badgeTf: on ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.4)', ...(() => { return { chkO: 0, chkSc: 0.4 }; })() };
    });
    const showResults = poll && (poll.submitted != null || poll.skipped) && !poll.editing;
    let pollOpts = [];
    if (poll) {
      const t = this.tally(poll), total = Object.values(t).reduce((a, x) => a + x.length, 0) || 1;
      let order = [...poll.opts];
      if (s.winner != null) order = [s.winner, ...order.filter(i => i !== s.winner).sort((a, b) => t[b].length - t[a].length)];
      const counts = order.map(i => t[i].length), max = Math.max(0, ...counts);
      const leaderI = counts.filter(x => x === max).length === 1 && max > 0 ? order[counts.indexOf(max)] : null;
      const lead = showResults && leaderI != null;
      const pk = k => MEMBERS.find(m => m.k === k);
      const EZ = 'cubic-bezier(.2,.7,.2,1)', par = (this.voteN || 0) % 2 ? 'a' : 'b', closed = s.winner != null, last = order.length - 1;
      pollOpts = order.map((i, idx) => {
        const on = poll.mine === i, c = t[i].length;
        const win = s.winner, isW = win === i, R = showResults, showPh = !R || (closed && isW);
        const lose = closed && !isW, rowH = lose ? '64px' : 'var(--tu-option-h)', subH = lose ? '0px' : '18px', subMax = lose ? '0px' : '40px';
        const fx = { colGap: lose ? '0px' : '4px', rowH, subH, subMax, rows: '1fr', o: 1, padB: idx === last ? '0px' : '8px', lose, nameFg: lose ? 'var(--tu-color-text-3)' : 'var(--tu-color-text)', facesO: lose ? 0.55 : 1, cntFg: lose ? 'var(--tu-color-text-3)' : null,
          rowTr: `grid-template-rows 720ms cubic-bezier(.4,0,.2,1) ${closed ? 220 : 0}ms, opacity 260ms ${EZ} 0ms, padding 720ms cubic-bezier(.4,0,.2,1) ${closed ? 220 : 0}ms`,
          bg: lose ? 'rgba(255,255,255,.45)' : 'var(--tu-option-bg)', bgTr: closed ? `420ms ${EZ} 220ms` : R && on ? `420ms ${EZ} 104ms` : R ? `1ms linear 1664ms` : 'var(--tu-dur-fast)',
          anim: R && !closed ? (on ? `tu-lift-${par} 1170ms ${EZ} both` : `tu-dim-${par} 1170ms ${EZ} both`) : 'none',
          photoTr: closed ? `grid-template-rows 720ms cubic-bezier(.4,0,.2,1) 220ms, opacity 420ms ${EZ} 760ms` : R ? `grid-template-rows 676ms ${EZ} 494ms, opacity 338ms ${EZ} 494ms` : 'grid-template-rows var(--tu-dur-hero) var(--tu-ease-hero), opacity var(--tu-dur) var(--tu-ease)',
          befO: R ? 0 : 1, aftO: R ? 1 : 0, barO: R && !closed ? 1 : 0, winO: closed && isW ? 1 : 0, aftTr: `opacity 300ms ${EZ} ${R && !closed ? 728 : 0}ms`, barTr: `width 640ms ${EZ} ${R ? 832 + idx * 70 : 0}ms`,
          radioO: lose ? 0.6 : R ? 0 : 1, chkO: closed ? (isW ? 1 : 0) : R && on ? 1 : 0, chkSc: (closed ? isW : R && on) ? 1 : .6, chkLag: R ? '104ms' : '0ms', dash: (closed ? isW : R && on) ? 0 : 1, dashTr: (closed ? isW : R && on) ? `stroke-dashoffset 380ms ${EZ} 234ms` : 'none',
          ringTr: `box-shadow ${R ? 420 : 300}ms ${EZ} ${R ? 104 : 0}ms` };
        return { ...this.V()[i], hasMeta: !this.V()[i].custom, dtu: 'opt-' + i, pop: isW ? 'scale(1.04)' : 'scale(1)', z: isW ? 2 : 1, fade: win != null && !isW ? 0.35 : 1, before: !showResults, after: showResults, leading: lead && i === leaderI,
          ...fx, faces: t[i].slice(0, 3).map(pk), count: String(c), countFg: c ? 'var(--tu-color-text)' : 'var(--tu-color-text-2)', cntFg2: lose ? 'var(--tu-color-text-3)' : c ? 'var(--tu-color-text)' : 'var(--tu-color-text-2)', pct: (max ? Math.round(c / max * 100) : 0) + '%',
          ring: isW ? 'var(--tu-ring-selected), 0 14px 32px rgba(22,0,201,.25)' : on ? 'var(--tu-ring-selected)' : 'inset 0 0 0 0 transparent',
          radioBg: lose ? 'transparent' : on ? (this.isDone() ? 'var(--tu-done-accent)' : 'var(--tu-color-accent)') : 'var(--tu-color-surface)', radioSh: lose ? 'inset 0 0 0 1.5px var(--tu-color-text-3)' : on ? 'none' : 'var(--tu-ring-control)', dot: on && !lose ? 'scale(1)' : 'scale(0)',
          imgs: (this.imgInfo(this.V()[i]).imgs || []).map(x => ({ src: x.src || '' })), isCustom: !!this.V()[i].custom,
          photoRows: showPh ? 'minmax(0,1fr)' : 'minmax(0,0fr)', photoO: showPh ? 1 : 0, tileW: '136px', tileH: '76px',
          cursor: showResults ? 'default' : 'pointer', pImg: !showResults && s.vPress === i ? 'var(--tu-press-layer-l)' : 'none', pTf: 'none',
          down: (e) => { if (showResults || (e.target.closest && e.target.closest('[data-strip]'))) return; this.setState({ vPress: i }); },
          glow: 'none', ringIn: closed ? (isW ? 'inset 0 0 0 2px var(--tu-done-accent)' : 'inset 0 0 0 0 transparent') : on && !showResults ? 'var(--tu-ring-selected)' : on && showResults ? 'inset 0 0 0 2px var(--tu-done-accent)' : 'inset 0 0 0 0 transparent', winText: (poll && poll.at >= 1440 ? 'Added to tomorrow · ' : 'Added to tonight · ') + ((this._tm || {}).dinner || (s.itinT || {}).dinner || (poll && poll.at != null && poll.mode !== 'plan' ? String(Math.floor((poll.at % 1440) / 60)).padStart(2, '0') + ':' + String(poll.at % 60).padStart(2, '0') : '20:00')),
          pick: () => { const p = this.state.poll; if (!p || (p.submitted != null && !p.editing)) return; this.setState(st => ({ poll: { ...st.poll, mine: i } })); } };
      });
    }
    const submit = poll && poll.mine != null ? { label: 'Submit vote', bg: 'var(--tu-color-ink)', fg: 'var(--tu-color-on-ink)' } : { label: 'Pick an option', bg: 'var(--tu-color-disabled-bg)', fg: 'var(--tu-color-disabled-fg)' };
    const owe = s.owe;
    const balance = owe > 0.005 ? 'You owe ' + fmt(owe) : owe < -0.005 ? 'You’re owed ' + fmt(owe) : '€0 · You’re even';
    const emph = s.afterDinner && !s.expAdded;
    const AI = this.actInfo(); const tripChip = (s.phase === 'vote' || s.pollLinger) && !AI.done ? { label: AI.label, bg: 'var(--tu-chip-action-bg)', fg: 'var(--tu-chip-action-fg)', dot: true }
      : (s.phase === 'vote' || s.pollLinger) ? { label: AI.label, bg: 'var(--tu-chip-success-bg)', fg: 'var(--tu-chip-success-fg)', dot: false }
      : s.phase === 'settle' && !s.paid.sofia ? { label: 'Settle up · ' + fmt(this.stl().out), bg: 'var(--tu-chip-action-bg)', fg: 'var(--tu-chip-action-fg)', dot: true }
      : s.phase === 'settled' ? { label: 'All settled', bg: 'var(--tu-chip-success-bg)', fg: 'var(--tu-chip-success-fg)', dot: false } : (s.phase === 'settle' && s.paid.sofia) ? { label: AI.label, bg: 'var(--tu-chip-success-bg)', fg: 'var(--tu-chip-success-fg)', dot: false }
      : { label: balance, bg: 'var(--tu-chip-neutral-bg)', fg: 'var(--tu-chip-neutral-fg)', dot: false };
    const venue = i => {
      const on = s.sel.includes(i);
      return { ...this.V()[i], dtu: 'v-' + i, hasMeta: !this.V()[i].custom, ...this.imgInfo(this.V()[i]), isCustom: !!this.V()[i].custom, photo: ((this.state.imgCache || {})[this.V()[i].name] || [])[0] || '', rowBg: on ? 'rgba(22,0,201,.08)' : 'transparent', rowPress: on ? 'rgba(22,0,201,.14)' : 'var(--tu-color-press)', ring: on ? 'var(--tu-ring-selected)' : 'inset 0 0 0 0 transparent',
        boxBg: on ? 'var(--tu-color-accent)' : 'var(--tu-color-surface)', boxSh: on ? 'none' : 'var(--tu-ring-control)', tick: on ? 'scale(1)' : 'scale(0)',
        toggle: () => this.setState(st => ({ sel: st.sel.includes(i) ? st.sel.filter(x => x !== i) : [...st.sel, i] })) };
    };
    const n = s.sel.length;
    const cqT = (s.cq || '').trim(), qn = norm(cqT), allV = this.V();
    const hit = i => !qn || norm(allV[i].name).includes(qn) || norm(allV[i].cuisine).includes(qn);
    const exact = allV.some(x => norm(x.name) === qn);
    const isPlan = s.chooseMode === 'plan', off = isPlan ? VENUES.length : 0, len = isPlan ? PLANS.length : VENUES.length;
    const range = (a, b) => Array.from({ length: b - a }, (_, k) => a + k);
    const ctx = s.afterDinner || s.expAdded ? 'late' : s.extra ? 'quick' : 'sunset';
    const aOff = !isPlan ? 0 : ctx === 'sunset' ? VENUES.length : ctx === 'quick' ? VENUES.length + PLANS.length : VENUES.length + PLANS.length + QUICK.length;
    const vA = qn ? [] : range(aOff, aOff + 3), vB = range(off + (aOff === off ? 3 : 0), off + len).filter(hit), vC = allV.map((_, i) => i).slice(ALL.length).filter(hit);
    const SL = { extra: '19:00', xq: '18:30', xl: '21:30' };
    const toM = t => +t.slice(0, 2) * 60 + +t.slice(3), toT = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
    const DURS = [5, 15, 30, 45, ...Array.from({ length: 24 }, (_, i) => (i + 1) * 60)], durL = d => d < 60 ? d + ' min' : (d / 60) + 'h';
    const atDef = toM(s.chooseMode === 'plan' ? (SL[this.slotOf(this.ctx())] || '19:00') : '20:00'), dur = s.pollDur || 30;
    const atFloor = d => Math.ceil((18 * 60 + d) / 15) * 15, atMax = 18 * 60 + 1440;
    const fD = n === 1 ? 0 : dur, atM = Math.max(atFloor(fD), s.pollAt != null ? s.pollAt : atDef), atMin = atFloor(fD);
    const dayT = m => toT(m % 1440) + (m >= 1440 ? ' (+1)' : '');
    const pollSchedT = dayT(atM), pollDurL = durL(dur);
    const AT_L = Array.from({ length: 96 }, (_, k) => 18 * 60 + 15 * (k + 1));
    this._pw = { AT_L, DURS, atM, dur, atMin, atFloor: d => atFloor(n === 1 ? 0 : d) };
    const pwAt = AT_L.map(m => ({ l: dayT(m), fg: m === atM ? 'var(--tu-color-text)' : m < atMin ? 'var(--tu-color-disabled-fg)' : 'var(--tu-color-text-3)' })), pwDur = DURS.map(d => ({ l: durL(d), fg: d === dur ? 'var(--tu-color-text)' : 'var(--tu-color-text-3)' }));
    const pDur = (s.poll && s.poll.dur) || 30;
    const ck = String(s.clockD || s.clock || '18:00').split(':').map(Number), el = ((ck[0] * 60 + (ck[1] || 0)) - 18 * 60 + 1440) % 1440, left = Math.max(0, pDur - el);
    const leftL = left >= 60 ? Math.floor(left / 60) + 'h' + (left % 60 ? ' ' + (left % 60) + ' min' : '') : left + ' min';
    const showDone = s.pollLinger && s.winner != null;
    const pollCloseL = s.winner != null || left === 0 ? 'Poll closed' : 'Closes in ' + leftL;
    const pollSlotT = s.poll && s.poll.mode === 'plan' ? (SL[s.poll.slot] || '19:00') : '20:00';
    const chooseBtn = n === 0 ? { label: s.chooseMode === 'plan' ? 'Select something to add' : 'Select a place to add', bg: 'var(--tu-color-disabled-bg)', fg: 'var(--tu-color-disabled-fg)' } : n === 1 ? { label: 'Add to Itinerary', bg: 'var(--tu-color-ink)', fg: 'var(--tu-color-on-ink)' } : { label: 'Create poll · ' + n + ' options', bg: 'var(--tu-color-ink)', fg: 'var(--tu-color-on-ink)' };
    const c = calc(s.exp);
    const keys = target => KEYS.map(([d, l]) => ({ dtu: 'k-' + target + '-' + (d || 'x'), d: d === 'del' ? '' : d, l, del: d === 'del', bg: d === '' || d === 'del' || d === '.' ? 'transparent' : 'var(--tu-color-key)', sh: d === '' || d === 'del' || d === '.' ? 'none' : '0 1px 0 rgba(0,0,0,.28)', tap: (e) => { if (e) e.stopPropagation(); this.key(target, d); } }));
    const tab = s.exp.partOn ? s.exp.tab : 'rest', inc = tab === 'part' ? s.exp.incPart : s.exp.incRest, each = tab === 'part' ? c.eachPart : c.eachRest, pk = tab === 'part' ? 'poolPart' : 'poolRest', pool = s.exp[pk] || pool0(), mode = pool.mode || 'equally', al = tab === 'part' ? c.B : c.A, tot = tab === 'part' ? c.part : c.rest;
    const f1 = n => { const t = Math.round(Math.abs(n) * 10) / 10; return '€' + (t % 1 ? t.toFixed(1) : String(t)); }, fa = s.exp.partOn ? f1 : fmt;
    const rows = ACT.map((m, i) => {
      const on = !!inc[m.k];
      return { dtu: 'r-' + m.k, name: m.full, img: m.img, letter: m.letter, bg: m.bg, fg: m.fg, amt: on ? fa(al.out[m.k] || 0) : '—', plain: mode === 'equally' || !on, sh: on && mode === 'shares', am: on && mode === 'amount', pc: on && mode === 'percent',
        showSub: on && (mode === 'shares' || mode === 'percent'), subAmt: fa(al.out[m.k] || 0),
        showTot: !!s.exp.partOn, amtFg: !on ? 'var(--tu-color-text-3)' : s.exp.partOn ? 'var(--tu-color-text-2)' : 'var(--tu-color-text)', tot: (() => { const t = Math.round(((c.A.out[m.k] || 0) + (c.B.out[m.k] || 0)) * 10) / 10; return '€' + (t % 1 ? t.toFixed(1) : String(t)); })(),
        shares: String(pool.shares[m.k] == null ? 1 : pool.shares[m.k]), val: mode === 'amount' ? (pool.amts[m.k] || '') : (pool.pcts[m.k] || ''),
        stop: (e) => { if (e) e.stopPropagation(); },
        ro: !full, inPE: full ? 'auto' : 'none',
        ring: !full && s.exp.kp && s.exp.kpT && s.exp.kpT.k === m.k && s.exp.kpT.pk === pk ? 'var(--tu-ring-focus)' : 'var(--tu-ring-input)',
        openKp: (e) => { if (e) e.stopPropagation(); if (full) return; this.setExp({ kp: true, txt: false, kpT: { pk, k: m.k, mode } }); },
        dec: (e) => { if (e) e.stopPropagation(); this.setPool(pk, p => ({ shares: { ...p.shares, [m.k]: Math.max(1, (p.shares[m.k] == null ? 1 : p.shares[m.k]) - 1) } })); },
        inc: (e) => { if (e) e.stopPropagation(); this.setPool(pk, p => ({ shares: { ...p.shares, [m.k]: Math.min(20, (p.shares[m.k] == null ? 1 : p.shares[m.k]) + 1) } })); },
        set: (e) => { const v = cleanAmt(e.target.value); this.setPool(pk, p => mode === 'amount' ? { amts: { ...p.amts, [m.k]: v } } : { pcts: { ...p.pcts, [m.k]: v.slice(0, 5) } }); },
        boxBg: on ? 'var(--tu-color-accent)' : 'var(--tu-color-surface)', boxSh: on ? 'none' : 'var(--tu-ring-control)', tickTf: on ? 'scale(1)' : 'scale(0)',
        textFg: on ? 'var(--tu-color-text)' : 'var(--tu-color-text-3)', o: on ? 1 : 0.4, line: i < ACT.length - 1 ? 'linear-gradient(var(--tu-color-hairline),var(--tu-color-hairline)) no-repeat right bottom / calc(100% - 76px) 1px' : 'none',
        toggle: (e) => { if (e) e.stopPropagation(); const key = tab === 'part' ? 'incPart' : 'incRest'; this.setExp(ex => ({ [key]: { ...ex[key], [m.k]: !ex[key][m.k] }, kp: false })); } };
    });
    const valid = c.amt > 0 && c.A.ok && !(s.exp.partOn && !(c.part > 0)) && !(s.exp.partOn && c.part > 0 && !c.B.ok);
    const why = (() => {
      if (valid) return '';
      const pn = (s.exp.partName || '').trim() || 'part';
      if (s.exp.partOn && !(c.part > 0)) return 'Enter the ' + pn + ' amount';
      const one = (r, p) => { const md = (p || pool0()).mode, inf = r.info || {}; if (!r.n) return 'Select at least one person'; if (md === 'amount' && Math.abs(inf.left) >= 0.005) return inf.left > 0 ? fmt(inf.left) + ' left to assign' : fmt(-inf.left) + ' over'; if (md === 'percent' && Math.abs(inf.left) >= 0.005) return inf.left > 0 ? r2(inf.left) + '% left to assign' : r2(-inf.left) + '% over'; if (md === 'shares' && !(inf.sum > 0)) return 'Add at least one share'; return ''; };
      const a = one(c.A, s.exp.poolRest), b = s.exp.partOn && c.part > 0 ? one(c.B, s.exp.poolPart) : '';
      return (tab === 'part' ? (b || a) : (a || b)) || 'Save expense';
    })();
    const ai = al.info || {}, adds = 'var(--tu-color-success-ink)', muted = 'var(--tu-color-text-2)';
    const status = mode === 'shares' ? { l: ai.sum + (ai.sum === 1 ? ' share' : ' shares'), r: fmt(ai.per || 0) + ' per share', fg: muted }
      : mode === 'amount' ? { l: fmt(ai.sum || 0) + ' of ' + fmt(tot), r: Math.abs(ai.left) < 0.005 ? 'Adds up' : ai.left > 0 ? fmt(ai.left) + ' left' : fmt(ai.left) + ' over', fg: Math.abs(ai.left) < 0.005 ? adds : 'var(--tu-color-text)' }
      : mode === 'percent' ? { l: (ai.sum || 0) + '% of 100%', r: Math.abs(ai.left) < 0.005 ? 'Adds up' : ai.left > 0 ? r2(ai.left) + '% left' : r2(-ai.left) + '% over', fg: Math.abs(ai.left) < 0.005 ? adds : 'var(--tu-color-text)' } : null;
    const segs = MODES.map(md => { const on = mode === md; return { label: MODE_L[md], bg: on ? 'var(--tu-color-surface)' : 'transparent', sh: on ? '0 1px 2px rgba(0,0,0,.06), 0 2px 6px rgba(0,0,0,.06)' : 'none', fg: on ? 'var(--tu-color-text)' : 'var(--tu-color-text-2)', pick: (e) => { if (e) e.stopPropagation(); this.blurActive(); this.setPool(pk, () => ({ mode: md })); this.setExp({ kp: false, txt: false }); } }; });
    const split = {
      btnL: valid ? 'Save expense' : why, subOn: valid,
      total: fmt(c.amt), partOn: s.exp.partOn, segLine: s.exp.partOn ? '0' : 'var(--tu-divider)', rest: fmt(c.rest), part: fmt(c.part),
      restTabBg: tab === 'rest' ? 'var(--tu-color-surface)' : 'transparent', restTabFg: tab === 'rest' ? 'var(--tu-color-text)' : 'var(--tu-color-text-2)',
      partTabBg: tab === 'part' ? 'var(--tu-color-surface)' : 'transparent', partTabFg: tab === 'part' ? 'var(--tu-color-text)' : 'var(--tu-color-text-2)',
      padB: s.exp.kp || s.exp.txt ? '300px' : '120px', ctaDy: full && s.vvh && typeof window !== 'undefined' && window.innerHeight - s.vvh > 80 ? (window.innerHeight - s.vvh + 40) + 'px' : '0px', cardRadius: s.exp.partOn ? (tab === 'rest' ? '0 var(--tu-radius-l) 0 0' : 'var(--tu-radius-l) var(--tu-radius-l) 0 0') : 'var(--tu-radius-l)',
      tabRows: s.exp.partOn ? '1fr' : '0fr', tabO: s.exp.partOn ? 1 : 0, tabY: s.exp.partOn ? '0px' : '10px', partX: s.exp.partOn ? '0px' : '-60px', plusX: s.exp.partOn ? '0px' : '-40px',
      restAmtFg: tab === 'rest' ? 'var(--tu-color-accent)' : 'var(--tu-color-text-2)', partAmtFg: tab === 'part' ? 'var(--tu-color-accent)' : 'var(--tu-color-text-2)',
      partLabel: (n => n.length > 7 ? n.slice(0, 7).trimEnd() + '…' : n)(s.exp.partName.trim() || 'Part'),
      amtBg: s.exp.kp ? 'var(--tu-color-surface)' : 'var(--tu-color-bg)', nameBg: s.exp.txt ? 'var(--tu-color-surface)' : 'var(--tu-color-bg)',
      showPartFields: s.exp.partOn && tab === 'part', showPartBtn: !s.exp.partOn,
      partAmtText: s.exp.partAmt, partEmpty: !s.exp.partAmt, partFilled: !!s.exp.partAmt,
      amtRing: s.exp.kp && !s.exp.kpT ? 'var(--tu-ring-focus)' : 'var(--tu-ring-input)', partName: s.exp.partName, rows,
      kpTf: s.exp.kp && top === 'split' && !full ? 'translateY(0)' : 'translateY(110%)',
      txtTf: s.exp.txt && top === 'split' && !full ? 'translateY(0)' : 'translateY(110%)',
      kpCaretO: s.exp.kp && !s.exp.kpT ? 1 : 0, kpCaretV: s.exp.kp && !s.exp.kpT ? 'visible' : 'hidden', nameRing: s.exp.txt ? 'var(--tu-ring-focus)' : 'var(--tu-ring-input)',
      sub: s.exp.partOn ? ACT.filter(m => (c.A.out[m.k] || 0) + (c.B.out[m.k] || 0) > 0.004).length + ' people · ' + (ACT.length - c.np) + ' excluded from ' + (s.exp.partName.trim() || 'part') : (mode === 'equally' ? c.nr + ' people · ' + fmt(c.eachRest) + ' each' : c.nr + ' people · by ' + { shares: 'shares', amount: 'amount', percent: 'percentage' }[mode]),
      segs, thumbF: String(MODES.indexOf(mode)), showStatus: !!status, statusL: status ? status.l : '', statusR: status ? status.r : '', statusFg: status ? status.fg : '',
      btnBg: valid ? 'var(--tu-color-ink)' : 'var(--tu-color-disabled-bg)', btnFg: valid ? 'var(--tu-color-on-ink)' : 'var(--tu-color-disabled-fg)'
    };
    const tone = { accent: ['var(--tu-color-ai)', 'var(--tu-color-accent)'], success: ['var(--tu-color-success)', 'var(--tu-color-on-ink)'], neutral: ['var(--tu-color-fill)', 'var(--tu-color-text)'], info: ['var(--tu-color-fill)', 'var(--tu-color-text-2)'] }[s.snack.tone] || [];
    const dinnerName = s.dinner ? this.V()[s.dinner.idx].name : '', gp = s.gpay;
    const plusIcon = h('span', { style: { width: 'var(--tu-icon-m)', height: 'var(--tu-icon-m)', background: 'currentColor', WebkitMask: 'url(tripup-ui/assets/icons/plus.svg) center/contain no-repeat', mask: 'url(tripup-ui/assets/icons/plus.svg) center/contain no-repeat' } });
    const addExpBtn = h('div', {
      key: emph ? 'e' + s.pulse : 'n', 'data-tu': 'g-expense', onPointerDown: () => this.setState({ expP: true }), onPointerUp: () => this.setState({ expP: false }), onPointerLeave: () => { if (this.state.expP) this.setState({ expP: false }); }, onPointerCancel: () => this.setState({ expP: false }), onClick: (e) => { if (e && e.stopPropagation) e.stopPropagation(); this.focusAmt(); this.setState({ exp: freshExp(this.keys()) }); this.push('expense'); },
      style: { position: 'relative', height: 'var(--tu-btn-s-h)', padding: '0 var(--tu-btn-s-pad-x)', borderRadius: 999, border: '1px solid ' + (emph ? 'var(--tu-color-ink)' : 'var(--tu-color-line)'), background: emph ? 'var(--tu-color-ink)' : 'var(--tu-color-surface)', color: emph ? 'var(--tu-color-on-ink)' : 'var(--tu-color-text)', display: 'flex', alignItems: 'center', gap: 'var(--tu-btn-gap)', font: 'var(--tu-type-strong)', whiteSpace: 'nowrap', cursor: 'pointer', flex: 'none', transform: s.expP ? 'scale(var(--tu-press-scale))' : 'none', backgroundImage: s.expP ? (emph ? 'var(--tu-press-layer-ink)' : 'var(--tu-press-layer)') : 'none', transition: 'background var(--tu-dur), color var(--tu-dur), transform var(--tu-dur-fast)', animation: 'none' }
    }, h('span', { 'aria-hidden': 'true', style: { position: 'absolute', top: -14, bottom: -14, left: -16, right: -16, borderRadius: 999 } }), plusIcon, 'expense');
    const vis = this.itinVisNow(), iorder = (s.itin && s.itin.order) || ITIN0, ed = !!s.editing;
    const TD = s.itinDay || {}, timed = iorder.filter(k => vis[k] && BASE_T[k] && TD[k] !== 'tmrw'), tsorted = timed.map(k => (s.itinT || {})[k] || BASE_T[k]).sort(), tm = { ...BASE_T };
    timed.forEach((k, i) => { tm[k] = tsorted[i]; });
    Object.keys(TD).forEach(k => { if (TD[k] === 'tmrw') tm[k] = (s.itinT || {})[k] || '05:30'; });
    this._tm = tm;
    const R = Object.fromEntries(ITEMS.map(k => [k, { time: tm[k] || '', bg: s.drag === k ? 'var(--tu-color-surface)' : 'transparent', timeFg: s.editing ? 'var(--tu-color-accent)' : 'var(--tu-color-text-2)' }]));
    const ord = Object.fromEntries(iorder.map((k, i) => [k, (s.itinDay || {})[k] === 'tmrw' ? '101' : String(10 + i)]));
    const st0 = this.stl();
    const who = k => { const m = MEMBERS.find(x => x.k === k); return { name: m.name, img: m.img, letter: m.letter, bg: m.bg, fg: m.fg }; };
    const bal = ledger(s.lastExp);
    const payK = Object.keys(bal).filter(k => k !== 'sofia').reduce((a, k) => bal[k] > bal[a] ? k : a, 'maya'), payM = MEMBERS.find(m => m.k === payK);
    const payee = { k: payK, name: payM.name, full: payM.name + (payM.last ? ' ' + payM.last : ''), img: payM.img };
    this._payee = payee;
    const paidK = k => k === 'sofia' ? !!s.paid.sofia : k === 'nic' ? !!s.gotIn : !!s.paid[k];
    const tr = Object.keys(bal).filter(k => k !== payK && bal[k] < -0.005).sort((a, b) => a === 'sofia' ? -1 : b === 'sofia' ? 1 : bal[a] - bal[b]).map(k => [k, payK, k === 'sofia' ? st0.out : r2(-bal[k]), paidK(k)]);
    this._ariOwes = r2(-bal.nic);
    const whoRows = tr.map(([a, b, amt, paid], i) => ({ a: who(a), b: who(b), amt: fmt(amt), paid, amtFg: paid ? 'var(--tu-color-text-2)' : 'var(--tu-color-text)', line: i < tr.length - 1 ? 'linear-gradient(var(--tu-color-hairline),var(--tu-color-hairline)) no-repeat right bottom / calc(100% - 32px) 1px' : 'none' }));
    const txl = [...TX, ...(s.lastExp ? [{ t: s.lastExp.title, who: 'You', paid: s.lastExp.amt, share: s.lastExp.my, day: 'Today' }] : [])].reverse();
    let net = 0;
    const txns = txl.map((x, i) => { net += (x.who === 'You' ? x.paid : 0) - x.share; return { title: x.t, sub: 'Paid by ' + (x.who === 'You' ? 'you' : x.who) + ' · ' + x.day, total: fmt(x.paid), share: 'your share ' + fmt(x.share), exp: true, settle: false, iconBg: 'var(--tu-color-bg-neutral)', bg: 'transparent', titleFg: 'var(--tu-color-text)', mar: '0 -12px' }; });
    if (s.paid.sofia && (s.phase === 'settle' || s.phase === 'settled')) { const stDone = s.phase === 'settled' || s.allDone; txns.unshift({ exp: false, settle: true, iconBg: 'var(--tu-done-accent)', bg: 'var(--tu-done-card)', titleFg: 'var(--tu-color-text)', mar: '0 -12px 8px', title: stDone ? 'Everyone settled up' : 'You settled up', sub: 'You paid ' + ((this._payee || {}).name || 'Maya') + (s.outside ? ' outside the app' : ' with Google Pay') + ' · Today', total: fmt(st0.out), share: '', line: 'var(--tu-divider)' }); }
    net = r2(net);
    const bsDone = s.phase === 'settled' || s.allDone || (s.phase === 'settle' && !!s.paid.sofia);
    const bs = { label: owe > 0.005 ? 'You owe' : owe < -0.005 ? 'You’re owed' : 'You’re even', amt: Math.abs(owe) > 0.005 ? fmt(owe) : '€0',
      btn: bsDone ? 'All settled' : 'Settle up', btnBg: bsDone ? 'var(--tu-color-disabled-bg)' : 'var(--tu-color-ink)', btnFg: bsDone ? 'var(--tu-color-disabled-fg)' : 'var(--tu-color-on-ink)',
      cursor: bsDone ? 'default' : 'pointer', press: bsDone ? '' : 'transform:scale(var(--tu-press-scale));background-image:var(--tu-press-layer-ink)' };
    return {
      v: { bs,
        frameW: full ? '100vw' : 402 * sc + 'px', frameH: full ? '100dvh' : 874 * sc + 'px', phoneW: full ? '100vw' : '402px', phoneH: full ? '100dvh' : '874px',
        frameScale: full ? 'none' : 'scale(' + sc + ')', frameRadius: full ? '0' : 'var(--tu-radius-device)',
        frameShadow: full ? 'none' : '0 0 0 10px #0B0B0C, 0 0 0 11px #3A3A3D, 0 40px 80px rgba(0,0,0,.5)',
        resetPos: full ? 'fixed' : 'relative', resetLeft: full ? '10px' : 'auto', resetBottom: full ? '10px' : 'auto',
        addW: s.addOpen ? '370px' : '152px', addH: s.addOpen ? '296px' : 'var(--tu-btn-float-h)', addB: s.addOpen ? '16px' : '22px', addR: '22px', addRowR: full ? '20px' : 'calc(var(--tu-radius-device) - 24px)',
        addLine: s.addOpen ? 'var(--tu-color-line-subtle)' : 'var(--tu-color-line)', addCursor: s.addOpen ? 'default' : 'pointer', addPress: s.addOpen ? '' : 'transform:translateX(-50%) scale(var(--tu-press-scale));background-image:var(--tu-press-layer)',
        addPillO: s.addOpen ? 0 : 1, addMenuO: s.addOpen ? 1 : 0, addMenuTf: s.addOpen ? 'translateY(0)' : 'translateY(16px)', addMenuPE: s.addOpen ? 'auto' : 'none', addMenuDelay: s.addOpen ? '120ms' : '0ms',
        addScrimO: s.addOpen ? 1 : 0, addScrimPE: s.addOpen ? 'auto' : 'none',
        phoneBg: s.sheet === 'gpay' ? '#000' : 'var(--tu-color-bg)',
        demoDoneUnused: null,
        showPanel: !full && s.vw >= 1000, fullReset: !(!full && s.vw >= 1000), full, mockKbDisplay: full || s.exp.nameFocus ? 'none' : 'grid',
        resetBg: demoDone ? '#fff' : 'transparent', resetFg: demoDone ? '#111' : 'rgba(255,255,255,.75)', resetLabel: 'Reset demo (Esc)',
        resetBgFull: demoDone ? '#fff' : 'rgba(0,0,0,.5)', resetFgFull: demoDone ? '#111' : '#fff',
        ...(() => {
          const counting = s.phase === 'planned' && s.dinner && !s.afterDinner && !s.expAdded && !!s.adEnd, passed = s.afterDinner || s.expAdded || s.phase === 'settle' || s.phase === 'settled';
          const paused = counting && s.adPaused != null, rewind = s.phase === 'planned' && s.afterDinner && !s.expAdded;
          const left = counting ? Math.max(0, Math.ceil((paused ? s.adPaused : s.adEnd - Date.now()) / 1000)) : 0;
          return { gapPill: counting || rewind, gapPlain: !(counting || rewind) && passed, gapLabel: counting ? (() => { const tot = this.adTotal || 12000, rem = paused ? s.adPaused : Math.max(0, s.adEnd - Date.now()), p = Math.min(1, Math.max(0, 1 - rem / tot)); const [hh, mm] = String(s.adClock || s.clock || '18:00').split(':').map(Number), a = hh * 60 + mm, b = 21 * 60 + 20, v = Math.round(a + (b - a) * p); return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0'); })() : passed ? '21:20' : '',
            gapIcon: 'tripup-ui/assets/icons/' + (rewind ? 'replay' : paused ? 'play' : 'pause') + '.svg', gapTitle: rewind ? 'Rewind to before dinner ends' : paused ? 'Resume' : 'Pause' };
        })(),
        steps: (() => {
          const done = { invite: !!s.renJoined, dinner: !!s.dinner, split: !!s.expAdded, settle: s.phase === 'settled' };
          const here = s.sheet === 'invite' ? 'invite' : (top === 'choose' || s.phase === 'vote') ? 'dinner' : (top === 'expense' || top === 'split' || (s.afterDinner && !s.expAdded)) ? 'split' : (s.phase === 'settle') ? 'settle' : null;
          const keys = ['invite', 'dinner', 'split', 'settle'];
          const cur = (here && !done[here]) ? here : keys.find(k => !done[k]);
          const meta = { invite: ['Add Ren', 'Ren added', 'Add a friend mid-trip'], dinner: ['Choose dinner', 'Dinner decided', 'Pick places, the group votes'], split: ['Split the bill', 'Expense added', 'Add dinner, split part of it'], settle: ['Settle up', 'Everyone’s settled', 'One payment each'] };
          return keys.map((k, i) => {
            const d = done[k] && cur !== k, on = cur === k;
            return { gap: k === 'split', n: String(i + 1), label: meta[k][0], status: d ? meta[k][1] : on ? 'You’re here' : meta[k][2], done: d, notDone: !d, go: () => this.jump(k),
              bg: on ? 'rgba(255,255,255,.12)' : 'transparent', fg: d ? 'rgba(255,255,255,.6)' : '#fff',
              numBg: d ? 'var(--tu-color-success)' : on ? 'var(--tu-color-accent)' : 'transparent', numRing: d || on ? 'none' : 'inset 0 0 0 1.5px rgba(255,255,255,.3)', numFg: '#fff' };
          });
        })(),
        timeL: (s.clockD || s.clock) + (s.timeOff ? ' · paused' : ''), timeIcon: 'tripup-ui/assets/icons/' + (s.timeOff ? 'play' : 'pause') + '.svg', timeBg: s.timeOff ? '#FF9F0A' : 'rgba(255,255,255,.12)', timeFg: s.timeOff ? '#1C1C1F' : '#fff', paceSegUnused: ['Slow', 'Fast'].map(p => ({ label: p, bg: (s.pace || 'Slow') === p ? '#fff' : 'transparent', fg: (s.pace || 'Slow') === p ? '#111' : 'rgba(255,255,255,.75)', pick: () => this.setState({ pace: p }) })),
        balLayer: s.balP ? 'var(--tu-press-layer-l)' : 'none', balTf: s.balP ? 'scale(var(--tu-press-scale-l))' : 'none', tf, clock: s.clockD || s.clock, statusFg: s.sheet === 'gpay' ? '#fff' : 'var(--tu-color-text)', homeBar: s.sheet === 'gpay' ? '#fff' : 'var(--tu-color-ink)',
        stack3: [MEMBERS[0], MEMBERS[1], MEMBERS[2]], moreN: '+' + (ACT.length - 3), tripChip, caretO: top === 'expense' && !s.exp.nameFocus ? 1 : 0, caretV: top === 'expense' && !s.exp.nameFocus ? 'visible' : 'hidden', morphDur: s.flying || s.phase === 'planned' ? '700ms' : 'var(--tu-dur-slow)', inviteBg: DASH,
        heroDur: s.slowHero ? '1200ms' : '820ms', heroO: active ? 1 : 0, rcVis: s.phase === 'settle' ? 'visible' : 'hidden', rcR: s.morph ? 'var(--tu-radius-l)' : 'var(--tu-receipt-radius) var(--tu-receipt-radius) 0 0', rcPad: s.morph ? '12px 12px 12px var(--tu-pad-card)' : s.paid.sofia ? 'var(--tu-pad-card) var(--tu-pad-card) 12px' : 'var(--tu-pad-card) var(--tu-pad-card) 24px', rcGap: s.morph ? '0px' : '16px', rcBd: s.morph ? 'var(--tu-color-line-subtle)' : 'transparent', rcSh: s.morph ? 'var(--tu-shadow-card)' : 'none', rcRows: s.morph ? '0fr' : '1fr', balRows2: s.morph ? '1fr' : '0fr', morphO: s.morph ? 1 : 0, rcO: s.morph ? 0 : 1, edgeO2: s.morph ? 0 : 1, edgeH: s.morph ? '0px' : 'var(--tu-receipt-edge-h)', sufO2: active && !(s.phase === 'settle' && s.paid.sofia) ? 1 : 0, heroShTr: active ? 'opacity var(--tu-dur-hero) var(--tu-ease-hero), bottom var(--tu-dur-hero) var(--tu-ease-hero)' : 'opacity 90ms linear', heroR: vOn ? 'calc(var(--tu-radius-xl) + var(--tu-gutter))' : 'var(--tu-radius-xl)', titleSize: active ? 'var(--tu-trip-title-active)' : 'var(--tu-trip-title)', inviteOrder: inviteLast ? 99 : -1, suffixH: active ? '48px' : '0px', sufTf: active ? 'scale(1)' : 'scale(0.85)', sufTr: active ? 'max-height 460ms var(--tu-ease-hero) 0ms, opacity 260ms var(--tu-ease-hero) 240ms, transform 260ms var(--tu-ease-hero) 240ms' : 'opacity 200ms var(--tu-ease-hero) 0ms, transform 200ms var(--tu-ease-hero) 0ms, max-height 460ms cubic-bezier(.4,0,.2,1) 200ms', heroLabel: this.actInfo().label, liveOn: !this.actInfo().done, liveOff: this.actInfo().done,
        heroAnim: doneV && !(s.winner != null) ? `tu-hue-${(this.voteN || 0) % 2 ? 'a' : 'b'} 1170ms cubic-bezier(.2,.7,.2,1) 494ms both` : 'none', voteBreath: doneV && !(s.winner != null) ? `tu-breath-${(this.voteN || 0) % 2 ? 'a' : 'b'} 1050ms cubic-bezier(.2,.7,.2,1) 494ms both` : 'none',
        doneLag: doneHero ? '470ms' : '0ms', cardTr: doneHero ? '850ms cubic-bezier(.2,.7,.2,1) 470ms' : 'var(--tu-dur-fast)', heroBg: doneHero ? 'var(--tu-done-bg)' : 'var(--tu-gradient-action)', heroAcc: doneHero ? 'var(--tu-done-accent)' : 'var(--tu-color-accent)', cardBg: doneHero ? 'var(--tu-done-card)' : 'var(--tu-color-ai)', barFg: doneHero ? 'var(--tu-done-accent)' : 'var(--tu-color-accent)',
        confirming: false, settling: !!s.settling && !s.paid.sofia, payFail: !!s.payFail && !s.settling && !s.paid.sofia, canPay: !s.settling && !s.payFail, linksO: s.settling ? 0.4 : 1, linksPE: s.settling ? 'none' : 'auto', offO: s0.offOn ? 1 : 0, offDy: s0.offOn ? '0px' : '-6px', offL: s0.offL || '', dualOn, dualL: dualOnPoll ? '1/2' : '2/2', dualTf: dualOnPoll ? 'none' : 'rotate(180deg)', dualSwitch: (e) => { if (e) e.stopPropagation(); this.dualFlip(); }, heroDown: (e) => { if (!this.state.pollLive || this.state.phase !== 'settle') return; if (e.target.closest && e.target.closest('[data-strip],[data-pw]')) return; this._sw = { x: e.clientX, y: e.clientY }; }, heroUp: (e) => { const a = this._sw; this._sw = null; if (!a || !this.state.pollLive || this.state.phase !== 'settle') return; const dx = e.clientX - a.x, dy = e.clientY - a.y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) this.setState({ view: dx < 0 ? 'settle' : 'poll' }); }, progOn: false, prog: this.keys().filter(k => this.paidAt(k)).length + ' of ' + this.keys().length, outside: !!s.outside && !!s.paid.sofia, notOutside: !(s.outside && s.paid.sofia), settledCount: this.keys().filter(k => s.paid[k]).length + ' of ' + this.keys().length + ' settled', payConfL: 'You paid ' + payee.name + (s.outside ? ' ' + fmt(st0.out) : ''), payConfSubUnused: '', payConfSub: (s.outside ? 'Outside the app' : 'Google Pay') + ' · Today 21:47', payConfAmt: fmt(st0.out), inL: 'Eleanor', inStatus: s.inRecv ? 'Paid' : 'Waiting to pay', inFg: s.inRecv ? 'var(--tu-done-accent)' : 'var(--tu-color-text-2)', inAmt: '', inAmtFg: s.inRecv ? 'var(--tu-done-accent)' : 'var(--tu-color-text-2)',
        undoOutside: () => { clearTimeout(this.ariT); this.setState(st => ({ outside: false, gpay: 'idle', paid: { ...st.paid, sofia: false } })); }, titleColor: active ? 'var(--tu-color-text)' : 'var(--tu-color-text)',
        members, voteRows: vOn ? '1fr' : '0fr', voteO: vOn ? 1 : 0, voteDy: vOn ? '0px' : '-8px', voteDelay: '0ms', voteODelay: vOn ? '140ms' : '0ms',
        settleO: s.phase === 'settle' ? 1 : 0, settleDy: s.phase === 'settle' ? '0px' : '8px', settleDelay: '0ms', settleODelay: s.phase === 'settle' ? '140ms' : '0ms', settleTr: s.snap ? 'none' : 'grid-template-rows var(--tu-dur-hero) var(--tu-ease-hero),margin var(--tu-dur-hero) var(--tu-ease-hero)', balTr: s.snap ? 'transform 120ms cubic-bezier(.2,.7,.2,1)' : 'margin var(--tu-dur-hero) var(--tu-ease-hero),transform 120ms cubic-bezier(.2,.7,.2,1)', settleRows: s.phase === 'settle' ? '1fr' : '0fr', heroPadB: s.phase === 'settle' ? '0px' : vOn ? '0px' : active ? '8px' : '0px', heroCut: s.morph ? '100%' : s.phase === 'settle' ? (s.paid.sofia ? (s.cutPx ? s.cutPx + 'px' : 'var(--tu-receipt-hero-end-done)') : (s.cutPxA ? s.cutPxA + 'px' : 'var(--tu-receipt-hero-end)')) : '0px', settleMb: s.phase === 'settle' ? '-40px' : '0px',
        balDisp: s.phase === 'settle' ? 'none' : 'flex', balMt: s.phase === 'settle' ? (this.props.receiptGap ?? 20) + 'px' : 'var(--tu-gap-section)',
        pollOpts, submit, showSubmit: !showResults, subFloatO: s.subFloat ? 1 : 0, subFloatPE: s.subFloat ? 'auto' : 'none', subFloatDy: s.subFloat ? '0px' : '100%', subFloatHidden: s.subFloat ? 'false' : 'true', showChange: (!!showResults) && s.winner == null, showDone,
        payTo: (() => { const b = ledger(s.lastExp), ns = HDR.filter(m => m.k !== 'sofia' && b[m.k] > 0.005).map(m => m.name); const L = ns.length ? ns : ['Maya']; return L.length > 1 ? L.slice(0, -1).join(', ') + ' and ' + L[L.length - 1] : L[0]; })(), payVerb: s.paid.sofia ? 'You paid' : 'You pay', ...((this.props.payCard ?? 'B') === 'B' ? { amtFont: '700 30px/36px var(--tu-font-rounded)', infoO: 0.3 } : { amtFont: 'var(--tu-type-money-l)', infoO: 1 }), oweLabel: this.stl().out < 1 ? '€' + this.stl().out.toFixed(2) : fmt(this.stl().out), oweExact: '€' + this.stl().out.toFixed(2),
        incomingLine: s.gotIn ? 'Ari paid you ' + fmt(this.stl().in) : 'Ari pays you ' + fmt(this.stl().in) + ' · pending', notPaid: !s.paid.sofia, didPay: !!s.paid.sofia,
        esTf: s.es ? 'translateX(4px)' : 'translateX(0)', vaTf: s.va ? 'translateX(4px)' : 'translateX(0)',
        balance,
        bfRows: s.phase === 'settled' && s.bfReady && !s.bfHidden ? '1fr' : '0fr', bfO: s.phase === 'settled' && s.bfReady && !s.bfHidden ? 1 : 0,
        suggRows: s.phase === 'plan' && !s.suggHidden ? '1fr' : '0fr', suggO: s.phase === 'plan' && !s.suggHidden ? 1 : 0,
        dinnerRows: s.dinner && !s.afterDinner && !s.expAdded ? '1fr' : '0fr', dinnerTf: s.dinner && (s.afterDinner || s.expAdded) ? 'translateY(-36px)' : 'translateY(0)', dinnerO: s.dinner && (s.afterDinner || s.expAdded) ? 0 : 1,
        ...(() => { const gone = !!(s.dinner && (s.afterDinner || s.expAdded)); return gone
          ? { dinnerRowTr: 'transform 1100ms cubic-bezier(.45,0,.25,1), opacity 1000ms cubic-bezier(.4,0,.6,1) 100ms', dinnerRowsTr: 'grid-template-rows 900ms cubic-bezier(.45,0,.25,1) 300ms' }
          : { dinnerRowTr: 'transform var(--tu-dur-hero) var(--tu-ease-hero), opacity var(--tu-dur-hero) var(--tu-ease-hero)', dinnerRowsTr: 'grid-template-rows var(--tu-dur-hero) var(--tu-ease-hero)' }; })(), dinnerAnim: s.dinnerFresh ? (s.fresh2 ? 'tu-arrive2' : 'tu-arrive') + ' 3300ms cubic-bezier(.4,0,.2,1) 450ms 1 both' : 'none',
        dinnerTitle: 'Dinner at ' + dinnerName, dinnerSub: s.dinner && s.dinner.how === 'vote' ? 'Vote decision' : 'Added by you',
        venuesA: vA.map((i, k) => ({ ...venue(i), srcIcon: k < 2 ? 'tripup-ui/assets/maps-16.svg' : 'tripup-ui/assets/chatgpt.svg', source: k < 2 ? 'Saved in Lisbon list' : 'Suggested by ChatGPT' })), venuesB: vB.map(venue), venuesC: vC.map(venue), showA: vA.length > 0, showB: vB.length > 0, showC: vC.length > 0, pollDurL, atDnO: atM - 15 >= atMin ? 1 : 0.35, atUpO: atM + 15 <= atMax ? 1 : 0.35, durDnO: DURS.indexOf(dur) > 0 ? 1 : 0.35, durUpO: DURS.indexOf(dur) < DURS.length - 1 ? 1 : 0.35, pwAt, pwDur, chooseBtn, pollSchedT, pollCloseL, pollSlotT, pollInfoRows: n >= 1 ? '1fr' : '0fr', pollInfoO: n >= 1 ? 1 : 0, pollDurRows: n >= 2 ? '1fr' : '0fr', pollDurO: n >= 2 ? 1 : 0,  cqTf: s.cqHide && !s.cqFocus && !s.cq ? 'translateY(-100%)' : 'none', cqO: s.cqHide && !s.cqFocus && !s.cq ? 0 : 1, chooseHdrSh: s.cqUp && !(s.cqHide && !s.cqFocus && !s.cq) ? '0 1px 0 var(--tu-color-line-subtle)' : 'none', chooseTitleSh: s.cqUp && s.cqHide && !s.cqFocus && !s.cq ? '0 1px 0 var(--tu-color-line-subtle)' : 'none',
        chooseTitle: s.chooseMode === 'plan' || s.chooseFromAdd ? 'Add a plan' : 'Choose options for Dinner', cqPh: s.chooseMode === 'plan' ? 'Search things to do or write your own' : 'Search places or write your own', planWhy: s.chooseMode === 'plan' && !cqT, planWhyText: ctx === 'late' ? 'Dinner’s done and drinks start at 22:00. Somewhere close by for the hour in between.' : ctx === 'quick' ? 'You’re catching the sunset at 19:00. Something quick nearby until then.' : 'Sunset is at 19:24 and you’re free until dinner. A few spots to catch it from.',
        extraRows: s.extra && !(s.afterDinner || s.expAdded) ? '1fr' : '0fr', extraTf: s.extra && (s.afterDinner || s.expAdded) ? 'translateY(-60%)' : 'translateY(0)', extraO: s.extra && (s.afterDinner || s.expAdded) ? 0 : 1, extraAnim: s.freshSlot === 'extra' ? (s.fresh2 ? 'tu-arrive2' : 'tu-arrive') + ' 3300ms cubic-bezier(.4,0,.2,1) 450ms 1 both' : 'none', extraTitle: s.extra ? this.V()[s.extra.idx].name : '', extraSub: s.extra && s.extra.how === 'vote' ? 'Vote decision' : 'Added by you',
        xqRows: s.xq && !(s.afterDinner || s.expAdded) ? '1fr' : '0fr', xqTf: s.xq && (s.afterDinner || s.expAdded) ? 'translateY(-60%)' : 'translateY(0)', xqO: s.xq && (s.afterDinner || s.expAdded) ? 0 : 1, xqAnim: s.freshSlot === 'xq' ? (s.fresh2 ? 'tu-arrive2' : 'tu-arrive') + ' 3300ms cubic-bezier(.4,0,.2,1) 450ms 1 both' : 'none', xqTitle: s.xq ? this.V()[s.xq.idx].name : '', xqSub: s.xq && s.xq.how === 'vote' ? 'Vote decision' : 'Added by you',
        xlRows: s.xl && !false ? '1fr' : '0fr', xlTf: s.xl && false ? 'translateY(-60%)' : 'translateY(0)', xlO: s.xl && false ? 0 : 1, xlAnim: s.freshSlot === 'xl' ? (s.fresh2 ? 'tu-arrive2' : 'tu-arrive') + ' 3300ms cubic-bezier(.4,0,.2,1) 450ms 1 both' : 'none', xlTitle: s.xl ? this.V()[s.xl.idx].name : '', xlSub: s.xl && s.xl.how === 'vote' ? 'Vote decision' : 'Added by you',
        cq: s.cq || '', cqHas: !!s.cq, cqTrim: cqT, showAddOwn: !!cqT && !exact, cqRing: s.cqFocus ? 'var(--tu-ring-focus)' : 'var(--tu-ring-input)',
        footPad: n === 1 ? '20px' : '12px', hintRows: n === 1 ? '1fr' : '0fr', hintO: n === 1 ? 1 : 0,
        linked: !!s.dinner && !s.exp.unlinked, showExpName: !s.dinner || !!s.exp.unlinked, expName: s.exp.name || '', expTitle: 'Dinner at ' + dinnerName,
        amtText: s.exp.amt, amtEmpty: !s.exp.amt, amtFilled: !!s.exp.amt, amtColor: s.exp.amt ? 'var(--tu-color-text)' : 'var(--tu-color-text-3)', amtReadyO: c.amt > 0 ? 1 : 0.4, eqBg: (c.amt > 0 ? 1 : 0.4) === 1 ? 'var(--tu-color-surface)' : 'var(--tu-color-disabled-bg)', eqFg: (c.amt > 0 ? 1 : 0.4) === 1 ? 'var(--tu-color-text)' : 'var(--tu-color-disabled-fg)', eqBd: (c.amt > 0 ? 1 : 0.4) === 1 ? 'var(--tu-color-outline)' : 'transparent',
        expBtn: c.amt > 0 ? { bg: 'var(--tu-color-ink)', fg: 'var(--tu-color-on-ink)' } : { bg: 'var(--tu-color-disabled-bg)', fg: 'var(--tu-color-disabled-fg)' },
        keysAmt: keys('amt'), keysPart: keys('partAmt'), split,
        ...(() => { const e = s.exp, fit = splitFit(e), cu = splitCustom(e) && (fit.ok || !(c.amt > 0)), m = e.poolRest ? e.poolRest.mode : 'equally';
          const lbl = !cu ? 'equally' : e.partOn || m === 'equally' ? 'unequally' : 'by ' + { shares: 'shares', amount: 'amount', percent: 'percent' }[m];
          const sub = !cu || !(c.amt > 0) ? '' : split.sub;
          return { expLabel: c.amt > 0 ? 'Save expense' : 'Enter an amount', eqLabel: lbl, expSubOn: !!sub, expSub: sub, expBtnH: sub ? 'var(--tu-btn-l-h)' : 'var(--tu-btn-h)' }; })(),
        kbRows: [
          { pad: '0', keys: TXT[0].split('').map(l => ({ l: s.exp.shift ? l.toUpperCase() : l, flex: '1', bg: 'var(--tu-color-key)', tap: (e) => { if (e) e.stopPropagation(); this.setExp(ex => ({ partName: ex.partName + (ex.shift ? l.toUpperCase() : l), shift: false })); } })) },
          { pad: '0 18px', keys: TXT[1].split('').map(l => ({ l: s.exp.shift ? l.toUpperCase() : l, flex: '1', bg: 'var(--tu-color-key)', tap: (e) => { if (e) e.stopPropagation(); this.setExp(ex => ({ partName: ex.partName + (ex.shift ? l.toUpperCase() : l), shift: false })); } })) },
          { pad: '0', keys: [{ l: '⇧', flex: '1.4', bg: s.exp.shift ? 'var(--tu-color-key)' : '#B3B7BF', tap: (e) => { if (e) e.stopPropagation(); this.setExp(ex => ({ shift: !ex.shift })); } }, ...TXT[2].split('').map(l => ({ l: s.exp.shift ? l.toUpperCase() : l, flex: '1', bg: 'var(--tu-color-key)', tap: (e) => { if (e) e.stopPropagation(); this.setExp(ex => ({ partName: ex.partName + (ex.shift ? l.toUpperCase() : l), shift: false })); } })), { l: '⌫', flex: '1.4', bg: '#B3B7BF', tap: (e) => { if (e) e.stopPropagation(); this.setExp(ex => ({ partName: ex.partName.slice(0, -1) })); } }] },
          { pad: '0', keys: [{ l: '123', flex: '1.3', bg: '#B3B7BF', tap: (e) => { if (e) e.stopPropagation(); this.setExp({ txt: false, kp: true }); } }, { l: 'space', flex: '5', bg: 'var(--tu-color-key)', tap: (e) => { if (e) e.stopPropagation(); this.setExp(ex => ({ partName: ex.partName + ' ' })); } }, { l: 'done', flex: '1.6', bg: '#B3B7BF', tap: (e) => { if (e) e.stopPropagation(); this.setExp({ txt: false }); } }] }
        ],
        scrimO: s.sheet ? 1 : 0, scrimPE: s.sheet ? 'auto' : 'none',
        inviteTf: s.sheet === 'invite' ? 'translateY(0)' : 'translateY(105%)', gpayTf: s.sheet === 'gpay' ? 'translateY(0)' : 'translateY(105%)',
        payBtn: gp === 'processing' ? { label: 'Processing', spin: true, bg: '#E8EAED', fg: '#202124' } : gp === 'done' ? { label: 'Paid', done: true, bg: '#81C995', fg: '#0D3B1E' } : { label: 'Pay €' + this.stl().out.toFixed(2), bg: '#FFFFFF', fg: '#202124' },
        ...(() => { const all = this.matches().map(ct => {
          const on = !!s.invited[ct.k];
          return { ...ct, dtu: 'c-' + ct.k, img: ct.img || '', abg: ct.on ? ct.bg : 'var(--tu-color-fill)', afg: ct.on ? ct.fg : 'var(--tu-color-text-2)', label: ct.on ? (on ? 'Added' : 'Add') : (on ? 'Invited' : 'Invite'),
            fg: on ? 'var(--tu-color-text-3)' : 'var(--tu-color-text)', cursor: on ? 'default' : 'pointer',
            invite: () => { if (on) return;
              if (!ct.on) { this.setState(st => ({ invited: { ...st.invited, [ct.k]: true } })); this.snack('Invite sent to ' + ct.name.split(' ')[0], 'They’ll join once they sign up', 'success'); return; }
              if (ct.k !== 'ren') { this.notPart(); return; }
              this.inviteRen(); } };
        }); const cOn = all.filter(c => c.on), cOff = all.filter(c => !c.on); return { contacts: [...cOn, ...cOff] }; })(),
        q: s.q || '', qHas: !!s.q, noMatch: !!(s.q || '').trim() && this.matches().length === 0, qRing: s.qFocus ? 'var(--tu-ring-focus)' : 'var(--tu-ring-input)',
        snackTf: s.snack.show ? 'translateY(0)' : 'translateY(-160%)', snackO: s.snack.show ? 1 : 0,
        snack: { title: s.snack.title, sub: s.snack.sub, action: s.snack.action, iconBg: tone[0], iconFg: tone[1], icon: P + 'icons/' + s.snack.icon + '.svg', ok: false, notOk: true },
        pillTf: s.pill ? 'translate(-50%, 0)' : 'translate(-50%, 120px)', pillO: s.pill ? 1 : 0,
        rootTop: full && s.vvh ? s.vvt + 'px' : '0px', rootH: full && s.vvh ? s.vvh + 'px' : '100%',
        frameH: full ? '100%' : 874 * sc + 'px', phoneH: full ? '100%' : '874px',
        showChrome: !full, snackTop: full ? 'calc(env(safe-area-inset-top) + 12px)' : '62px', fullReset: !full && s.vw < 1000,
        addW: s.addOpen ? '116px' : '152px', menuDy: s.addOpen ? '0px' : '16px', menuSc: s.addOpen ? '1' : '.96',
        addH: 'var(--tu-btn-float-h)',
        addB: full ? 'calc(22px + env(safe-area-inset-bottom))' : '22px',
        addInnerW: full ? 'min(368px, calc(100vw - 22px))' : '368px',
        editLabel: ed ? 'Done' : 'Edit',
        R, ord, it: { drinks: vis.drinks ? '1fr' : '0fr', hotel: vis.hotel ? '1fr' : '0fr', flight: vis.flight ? '1fr' : '0fr' }, tmrwDisp: vis.flight ? 'block' : 'none', nowDisp: s.showPast ? 'flex' : 'none', todayDisp: s.showPast || !(vis.xq || vis.extra || vis.dinner || vis.xl || vis.drinks || vis.hotel) ? 'block' : 'none',
        xqRows: vis.xq ? '1fr' : '0fr', extraRows: vis.extra ? '1fr' : '0fr', dinnerRows: vis.dinner ? '1fr' : '0fr', xlRows: vis.xl ? '1fr' : '0fr',
        suggRows: s.phase === 'plan' && !s.suggHidden && !ed ? '1fr' : '0fr', suggO: s.phase === 'plan' && !s.suggHidden && !ed ? 1 : 0,
        allDone: !!s.allDone, notAllDone: !s.allDone, settledTitle: 'You’re settled', paidLine: s.square ? 'Nothing to pay · your share is covered' : fmt(st0.out) + ' paid successfully!', payee, waiting: !!s.paid.sofia && !s.gotIn, ariLine: 'Pays ' + payee.name + ' ' + fmt(-bal.nic),
        nudgeLabel: s.nudged ? 'Nudged' : 'Nudge', nudgeFg: s.nudged ? 'var(--tu-color-text-3)' : 'var(--tu-color-text)',
        whyTf: s.sheet === 'why' ? 'translateY(0)' : 'translateY(105%)', moreTf: s.sheet === 'more' ? 'translateY(0)' : 'translateY(105%)',
        whoRows, txns, calcRows: txl.map(x => { const you = x.who === 'You', d = r2((you ? x.paid : 0) - x.share); return { t: x.t, sub: (you ? 'You paid ' + fmt(x.paid) : x.who + ' paid ' + fmt(x.paid)) + ' · your share ' + fmt(x.share), v: (d > 0 ? '+' : d < 0 ? '−' : '') + fmt(d), fg: d > 0 ? 'var(--tu-done-accent)' : 'var(--tu-color-text)' }; }), netLabel: net < -0.005 ? 'You owe ' + fmt(net) : net > 0.005 ? 'You’re owed ' + fmt(net) : 'Square',
        prevFg: s.editing ? 'var(--tu-color-accent)' : 'var(--tu-color-text)', prevLabel: s.editing ? 'done' : s.showPast ? 'hide previous' : 'previous', itinLabel: s.showPast ? 'ITINERARY' : 'UP NEXT', pastRows: s.showPast ? '1fr' : '0fr', pastO: s.showPast ? 1 : 0,
        past: PAST.map(d => ({ day: d.day, items: d.items.map(([t, title, sub]) => ({ t, title, sub, tap: this.notPart })) })),
        aboutO: s.about ? 1 : 0, aboutPE: s.about ? 'auto' : 'none', aboutTf: s.about ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(.96)',
        fabO: s.fabHide && !s.addOpen ? 0 : 1, fabPE: s.fabHide && !s.addOpen ? 'none' : 'auto', fabDy: s.fabHide && !s.addOpen ? '24px' : '0px',
        dirOn: ed ? {} : Object.fromEntries(timed.slice(0, 1).map(k => [k, true])), editing: ed, rowCols: ed ? 'var(--tu-itin-time-w) minmax(0,1fr) auto' : 'var(--tu-itin-time-w) 1fr auto', rowAlign: ed ? 'center' : 'baseline', rowGap: ed ? '8px' : '0px',
        fresh: { dinner: !!s.dinnerFresh, xq: s.freshSlot === 'xq', extra: s.freshSlot === 'extra', xl: s.freshSlot === 'xl' },
        edgeO: s.edgeUp && !s.sheet && top !== 'trip' ? 1 : 0,
        navBg: !s.nav || !s.nav.up ? 'rgba(245,235,226,0)' : s.nav.hero && active ? (doneHero ? 'rgba(198,236,185,.78)' : 'rgba(185,207,254,.78)') : s.nav.white ? 'rgba(255,255,255,.86)' : 'rgba(245,235,226,.82)', navBlur: s.nav && s.nav.up ? 'blur(16px)' : 'none',
        rowTouch: s.editing ? 'none' : 'auto', rowPress: s.editing ? 'none' : 'var(--tu-press-layer)', navTitleO: s.nav && s.nav.title ? 1 : 0, navTitleX: s.nav && s.nav.title ? 'translateX(0) scale(1)' : (full ? 'translate(calc(var(--tu-gutter) - 50vw + 50%), 34px) scale(1.41)' : 'translate(calc(var(--tu-gutter) - 201px + 50%), 34px) scale(1.41)'), bigTitleO: s.nav && s.nav.title ? 0 : 1, navTitleDy: s.nav && s.nav.title ? '0px' : '6px', navLive: active, edgeBlur: top === 'choose' ? 'none' : 'blur(12px)', edgeBg: s.addOpen || s.sheet || s.about || top === 'choose' ? 'rgba(0,0,0,0)' : top === 'trip' && s.edgeHero && (s.phase === 'vote' || s.phase === 'settle') ? (doneHero ? 'rgba(198,236,185,.78)' : 'rgba(185,207,254,.78)') : top === 'trip' || top === 'trips' || top === 'split' ? 'rgba(245,235,226,.72)' : 'rgba(255,255,255,.8)',
        expNameRing: s.exp.nameFocus ? 'var(--tu-ring-focus)' : 'var(--tu-ring-input)'
      },
      addExpBtn,
      balanceEl: (() => {
        const parts = balance.match(/\d|\D+/g) || [], total = parts.filter(p => /^\d$/.test(p)).length; let dIdx = 0;
        const LH = '1.25em';
        if (this._balPrev !== balance) { if (this._balPrev != null) { this._balUntil = Date.now() + 2800; clearTimeout(this._balT); this._balT = setTimeout(() => this.forceUpdate(), 2850); } this._balPrev = balance; }
        const rolling = Date.now() < (this._balUntil || 0);
        return h('span', { style: { whiteSpace: 'nowrap', lineHeight: LH, display: 'inline-block', height: LH } }, parts.map((p, ci) => {
          if (!/^\d$/.test(p)) return h('span', { key: 't' + ci, style: { whiteSpace: 'pre', display: 'inline-block', height: LH, lineHeight: LH, verticalAlign: 'top' } }, p);
          const pos = total - (dIdx++), dgt = +p;
          return h('span', { key: 'd' + pos, style: { position: 'relative', display: 'inline-block', height: LH, lineHeight: LH, verticalAlign: 'top', overflow: 'hidden' } },
            h('span', { style: { visibility: rolling ? 'hidden' : 'visible' } }, p),
            h('span', { style: { visibility: rolling ? 'visible' : 'hidden', position: 'absolute', left: '50%', top: 0, display: 'block', textAlign: 'center', transform: 'translate(-50%,' + (-dgt * 10) + '%)', transition: 'transform 1100ms cubic-bezier(.2,.8,.2,1) ' + (700 + (total - pos) * 70) + 'ms' } },
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => h('span', { key: n, style: { display: 'block', height: LH, lineHeight: LH } }, String(n)))));
        }));
      })(),
      homeRef: this.homeRef || (this.homeRef = (el) => { this.homeEl = el; this.wakeHome(); }),
      tapRef: this.tapRef || (this.tapRef = (el) => { this.tapEl = el; if (el) el.style.opacity = 0; }), tapDisplay: full ? 'none' : 'block',
      kbRowsUnused: null,
      spinner: h('span', { style: { width: 22, height: 22, borderRadius: 'var(--tu-radius-round)', border: '3px solid rgba(32,33,36,.2)', borderTopColor: '#202124', display: 'block', boxSizing: 'border-box', flex: 'none', animation: 'tu-spin .7s linear infinite' } }),
      liveDot: this.chipDotEl || (this.chipDotEl = h('span', { key: 'cd', ref: (el) => { if (el && !el._an) el._an = el.animate([{ opacity: 1 }, { opacity: 0.25 }, { opacity: 1 }], { duration: 2400, iterations: Infinity, easing: 'ease-in-out' }); }, style: { width: 6, height: 6, borderRadius: 'var(--tu-radius-round)', background: 'currentColor', flex: 'none', display: 'block' } })),
      heroDot: this.liveDotEl || (this.liveDotEl = h('span', { key: 'ld', style: { position: 'relative', width: 8, height: 8, flex: 'none' } },
        h('span', { style: { position: 'absolute', inset: 0, borderRadius: 'var(--tu-radius-round)', background: 'currentColor' } }),
        h('span', { ref: (el) => { if (el && !el._an) el._an = el.animate([{ transform: 'scale(1)', opacity: 0.55 }, { transform: 'scale(3.2)', opacity: 0 }], { duration: 1600, iterations: Infinity, easing: 'cubic-bezier(.2,.6,.3,1)' }); }, style: { position: 'absolute', inset: 0, borderRadius: 'var(--tu-radius-round)', background: 'currentColor' } }))),
      balDown: (e) => { if (e.target.closest && e.target.closest('[data-tu="g-expense"]')) return; this.setState({ balP: true }); }, balUp: () => { if (this.state.balP) this.setState({ balP: false }); },
      notPart: this.notPart, back: this.back, reset: this.reset, toggleTime: this.toggleTime,
      openBalance: (e) => { if (e && e.target.closest && e.target.closest('[data-tu="g-expense"]')) return; this.push('balance'); },
      balSettle: () => { const s = this.state; if (s.phase === 'settled' || s.allDone || (s.phase === 'settle' && s.paid.sofia)) return; this.back(); if (s.phase === 'vote' && s.poll && !s.pollLive) { this.setState({ pollLive: true, view: 'poll', pollLabel: s.heroLabel }); this.after(380, () => { this.scrollTrip(); this.toSettle(); this.after(500, () => this.snack('Settle up started', 'Tap the arrow or swipe the card to switch', 'neutral', null, 2600)); }); return; } if (s.phase !== 'settle') { this.clearTimers(); this.after(380, () => { this.scrollTrip(); this.toSettle(); }); } },
      openTrip: () => this.push('trip'),
      openInvite: () => this.setState({ sheet: 'invite', q: '' }),
      dismissPoll: () => this.endLinger(),
      openAdd: () => { if (!this.state.addOpen) this.setState({ addOpen: true }); },
      closeAdd: (e) => { if (e) e.stopPropagation(); this.setState({ addOpen: false }); },
      addExpense: (e) => { if (e) e.stopPropagation(); this.focusAmt(); this.setState({ addOpen: false }); this.after(180, () => { this.setState({ exp: freshExp(this.keys()) }); this.push('expense'); }); },
      addPeople: (e) => { if (e) e.stopPropagation(); this.setState({ addOpen: false }); this.after(180, () => this.setState({ sheet: 'invite', q: '' })); },
      addPlan: (e) => { if (e) e.stopPropagation(); this.setState({ addOpen: false }); this.after(180, () => { this.setState(st => ({ sel: [], cq: '', chooseMode: st.dinner ? 'plan' : 'dinner', chooseFromAdd: true })); this.push('choose'); }); },
      setQ: (e) => this.setState({ q: e.target.value }), clearQ: (e) => { if (e) e.preventDefault(); this.setState({ q: '' }); },
      qFocus: () => this.setState({ qFocus: true }), qBlur: () => this.setState({ qFocus: false }),
      closeSheet: () => { if (this.state.gpay === 'processing') return; this.setState({ sheet: null }); },
      copyLink: () => { try { navigator.clipboard && navigator.clipboard.writeText('https://tripup.app/j/lisbon'); } catch (e) {} this.snack('Link copied', 'tripup.app/j/lisbon', 'success'); },
      openChoose: () => { this.setState({ sel: [], cq: '', chooseMode: 'dinner', chooseFromAdd: false }); this.push('choose'); },
      gapTap: this.gapTap,
      dismissBf: (e) => { if (e && e.stopPropagation) e.stopPropagation(); this.undoFn = () => this.setState({ bfHidden: false }); this.setState({ bfHidden: true }); this.snack('Suggestion hidden for you', 'Others still see it', 'neutral', 'Undo', 4000); },
      dismissSugg: (e) => { if (e && e.stopPropagation) e.stopPropagation(); this.undoFn = () => this.setState({ suggHidden: false }); this.setState({ suggHidden: true }); this.snack('Suggestion hidden for you', 'Others still see it', 'neutral', 'Undo', 4000); },
      snackAction: () => {
        const a = this.state.snack.action; this.setState(st => ({ snack: { ...st.snack, show: false } }));
        if (a === 'Undo' && this.undoFn) { const f = this.undoFn; this.undoFn = null; f(); }
        if (a === 'Add') { this.focusAmt(); this.setState({ exp: freshExp(this.keys()) }); this.push('expense'); }
      },
      chooseScroll: (e) => { const y = e.currentTarget.scrollTop, d = y - (this._cy || 0); this._cy = y; this._cacc = (Math.sign(d) === Math.sign(this._cacc || 0) ? (this._cacc || 0) : 0) + d; let hide = !!this.state.cqHide; if (y <= 60) hide = false; else if (this._cacc > 24) hide = true; else if (this._cacc < -24) hide = false; const up = y > 4; if (hide !== !!this.state.cqHide || up !== !!this.state.cqUp) this.setState({ cqHide: hide, cqUp: up }); },
      pwScroll: (e) => this.pwScroll(e.currentTarget),
      pollAtUp: () => { const a = atM + 15; if (a <= atMax) this.setState({ pollAt: a }); },
      pollAtDn: () => { const a = atM - 15; if (a >= atMin) this.setState({ pollAt: a }); else this.snack('Can’t go earlier', 'The poll closes at ' + toT((18 * 60 + dur) % 1440) + ' – shorten the poll first', 'info', null, 2600); },
      pollDurUp: () => { const i = DURS.indexOf(dur); if (i < DURS.length - 1) { const d = DURS[i + 1]; this.setState({ pollDur: d, pollAt: Math.max(atM, atFloor(d)) }); } },
      pollDurDn: () => { const i = DURS.indexOf(dur); if (i > 0) this.setState({ pollDur: DURS[i - 1], pollAt: atM }); },
      confirmChoose: () => { if (n === 1) this.addSingle(); else if (n >= 2) this.createPoll(); },
      setCq: (e) => this.setState({ cq: e.target.value }), clearCq: (e) => { if (e) e.preventDefault(); this.setState({ cq: '' }); },
      cqFocus: () => this.setState({ cqFocus: true }), cqBlur: () => this.setState({ cqFocus: false }),
      cqKey: (e) => { if (e.key === 'Enter' && cqT && !exact) this.addOwnOpt(cqT); },
      addOwn: () => this.addOwnOpt(cqT),
      submitVote: () => { this.voteN = (this.voteN || 0) + 1; this.submitMine(); },
      skipVote: () => this.skipMine(),
      editVote: () => this.setState(st => ({ poll: { ...st.poll, editing: true } })),
      vaDown: () => this.setState({ va: true }), vaUp: () => this.state.va && this.setState({ va: false }),
      esDown: () => this.setState({ es: true }), esUp: () => this.state.es && this.setState({ es: false }),
      openSplit: () => { if (calc(this.state.exp).amt > 0) { this.reconcileSplit(); this.push('split'); } },
      saveExpense: this.saveExpense,
      startPart: (e) => { if (e) e.stopPropagation(); const m = this.state.vw < 500; if (m) this.focusEl('[data-tu="kb-proxy"]'); this.setExp({ partOn: true, tab: 'part', kp: true, txt: false }); if (m) setTimeout(() => this.focusEl('[data-tu="g-partamt"] input'), 60); },
      removePart: (e) => { if (e) e.stopPropagation(); const keys = this.keys(); this.setExp({ poolPart: pool0(), partOn: false, tab: 'part', partAmt: '', partName: '', incPart: Object.fromEntries(keys.map(k => [k, true])), kp: false, txt: false }); if (document.activeElement && document.activeElement.tagName === 'INPUT') document.activeElement.blur(); },
      tabRest: (e) => { if (e) e.stopPropagation(); this.setExp({ tab: 'rest', kp: false }); },
      tabPart: (e) => { if (e) e.stopPropagation(); this.setExp({ tab: 'part' }); },
      unlinkExp: (e) => { if (e) e.stopPropagation(); this.setExp({ unlinked: true }); },
      setExpName: (e) => this.setExp({ name: e.target.value }),
      setAmtNative: (e) => this.setExp({ amt: cleanAmt(e.target.value) }),
      amtFocus: () => {},
      setPartNative: (e) => { const v = cleanAmt(e.target.value); if (+v <= (+this.state.exp.amt || 0)) this.setExp({ partAmt: v }); },
      openKp: (e) => { if (e) e.stopPropagation(); this.setExp({ kp: true, txt: false, kpT: null }); },
      openTxt: (e) => { if (e) e.stopPropagation(); if (!this.state.exp.txt) this.setExp({ txt: true, kp: false, shift: !this.state.exp.partName }); },
      splitDown: (e) => {
        const t = e && e.target; if (t && t.closest && t.closest('[data-kb]')) return;
        if (this.state.exp.kp || this.state.exp.txt) { this.setExp({ kp: false, txt: false }); if (document.activeElement && document.activeElement.tagName === 'INPUT') document.activeElement.blur(); }
      },
      closeKp: () => { if (this.state.exp.kp || this.state.exp.txt) this.setExp({ kp: false, txt: false, kpT: null }); if (document.activeElement && document.activeElement.tagName === 'INPUT') document.activeElement.blur(); },
      stop: (e) => e && e.stopPropagation(),
      setPartName: (e) => this.setExp({ partName: e.target.value }),
      openGpay: () => { if (!this.state.paid.sofia && !this.state.settling) this.setState({ sheet: 'gpay', gpay: 'idle', payFail: false }); },
      failPay: (e) => { if (e) e.stopPropagation(); if (this.state.gpay !== 'idle') return; this.setState({ gpay: 'processing' }); this.after(900, () => this.setState({ sheet: null, gpay: 'idle', payFail: true })); },
      confirmPay: this.confirmPay,
      payOutside: () => { const s = this.state; if (s.paid.sofia || s.gpay !== 'idle') return; this.setState(st => ({ outside: true, gpay: 'done', paid: { ...st.paid, sofia: true } })); this.ariT = this.after(2400, () => this.ariPay()); },
      openMore: (e) => { if (e) e.stopPropagation(); this.setState({ sheet: 'more', addOpen: false }); },
      openWhy: () => this.setState({ sheet: 'why' }),
      openAbout: () => this.setState({ about: true }), closeAbout: () => this.setState({ about: false }),
      tripScroll: () => { this.fabCheck(); this.subCheck(); this.navCheck(); },
      amtTap: () => { const a = document.activeElement; if (a && a.tagName === 'INPUT' && !a.closest('[data-tu="g-amt"]')) a.blur(); if (this.state.exp.nameFocus) this.setExp({ nameFocus: false }); },
      dragScroll: this.dragScroll, vUp: () => { if (this.state.vPress != null) this.setState({ vPress: null }); },
      togglePast: () => { if (this.state.editing) { if (this.dragOff) this.dragOff(); this.setState({ editing: false }); return; } this.setState(st => ({ showPast: !st.showPast })); },
      lp: this.lpH || (this.lpH = Object.fromEntries(['xq', 'extra', 'dinner', 'xl', 'drinks'].map(k => [k, (e) => this.lpStart(e, k)]))),
      lpEnd: this.lpEnd,
      grip: this.gripH || (this.gripH = Object.fromEntries(['xq', 'extra', 'dinner', 'xl', 'drinks'].map(k => [k, (e) => this.startDrag(e, k)]))),
      tdec: this.tdH || (this.tdH = Object.fromEntries(['xq', 'extra', 'dinner', 'xl', 'drinks'].map(k => [k, (e) => { if (e) e.stopPropagation(); this.shiftTime(k, -15); }]))),
      tinc: this.tiH || (this.tiH = Object.fromEntries(['xq', 'extra', 'dinner', 'xl', 'drinks'].map(k => [k, (e) => { if (e) e.stopPropagation(); this.shiftTime(k, 15); }]))),
      nudge: this.nudge,
      rowTap: (e) => { if (this.state.editing) { if (e) e.stopPropagation(); return; } this.notPart(e); },
      expNameFocus: () => this.setExp({ nameFocus: true }), expNameBlur: () => this.setExp({ nameFocus: false })
    };
  }
}
