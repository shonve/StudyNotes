var fs=require('fs')
fs.createReadStream('logo.png').pipe(fs.createWriteStream('pipe-logo.png'))