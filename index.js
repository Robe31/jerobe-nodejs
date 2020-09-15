const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Jerobe J Rob', message: 'Welcome to Jerobe J Rob'})
});

app.get('/About', (req, res) => {
    res.render('index', {title: 'About ME', message: 'About Jerobe J Rob'})
});

app.get('/Projects', (req, res) => {
    res.render('index', {title: 'My Projects', message: 'Things Im Working On'})
});

app.listen(3000);

console.log('Web Server is listening at port '+ (3000));
