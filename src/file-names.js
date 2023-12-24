const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileCount = {};

  const result = [];

  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    let newName = originalName;

    if (fileCount[originalName]) {
      let suffix = fileCount[originalName];
      newName = `${originalName}(${suffix})`;

      while (fileCount[newName]) {
        suffix++;
        newName = `${originalName}(${suffix})`;
      }

      fileCount[newName] = 1;
      fileCount[originalName]++;
    } else {
      fileCount[originalName] = 1;
    }

    result.push(newName);
  }

  return result;
}

module.exports = {
  renameFiles
};
