const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In questo esempio, i dati degli studenti sono conservati in un array.
let students = [];

// Parse application/json requests
app.use(bodyParser.json());

// GET request per recuperare tutti gli studenti
app.get('/api/students', (req, res) => {
  res.send(students);
});

// POST request per creare un nuovo studente
app.post('/api/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send(`Student created: ${JSON.stringify(newStudent)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:3000}`);
});
