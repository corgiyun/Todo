{
  // 1. 两数之和，返回符合条件的数组下标
  let arr = [2, 7, 11, 16], result = 23;

  const findNum = (arr, result) => {
    for(let i = 0; i < arr.length; i++) {
      let p = arr.indexOf(result - arr[i]);
      if(p > 0) {
        return [i, p]
      }
    }
    return null
  };

  console.log(findNum(arr, result));
}

{
  // 输出代码执行结果
  function wait() {
    return new Promise(resolve=> {
      setTimeout(resolve, 1000 * 10)
    })
  }

  async function main() {
    console.time();
    const x = wait();
    const y = wait();
    const z = wait();
    await x;
    await y;
    await z;
    console.timeEnd();
  };

  main() // 10s后同时执行结束
}