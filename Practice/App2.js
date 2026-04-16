const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        
    }
console.log(req.url,req.method)
res.setHeader('Content-Type','text/html')
res.write('<html>')
res.write('<head><title>My Server</title> </head>')
res.write('<body><h1>Hello from node server</h1></body>')
res.write('</html>')
res.end()
})
server.listen(3000,()=>{console.log('server started on port 3000')})