# WPR381_Project_1
Repository for Group Project in WPR 381
---
# **MLG-2-Assignment1-Group-6**
## -- Team Members -- 
* ### Danae Marais : 578326
* ### Henko Meyer : 578420
* ### Jacobus Gerhardus Lotter : 578559
* ### Alexis Elke Moolman : 578298
* ### Stephanus Jacobus Mathee : 578381
---
# Weather App Project

A weather app is a service which tells its users what the current weather is, and/or the weather they should expect in the next few hours, days, or weeks. This project will require you to create a web-based weather application.

## Project Overview

For this project, you will create a backend Express server that fetches weather data from a weather API. Then, you will create a React frontend that receives this weather data from the backend. The API provided by [OpenWeatherMap](www.openweathermap.org/api) will be used to retrieve current weather data by location.

The overall idea of this weather application is as follows:

- Set up a backend (Express) server that connects to a frontend client (React).
- Make use of a 3rd-party weather API to provide data. Connect to the API and use the returned weather data.
- Collect the user's zip code and combine it with the weather API's URL to request location-specific data.
- Validate the zip code and account for any potential 404 errors when receiving data from the weather API.
- Display the current weather using the weather API data. Create a React component responsible for the page that does this.

## User Stories

Implement the following user stories:

1. Users shall be able to view the weather in their current location.
2. Users shall be able to toggle the temperature unit (Celsius or Fahrenheit).
3. A weather icon or background image will be displayed depending on weather conditions.
4. Users shall be able to search for weather information of other places.

## Technologies Used

- Backend: Express
- Frontend: React
- Weather API: [OpenWeatherMap](www.openweathermap.org/api)

## Getting Started

1. Clone the repository: `git clone https://github.com/Henkomeyer/WPR381_Project_1`
2. Install dependencies for backend 
3. Install dependencies for frontend
4. Set up environment variables for the backend (e.g., API key, etc.)
5. Start the backend server
6. Start the frontend development server
7. Access the application in your web browser at `http://localhost:8000`

## API Usage

To fetch weather data, use the following API endpoints:

- `GET /api/weather/current` - Fetches the current weather data for the user's location.
- `GET /api/weather/search?query={location}` - Fetches the weather data for the specified location.

Ensure proper validation and error handling when using these endpoints.

## Conclusion

This weather application allows users to view current weather information for their location and search for weather information in other places. Users can toggle between Celsius and Fahrenheit temperature units, and weather icons or background images will be displayed based on weather conditions.

The backend server fetches weather data from a weather API, validates user input, and sends
