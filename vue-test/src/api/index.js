/**
 * @file finance模块下的接口方法
 */
import {
  ajax,
} from './util'

let instance = ajax();

/**
 * 
 * @param {} opts 
 */
export function test(opts) {
  return instance({
    method: 'get',
    url: 'api/zoo/key',
    opts
  });
};