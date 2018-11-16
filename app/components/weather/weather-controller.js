import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()



function draw(weatherData) {
	document.getElementById('weather').innerHTML = `${weatherData}degrees`
}

export default class WeatherController {
	constructor() {
		weatherService.getWeather(draw)
	}

}
