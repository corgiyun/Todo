function _ajax() {
  let xhrHttp;
  window.XMLHttpRequest?
    xhrHttp = window.XMLHttpRequest:
    xhrHttp = new ActionXObject('Microsoft.XMLHTTP');

  // 判定执行状态
  xhrHttp.onreadystatechange = function () {
    if (xhrHttp.readyState == 4) {
      // 响应完成
      if (xhrHttp.status == 200) {
        // 请求成功
        console.log(xhrHttp.responseText)
      }
    }
  };
};