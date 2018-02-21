var http=require('http')
var fs=require('fs')
var request=require('request')

http.createServer(function (req,res) {
    // fs.readFile('logo.png',function (err,data) {
    //     if (err){
    //         res.end('file not exist!')
    //     }else{
    //         res.writeHeader(200,{'Context-':'text/html'})
    //         res.end(data)
    //     }
    // })
    // fs.createReadStream('logo.png').pipe(res);
    request('https://static.mukewang.com/static/img/common/logo.png?t=2.4').pipe(res)
}).listen('8090')
