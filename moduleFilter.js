const fs = require('fs')
const path = require('path')

module.exports = function(dir,extName,cb){
    fs.readdir(dir,function(error,list){
        if(error){
            return cb(error)
        }
        list = list.filter(function(ele){
            return path.extname(ele) === '.' + extName
        })

        cb(null, list)
    })
}