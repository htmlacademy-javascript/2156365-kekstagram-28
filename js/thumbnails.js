
//находим шаблон в разметке и  в нем ищем класс picture
const thumbnailTemplete = document
  .querySelector('#picture')
  .content.querySelector('.picture');
//находим контейнер с елементом pictures
const container = document.querySelector('.pictures');

//клонируем для каждого объекта через функцию
const createThumbnail = ({ comments ,description, likes, url, id })=> {
  const thumbnail = thumbnailTemplete.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  return thumbnail;
};

const renderThumbnails = (thumbnails) => {
  const fragment = document.createDocumentFragment();
  thumbnails.forEach((thumbnail) => {
    const pictureElement = createThumbnail(thumbnail);
    fragment.append(pictureElement);
  });
  container.append(fragment);
};

export {renderThumbnails};

