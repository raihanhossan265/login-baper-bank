document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputField = document.getElementById('depositInput-field');
    const newDepostiInputValueString = depositInputField.value;
    const newDepostiInputValue = parseFloat(newDepostiInputValueString)

    const depositAmmount = document.getElementById('deposit-ammount');
    const previousDepositTotalString = depositAmmount.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentAmmount = newDepostiInputValue + previousDepositTotal
    depositAmmount.innerText = currentAmmount;

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceString = currentBalance.innerText;
    const currentBalanceOnBalance = parseFloat(currentBalanceString);
    const totalBalance = newDepostiInputValue + currentBalanceOnBalance;
    currentBalance.innerText = totalBalance

    depositInputField.value = ''
})