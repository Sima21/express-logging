// app.js
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Verwende Morgan, um Anfragedetails zu loggen
app.use(morgan('combined'));

// Definiere die Routen
app.get('/', (req, res) => {
  res.send('GET /');
});

app.get('/data', (req, res) => {
  res.send('GET /data');
});

app.post('/data', (req, res) => {
  res.send('POST /data');
});

app.put('/data', (req, res) => {
  res.send('PUT /data');
});

app.delete('/data', (req, res) => {
  res.send('DELETE /data');
});

// Zentrale Fehlerbehandlungs-Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});
app.get('/error', (req, res) => {
    throw new Error('Dies ist ein Testfehler!');
  });
  