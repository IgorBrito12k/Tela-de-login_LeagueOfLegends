const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')

//como o input é irmão do span e vem antes do input no html,
//consigo utilizar ele com o target.previusElementSibling
const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {
    //se o input estiver vazio ele volta o span
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const[username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}
inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));


