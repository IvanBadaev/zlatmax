const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
const appDir = path.dirname(require.main.filename);

app.use(express.static(path.join(__dirname, '/public')));



app.use('/account', (req, res) => {
    res.render('account');
});



app.use('/', (req, res) => {
    if (req.originalUrl === '/') {
        res.render('home');
    } else {
        res.status(404);
        res.send(`Error : requested ${req.path}, but got nothing on ${path.join(appDir, req.path)}`);
        // res.render('404');
    }
});

module.exports = app;
