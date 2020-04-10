const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showRequired(input, "Emaili is not valid");
    }
}


function showRequired(input, message){
    const prent = input.parentElement;
    const small = prent.querySelector('small');
    prent.className = 'form-control error'; 
    small.innerText = message;
    
}

function showSuccess(input, message){
    const prent = input.parentElement;
    prent.className = 'form-control success'; 

    
}


function addRequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim() === ''){
            showRequired(input, `${decoField(input)} is required!`);
        }else{
            showSuccess(input, 'Success')
        }
    })
}

function decoField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function passMatch(input, input2){
    if(input.value !== input2.value){
        showRequired(input2, 'Password do not match');
    }else{
        showSuccess(input2)
    }
}


function checkLentgh(input, min, max){
    if(input.value.length < min){
        showRequired(input, `${decoField(input)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showRequired(input, `${decoField(input)} must be less than ${max} character`);
    }else{
        showSuccess(input);
    }
}

form.addEventListener('submit', formHandle);

function formHandle(e){
    e.preventDefault();

    addRequired([username, email, password2, password]);
    checkLentgh(username, 3, 15);
    checkLentgh(password, 6, 25);
    checkEmail(email);    
    passMatch(password, password2);

    
    // if(username.value === ''){
    //     showError(username, "Enter Your Username");
    // }else{
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email, "Enter Your email");
    // }else if(!validateEmail(email.value)){
    //     showError(email, "email is not valid");
    // }else{
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, "Enter Your Password");
    // }else{
    //     showSuccess(password);
    // }

    // if(password2.value === ''){
    //     showError(password2, "Enter Your Password");
    // }else{
    //     showSuccess(password2);
    // }
    
}
