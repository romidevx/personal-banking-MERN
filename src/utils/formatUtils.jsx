export let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

// ==== EXAMPLE 1 ====
// export const formatAmount = (amount) => {
//   return  new Intl.NumberFormat('pt-BR',{ 
//     style: 'currency',
//     currency: 'BRL',
//     minimumFractionDigits: 2}).format(amount);
// }

// ==== EXAMPLE 2 ====
export const formatAmount = (amount ) => {
  return amount.toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
}

export const formatDate = (data) => {
  return months[new Date(data).getMonth()] +' '+ new Date(data).getDate()  ; 
  // return ex: 5 Feb
}

export const today = () => {
  return months[new Date().getMonth()] +' '+ new Date().getDate() +', '+ new Date().getFullYear();
  // return Feb 23, 2023
}