## is-sorted

A small module to check if an Array is sorted.

![workflow](https://github.com/Luobinf/array-is-sorted/actions/workflows/node.js.yml/badge.svg)
[![codecov](https://codecov.io/gh/Luobinf/array-is-sorted/branch/main/graph/badge.svg?token=CTUHANR7WY)](https://codecov.io/gh/Luobinf/array-is-sorted)

![License]https://img.shields.io/apm/l/array-is-sorted-1

## Example
```JS
let sorted = require('is-sorted')

console.log(sorted([1, 2, 3]))
// => true

console.log(sorted([3, 1, 2]))
// => false

// supports custom comparators
console.log(sorted([3, 2, 1], function (a, b) { return b - a }))
// => true
```

## LICENSE MIT