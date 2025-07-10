const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

const quotes = [
    {
        quote: "The only way to do great work is to love what you do."
    },
    {
        quote: "Believe you can and you're halfway there."
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light."
    },
    {
        quote: "Strive not to be a success, but rather to be of value."
    },
    {
        quote: "The mind is everything. What you think you become."
    },
    {
        quote: "An unexamined life is not worth living."
    },
    {
        quote: "Life is what happens when you're busy making other plans."
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.quote}"`;
    
}

newQuoteBtn.addEventListener('click', getRandomQuote);

getRandomQuote();
