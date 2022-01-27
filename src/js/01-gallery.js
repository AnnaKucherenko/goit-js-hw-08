import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log( galleryContainer);
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageCardsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
        })
        .join('');
    console.log(createImageCardsMarkup);
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();   
    const imgEl = evt.target.classList.contains('gallery__image');
    
    if (!imgEl) {
        return;
    }
        
}

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });