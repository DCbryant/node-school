var net = require('net');

function padding(n){
    return n = n < 10 ? '0' + n : n
}

net.createServer(function (socket) {
    var date = new Date()
    var year = date.getFullYear(date)
    var month = padding(date.getMonth() + 1)
    var day = padding(date.getDate())
    var hour = padding(date.getHours())
    var minutes = padding(date.getMinutes())
    // 2013-07-06 17:4
    date = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes
    socket.end(date + '\n');
}).listen(process.argv[2]);