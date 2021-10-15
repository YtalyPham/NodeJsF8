const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan'); //log ra phuong thuc GET SET PUT DELETE trong terminal
const handlebars = require('express-handlebars');
const port = 5000;
const route = require('./routes');
//middleware solve data form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//img
app.use(express.static(path.join(__dirname, 'public')));

//Templete Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
                                app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log('PATH ', path.join(__dirname, 'resource/views'));

//Route Init
                route(      app);

app.listen(port, () => {
                 console.log(`Server starting at http://localhost:${port}`);
});
