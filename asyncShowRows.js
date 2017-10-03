var fs = require('fs')

// utf-8直接将buffer转化为字符串了
fs.readFile(process.argv[2],'utf-8',function(err,data){
    if(err){
        throw err
    }
    let line = data.split('\n').length - 1
    console.log(line)
})