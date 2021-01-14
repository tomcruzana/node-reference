const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser())

app.get('/', function(req, res){

   res.cookie('name', 'harold').send('cookie set'); //Sets name = harold. access on browser by console.log(document.cookie)

   //Expires after 360000 ms from the time it is set.
   //res.cookie("name", 'harold', {expire: 360000 + Date.now()}).send('cookie set');

   //This cookie also expires after 360000 ms from the time it is set but it used maxAge property
   // res.cookie(name, 'harold', {maxAge: 360000});
}
)

//delete cookie
app.get('/clear_cookie_foo', (req, res) => {

   res.clearCookie('name')

   res.send('cookie foo cleared')
})



app.listen(3000);