import quote from "../../models/quote.js"

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);

//Do Not Edit above we have to go through the bcw-getter to access this api


// @ts-ignore
const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(callWhenDone) {
		console.log('looking for some good quotes')
		quoteApi().then((res) => {
			callWhenDone(res.data.quote)
		})
		//tried this and it turns quote to undefined but does turn import active
		//	let Quote = new quote(res.data.quote)
		//callWhenDone(Quote)
	}
}
