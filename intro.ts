class BankAccount {
  private _name: string;
  private _currentAmount: number;

  constructor(public name, public initialAmount){
    this._name = name;
    this._currentAmount = initialAmount;
  }

  overdraftProtection(){
    return Math.floor(this._currentAmount / 1000) * 100;
  }
}

class SavingsAccount extends BankAccount {

  private _beneficiaryAccount: string;

  constructor(public name, public initialAmount, public beneficiaryAccount){
    super(name, initialAmount);
    this._beneficiaryAccount = beneficiaryAccount;
  }

  overdraftProtection(){
    console.log("no protection");
    return 0;
  }
}
