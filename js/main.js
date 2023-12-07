const images = [
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',},
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',},
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',},
  { preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',},
  { preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',},
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',},
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',},
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',},
  { preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',},
]

      // Розмітка елементів галереї

const elements = images.map((image) => {
  const list = document.createElement('li');
  list.classList.add('gallery-item');

  const a = document.createElement('a');
  a.href = image.original;
  a.classList.add('gallery-link');

  const img = document.createElement('img');
  img.src = image.preview;
  img.dataset.source = image.original;
  img.alt = image.description;
  img.classList.add('gallery-image');

  a.appendChild(img);
  list.appendChild(a);
  return list;
  })

      // Контейнер галереї

const galleryContainer = document.querySelector('.gallery');

      // Модальне вікно

let instance = null;

      // Відкриваємо модальне вікно
   
galleryContainer.addEventListener('click', function (event) {
  event.preventDefault();

      // Чи є клік на зображення?

  if (event.target.classList.contains('gallery-image')) {
    const largeImage = event.target.dataset.source;

      // Закриття попереднього модального вікна

    if (instance) {instance.close();}

      // Нове модальне вікно

    instance = basicLightbox.create(`<img src="${largeImage}" alt="Large Image">`,);
    instance.show(() => console.log('now visible'));
     
      // Чи натиснуто "esc"?

    document.addEventListener('keydown', closeOnEscape);}})

      // Закриття модального вікан при кліку на "esc"

function closeOnEscape(event) {
  if (event.key === 'Escape' && instance) {
    instance.close(() => console.log('not visible'))

      // Видалення прослуховування події після закриття вікна.
    document.removeEventListener('keydown', closeOnEscape);}}

  galleryContainer.append(...elements);

  