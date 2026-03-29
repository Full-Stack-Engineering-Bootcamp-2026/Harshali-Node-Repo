const express = require("express");
const app = express();


app.use(express.json());

app.get("/product", (req, res) => {
  const category= req.query.category;
  

  res.json({
   
    category:category
  });
});


app.post("/register", (req, res) => {
  const { username, password } = req.body;

  res.json({
    username: username,
    password: password
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});