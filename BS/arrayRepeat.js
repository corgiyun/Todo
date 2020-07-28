// 数组去重
const arr = [1, 2, 3, 4, 5, 2, 4, 'a', 'b', 'c', 'b', 'a'];

{
  // 1. new Set
  const uniq = (arr) => [...new Set(arr)];
  // console.log(uniq(arr));
}

{
  // 2. indexOf
  const uniq = (arr) => {
    let res = [];
    arr.forEach(ele => {
      if(res.indexOf(ele) === -1) { // 使用 includes 同理
        res.push(ele)
      }
    });
    return res
  };
  // console.log(uniq(arr));
}

{
  // 3. reduce + includes
  const uniq = (arr) => arr.reduce((prev, cur)=> prev.includes(cur)? prev : [...prev, cur], []);
  // console.log(uniq(arr));
}

{
  // 4. filter + indexOf
  const uniq = (arr) => arr.filter((item, index, self)=> self.indexOf(item) === index)
  // console.log(uniq(arr));
}

{
  // 5. map
  const uniq = (arr) => {
    let map = new Map();
    let result = new Array();
    arr.forEach(ele=> {
      if(map.has(ele)) {
        map.set(ele, true)
      } else {
        map.set(ele, false);
        result.push(ele)
      }
    })
    return result
  }
  // console.log(uniq(arr));
}