import {
  currentUserId,
  dinnerOptions,
  existingDebts,
  initialMembers,
  ren,
  type Debt,
  type Member,
} from "./demo-data";

export type ScreenId =
  | "trips"
  | "overview"
  | "invite"
  | "dinner"
  | "vote"
  | "expense"
  | "split"
  | "settle";

export type Expense = {
  id: string;
  description: string;
  amount: number;
  payerId: string;
  participantIds: string[];
};

export type DemoState = {
  screen: ScreenId;
  members: Member[];
  debts: Debt[];
  invitedRen: boolean;
  selectedDinnerIds: string[];
  votes: Record<string, string>;
  expenseDraft: {
    description: string;
    amount: string;
    payerId: string;
    participantIds: string[];
  };
  expenses: Expense[];
  settled: boolean;
};

export type DemoAction =
  | { type: "GO_TO"; screen: ScreenId }
  | { type: "RESET" }
  | { type: "INVITE_REN" }
  | { type: "TOGGLE_DINNER"; optionId: string }
  | { type: "VOTE"; optionId: string }
  | { type: "SET_EXPENSE_AMOUNT"; amount: string }
  | { type: "SET_DESCRIPTION"; description: string }
  | { type: "TOGGLE_PARTICIPANT"; memberId: string }
  | { type: "CONFIRM_EXPENSE" }
  | { type: "SETTLE" };

export const screenOrder: ScreenId[] = [
  "trips",
  "overview",
  "invite",
  "dinner",
  "vote",
  "expense",
  "split",
  "settle",
];

export const screenLabels: Record<ScreenId, { title: string; note?: string }> = {
  trips: { title: "Trips" },
  overview: { title: "Lisbon trip" },
  invite: { title: "Add Ren", note: "JTBD: Add Ren to the trip" },
  dinner: { title: "Dinner options", note: "JTBD: Decide on dinner plans" },
  vote: { title: "Voting" },
  expense: { title: "Add expense", note: "JTBD: Split the dinner bill" },
  split: { title: "How it was split" },
  settle: { title: "Settle up", note: "JTBD: Settle expenses" },
};

export function createInitialState(): DemoState {
  return {
    screen: "overview",
    members: initialMembers,
    debts: existingDebts,
    invitedRen: false,
    selectedDinnerIds: dinnerOptions.slice(0, 3).map((option) => option.id),
    votes: { maya: "taberna", bob: "sea-me", ema: "taberna" },
    expenseDraft: {
      description: "Dinner at Taberna",
      amount: "250",
      payerId: currentUserId,
      participantIds: initialMembers.map((member) => member.id),
    },
    expenses: [],
    settled: false,
  };
}

function cleanAmount(value: string) {
  const sanitized = value.replace(/[^0-9.,]/g, "").replace(",", ".");
  const [whole = "", ...decimal] = sanitized.split(".");
  return decimal.length ? `${whole}.${decimal.join("").slice(0, 2)}` : whole;
}

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case "GO_TO":
      return { ...state, screen: action.screen };
    case "RESET":
      return createInitialState();
    case "INVITE_REN": {
      if (state.invitedRen) return { ...state, screen: "dinner" };
      return {
        ...state,
        invitedRen: true,
        members: [...state.members, ren],
        expenseDraft: {
          ...state.expenseDraft,
          participantIds: [...state.expenseDraft.participantIds, ren.id],
        },
        screen: "dinner",
      };
    }
    case "TOGGLE_DINNER": {
      const selected = state.selectedDinnerIds.includes(action.optionId)
        ? state.selectedDinnerIds.filter((id) => id !== action.optionId)
        : [...state.selectedDinnerIds, action.optionId];
      return { ...state, selectedDinnerIds: selected };
    }
    case "VOTE":
      return {
        ...state,
        votes: { ...state.votes, [currentUserId]: action.optionId },
      };
    case "SET_EXPENSE_AMOUNT":
      return {
        ...state,
        expenseDraft: { ...state.expenseDraft, amount: cleanAmount(action.amount) },
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        expenseDraft: { ...state.expenseDraft, description: action.description },
      };
    case "TOGGLE_PARTICIPANT": {
      const participantIds = state.expenseDraft.participantIds.includes(action.memberId)
        ? state.expenseDraft.participantIds.filter((id) => id !== action.memberId)
        : [...state.expenseDraft.participantIds, action.memberId];
      return {
        ...state,
        expenseDraft: { ...state.expenseDraft, participantIds },
      };
    }
    case "CONFIRM_EXPENSE": {
      const amount = Number(state.expenseDraft.amount);
      if (!amount || state.expenseDraft.participantIds.length === 0) return state;
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            id: "dinner-expense",
            description: state.expenseDraft.description || "Dinner",
            amount,
            payerId: state.expenseDraft.payerId,
            participantIds: state.expenseDraft.participantIds,
          },
        ],
        screen: "settle",
      };
    }
    case "SETTLE":
      return { ...state, settled: true };
    default:
      return state;
  }
}

export function calculateBalances(state: DemoState) {
  const balances: Record<string, number> = Object.fromEntries(
    state.members.map((member) => [member.id, 0]),
  );

  state.debts.forEach((debt) => {
    balances[debt.from] = (balances[debt.from] ?? 0) - debt.amount;
    balances[debt.to] = (balances[debt.to] ?? 0) + debt.amount;
  });

  state.expenses.forEach((expense) => {
    const share = expense.amount / expense.participantIds.length;
    expense.participantIds.forEach((memberId) => {
      if (memberId !== expense.payerId) {
        balances[memberId] = (balances[memberId] ?? 0) - share;
        balances[expense.payerId] = (balances[expense.payerId] ?? 0) + share;
      }
    });
  });

  if (state.settled && (balances[currentUserId] ?? 0) < 0) {
    const payment = Math.abs(balances[currentUserId]);
    balances[currentUserId] += payment;
    balances.maya -= payment;
  }

  return balances;
}

export function getCurrentUserBalance(state: DemoState) {
  return calculateBalances(state)[currentUserId] ?? 0;
}

export function getSplitAmount(state: DemoState) {
  const count = state.expenseDraft.participantIds.length;
  return count ? Number(state.expenseDraft.amount || 0) / count : 0;
}

export function getVoteCounts(state: DemoState) {
  return Object.values(state.votes).reduce<Record<string, number>>((counts, optionId) => {
    counts[optionId] = (counts[optionId] ?? 0) + 1;
    return counts;
  }, {});
}

export function nextScreen(screen: ScreenId) {
  return screenOrder[Math.min(screenOrder.indexOf(screen) + 1, screenOrder.length - 1)];
}

export function previousScreen(screen: ScreenId) {
  return screenOrder[Math.max(screenOrder.indexOf(screen) - 1, 0)];
}
