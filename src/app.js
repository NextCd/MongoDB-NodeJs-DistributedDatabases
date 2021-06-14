//el programa corre conel siguiente comando : npm run deb
const path = require('path');
const express = require('express');
//const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//FEL3Hqb6c6TEPEZS
//connecting to db

mongoose.connect('mongodb+srv://CarlosDS96:FEL3Hqb6c6TEPEZS@cluster0.ahsn9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname ,'views'));
app.set('view engine', 'ejs');

//middewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

//routes
app.use('/',indexRoutes);

//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});