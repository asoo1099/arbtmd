const http = require('http');
const fs = require('fs');
const path = require('path');

// 重命名文件
function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return;
        }
        console.log('File renamed successfully.');
    });
}

// 发送 HTTP GET 请求
function sendHttpGetRequest(url, callback) {
    http.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            callback(null, data);
        });
    }).on('error', (err) => {
        callback(err, null);
    });
}
