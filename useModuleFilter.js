const moduleFilterFn = require('./moduleFilter')
const dir = process.argv[2]
const extName = process.argv[3]

moduleFilterFn(dir,extName,function(err,list){
    if(err){
        return console.error(err)
    }
    list.forEach(function(element) {
        console.log(element)
    }, this);
})

