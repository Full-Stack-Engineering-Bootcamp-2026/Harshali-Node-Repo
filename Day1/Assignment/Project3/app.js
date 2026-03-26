const express = require('express');
const app = express();

const path = require('path');

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');


app.use((req, res, next) => {
  console.log("Middleware 1:", req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log(" Welcome");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.use('/users', (req, res, next) => {
  console.log("Users Middleware Only");
  next();
});


app.use(userRoutes);
app.use(productRoutes);


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});