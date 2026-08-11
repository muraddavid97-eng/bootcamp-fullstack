const mongoose = require('mongoose');

const uri="mongodb+srv://muraddavid97_db_user:mongodb@cluster0.oumfxkk.mongodb.net/?appName=Cluster0"

mongoose.connect(uri).then(()=>{
  console.log("database is conecting")

}).catch((err)=>{
  console.log("database is  not conecting",err);

})