// Create web server
// Use express to create server
const express = require('express');
// Use body-parser to parse incoming request bodies
const bodyParser = require('body-parser');
// Use cors to enable Cross Origin Resource Sharing
const cors = require('cors');
// Create app
const app = express();
// Use bodyParser
app.use(bodyParser.json());
// Use cors
app.use(cors());

// Create comments
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
