/**
 * Задание 7 - дополнительное, выполнять не обязательно
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы
 * для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      amount,
      type,
    };

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('снятие такой суммы не возможно, недостаточно средств');

      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(item => item.id === id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    // let sum = 0;

    this.transactions.forEach(item => {
      if (item.type === type) {
        sum += item.amount;
      }
    });

    // return sum;

    return this.transactions.reduce(
      (acc, item) => (item.type === type ? acc + item.amount : acc),
      0,
    );
  },
};

console.log('balance:', account.getBalance());
console.log('transactions:', account.transactions);

account.deposit(30);
account.deposit(60);
account.deposit(10);
// console.log('balance:', account.getBalance());
// console.log('transactions:', account.transactions);

account.withdraw(20);
account.withdraw(40);
// console.log('balance:', account.getBalance());
// console.log('transactions:', account.transactions);

account.withdraw(30);
account.withdraw(30);
// console.log('balance:', account.getBalance());
// console.log('transactions:', account.transactions);

console.log(account.getTransactionDetails(1));

console.log('deposit:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('withdraw:', account.getTransactionTotal(Transaction.WITHDRAW));
