// 数组扁平方法 
 
const arr = [1, [2, [3, ['a'], 'b'], 'c'], 'd'];

{
  // 1. ES6 flat （浏览器属性，node环境不支持）
  const flattenDeep = (arr) => arr.flat(Infinity);
  // console.log(flattenDeep(arr));
}

{
  // 2. ES5 reduce + 递归
  const flattenDeep = (arr) => arr.reduce((acc, val)=> Array.isArray(val)? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  // console.log(flattenDeep(arr));
}

{
  // 3. for 循环 + 递归
  const flatDeep = (arr) => {
    const result = [];
    arr.forEach(item=> {
      Array.isArray(item) ? result.push(...flatDeep(item)) : result.push(item)
    });
    return result
  }
  console.log(flatDeep(arr))

}