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

  console.log(parseArr(arr));
}