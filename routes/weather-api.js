const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = 'f931009061a9a46ff152fc8188a50028'; 

router.get('/', async (req, res) => {
  const { zipcode } = req.body;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=metric&appid=${API_KEY}`
      );
    console.log('Fetching Weather Data')
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    const weatherData = {
      temperature: data.main.temp,
      description: data.weather[0].description,
    };

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve weather data' });
  }
});

module.exports = router;