const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// define routes & middleware

const productionRoutes = require('./routes/productions');
app.use('/api/v1/productions', productionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });