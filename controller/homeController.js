module.exports.home=function(req,res){
   console.log("welcome to home");
   return res.render('home',{
    title: "Codeial Home"
});
}