/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/***
 * `quotes` array
***/
const quote =
[
  {
    quote:'Make your life a masterpiece; imagine no limitations on what you can be, have or do.',
    source:'Brain Tracy'
  },
  {
    quote:'All our dreams can come true, if we have the courage to pursue them.',
    source:'Walt Disney',
    year:'1975'
  },
  {
    quote:'A wise man can learn more from his enemies than a fool from his freinds.',
    source:'Niki Lauda',
    citation:'Rush'
  },
  {
    quote:"If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you",
    source:'Steve Jobs'
  },
  {
    quote:'Every man dies, but not every man really lives.',
    source:'William Wallace',
    citation:'Braveheart'
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber= Math.floor(Math.random() * quote.length) ;
  const randomQuote = quote[randomNumber]
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote () {
  const random = getRandomQuote();
  let html = '<p class="quote">' + random.quote + '</p>';
  html += '<p class="source">' + random.source;

  if (random.citation) {
    html += '<span class="citation">' + random.citation + '</span>';
  }

  if (random.year) {
    html += '<span class="year">' + random.year + '</span>' + '</p>';
  }

  document.getElementById("quote-box").innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

console.log(getRandomQuote())


document.getElementById('load-quote').addEventListener("click", printQuote, false);
