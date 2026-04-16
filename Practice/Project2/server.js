const express = require('express')
const app = express()

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Express App </h1>')
})

// About route
app.get('/about', (req, res) => {
    res.send('<p>I am learning Node.js and Express. It is helping me build backend applications.</p>')
})

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h2>Name: Harshali Patil <br> Batch: Full Stack Developer</h2>')
})


app.get('/skills', (req, res) => {
    res.send(`
        <h3>My Skills</h3>
        <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    `)
})


app.listen(3000, () => {
    console.log("Server running at port 3000")
})