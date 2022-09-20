import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'

function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  const firsQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firsQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className='App'>
      <QuoteBox
        randomQuote={randomQuote}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
