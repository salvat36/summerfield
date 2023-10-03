const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); 
const app = express();
const routes = require('./routes');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT || 3000;

// Define routes & middleware
// const productionRoutes = require('./routes/api/productions');
// app.use('/api/v1/productions', productionRoutes);

// const userRoutes = require('./routes/users');
// app.use('api/v1/users', userRoutes);

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
