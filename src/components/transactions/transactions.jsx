import './Transactions.css';
import {useEffect,useState} from 'react';
// COMPONENTS
import TransactionCard from '../transactionCard/TransactionCard';
// REDUX
import {useDispatch,useSelector} from 'react-redux';
// REDUX REDUCER
import {openModal,getTransactions} from '../../redux/transactions/transactionsSlice';

const Transactions = () => {
  let dispatch = useDispatch();
  const {isLoading, isError, error, transactions} = useSelector(state => state.transactions);
  const [filteredTransactions,setFilteredTransactions] = useState();

  // =========  FILTER TRANSACTIONS BY TYPE ========= //
  const filterTransactions = (type) => {
    if(type == 'all'){
      setFilteredTransactions(transactions)
      return;
    }
    setFilteredTransactions(transactions.filter(item => item.type == type))
  }

  useEffect(() => {
    dispatch(getTransactions());
  },[]);

  // ======================  ERROR MESSAGE ========================//
  if(isError) {
    return <h4 style={{textAlign:'center', margin:'25px 0'}}>
      There was a problem fetching your account information <br/>
               ..please try again later.. <br/><br/>
            <span style={{color:'red'}}>** Error: {error} **</span>
      </h4>
  }
  // ====================== LOADING MESSAGE ========================//
  if(isLoading){
    return <h4 style={{textAlign:'center', marginTop:'25px'}}>.. Loading transactions ..</h4>
  }

  return (
    <section className='transactions'>

      <div className="buttons__container">
        <div className="add__transaction">
          <button onClick={() => dispatch(openModal(true))}>Add +</button>
        </div>
        <div className="filter__buttons">
          <button onClick={() => filterTransactions('all')}>All</button>
          <button onClick={() => filterTransactions('deposit')}>Deposits</button>
          <button onClick={() => filterTransactions('expense')}>Expenses</button>
        </div>
      </div>

      {
        filteredTransactions
        ? filteredTransactions.map(transaction => 
          <TransactionCard key={transaction._id} transaction={transaction}/> 
        )
        : !transactions.length
          ? <p>Ooops no transactions to show...</p>
          : transactions.map(transaction => 
            <TransactionCard key={transaction._id} transaction={transaction}/> 
          )
        
      }

    </section>
  )
}

export default Transactions;