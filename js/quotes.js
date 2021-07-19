const quotes = [
    {
        quotes: "Work out your own salvation. Do not depend on others.",
        author: "Buddha",
    },
    {
        quotes: "Do not look for a sanctuary in anyone except your self.",
        author: "Buddha",
    },
    {
        quotes: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
        author: "Buddha",
    },
    {
        quotes: "All that we are is the result of what we have thought.",
        author: "Buddha",
    },
    {
        quotes: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quotes: "We accept the love we think we deserve.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quotes: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt",
    },
    {
        quotes: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
    },
    {
        quotes: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quotes: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[quotes.length - 1]);

/* Math
Math.random() : 0-1 사이 소수점이 붙은 숫자를 반환
Math.round(1.2) ==> 1 : 소수점 반올림
Math.ceil(1.2) ==> 2 : 올림
Math.floor(1.9) ==> 1 : 내림
*/

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

// console.log(todayQuote);
quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
