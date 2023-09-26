const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// define routes & middleware

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });