const express = require("express");
const path = require("path");
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
//const mongoConnect=require('./util/database').mongoConnect;
const User=require('./models/user')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
  User.findById("69d7dd43d229035706ae1468")
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


mongoose.connect('mongodb+srv://harshalipatil_db_user:harshali13@cluster0.qbtt7ft.mongodb.net/shop?retryWrites=true&w=majority').then(result=>{
  User.findOne().then(user=>{
    if(!user){
      const user=new User(
    {
      name:'Max',
      email:"max@test.com",
      cart:{
        items:[]
      }
    }
  )
  user.save()
    }
  })
  
  app.listen(3000)
})
.catch(err=>{
  console.log(err)
})