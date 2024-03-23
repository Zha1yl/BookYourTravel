// функция для получения данных из хранилища под ключом cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
// функция подсчёта суммы всех туров
export const calcTotalPrice = (tours) => {
  const totalPrice = tours.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};
// функция для подсчёта стоимости за один тур
export const calcSubPrice = (elem) => {
  return elem.item.price * elem.count;
};
// функция для отображения количество туров в корзине
// export const getToursCountInCart = () => {
//   let cart = getLocalStorage();
//   return cart ? cart.tours.length : 0;
// };
