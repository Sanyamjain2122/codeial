const express=require('express');
const app= express();
const router=express.Router();
const port="8000"   // in production , we use 80



app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("Error in app listening: ", err);
    
    }
    console.log(`Successfully Started on port : ${port}`);

})
