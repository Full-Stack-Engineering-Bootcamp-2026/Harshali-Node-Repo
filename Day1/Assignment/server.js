const http=require('http')

const server=http.createServer((req,res)=>{
    //logging req url on console
    console.log("Incoming url",req.url)

    if(req.url === '/api'){
        res.writeHead(200,{'content-type':'application/json'});
        const info={
            msg:"Json Response",
            date: new Date().toDateString()

        };
        res.end(JSON.stringify(info));

    }
    //set header
    else{
        res.writeHead(200,{'content-type':'text/html'})
    res.end(
        `
        <html>
            <head>
                <title>My node server</title>
            </head>
            <body>
                <p>Harshali Patil</p>
                <p>Todays Date: ${new Date().toDateString()}</p>
            </body>
        </html>
        `)
}}) 
const port=3000;
server.listen(port,()=>{
    console.log(`server started on port ${port}`)
})