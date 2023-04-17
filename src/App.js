import { useState } from 'react';
import './App.scss';
import { faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const  App = () => {
  let quoteBank = [{
    "quote":"The mind is everything. What you think you become.",
    "author":"Kevin Kruse"},
{
    "quote":"Whatever the mind of man can conceive and believe, it can achieve.",
    "author":"Napoleon Hill"},
{
    "quote":"Strive not to be a success, but rather to be of value.",
    "author":"Albert Einstein"},
{
    "quote":"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    "author":"Robert Frost"},
{
    "quote":"I attribute my success to this: I never gave or took any excuse.",
    "author":"Florence Nightingale"},
{
    "quote":"We must balance conspicuous consumption with conscious capitalism.",
    "author":"Kevin Kruse"},
{
    "quote":"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    "author":"Plato"},
{
    "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author":"Amelia Earhart"},
{
    "quote":"Every strike brings me closer to the next home run.",
    "author":"Babe Ruth"},
{
    "quote":"Definiteness of purpose is the starting point of all achievement.",
    "author":"W. Clement Stone"},
]
 var colorBank = [
    "#00ffff",
    "#0000ff",
    "#8a2be2",
    "#deb887",
    "#d2691e",
    "#00008b",
    "#a9a9a9",
    "#556b2f",
    "#483d8b",
    "#2f4f4f"
];
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState("");


  let randomQuote = quoteBank[(Math.floor(Math.random() * quoteBank.length))]
  let randomColor = colorBank[(Math.floor(Math.random() * colorBank.length))]

  let randomStyle = {
    background: color,
    color: color,
  }

  const nextQuote = () => {
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setColor(randomColor)
  }
  


  return (
    <div className="App" style={randomStyle}>
      <div className='quoteBox'>
      <p className='quote'><FontAwesomeIcon icon={faQuoteLeft} className='quoteSignLeft'/> {quote} <FontAwesomeIcon icon={faQuoteRight} /></p>
      <p className='author'> ~ {author}</p>
      </div>
      <div className='button'>
      <button onClick={nextQuote} className='btn'><FontAwesomeIcon icon={faArrowRight} color={color}/></button>
      <a href={encodeURI(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} ~ ${author}`)} target='_blank' rel='noreferrer' title='tweet this quote'><FontAwesomeIcon icon={faTwitter} color={color}/></a>
      </div>      
    </div>
  );
}

export default App;