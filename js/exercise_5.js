let answ = prompt('Введите страну доставки', '');

const setMessage = (name, price) =>
  alert(`Доставка в ${name} будет стоить ${price} кредитов`);

answ = answ.toLocaleLowerCase();

switch (answ) {
  case 'китай':
    setMessage('Китай', 100);
    break;

  case 'чили':
    setMessage('Чили', 100);
    break;

  case 'австралия':
    setMessage('Австралию', 100);
    break;

  case 'индия':
    setMessage('Индию', 100);
    break;

  case 'ямайка':
    setMessage('Ямайку', 100);
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
