import './App.css';
// COMPONENTS
import Header from './components/header/Header';
import Transactions from './components/transactions/transactions';
import NewTransactionModal from './components/newTransactionModal/newTransactionModal';
// REDUX
import {useSelector} from 'react-redux';
import Account_amounts from './components/account_amounts/Account_amounts';


const App = () => {
  const {showModal} = useSelector(state => state.transactions);
  
  return (
    <div className="app">

      <Header />
      <Account_amounts/>
      <Transactions/>
      
      { showModal && <NewTransactionModal/>}
      
    </div>
  )
}

export default App;
