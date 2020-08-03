let arr = [1, 2];

// 1. instanceof
console.log(arr instanceof Array);

// 2. isArray
console.log(Array.isArray(arr))

// 3. constructor
const isArr = (arr) => {
  return typeof(arr) == 'object' && arr.constructor == Array
}
console.log(isArr(arr));

// 4. Object.prototype.toString.call
const isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';
console.log(isArray(arr));
