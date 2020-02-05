// Object binding and references
let myAccountDetails = {
    name: 'Test user',
    income: 1000,
    expenses:0
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    let accountState = (account.expenses > account.income) ? console.error(`Insufficient Funds to withdraw`)
                                                            : updateIncome(account, amount)
}

let resetIncome = function(account) {
    account.income=0
    account.expenses=0
}

let updateIncome = function(account, amount) {
    account.income = account.income - amount
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance} $${account.income}`
}

console.log(myAccountDetails)
console.log(getAccountSummary(myAccountDetails))