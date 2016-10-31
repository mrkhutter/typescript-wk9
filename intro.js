var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BankAccount = (function () {
    function BankAccount(name, initialAmount) {
        this.name = name;
        this.initialAmount = initialAmount;
        this._name = name;
        this._currentAmount = initialAmount;
    }
    BankAccount.prototype.overdraftProtection = function () {
        return Math.floor(this._currentAmount / 1000) * 100;
    };
    return BankAccount;
}());
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(name, initialAmount, beneficiaryAccount) {
        _super.call(this, name, initialAmount);
        this.name = name;
        this.initialAmount = initialAmount;
        this.beneficiaryAccount = beneficiaryAccount;
        this._beneficiaryAccount = beneficiaryAccount;
    }
    SavingsAccount.prototype.overdraftProtection = function () {
        console.log("no protection");
        return 0;
    };
    return SavingsAccount;
}(BankAccount));
