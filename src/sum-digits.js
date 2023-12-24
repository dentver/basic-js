const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {
    return n; // Если число однозначное, возвращаем его
  }

  let sum = 0;

  while (n > 0) {
    sum += n % 10; // Добавляем остаток от деления на 10 к сумме
    n = Math.floor(n / 10); // Удаляем последнюю цифру числа
  }

  return getSumOfDigits(sum); // Рекурсивно вызываем эту функцию с новой суммой
}

module.exports = {
  getSumOfDigits
};
