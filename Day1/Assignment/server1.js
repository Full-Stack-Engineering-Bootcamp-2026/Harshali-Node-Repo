const http=require('http')
const server=http.createServer((req,res)=>{

    //log the req
    console.log(`Method: ${req.method} URL: ${req.url}`)
    if(req.url==='/' && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(`
            <h1>home page</h1>
            <a href="/about">Go to about </a>
            `)
    }
    else if(req.url==='/about' && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(`
            <h1><about page</h1>
            <p>Harshali Patil</p>
            <a href="/">Home</a>`)
    }
    else if(req.url==='/redirect' && req.method==="GET"){
        res.writeHead(302,{location : "/"})
        res.end()
    }

    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("<h1>404 Page not found</h1>")
    }
})
server.listen(3000,()=>{
    console.log("server running on port 3000")
})