var fs=require('fs')
var readStream=fs.createReadStream('Ethereum-Wallet-installer-0-9-3.exe')
var writeStream=fs.createWriteStream('1-stream.exe')

readStream.on('data',function (chunk) {
    if(writeStream.write(chunk)===false){
        console.log('still cached')
        readStream.pause()
    }
})

readStream.on('end',function () {
    writeStream.end();
})

writeStream.on('drain',function () {
    console.log('data drains')
    readStream.resume()
})