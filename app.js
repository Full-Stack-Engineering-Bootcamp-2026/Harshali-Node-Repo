const express = require("express");
const path = require("path");


const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const mongoConnect=require('./util/database').mongoConnect;
const User=require('./models/user')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
  User.findById("69d718b26aa3cf8c27d47c99")
  .then(user=>{
    req.user=user
    next()
  })
  .catch(err=>console.log(err))
  
})

//app.use(productRoutes);
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(()=>{
  
  app.listen(3000)
})
