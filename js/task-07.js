const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


fontSizeControl.addEventListener('input', () => {
    const textSize = fontSizeControl.value;
    text.style.fontSize = `${textSize}px`;


    
});
