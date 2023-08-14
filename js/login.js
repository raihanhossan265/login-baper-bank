document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email')
    const email= emailField.value
    emailField.value = ''
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = ''
    
    if(email === 'raihanhossan@gmail.com' && password ==='Raihan2324@#'){
        window.location.href = 'bank.html'
    }else{
        alert('Please give me valid info to varify you.')
    }
})

