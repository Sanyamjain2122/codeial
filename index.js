const express=require('express');
const app= express();

const port="8000"   // in production , we use 80

//set up view 

app.set('view engine','ejs');
app.set('views','./views')

//use Router 
app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("Error in app listening: ", err);
    
    }
    console.log(`Successfully Started on port : ${port}`);

})
