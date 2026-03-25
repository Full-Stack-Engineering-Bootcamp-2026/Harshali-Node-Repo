const express=require('express')
const app=express()


app.get('/', (req, res) => {
    res.send('<h1>Welcome </h1>')
})


app.get('/about', (req, res) => {
    res.send('<p>This is application to learn routing</p>')
})


app.get('/contact', (req, res) => {
    res.send('<h2>Name: Harshali Patil <br> Batch: Full Stack Developer</h2>')
})


app.get('/skills', (req, res) => {
    res.send(`
        <h3>Skills</h3>
        <ul>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    `)
})


app.listen(3000,()=>{'server started on port 3000'})