import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
let currentIndex = 0;

function createGalleryItem(item, index) {
    
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = item.preview;
    galleryImg.alt = item.description;
    galleryImg.dataset.source = item.original;
    galleryImg.dataset.index = index;

    galleryLink.appendChild(galleryImg);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
}

galleryItems.forEach((item) => {
    const galleryElement = createGalleryItem(item);
    galleryList.appendChild(galleryElement);
})

galleryList.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const fullSizeImg = event.target.dataset.source;
        currentIndex = parseInt(event.target.dataset.index);

        // alert('Клик на изображении с URL:' + fullSizeImg);

        const instance = basicLightbox.create(`
            <img src="${fullSizeImg}" width="800" height="600">
        `);

        instance.show();

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                instance.close();
            } 
        });
    }
});
