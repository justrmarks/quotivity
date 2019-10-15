let randomQuoteAndIcon = []
const quotivityContainer = document.querySelector('#quotivity-container')
const URL = 'http://localhost:3000'


async function getRandomQuote() {
  console.log('2')
  const resp = await fetch(URL + '/random_quote');
  const quoteData = await resp.json();
  renderQuote(quoteData);
  // fetch(URL + '/random_quote')
  //   .then(resp => resp.json())
  //   .then(quoteData => {
  //     // console.log(quoteData)
  //     // return renderQuote(quoteData)
  //   })
}

function renderQuote(quoteData) {
  console.log('3')
  // console.log(quoteData.quote.text)
  return `<div class="quote-text">"${quoteData.quote.text}"</div>`
}

async function handleRandomQuote() {
  console.log('1')
  quotivityContainer.innerHTML = ""
  const randomQuote = await getRandomQuote()
  console.log(randomQuote)
  // quotivityContainer.innerHTML = getRandomQuote()
}

function getRandomIcon() {
  return fetch(URL + '/random_icon')
    .then(resp => resp.json())
    .then(iconData => {
      // console.log(iconData)
      renderIcon(iconData)
    })
}

function renderIcon(iconData) {
  const newIcon = new Icon(iconData)
  return newIcon.render()
}
