import React from 'react';
import './TransactionCard.css';
// REDUX
import {useDispatch} from 'react-redux';
// REDUX STATE
import {deleteOneTransaction} from '../../redux/transactions/transactionsSlice';
// REDUX ACTIONS
import {removeTransaction} from '../../redux/transactions/actions';
// UTILS
import {formatAmount,formatDate} from '../../utils/formatUtils';

const TransactionCard = ({ transaction : {_id, title, type, amount, createdAt} }) => {
  let dispatch = useDispatch();

  const deleteTransaction = async (id) => {
    // DELETE TRANSACTION FROM DATABASE
    let response = await removeTransaction(id);
    // UPDATE LOCA STATE
    dispatch(deleteOneTransaction(response._id))
  }

  
  return (
    <div className="transaction__card">
      <p className='card__title'>
        <span style={{ color: type == 'deposit' ? 'green' : 'red', fontSize:'23px' }}>&bull; </span>
        {title}
      </p>
      <p className='card__type'>{type}</p>
      <p className='card__type'>{formatDate(createdAt)}</p>

      <p className='card__amount'>
        {formatAmount(amount)} 
        <span className='delete_button' style={{fontWeight:'700', fontSize:'20px'}} onClick={() => deleteTransaction(_id)}>
          &nbsp;&nbsp;🗑
        </span>
        </p>

    </div>
  )
}

export default TransactionCard;