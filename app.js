function Strength(password) {
    let i = 0;
    if (password.length > 6) {
        i++;
    }
    if (password.length >= 6) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[0-9]/.test(password)) {
        i++
    }
    if (/[A-Za-z0-8]/.test(password)) {
        i++
    }
    // if (/[A-Za-z0-8#?!@$%^&*-^$|\s+]/.test(password)) {
    //     i++
    // }
    return i;
}
let container = document.querySelector('.container');
document.addEventListener("keyup", function (e) {
    let password = document.querySelector('#myPassword').value;
    let strength = Strength(password);
    if (strength <= 0) {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
        container.classList.remove('VeryStrong');

    }
    else if (strength <= 2) {
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
        container.classList.remove('VeryStrong');

    }
    else if (strength >= 2 && strength <= 4) {
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
        container.classList.remove('VeryStrong');

    }
    else if (strength >= 4 && strength <= 8) {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
        container.classList.remove('VeryStrong');
    }
    else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
        container.classList.add('VeryStrong')
    }
})

/*-------Password Show & Hide Function-------*/
let pws = document.querySelector('#myPassword');
let show = document.querySelector('.show');
show.onclick = function () {
    if (pws.value !== "") {
        if (pws.type === 'password') {
            pws.setAttribute('type', 'text');
            show.classList.add('hide');
        }
        else {
            pws.setAttribute('type', 'password');
            show.classList.remove('hide');
        }
    }
    
}
