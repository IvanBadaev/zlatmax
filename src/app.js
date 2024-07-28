const path = require('path');
const express = require('express');
const app = express();

const appDir = path.dirname(require.main.filename);

app.use(express.static(path.join(__dirname, '/public')));



app.use('/account', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/account.html'));
});



app.use('/', (req, res) => {
    if (req.originalUrl === '/') {
        res.sendFile(path.join(__dirname, '/pages/home.html'));
    } else {
        res.status(404);
        res.send(`Error : requested ${req.path}, but got nothing on ${path.join(appDir, req.path)}`);
        // res.sendFile(path.join(__dirname, 'pages/404.html'));
    }
});

module.exports = app;
