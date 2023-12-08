const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]

// Розмітка елементів галереї

const elements = images.map((image) => {
  const list = document.createElement('li')
  list.classList.add('gallery-item')

  const a = document.createElement('a')
  a.href = image.original
  a.classList.add('gallery-link')

  const img = document.createElement('img')
  img.src = image.preview
  img.dataset.source = image.original
  img.alt = image.description
  img.classList.add('gallery-image')

  a.appendChild(img)
  list.appendChild(a)
  return list
})

// Отримання контейнера галереї
const galleryContainer = document.querySelector('.gallery')
let instance = null

// Закриття вікна при натисканні "Escape" / видалення слухача
function closeOnEscape(event) {
  if (event.key === 'Escape' && instance) {
    instance.close(() => console.log('not visible'))
    document.removeEventListener('keydown', closeOnEscape)
  }
}

// Закриття вікна при кліку на бекдроп / видалення слухача
function closeOnOutsideClick(event) {
  if (event.target.classList.contains('basicLightbox')) {
    instance.close(() => console.log('not visible'))
    document.removeEventListener('click', closeOnOutsideClick) 
  }
}

// Додавання слухача для відкриття вікна
galleryContainer.addEventListener('click', function (event) {
  event.preventDefault()

  if (event.target.classList.contains('gallery-image')) {
    const largeImage = event.target.dataset.source

    // Закриття попереднього вікна
    if (instance) {
      instance.close()
    }

    // Створення нового вікна
    instance = basicLightbox.create(
      `<img src="${largeImage}" alt="Large Image">`,
    )

    // Показ модального вікна / додавання слухача для закриття вікна при кліку на бекдроп
    instance.show(() => {
      console.log('now visible')
      document.addEventListener('click', closeOnOutsideClick)
    })

    // Додавання слухача для закриття вікна при натисканні "Escape"
    document.addEventListener('keydown', closeOnEscape)
  }
})

// Додавання елементів галереї до контейнера
galleryContainer.append(...elements)
