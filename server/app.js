const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); 
const app = express();
const routes = require('./routes');

const { passport } = require('./middlewares/auth');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT || 5000;

app.use(passport.initialize());

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
