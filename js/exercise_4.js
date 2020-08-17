const userWallet = {
  credits: 23580,
};

const products = {
  pricePerDroid: 3000,
};

const purchase = answer => {
  answer = prompt('Какое количество дроидов вы желаете приобрести?');
  const totalPrise = products.pricePerDroid * Number(answer);
  let message;

  if (answer === null) {
    message = 'Отменено пользователем!';
  } else if (totalPrise > userWallet.credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    const check = userWallet.credits - totalPrise;
    message = `Вы купили ${answer} дроидов, на счету осталось ${check} кредитов.`;
  }
  alert(message);
};

purchase();
