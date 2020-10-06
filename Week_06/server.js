const http = require('http')
// const fs = require('fs')

http.createServer(function(req,res) {
    // if(req.url == '/favicon.ico') {
    //     res.writeHead(200)
    //     res.end()
    //     return
    // }
    // res.writeHead(200)
    // fs.createReadStream(__dirname + '/index.html').pipe(res)

    let body = []
    http.request.on('error',(err) => {
        console.error(err)
    }).on('data', (chunk) => {
        body.push(chunk.toString())
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log("body:",body)
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(' Hello World \n')
    })
}).listen(3001)

console.log('server started')

