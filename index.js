require('dotenv').config();
const express = require('express');
const hbs     = require('hbs');

const app     = express();
const port    = process.env.PORT || 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials', (err)=>{
  console.log(`Problemas al levantar el motor de plantillas: ${err}`);
});

app.use( express.static('public') );
app.use( require('./api/routers/router') );

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
}); 
