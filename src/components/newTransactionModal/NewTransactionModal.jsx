import './NewTransactionModal.css';
import { useState } from 'react';
// REDUX
import {useDispatch} from 'react-redux';
// REDUX REDUCER
import {closeModal,updateTransactions} from '../../redux/transactions/transactionsSlice';
// REDUX ACTIONS
import {addNewTransaction} from '../../redux/transactions/actions';

const NewTransactionModal = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('')
  const [formData,setFormData] = useState({
      title:'',
      amount:'',
      type:''
  });

  const handleInputsChange = ({ target: {name,value} }) => {
    setErrorMessage('');
    setFormData({ ...formData, [name]:value })
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if(!formData.title || !formData.type || !formData.amount ){
      setErrorMessage('Please fill all form fields..!!');
      return;
    }

    let newFormData = {
      title:  formData.title,
      type:   formData.type,
      amount: Number(formData.amount)
    }

    // ADD TRANSACTION TO DATABASE
    let response = await addNewTransaction(newFormData);
    // UPDATE LOCAL STATE
    dispatch(updateTransactions(response))
    
    setErrorMessage('')
    dispatch(closeModal(false));
    setFormData({
      title:'',
      amount:'',
      type:''
    })
  };


  return (
    <div className='new__transaction--modal'>
      <div className="modal">
        <form id='form' onSubmit={handleFormSubmit}>
            <h3>New transaction</h3>

            <input type="text" name="title"  value={formData.title}  placeholder='transaction title' onChange={handleInputsChange}/>
            <input type="text" name="amount" value={formData.amount} placeholder='enter amount, ex: 100, 200' onChange={handleInputsChange}/>
            
            <select name="type" id="type" value={formData.type} onChange={handleInputsChange}>
              <option disabled value="">Choose type</option>
              <option value="deposit">Deposit</option>
              <option value="expense">Expense</option>
            </select>

            {errorMessage && <p style={{color:'red', textAlign:'center', marginTop:'15px'}}>{errorMessage}</p>}
            
            <button className='save__button'>Save</button>
          </form>
            <button className='cancel__button' onClick={() => dispatch(closeModal(false))}>Cancel</button>
      </div>
    </div>
  )
}

export default NewTransactionModal;