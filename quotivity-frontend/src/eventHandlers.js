let randomQuoteAndIcon = []
const URL = 'http://localhost:3000'

function handleRandomQuote() {
  randomQuoteAndIcon.innerHTML = ""
  getRandomQuote()
  // getRandomIcon()
}

function getRandomQuote() {
  fetch(URL + '/random_quote')
    .then(resp => resp.json())
    .then(quoteData => {
      // randomQuoteAndIcon.insertAdjacentHTML("beforeend")
      console.log(quoteData)})

}
