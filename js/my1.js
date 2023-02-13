// js部分
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const getHostName = function (str) {
    let { hostname } = url.parse(str);
    return hostname;
};

http.createServer((req, res) => {
    let refer = req.headers['referer'] || req.headers['referrer'];  // 请求头都是小写的
    // 先看一下refer的值，去和host的值作对比，不相等就需要防盗链了
    // 要读取文件 返回给客户端
    let { pathname } = url.parse(req.url);
    let src = path.join(__dirname, 'public', '.' + pathname);
    // src代表我要找的文件
 
 
    fs.stat(src, err => {   // 先判断文件存不存在
        if (!err) {
            if (refer) {    // 不是所有图片都有来源
                let referHost = getHostName(refer);
                let host = req.headers['host'].split(':')[0];
 
 
                if (referHost !== host) {
                    // 防盗链
                    fs.createReadStream(path.join(__dirname, 'public', './1.jpg')).pipe(res);
} else {
                    // 正常显示，如果路径存在，可以正常显示直接返回
                    fs.createReadStream(src).pipe(res);
                }
            } else {
                // 正常显示，如果路径存在，可以正常显示直接返回
                fs.createReadStream(src).pipe(res);
            }
        } else {
            res.end('end');
        }
    });
 
 
}).listen(8888)