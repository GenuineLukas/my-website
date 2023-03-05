const quotes = [
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
  },
  {
    quote: "That it will never come again is what makes life so sweet.",
    author: "Emily Dickinson"
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    quote: "Pain is inevitable. Suffering is optional.",
    author: "Haruki Murakami"
  },
  {
    quote: "Be kind, for everyone you meet is fighting a hard battle.",
    author: "Plato"
  },
  {
    quote: "Let me live, love, and say it well in good sentences.",
    author: "Sylvia Path"
  },
  {
    quote: "Don't let your happiness depend on something you may lose.",
    author: "C.S. Lewis"
  },
  {
    quote: "Life is tough my darling, but so are you.",
    author: "Stephanie Bennett Henry"
  },
  {
    quote: "Self-awareness and self-love matter. Who we are is how we lead.",
    author: "Brene Brown"
  },
  {
    quote:
      "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    author: "Stephen King"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
