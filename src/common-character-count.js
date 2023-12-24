const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = Array.from(s1);
  let arr2 = Array.from(s2);

  let result = 0;

  arr1.forEach(function(e1) {
    for (let i = 0; i < arr2.length; i++) {
      if (e1.toLowerCase() === arr2[i].toLowerCase()) {
        result += 1;
        arr2.splice(i, 1);
        break; // Добавляем break, чтобы избежать повторного сравнения удаленного элемента
      }
    }
  });

  return result;
}

module.exports = {
  getCommonCharacterCount
};
