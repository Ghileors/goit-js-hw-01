let answ = prompt('Введите страну доставки', '');

const deliveryCost = {
  China: 100,
  Chile: 250,
  Australia: 170,
  India: 80,
  Jamaica: 120,
};

const setMessage = (name, price) => {
  alert(`Доставка в ${name} будет стоить ${price} кредитов`);
};

answ = answ.toLocaleLowerCase();

switch (answ) {
  case 'китай':
    setMessage(answ, deliveryCost.China);
    break;

  case 'чили':
    setMessage(answ, deliveryCost.Chile);
    break;

  case 'австралия':
    setMessage(answ, deliveryCost.Australia);
    break;

  case 'индия':
    setMessage(answ, deliveryCost.India);
    break;

  case 'ямайка':
    setMessage(answ, deliveryCost.Jamaica);
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
