import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function draw(weatherData) {
	document.getElementById('weather').innerHTML = `${(weatherData.temp)}`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		weatherService.getWeather(draw)
	}

	// getWeather() {
	// 	weatherService.getWeather(weather => {
	// 		console.log(weather);
	// 		//What can you do with this weather object?
	// 	})
	// }
}
