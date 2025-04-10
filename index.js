// index.js

const express = require('express');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files like CSS
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// API route returning data based on ENV variable
app.get('/api/data', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';

  if (isAdmin) {
    res.json({
      message: "Welcome, Admin!",
      data: ["Admin Data 1", "Admin Data 2"]
    });
  } else {
    res.json({
      message: "Welcome, User!",
      data: ["User Data 1", "User Data 2"]
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
