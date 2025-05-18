const express = require('express');

const PORT = 3000;
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Ca marche sur le port ${PORT}`);
});


app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'home.html'));
});


app.get('/projets', (req, res) => {    
    res.sendFile(path.join(__dirname, 'projets.html'));
});

app.get('/contacts', (req, res) => {    
    res.sendFile(path.join(__dirname, 'contacts.html'));
});


app.get('/projetsUni', (req, res) => {    
    res.sendFile(path.join(__dirname, '/projetsUni.html'));
});



function toggleDetails() {
  var x = document.getElementById("details");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}