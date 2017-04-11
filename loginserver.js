var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
app.use(bodyParser.urlencoded({extended:false}));
app.set('port',process.env.PORT||8080);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function(req,res){
  res.redirect('/login');
});
app.get('/login',function(req,res){
  res.render('loginpage');
})
app.post('/login',function(req,res){
console.log(req.body);
res.redirect('/');
})
app.listen(app.get('port'),function(err,res){
  console.log("app is running on "+app.get('port'));
});

