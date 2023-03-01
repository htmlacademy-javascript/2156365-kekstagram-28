/* Функция для проверки длины строки.
 Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
 если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:
 Cтрока короче 20 символов
имяФункции('проверяемая строка', 20); // true
 Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
 Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false
*/

/*eslint-disable no-unused-vars*/

const isCheckString = (string ,length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

/*   стрелочная функция
const isCheckString =(string , length) => {
  return string.length <= length;
} */


/*Функция для проверки, является ли строка палиндромом.
 Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
 // Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false */

const isPalidrom = (string) => {
  const tempString = string.toLowerCase ();
  let reverseString = '' ;
  for (let i = tempString.length - 1; i >= 0 ;i--){
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

/*когда в строке встречаются пробелы. Они не должны учитываться при проверке!
имяФункции('Лёша на полке клопа нашёл '); // true
const isPalidrom = (string) => {
  const tempString = string
  .toLowerCase ()
  .replaceAll(' ','');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0 ;i--){
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
*/


/*Функция, которая принимает строку,
 извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
 Если в строке нет ни одной цифры, функция должна вернуть NaN:

 имяФункции('2023 год');            // 2023
 имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
 имяФункции('агент 007');           // 7
 имяФункции('а я томат');           // NaN
*/
const extractNumber = (string) => {
  let result = '';
  for (let i = 0;i < string.length ; i++){
    if (!Number.isNaN(parseInt(string.at(i),10))){
      result += string.at(i);
    }
  }
  return parseInt(result,10);
};

/*Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число:

имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result ='';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result , 10);
}
*/


/*Функция, которая принимает три параметра: исходную строку,
 минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
  Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
   Если «добивка» слишком длинная, она обрезается с конца.

Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// Добавочный символ использован один раз
имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имяФункции('qwerty', 4, '0'); // 'qwerty'
Попробуйте не использовать при этом функцию padStart()
*/
const myPadStart = (string, minLenght,pad) => {
  const actualPad = minLenght - string.length;

  return actualPad <= 0
    ? string
    : pad.slice(0,actualPad % pad.length) + pad.repeat(actualPad /
  pad.length) + string;
};
