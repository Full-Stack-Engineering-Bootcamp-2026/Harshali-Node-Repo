const express = require('express');
const app = express();

const adminRoutes= require('./routes/admin')
const shopRoutes= require('./routes/shop')
// Built-in body parser 
app.use(express.urlencoded({ extended: true }));
app.use(adminRoutes)
app.use(shopRoutes)



app.listen(3000, () => {
  console.log("Server running on port 3000");
});