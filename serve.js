const express = require('express');

const PORT = 3000;
const app = express();
const path = require('path');


app.listen(PORT, () => {
    console.log(`Ca marche sur le port ${PORT}`);
});


app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/style.css', (req, res) => {    
    res.sendFile(path.join(__dirname, 'style.css'));
} );

