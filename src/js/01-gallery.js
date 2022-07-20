import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
console.log(gallery);

const renderList = (products) => products.map(({ original, preview, description }) => `<a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`)
    .join("");

renderList(galleryItems)

gallery.insertAdjacentHTML("beforeend"  , renderList(galleryItems))

let galleryA = new SimpleLightbox('.gallery a', {captionsData : "alt",captionDelay : 250} );
