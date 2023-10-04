import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');
    let currentIndex = 0;

    function createGalleryItem(item, index) {
    
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        const galleryLink = document.createElement('a');
        galleryLink.classList.add('gallery__link');
        galleryLink.href = item.original;

        const galleryImg = document.createElement('img');
        galleryImg.classList.add('gallery__image');
        galleryImg.src = item.preview;
        galleryImg.alt = item.description;
        galleryImg.title = item.description;
        galleryImg.dataset.source = item.original;
        galleryImg.dataset.index = index;

        galleryLink.appendChild(galleryImg);
        galleryItem.appendChild(galleryLink);

        return galleryItem;
    }

    galleryItems.forEach((item) => {
        const galleryElement = createGalleryItem(item);
        galleryList.appendChild(galleryElement);
        console.log(item.description);
    })

    let lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});

    lightbox.on('show.simplelightbox',() => {        
    })
})
