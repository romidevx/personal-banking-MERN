let BASE_URL = 'http://localhost:4000';

export const fetchTransactions = async () => {
  let response = await fetch(`${BASE_URL}/transactions`);
  return response;
}

export const addTransaction = async (formInfo) => {
  let response = await fetch(`${BASE_URL}/transactions`,{
    method: 'POST',
    body: JSON.stringify(formInfo),
    headers: {'Content-Type': 'application/json'}
  });
  
  return response;
}

export const deleteTransaction = async (id) => {
  let response = await fetch(`${BASE_URL}/transactions/${id}`,{
    method: 'DELETE',
  });
  
  return response;
}