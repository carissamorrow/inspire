import Image from "../../models/image.js"


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

		imgApi.get(`search?query=mountains`)
			.then(res => {
				callWhenDone(res.data.Image)
			})
	}
}
