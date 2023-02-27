// API - WEBSERVICES
import {addTransaction, deleteTransaction} from '../../api/webservices';


export const addNewTransaction = async (formInfo) => {
  try {
    let response = await addTransaction(formInfo);
    if(!response.ok || response.status == 400){
      console.log('Error status: ' + response.status)
      return;
    }
    let result = await response.json();
    return await result.transaction;

  } catch (error) {
    console.log(error.message)
  }
}

export const removeTransaction = async (id) => {
  try {
    let response = await deleteTransaction(id);
    if(!response.ok || response.status == 400){
      console.log('Error status: ' + response.status)
      return;
    }
    let result = await response.json();
    return await result.transaction;
    
  } catch (error) {
    console.log(error.message)
  }
}