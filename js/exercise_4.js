const pricePerDroid = 300;
let credits = 23580;

const answ = prompt('Количество дроидов, которое вы хотите приобрести:');

answ = Number(answ);

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

/* const numberInputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
  console.log('numberInputRef.value: ', numberInputRef.value);

  const number = Number(numberInputRef.value);

  const result = number * pricePerDroid;
  const balance = credits - result;
  if (result < 0) {
    alert(`Недопустимое количество дроидов!`);
  } else if (result > credits) {
    alert(`Недостаточно средств на счету! Ваш баланс ${credits} кредитов.`);
  } else {
    alert(`Вы приобрели ${result} дроидов. Остаток на балансе: ${balance}`);
  }
}); */
