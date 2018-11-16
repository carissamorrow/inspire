import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote) {
	let template = `
	<div class="col-md-4">
	<h2> Your Quote For The Day </h2>
	<h3>"${quote.quote}"</h3>
	<h3>${quote.author}</h3>
	</div>
	`
	document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
		qs.getQuote(draw)
	}

}
