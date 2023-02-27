import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// ACCOUNT BALANCE CALCULATIONS
import {calculateState} from '../../utils/stateTransactions';
// API - WEBSERVICES
import {fetchTransactions, addTransaction, deleteTransaction} from '../../api/webservices';

// =========== FETCH ALL TRANSACTIONS ========= //
export const getTransactions = createAsyncThunk("transactions/fetch", async (_, thunkAPI) => {
  try {
    let response = await fetchTransactions();
    if(!response.ok || response.status === 400){
      console.log(response.status)
      throw new Error("There was a problem fetching transactions - Error: " + response.status);
    }
    let result = await response.json();
    return result.transactions;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})


export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState:{
    isLoading:false,
    isError:false,
    error:'',
    transactions:[],
    showModal:false,
    totalDeposits:0,
    totalExpenses:0,
    accountBalance:0
  },

  reducers: {
    updateTransactions: (state,action) => {
      state.transactions = [action.payload, ...state.transactions];
      calculateState(state);
    },
    deleteOneTransaction:(state,action) => {
      state.transactions = state.transactions.filter(transaction => transaction._id != action.payload);
      calculateState(state);
    },
    openModal:(state,action) => {
      state.showModal = action.payload;
    },
    closeModal:(state,action) => {
      state.showModal = action.payload;
    }
  },

  extraReducers: (builder) => {
    // =============  FETCH TRANSACTIONS ================
    builder
      .addCase(getTransactions.pending, (state, ) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        calculateState(state);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getTransactions.rejected, (state,action ) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
      });
    // =============  ADD NEW TRANSACTION ================

    // =============  DELETE TRANSACTION =================
    
  }
})

export const { deleteOneTransaction, updateTransactions, openModal, closeModal } = transactionsSlice.actions;

export default transactionsSlice.reducer;



