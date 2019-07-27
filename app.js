let express = require('express');
let exphbs  = require('express-handlebars');
let path = require('path');

let app = express();

app.use('/public', express.static(path.join(__dirname,'src/public')));

app.engine('hbs', exphbs({extname:'hbs',defaultLayout:'main.hbs'}));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'hbs');

app.get('/login',(req,res)=>{
  res.render('login',{layout: 'loginlayout'});
});

app.listen(28004,()=>{
  console.log('localhost:28004');
});
