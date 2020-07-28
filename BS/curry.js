{
  // 普通函数 add
  function add(x, y) {
    return x + y
  };

  // currying 之后
  function curryAdd(x) {
    return function(y) {
      return x + y
    }
  }

  console.log(add(1, 2));
  console.log(curryAdd(1)(2));
}

{
  // 1. 参数复用
  // 普通函数封装
  function check(reg, text) {
    return reg.test(text)
  }
  console.log(check(/^1\d{10}$/, '185')); // false
  console.log(check(/[a-z]+/g, 'abc')); // true

  // curry 封装
  function curryCheck(reg) {
    return function(text) {
      return reg.test(text)
    }
  }
  const isPhone = curryCheck(/^1\d{10}$/);
  const isCode = curryCheck(/[a-z]+/g);

  console.log(isPhone('18888888888')); // true
  console.log(isCode('qwe')); // true`
}

{
  // 经典面试题
  // 实现一个 add 方法，使计算结果能够满足如下预期
  // add(1)(2)(3) = 6;
  // add(1)(2)(3)(4)(5) = 15;
  function add(a) {
    function sum(b) {
      a = a + b;
      return sum
    }
    sum.toString = function() {
      return a
    }
    return sum
  }
  console.log(add(1)(2)(3)(4)(5));
}

{
  const add = (...args) => args.reduce((acc, next)=> acc + next, 0);
  console.log(add(1, 2, 3, 4, 5));
}