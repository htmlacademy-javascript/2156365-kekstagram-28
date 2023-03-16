/*eslint-disable no-unused-vars */
const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15 ;
const LIKE_MAX_COUNT = 200;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = ['проводим классные выходные',
  'тестим новую камеру',
  'каникулы улет',
  'фоткаемся',
  'клааааааас',
  'жгет супер лето'];
const NAMES = ['вован', 'максим','яникс', 'сергей','кристина','маша'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array)=>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () =>{
  let lastGeneratorId = 0;


  return() => {
    lastGeneratorId += 1;
    return lastGeneratorId;

  };
};

const generatorCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1,2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generatorCommentId (),
  avatar: 'img/avatar-$ {getRandomInteger(1,AVATAR_COUNT)}.svg',
  message: createMessage(),
  name:getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: 'photos/$ {index}.jpg',
  description: getRandomArrayElement(DESCRIPTIONS),
  Likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from (
    { length: getRandomInteger(0, COMMENT_LINES)},
    createComment
  ),
});

const getPicture = () =>
  Array.from({length: PICTURE_COUNT},(_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPicture ();
