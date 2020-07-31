{
  var name = 'Tom';

  (function() {
    if(name == undefined) {
      name = 'Jack';
      console.log(`Good bye ${name}`);
    }else {
      // console.log(`Hello ${name}`);
    }
  })()
}

{
  const url = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=9,7,8&local_province_id=33';
  const res = (url, params) =>  new URL(url).searchParams.get(params);
  // console.log(res(url, 'elective'));
}

{
  const entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd'
        }
      },
      d: {
        xx: 'adxx'
      },
      e: 'ae'
    },
    f: {
      g: 'afg'
    }
  };
  
  function output(obj, parentKey = '', result = {}) {
    for(const key in obj) {
      if(obj.hasOwnProperty(key)) {
        let keyName = `${parentKey}${key}`;
        if(typeof obj[key] == 'object') {
          output(obj[key], keyName + '.', result)
        }else {
          result[keyName] = obj[key]
        }
      }
    };
    return result;
  }
  
  // console.log(output(entry));
  
}

{
  // 数组深拷贝
  let arr = [123, {a: 1}, {a: {b: 1}}, {a: '1'}, {a: {b: '1'}}, ',meiLi'];
  const parseArr = (arr) => [...new Set(arr.map(JSON.stringify))].map(JSON.parse);

  // console.log(parseArr(arr));
}

{
  // 移动数组元素到末尾
  const arr = [0, 0, 1, 0, 2, 0, 3];
  const moveArr = (arr, ele) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
      if(arr[i] == ele) {
        arr.splice(i, 1);
        arr.push(ele)
      }
    }
    return arr;
  };
  // console.log(moveArr(arr, 0));
}

{
  const data = [
    {
      name: '张三',
      id: 1,
      tel: 13333333333
    },
    {
      name: '李四',
      id: 2,
      tel: 15565656565
    },
    {
      name: '王五',
      id: 3,
      tel: 17777777777
    },
    {
      name: '郭六',
      id: 4,
      tel: 18888888888
    },
  ];

  const parseData = (arr) => {
    let result = {}
    arr.map(item=> {
      for(const key in item) {
        result[key] || (result[key] = []);
        result[key].push(item[key])
      }
    })
    return result;
  }
  console.log(parseData(data));
}