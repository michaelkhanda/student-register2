const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

// Define the endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/add', (req, res) => {
  res.send('Add a new student');
});

app.post('/add', (req, res) => {
  res.send('Student added successfully');
});

app.get('/edit/:id', (req, res) => {
  res.send(`Edit student with ID ${req.params.id}`);
});

app.post('/edit/:id', (req, res) => {
  res.send(`Student with ID ${req.params.id} updated successfully`);
});

app.get('/delete/:id', (req, res) => {
  res.send(`Student with ID ${req.params.id} deleted successfully`);
});

app.get('/median', (req, res) => {
  res.send('Median percentage mark calculated');
});

app.get('/data', (req, res) => {
  // Return the data for the graph
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
