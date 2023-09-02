const express=require('express');
const app= express();
const port="8000"   // in production , we use 80






app.listen(port,function(err){
    if(err){
        console.log("Error in app listening: ", err);
    
    }
    console.log(`Successfully Started on port : ${port}`);

})
