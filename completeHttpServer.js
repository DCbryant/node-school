const http = require('http')
const url = require('url')
const querystring = require('querystring')
const port = process.argv[2]

const server = http.createServer(function(req,res){
    let urlObj = url.parse(req.url)
    let query = querystring.parse(urlObj.query)
    let dateObj
    let date = new Date(query.iso)

    res.writeHead(200,{"ContentType":"application/json"})

    if(urlObj.pathname === '/api/parsetime'){ 
        dateObj= {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        res.end(JSON.stringify(dateObj));
    }
    
    if(urlObj.pathname === '/api/unixtime'){
        dateObj = {
            unixtime: date.getTime()
        }
        res.end(JSON.stringify(dateObj));
    }
})

server.listen(port)