interface IFee {
    fee: number;
    frequency: string;
}

function takeFee(feeObject: IFee) {
    return "taking the fee: " + feeObject.fee;
}

class BankAccount {
    name: string;
    amount: number;
    currentAmount: number;

    constructor(accountHolderName: string, initialAmount: number){
        this.name = name;
        this.amount = initialAmount;
        this.currentAmount = initialAmount
    }

    overdraftProtection(): number {
        return Math.floor(this.currentAmount / 1000) * 100;    
    } 

    makeWithdrawal(amount: number){
        this.currentAmount -= amount;
    }
}



class SavingsAccount extends BankAccount implements IFee{

    fee: number;
    frequency: string;

    beneficiary: string;

    constructor(accountHolderName: string, initialAmount: number, beneficiaryAccount: string){
        super(accountHolderName, initialAmount);
        this.beneficiary = beneficiaryAccount;
        this.fee = 25;
    }

    overdraftProtection(){
        console.log("no protection");
        takeFee(this);
        return 0;
    }
}

class CheckingAccount implements IFee {
    fee: number;
    frequency: string;
}

let myBank = new BankAccount("mark", 25);
let myChecking = new CheckingAccount();

// let myIChecking = new IFee();

let yourBank: IFee = {
    fee: 50,
    frequency: "yearly"
}

let yourChBank: CheckingAccount = {
    fee: 50,
    frequency: "yearly"
}

console.log("these are the fees: " + yourChBank.fee + " that occur " + yourChBank.frequency + ". isnt that a drag");

console.log(`these are the fees: ${yourChBank.fee} that occur ${yourChBank.frequency} isnt that a drag`);
