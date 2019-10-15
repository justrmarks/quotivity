let randomQuoteAndIcon = []
const quotivityContainer = document.querySelector('#quotivity-container')
const URL = 'http://localhost:3000'

function handleRandomQuote() {
  // randomQuoteAndIcon.innerHTML = ""
  getRandomQuote()
  // getRandomIcon()
}

function getRandomQuote() {
  fetch(URL + '/random_quote')
    .then(resp => resp.json())
    .then(quoteData => {
      quotivityContainer.innerHTML = renderQuote(quoteData)})
}

function renderQuote(quoteData) {
  return `<div>${quoteData.text}</div>`
}
