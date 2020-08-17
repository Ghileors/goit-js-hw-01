class Product {
  constructor(name, prise) {
    this.name = name;
    this.prise = prise;
  }

  getFullInfo() {
    alert(`Выбран "${this.name}" цена за штуку: ${this.prise} кредитов`);
  }
}

const droid = new Product('Генератор защитного поля', 1000);

droid.getFullInfo();

const newDroid = new Product('Генератор защитного поля 2', 2000);

newDroid.getFullInfo();
