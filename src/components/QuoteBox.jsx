import React from 'react'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

    console.log(randomColor)

    const colorObj = {
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }

    return (
        <article style={colorObj} className='card'>
            <p className='card_quote'>{randomQuote.quote}</p>
            <h1 className='card_author'>{randomQuote.author}</h1>
            <button
            className='card_btn'
            style={backgroundObj}
            onClick={getRandomAll}
            >Next quote &#62;</button>
        </article>
    )

}

export default QuoteBox
