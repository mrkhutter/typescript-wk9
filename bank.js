var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function takeFee(feeObject) {
    return "taking the fee: " + feeObject.fee;
}
var BankAccount = (function () {
    function BankAccount(accountHolderName, initialAmount) {
        this.name = name;
        this.amount = initialAmount;
        this.currentAmount = initialAmount;
    }
    BankAccount.prototype.overdraftProtection = function () {
        return Math.floor(this.currentAmount / 1000) * 100;
    };
    BankAccount.prototype.makeWithdrawal = function (amount) {
        this.currentAmount -= amount;
    };
    return BankAccount;
}());
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountHolderName, initialAmount, beneficiaryAccount) {
        _super.call(this, accountHolderName, initialAmount);
        this.beneficiary = beneficiaryAccount;
        this.fee = 25;
    }
    SavingsAccount.prototype.overdraftProtection = function () {
        console.log("no protection");
        takeFee(this);
    };
    return SavingsAccount;
}(BankAccount));
var CheckingAccount = (function () {
    function CheckingAccount() {
    }
    return CheckingAccount;
}());
var myBank = new BankAccount("mark", 25);
var myChecking = new CheckingAccount();
// let myIChecking = new IFee();
var yourBank = {
    fee: 50,
    frequency: "yearly"
};
var yourChBank = {
    fee: 50,
    frequency: "yearly"
};
console.log("these are the fees: " + yourChBank.fee + " that occur " + yourChBank.frequency + ". isnt that a drag");
console.log("these are the fees: " + yourChBank.fee + " that occur " + yourChBank.frequency + " isnt that a drag");
