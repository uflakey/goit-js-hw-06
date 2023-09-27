



const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click",incrementClick);

function incrementClick(event) {
  
    counterValue += 1;
 counter.textContent = counterValue
};


function decrementClick(event) {
  
    counterValue -= 1;
 counter.textContent = counterValue
};



// console.log(decrementBtn.dataset.action);

// console.log(incrementBtn.dataset.action);


