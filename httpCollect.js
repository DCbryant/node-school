const http = require('http')
let url = process.argv[2]

http.get(url,function(res){
    let result = ''
    res.setEncoding('utf8')

    res.on('data',function(data){
        result += data
    })
    res.on('end',function(data){
        console.log(result.length)
        console.log(result)
    })
})