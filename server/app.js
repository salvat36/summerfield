const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); 
const app = express();

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT || 3000;

// Define routes & middleware
const productionRoutes = require('./routes/productions');
app.use('/api/v1/productions', productionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
