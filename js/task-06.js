
const input = document.querySelector('#validation-input');
const length = Number(input.dataset.length);
console.log(length)

input.addEventListener('blur', checkLength);

function checkLength(event) {
    const inputLength = event.currentTarget.value.length;
    console.log(event)
    
    if (inputLength === length) {
       input.classList.add('valid')
    input.classList.remove('invalid')
   }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    
   }




}
