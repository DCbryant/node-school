var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2],function(err,list){
    if(err){
        throw err
    }
    
    list.forEach(function(element) {
        // 文件后缀名
        if(path.extname(element) === '.' +  process.argv[3]){
            console.log(element)
        }
    }, this);
})