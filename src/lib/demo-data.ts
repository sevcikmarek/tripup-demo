export type Member = {
  id: string;
  name: string;
  initials: string;
  color: string;
  isYou?: boolean;
};

export type Debt = {
  from: string;
  to: string;
  amount: number;
  note: string;
};

export type DinnerOption = {
  id: string;
  name: string;
  detail: string;
  walk: string;
  price: string;
};

export const currentUserId = "ari";

export const initialMembers: Member[] = [
  { id: "ari", name: "Ari", initials: "AR", color: "coral", isYou: true },
  { id: "maya", name: "Maya", initials: "MY", color: "plum" },
  { id: "bob", name: "Bob", initials: "BO", color: "mint" },
  { id: "ema", name: "Ema", initials: "EM", color: "sky" },
];

export const ren: Member = {
  id: "ren",
  name: "Ren Okafor",
  initials: "RO",
  color: "gold",
};

export const existingDebts: Debt[] = [
  { from: "ari", to: "maya", amount: 288, note: "Apartment deposit" },
  { from: "bob", to: "maya", amount: 96, note: "Train and groceries" },
  { from: "ema", to: "ari", amount: 28, note: "Airport transfer" },
  { from: "maya", to: "bob", amount: 18, note: "Museum tickets" },
];

export const dinnerOptions: DinnerOption[] = [
  { id: "taberna", name: "Taberna da Rua das Flores", detail: "Portuguese · Chiado", walk: "6 min", price: "€€" },
  { id: "sea-me", name: "Sea Me – Peixaria Moderna", detail: "Seafood · Bairro Alto", walk: "5 min", price: "€€€" },
  { id: "trindade", name: "Cervejaria Trindade", detail: "Brewery · Chiado", walk: "4 min", price: "€€" },
  { id: "prado", name: "Prado", detail: "Modern Portuguese · Baixa", walk: "12 min", price: "€€€" },
];

export const itinerary = [
  { time: "19:30", title: "Sunset drinks at Park", meta: "Rooftop · 5 joining" },
  { time: "22:00", title: "Dinner in Bairro Alto", meta: "Group vote in progress" },
  { time: "07:10", title: "Train to Sintra", meta: "Rossio Station · platform TBD", tomorrow: true },
];
