
const categoriesItemsEl = document.querySelectorAll('li.item')
console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});


