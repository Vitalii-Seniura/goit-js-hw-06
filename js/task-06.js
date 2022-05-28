const input = document.querySelector('input');
const maxLengthInput = input.getAttribute('data-length');
const maxLength = Number(maxLengthInput);

input.addEventListener('blur', (event) => {
    
    if (input.value.length !== maxLength) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid')
    }

});
