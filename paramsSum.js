var paramArr = process.argv.slice(2)
var result = 0
paramArr.forEach(function(element) {
    result += +element
}, this);

console.log(result)