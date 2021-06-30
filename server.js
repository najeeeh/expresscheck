const express=require('express')
const app=express()
app.set('view engine', 'pug');
app.set('views','./views');
// Custom middleware to verify the time of the request.
app.use(date = ( req, res, next) =>{
   let requestAt = new Date().getHours()
   console.log(requestAt)
   if (requestAt <9 || requestAt>=17) res.send('Our office is not open now')
   next()
})
// Use Express to create the server and handle routes.
app.get('/', function(req, res){
  
    res.render('home');
    
 });
 app.get('/contact', function(req, res){
    res.render('Contact');
 });
 app.get('/services', function(req, res){
    res.render('Services');
 });
app.listen(4000,(err)=>{
if(err){
    throw(err)
}
else{
console.log('Server is running in port 4000.....')
}}
)