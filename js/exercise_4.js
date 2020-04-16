const pricePerDroid = 300;
let credits = 23580;

const answ = prompt('Количество дроидов, которое вы хотите приобрести:', '');

let totalPrice = pricePerDroid * answ;

if (answ === null) {
  alert('Отменено пользователем!');
} else if (totalPrice <= credits) {
  alert(
    `Вы купили ${totalPrice} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`,
  );
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
}
