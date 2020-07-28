// 1. 数组乱序
{
  const arr = [1, 2, 3, 4, 5];
  const arrRandom = () => Math.random() > 0.5 ? -1 : 1
  console.log(arr.sort(arrRandom));
}

// 2. 实现数组元素相乘
{
  const arr2 = [1, 2, 3, 4, 5];
  const total = (arr) => arr.map(val=> val * val)
  console.log(total(arr2)); // [1, 4, 9, 16, 25]
}

// 3. 输入一个字符串，返回字符串是否有重复，重复返回第一个下标
{
  const getRepeat = (str) => {
    let _arr = str.split(''),
      _hash = {};
    for(const i in _arr) {
      if(_hash[_arr[i]]) {
        console.log(`重复元素： ${_arr[i]}, 首次出现下标为：${_arr.indexOf(_arr[i])}`);
      } else {
        _hash[_arr[i]] = true
      }
    }
  };

  const str = 'abab';
  getRepeat(str)
}



