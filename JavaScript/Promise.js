// 简单实现 Promise
class Promise {
  callbacks = [];
  state = 'pending'; // 状态
  value = null; // 保存结果
  constructor(fn) {
    fn(this._resolve.bind(this))
  }

  then(onFulfilled) {
    if (this.state === 'pending') { // 在 resolve 之前，跟之前逻辑一样，添加到 callbacks 中
      this.callbacks.push(onFulfilled)
    } else { // 在 resolve 之后，直接执行回调没，返回结果了
      onFulfilled(this.value)
    }
    return this;
  }
  _resolve(value) {
    this.state = 'fulfilled'; // 改变状态
    this.value = value; // 保存结果
    this.callbacks.forEach(fn=> fn(value))
  } 
}

// Promise 应用
let p = new Promise(resolve=> {
  // setTimeout(()=> {
    console.log('done');
    resolve('2秒')
  // }, 2000)
}).then(tip=> {
  console.log('then1',tip);
}).then(tip=> {
  console.log('then2,', tip);
})