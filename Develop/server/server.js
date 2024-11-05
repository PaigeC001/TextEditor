const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/htmlRoutes')(app);

// Fallback route to handle any unmatched routes (serving index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
