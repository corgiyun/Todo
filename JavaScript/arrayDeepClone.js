let arr1 = [{name: 'Tom', age: 1}, {name: 'Judy', age: 2}];
// let arr2 = arr1.slice(0);
// let arr3 = arr1.concat();

// arr2[1].age = 3;
// arr3[1].age = 4;

// console.log(arr1); // age: 4
// console.log(arr2); // age: 4
// console.log(arr3); // age: 4

// 当数组为基本数据类型时，slice 和 concat 可以实现深拷贝，但是当数组中有引用类型时如对象时，则会改变原数组
/**
 * Array deepClone
 */
const deepClone = (obj) => {
  // 只拷贝对象
  if(typeof(obj) !== 'object') return;

  // 根据 obj 的类型创建数组或者对象
  let newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    // 遍历 obj，并判断是 obj 的属性才进行拷贝
    if(obj.hasOwnProperty(key)) {
      // 判断属性的类型，如果是对象递归调用深拷贝
      newObj[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key];
    }
  };
  return newObj
}

let obj1 = {
  name: 'Lily',
  age: 16
}

let obj2 = deepClone(obj1);
obj2.age = 18;
console.log(obj1); // age: 16
console.log(obj2); // age: 18

let arr4 = deepClone(arr1);
arr4[1].age = 10;
console.log(arr1); // age: 2
console.log(arr4); // age: 10