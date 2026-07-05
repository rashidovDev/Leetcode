
function createBankAccount() {
  let balance = 20;
  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount();

account.deposit(100); // 100
console.log(account.getBalance()); // 100

