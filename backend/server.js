const express = require('express');
require('./database/config');
const UserSchema = require("./database/UserSchema")
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// const session = require('express-session');

const cors = require('cors')

const app = express();
const port = 3000;
app.use(express.json())
app.use(cors());


app.post("/register",async (req,res)=>{
  let user = new UserSchema(req.body);
  let result = await user.save();
  res.send(result);
})

app.post("/signin", async (req, res) => {
  if(req.body.password && req.body.email){
    let user = await UserSchema.findOne(req.body).select("-password")
    if(user){
      res.send(user)
    }else{
      res.send({result:"NO User Found"})
    }
  }else{
    res.send({result:"NO User Found"})
  }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
