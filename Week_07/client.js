const http = require("http");

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar')
    res.writeHead(200,{ 'Content-Type': 'text/plain'})
    res.end(
        `<html maaa=a>
          <head>
            <style>
              body div #myid {
                  width: 100px;
                  background-color: #ff5000
              }
              body div img {
                  width: 30px;
              }
            <style>
         </header>
         <body>
           <div>
              <img id="myid" />  
              <img src="a" />
           </div>

         </body>`
    )
})