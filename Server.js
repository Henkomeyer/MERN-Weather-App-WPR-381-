// npm init -y
// npm install express node-fetch
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const port = 8000; // You can change the port number if needed

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

// Import routes
const weatherRoutes = require('./routes/weather-api');

app.use('/weather-api', weatherRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


