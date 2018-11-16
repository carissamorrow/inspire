import weather from "../../models/weather.js"

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

// @ts-ignore
const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

function Convert(faren) {
	var newTemp = (faren * 9 / 5)
	let newFar = newTemp - 459.67
	return Math.floor(newFar)
}

export default class WeatherService {

	getWeather(callWhenDone) {
		console.log('Calling the Weatherman')
		weatherApi().then(function (res) {
			let faren = Convert(res.data.main.temp)
			callWhenDone(faren);
		})
	}
}

// localStorage.setItem('weather', JSON.stringify(res.data))
// HEY FUN FACT 
// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
// res.data.temp is the temperature in Kelvin
// You should probably convert the temperature data to either F or C