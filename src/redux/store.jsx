import { configureStore } from '@reduxjs/toolkit';
import transactionsSlice from './transactions/transactionsSlice'

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice
  },
})