const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/kayit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/giris', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/todo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/giris');
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});