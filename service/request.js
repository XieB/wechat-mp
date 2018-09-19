// 小程序与后端情求接口
let baseUrl = 'http://wx-joke.api.etab.top';
// 定义方法返回Promise参数,obj 为wx.request 方法中所需参数
let req = function (obj) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: baseUrl + obj.url,
            data: obj.data,
            header: obj.header,
            method: obj.method == undefined ? "get" : obj.method,
            success: function (data) {
                // 回调成功执行resolve
                resolve(data)
            },
            fail: function (data) {
                // 回调失败时
                if (typeof reject == 'function') {
                    reject(data);
                } else {
                    console.log(data);
                }
            },
        })
    })
}


let request = {};
request.get = function (url = '', obj = {}) {
    let requestObj = Object.assign(obj, { url: url });
    return req(requestObj);
}


request.post = function (url = '', obj = {}) {
    let requestObj = Object.assign(obj, { url: url, method: 'post' });
    return req(requestObj);
}


export default request;