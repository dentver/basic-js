const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      // Если переданный аргумент не является массивом, вернуть 0
      return 0;
    }

    let maxDepth = 1; // Переменная для отслеживания максимальной глубины

    for (let i = 0; i < arr.length; i++) {
      const currentDepth = 1 + this.calculateDepth(arr[i]); // Вычисляем глубину текущего элемента с помощью рекурсии
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth; // Обновляем максимальную глубину, если требуется
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
