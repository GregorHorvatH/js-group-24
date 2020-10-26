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
    transactionObj['id'] += 1;
    transactionObj['type'] = type;
    transactionObj['amount'] = amount;
    this.getTransactionTotal(type);
    return transactionObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    return this.transactions.push({
      ...this.createTransaction(amount, Transaction['DEPOSIT']),
    });
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
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.transactions.push({
        ...this.createTransaction(amount, Transaction['WITHDRAW']),
      });
    } else {
      if (
        confirm(
          `Снятие невозможно, недостаточно средств. Ваш баланс ${this.getBalance()} у.е. Хотите осуществить другую операцию?`,
        )
      ) {
        dataInput();
      }
      return;
    }
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
  getTransactionDetails() {
    const idSearch = Number(prompt('Введите код транзакции (id)'));
    console.log(idSearch);
    if (idSearch > 0) {
      let check = 0;
      for (const transactionItem of this.transactions) {
        let values = Object.values(transactionItem);
        if (values[0] === idSearch) {
          check = 1;
          console.log(`Детали транзакции с кодом ${idSearch}:`);
          console.log(transactionItem);
          break;
        }
      }
      if (check === 0) {
        console.log(`Транзакция с кодом ${idSearch} не найдена`);
      }
    } else {
      console.log(`Код не корректен. Введите целое число > 0`);
    }
    while (confirm('Желаете узнать детали транзакции другим id?')) {
      this.getTransactionDetails();
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    if (type === Transaction['DEPOSIT']) {
      totalTransactionsAmounts['deposits'] += transactionObj['amount'];
    } else {
      totalTransactionsAmounts['withdraws'] += transactionObj['amount'];
    }
    return totalTransactionsAmounts;
  },
};
const transactionObj = { id: 0, type: 'нет транзакций', amount: 0 };
const transactions = [];
const totalTransactionsAmounts = { deposits: 0, withdraws: 0 };

// Функция ввода суммы
const amountInput = function() {
  const amountCurrent = Number(prompt('Введите сумму'));
  if (amountCurrent > 0) {
    return amountCurrent;
  }
  if (
    confirm('Сумма не корректна. Введите число больше 0. Попробовать еще раз?')
  ) {
    return amountInput();
  }
  return;
};

// Функция ввода типа данных
const dataInput = function() {
  let amountValue;
  switch (prompt('Введите тип транзакции: + (пополнение) или - (снятие)')) {
    case '+':
      amountValue = amountInput();
      console.log(`Cумма депозита: ${amountValue}`);
      if (amountValue) {
        account.deposit(amountValue);
      } else {
        return;
      }
      break;

    case '-':
      amountValue = amountInput();
      console.log(`Cумма снятия: ${amountValue}`);
      if (amountValue) {
        account.withdraw(amountValue);
      } else {
        return;
      }
      break;
    case null:
      break;
    default:
      if (
        confirm(
          'Введите корректно тип транзакции: значок "плюс" или "минус". Попробовать еще раз?',
        )
      ) {
        dataInput();
      }
  }
};

dataInput();

while (confirm('Желаете выполнить еще одну транзакцию?')) {
  dataInput();
}
console.log(
  `Баланс счета: ${account.getBalance()}\nИстория транзакций: ${
    account.transactions
  }`,
);
console.log(account.transactions);
console.log(
  `Всего на счет было внесено ${totalTransactionsAmounts['deposits']} у.е.\nВсего со счета было снято ${totalTransactionsAmounts['withdraws']} у.е.`,
);
if (confirm('Узнать детали транзакции?')) {
  account.getTransactionDetails();
}
