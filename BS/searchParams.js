{
  const url = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=9,7,8&local_province_id=33';
  const res = (url, params) =>  new URL(url).searchParams.get(params);
  console.log(res(url, 'elective'));
}