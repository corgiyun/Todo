let obj = {
  name: 'LM',
  age: 18
}

let obj2 = JSON.parse(JSON.stringify(obj));

let obj3 = Object.assign({}, obj);

let obj4 = {...obj};

obj2.age = 19;
obj3.age = 20;
obj4.age = 21

// console.log(obj.age); // 18


/**
 * 手动实现深拷贝
 */
function deepClone(obj, hash = new WeakMap()) {
  // 递归拷贝
  if(obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  if(obj === null || typeof obj !== 'object') {
    // 如果不是复杂数据类型，直接返回
    return obj
  };
  if(hash.has(obj)) {
    return hash.get(obj);
  } 
  // 如果 obj 是数组，那么 ojb.constructor 是 [function: Array]
  // 如果 obj 是对象，那么 ojb.constructor 是 [function: Object]
  let t = new obj.constructor();
  hash.set(obj, t);
  for(let key in obj) {
    // 递归
    if(obj.hasOwnProperty(key)) { // 是否是自身属性
      t[key] = deepClone(obj[key], hash)
    }
  }
  return t
}

let obj5 = deepClone(obj);
obj5.age = 22;
console.log(obj.age);