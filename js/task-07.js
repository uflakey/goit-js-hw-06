const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${fontSizeControl.value}`;

fontSizeControl.addEventListener("input", () => {
  const textSize = fontSizeControl.value;
  text.style.fontSize = `${textSize}px`;

  console.log(fontSizeControl.value);
  console.log(text.style.fontSize);
});
