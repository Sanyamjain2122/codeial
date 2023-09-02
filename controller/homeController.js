module.exports.home=function(req,res){
   console.log("welcome to home");
   return res.end('<h1> welcome to home </h1>');
}