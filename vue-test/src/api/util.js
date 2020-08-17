import axios from 'axios';

/**
 * @file 封装请求
 */
 
let header = {
  'Content-type': 'application/x-www-form-urlencoded'
};

let baseURL = process.env.BASE_URL
export const ajax = () => {
  return function (params) {
    params.opts = params.opts || {}
    return new Promise((resolve, reject) => {
        let data = params.method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
      axios({
        method: params.method,
        url: baseURL + params.url,
        [data]: params.opts,
        header: {
          key: 'ZooTeam'
        }
      }).then(res => {
          resolve(res.data)
      }).catch(err => {
      })
    })
  }
}