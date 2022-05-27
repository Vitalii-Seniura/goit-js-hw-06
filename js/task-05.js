const inputRef = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;;
});





