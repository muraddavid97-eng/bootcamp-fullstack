const mongoose = require('mongoose');

const uri="my mongodb string"

mongoose.connect(uri).then(()=>{
  console.log("database is conecting")

}).catch((err)=>{
  console.log("database is  not conecting",err);

})