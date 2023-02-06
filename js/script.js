let bars = document.querySelector('.fa-bars'),
    close = document.querySelector('.fa-xmark');

    let ulList = document.querySelector('nav ul');
console.log(ulList)
bars.addEventListener('click', function(){
    console.log('bars');
    bars.style.display ='none';
    close.style.display ='block';
    ulList.style.height='100vh';
    ulList.style.opacity='1';
    ulList.style.visibility='visible';
})

close.addEventListener('click', function(){
    console.log('close');
    bars.style.display ='block';
    close.style.display ='none';
    ulList.style.height='0'
    ulList.style.opacity='0';
    ulList.style.visibility='hidden';

})




let loginMail = document.getElementById('mail'),
    loginMailLabel = document.getElementById('mail-label');

loginMail.onblur = function(){
    if (loginMail.value === '') {
    }
    else {
        loginMailLabel.classList.add('top-label');
    }
}

let loginPass = document.getElementById('pass'),
    loginPassLabel = document.getElementById('pass-label');

loginPass.onblur = function(){
    if (loginPass.value === '') {
    }
    else {
        loginPassLabel.classList.add('top-label');
    }
}

let eye1 = document.getElementById('eye1'),
    eyeSlash1 = document.getElementById('eye-slash1');

eye1.addEventListener('click', function(){
    loginPass.type = 'text';
    eye1.classList.toggle('disable');
    eyeSlash1.classList.toggle('disable');
})

eyeSlash1.addEventListener('click', function(){
    loginPass.type = 'password';
    eye1.classList.toggle('disable');
    eyeSlash1.classList.toggle('disable');
})

let signUser = document.getElementById('user'),
    signUserLabel = document.getElementById('user-label');

signUser.onblur = function(){
    if (signUser.value === '') {
    }
    else {
        signUserLabel.classList.add('top-label');
    }
}

let signMail = document.getElementById('email'),
    signMailLabel = document.getElementById('email-label');

signMail.onblur = function(){
    if (signMail.value === '') {
    }
    else {
        signMailLabel.classList.add('top-label');
    }
}

let signPass = document.getElementById('password'),
    signPassLabel = document.getElementById('password-label');

    

    let signConfPass = document.getElementById('conf-password'),
    signConfPassLabel = document.getElementById('conf-password-label'),
    warningMsg = document.getElementById('warning');
    
    signPass.onblur = function(){
        if (signPass.value !== signConfPass.value) {
            console.log('wrong password');
            warningMsg.style.display = 'block';
        }
        else {
            warningMsg.style.display = 'none'
        }
        if (signPass.value === '') {
        }
        else {
            signPassLabel.classList.add('top-label');
        }
    }
signConfPass.onblur = function(){
    if (signConfPass.value !== signPass.value) {
        console.log('wrong password');
        warningMsg.style.display = 'block';
    }
    else {
        warningMsg.style.display = 'none'
    }
    if (signConfPass.value === '') {}
    else {
        signConfPassLabel.classList.add('top-label');
    }
}

let eye2 = document.getElementById('eye2'),
    eyeSlash2 = document.getElementById('eye-slash2');

eye2.addEventListener('click', function(){
    signPass.type = 'text';
    eye2.classList.toggle('disable');
    eyeSlash2.classList.toggle('disable');
})

eyeSlash2.addEventListener('click', function(){
    signPass.type = 'password';
    eye2.classList.toggle('disable');
    eyeSlash2.classList.toggle('disable');
})

let eye3 = document.getElementById('eye3'),
    eyeSlash3 = document.getElementById('eye-slash3');

eye3.addEventListener('click', function(){
    signConfPass.type = 'text';
    eye3.classList.toggle('disable');
    eyeSlash3.classList.toggle('disable');
})

eyeSlash3.addEventListener('click', function(){
    signConfPass.type = 'password';
    eye3.classList.toggle('disable');
    eyeSlash3.classList.toggle('disable');
})

let signIn = document.querySelector('.sign-in'),
signUp = document.querySelector('.sign-up');
let loginBtn = document.querySelector('.sign-up .welcome button'),
    signBtn = document.querySelector('.sign-in .welcome button');

    console.log(loginBtn)
    console.log(signBtn)

loginBtn.onclick = function() {
    console.log('loggin check');
    signIn.style.display = 'flex';
    signUp.style.display='none';
    
}

signBtn.onclick = function() {
    console.log('sign check');
    signUp.style.display = 'flex';
    signIn.style.display='none';
    

}