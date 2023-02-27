

export function calculateTransactions(transactions, type){
  return !transactions
  ? 0
  : transactions
  .filter(item => item.type === type)
  .map(item => item.amount)
  .reduce((sum, value) => sum + value);
}

export function calculateState(state){
  let sums = state.totalDeposits = calculateTransactions(state.transactions, 'deposit');
             state.totalExpenses = calculateTransactions(state.transactions, 'expense');
             state.accountBalance = state.totalDeposits - state.totalExpenses;

  return sums;
}