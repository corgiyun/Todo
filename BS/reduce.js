{
  // 1. 扁平化数组
  const arr = [1, [2, [3, ['a'], 'b'], 'c'], 'd'];
  const unique = (arr) => arr.reduce((acc, cur)=> Array.isArray(cur) ? acc.concat(unique(cur)): acc.concat(cur), []);
  // console.log(unique(arr));
}

{
  // 2. 计算数组中每个元素出现的次数
  const arr = ['a', 'b', 'c', 'd', 'c', 'a'];
  const getCount = (arr) => arr.reduce((acc, cur)=> {
    cur in acc || (acc[cur] = 0);
    acc[cur] ++ ;
    return acc
  }, {});
  // console.log(getCount(arr));
}

{
  // 3. 按属性对 object 分类
  const arr = [
    { name: 'Lily', age: 20, gender: 'man' },
    { name: 'Mary', age: 20, gender: 'women' },
    { name: 'Tom', age: 21, gender: 'man' },
  ];

  const res = (arr, attr) => arr.reduce((obj, item)=> {
    const key = item[attr]
    key in obj || (obj[key] = []);
    obj[key].push(item);
    return obj
  }, {});
  // console.log(res(arr, 'gender'));
}

{
  // 4. 使用扩展运算符处理对象数组中的数组
  const arr = [
    { name: 'Anna', color: ['red', 'orange', 'yellow'], age: 20 },
    { name: 'Diva', color: ['black', 'gray', 'white'], age: 21 },
    { name: 'Leo', color: ['pink', 'green', 'blue'], age: 22 },
  ];

  const res = (arr) => arr.reduce((arr, item)=> [...arr, ...item.color], []);
  // console.log(res(arr));
}

{
  // 5. 数组去重
  const arr = ['a', 'b', 'c', 'd', 'c', 'a'];
  const res = (arr) => arr.reduce((acc, cur)=> acc.includes(cur) ? acc : [...acc, cur], []);
  console.log(res(arr));
}