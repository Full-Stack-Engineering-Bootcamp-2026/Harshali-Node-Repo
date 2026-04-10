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
  User.findById("69d7dd43d229035706ae1468")
  .then(user=>{
    req.user=new User(user.name,user.email,user.cart,user._id)
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
