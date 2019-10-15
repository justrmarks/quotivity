document.addEventListener('DOMContentLoaded', () => {
  console.log('welcome to quotivity')
  const randomButton = document.querySelector('#random-quote-button')
  // console.log(randomButton)

  document.addEventListener('click', (event) => {
    // console.log(event.target)
    if (event.target.id === 'random-quote-button') {
      console.log('random quote button clicked')
      handleRandomQuote()
    }
  })
})
