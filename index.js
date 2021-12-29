function compare(a, b) {
  return a - b;
}

module.exports = function (array, compareFunc) {
  let comparetor = compareFunc || compare;
  if (!Array.isArray(array))
    throw TypeError(`Expected Array, but got ${typeof array}`);
  if (typeof comparetor !== "function")
    throw TypeError(`Expected Function, but got ${typeof comparetor}`);
  for (let i = 0; i < array.length - 1; i++) {
    if (comparetor(array[i], array[i + 1]) > 0) return false;
  }
  return true;
};
