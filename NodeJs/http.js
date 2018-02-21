var http=require('http');
http.createServer(function (req,res) {
    res.writeHeda(200,{'Content-Type':'text/plai:'});
    res.write('Hello NodeJs');
    res.end();
}).listen(2018);