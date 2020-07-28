// new 的实现原理

function _new() {
  // 创建新的对象
  let target = {};
  // 第一个参数是构造函数
  let [constructor, ...args] = [...arguments]
  // 执行【原型】链接， target是constructor 的实例
  target.__proto__ = constructor.prototype;
  // 执行构造函数，将属性或方法添加到创建的空对象上
  let result = constructor.apply(target, args);
  if(result && (typeof (result) == 'object' || typeof (result) == 'function')) {
    // 如果构造函数执行的结构返回是一个对象，那么返回这个对象
    return result
  } 
  // 如果构造函数返回的不是一个对象，返回创建的对象
  return target
}

function People(name, age) {
  this.name = name;
  this.age = age
}

//通过 _new 创建构造实例
let people1 = _new(People, 'Jack',20);
console.log(people1.name) //Jack
console.log(people1.age) //20