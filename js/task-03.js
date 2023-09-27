const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const containerGalary = document.querySelector(".gallery");
containerGalary.style.display = 'flex';
containerGalary.style.flexWrap = 'wrap';


const galleryMarkup = images.map(({url, alt}) => {
return `<li class = "galleryItem">
   <img src = "${url}" alt = "${alt}" class = "galleryImg">
</li>`
  
 }).join('');

console.log(galleryMarkup)

containerGalary.insertAdjacentHTML("beforeend", galleryMarkup)

console.log(containerGalary)
