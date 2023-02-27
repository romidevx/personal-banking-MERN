import './Account_amounts.css';
// REDUX
import {useSelector} from 'react-redux';
// UTILS
import {formatAmount} from '../../utils/formatUtils';

const Account_amounts = () => {
  const {totalDeposits, totalExpenses, accountBalance,isLoading,isError} = useSelector(state => state.transactions);

  // if(isError) {
  //   return <h4 style={{textAlign:'center', marginTop:'25px'}}>..Ooops, Error fetching Account Balance data..</h4>
  // }

  if(isLoading){
    return <h4 style={{textAlign:'center', marginTop:'25px'}}>.. Loading Acount Balance Data  ..</h4>
  }

  return (
    <div className='account__amounts'>
      <div className='grid__card'>
        <h5 className='grid__title'>Balance</h5>
        <h2 style={{color:accountBalance < 0 ? '#ae3020' : '#333'}}>
          {formatAmount(accountBalance)}
        </h2>
      </div>

      <div className='grid__card'>
        <h5 className='grid__title'>Deposits</h5>
        <h2 style={{color:'green'}}>{formatAmount(totalDeposits)}</h2>
      </div>

      <div className='grid__card'>
        <h5 className='grid__title'>Expenses</h5>
        <h2 style={{color:'red'}}>{formatAmount(totalExpenses)}</h2>
      </div>

    </div>
  )
}

export default Account_amounts;