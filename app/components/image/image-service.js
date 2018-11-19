// import image from "../../models/image.js"


const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class ImageService {
	getImage(callWhenDone) {

		imgApi.get(``)
			.then(res => {
				console.log(res)
				//randomly choose an image from res.data.images
				let image = res.data.images[Math.floor((Math.random() * res.data.images.length) - 1)]
				callWhenDone(image)
			})
	}
}
