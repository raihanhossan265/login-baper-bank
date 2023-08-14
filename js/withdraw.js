document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdrawInput-field');
    const withdrawInputValueSting = withdrawInputField.value;
    const newWithdrawInputValue = parseFloat(withdrawInputValueSting);
    
    const withdrawAmmount = document.getElementById('withdraw-ammount');
    const previoustWithdrawAmmountString = withdrawAmmount.innerText;
    const previoustWithdrawAmmount = parseFloat(previoustWithdrawAmmountString);

    const currentBalance = newWithdrawInputValue + previoustWithdrawAmmount;
    withdrawAmmount.innerText = currentBalance

    const currentBalanceOnBalance = document.getElementById('current-balance');
    const currentBalanceOnBalanceString = currentBalanceOnBalance.innerText
    const currentBalanceNumber = parseFloat(currentBalanceOnBalanceString);
    const totalBalance = currentBalanceNumber - newWithdrawInputValue;
    currentBalanceOnBalance.innerText = totalBalance

    withdrawInputField.value =''

})