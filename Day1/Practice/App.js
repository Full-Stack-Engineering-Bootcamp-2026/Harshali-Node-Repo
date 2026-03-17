const http=require('http')

const server= http.createServer((req,res)=>{
    console.log(req);
    res.end("hello from node server")
})
server.listen(3000)