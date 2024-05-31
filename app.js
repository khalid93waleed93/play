const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.get('/cv', (req, res) => res.redirect('https://khalid-cv.s3.eu-central-1.amazonaws.com/Khalid-Lebenslauf.pdf'));

app.get('/staticWebsite', (req, res) => res.redirect('http://khalid-cv.s3-website.eu-central-1.amazonaws.com'));

app.get('/shop', (req, res) => res.redirect('http://khalid.com.de:81'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
