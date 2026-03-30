const express = require('express');
const path = require('path');

const productRoutes = require('./routes/products');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(productRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});