const total = 100;
let ordered = 50;

const successfulOrder = 'Заказ оформлен, с вами свяжется менеджер';
const orderError = 'На складе недостаточно твоаров!';

ordered = 70;

if (ordered > total) {
  console.log(orderError);
} else {
  console.log(successfulOrder);
}
