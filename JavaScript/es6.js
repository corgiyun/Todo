{
  // Object.assign
  const obj1 = {name: 'lily'};
  const obj2 = {age: 10};
  const obj3 = {};
  // const obj = Object.assign({}, obj3, ...obj2, ...obj1);
  // console.log(obj1);
  // console.log(obj2);
  // console.log(obj3);
  // console.log(obj); 
}

{
  // promise 执行顺序
  const p = new Promise((resolve, reject)=> {
    if(true) {
      // console.log('1');
    }
  });

  // p.then(see()).then(say())
  // console.log('2');

  function see() {
    console.log('I see');
  };

  function say() {
    console.log('I say');
  };
  // 1, I see, I say, 2
}

{
  // async
  let a = 0;
  let b = async() => {
    a = a + await 10;
    // console.log('2', a);
  };
  b();
  a++;
  // console.log('1', a);
}

{
  // 异步执行顺序
  async function async1() {
    console.log('async1 start'); // 2
    await async2();
    console.log('async1 end'); // 6
  };

  async function async2() {
    console.log('async2 start'); // 3
  };

  console.log('script start'); // 1

  setTimeout(()=> {console.log('setTimeout');}, 0); // 8

  async1();

  new Promise(resolve=> {
    console.log('promise1'); // 4
    resolve()
  }).then(()=> {
    console.log('promise2'); // 7
  });

  console.log('script end'); // 5
}

{
  console.log('----------------------------');
  function login() {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        let user = {
          name: 'Tom',
          age: 18
        };
        resolve(user)
      }, 600)
    })
  };

  function getData(user) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        if(user.age) {
          resolve('Success')
        }else {
          reject('Fail')
        }
      }, 600)
    })
  };

  // 不使用 async 的情况
  function doLogin() {
    login().then(getData).then(res=> {
      console.log(res);
    })
  };

  
  // 使用 async
  async function doLogin2() {
    const user = await login();
    const result = await getData(user);
    console.log(result);
  };

  doLogin() // Success;
  doLogin2() // Success
}