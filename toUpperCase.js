const http = require('http')
const port = process.argv[2]

const server = http.createServer(function(req,res){
    let data = ''
    req.addListener('data',function(chunk){
        if(req.method === 'POST'){
            data += chunk
        }
    })

    req.addListener('end',function(chunk){
        if(req.method === 'POST'){
            res.end(data.toUpperCase(),'utf8')
        }
    })
})

server.listen(port)

