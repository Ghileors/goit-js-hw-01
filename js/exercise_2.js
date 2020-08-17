const storage = {
  total: 100,
  successful: 'Заказ оформлен, с вами свяжется менеджер.',
  unsuccessful: 'На складе недостаточно твоаров!',
  error: 'Невалидное значение! Введите целое положительное число.',

  displayMessage(ordered) {
    if (ordered > this.total) {
      alert(this.unsuccessful);
    } else if (ordered > 1 && Number.isInteger(ordered)) {
      alert(this.successful);
    } else {
      alert(this.error);
    }
  },
};

storage.displayMessage(20);
storage.displayMessage(100);
storage.displayMessage(101);
storage.displayMessage(-0);
// storage.displayMessage('string');
// storage.displayMessage(null);
// storage.displayMessage(undefined);
// storage.displayMessage(false);
// storage.displayMessage(true);
// storage.displayMessage(NaN);
