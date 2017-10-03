const bl = require('bl')
const http = require('http')
let url = process.argv[2]

http.get(url,function(req){
    req.pipe(bl(function(err,data){
        if(err){
            return console.log(err)
        }

        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})

