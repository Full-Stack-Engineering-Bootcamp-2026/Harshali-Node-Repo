const express = require('express');
const app = express();
const path=require('path')

app.set('view engine','pug')
app.set('views','views')
const adminRoutes= require('./routes/admin')
const shopRoutes= require('./routes/shop')
// Built-in body parser 
app.use(express.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});