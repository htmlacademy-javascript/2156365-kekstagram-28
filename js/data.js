import {
  PICTURE_COUNT,
  AVATAR_COUNT,
  LIKE_MIN_COUNT,
  COMMENT_LINES,
  DESCRIPTIONS,
  LIKE_MAX_COUNT,
  NAMES,
} from './const.js';
import {
  getRandomArrayElement,
  getRandomInteger,
  generatorCommentId

} from './util.js';

const createMessage = () =>
  Array.from({length: getRandomInteger(1,2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generatorCommentId (),
  avatar: `img/avatar-${getRandomInteger(1,AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name:getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from (
    { length: getRandomInteger(0, COMMENT_LINES.length)},
    createComment
  ),
});

export const generatePictures = () =>
  Array.from({length: PICTURE_COUNT},(_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

