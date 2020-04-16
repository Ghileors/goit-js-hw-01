function setMessage(total = 0) {
  let answ = prompt('Введите число', '');
  if (answ == null) {
    alert(`Общая сумма чисел равна ${total}`);
  } else if (isNaN(Number(answ))) {
    alert('Введите цифру!');
    setMessage(total);
  } else {
    setMessage(total + Number(answ));
  }
}
setMessage();
