const quoteList = [
{
    quote : "Be yourself; everyone else is already taken.",
    author : "Oscar Wilde"
},
{
    quote : "In three words I can sum up everything I've learned about life: it goes on.",
    author : "Robert Frost"
},
{
    quote : "If you tell the truth, you don't have to remember anything.",
    author : "Mark Twain"
},
{
    quote : "Without music, life would be a mistake.",
    author : "Friedrich Nietzsche, Twilight of the Idols"
},
{
    quote : "I solemnly swear that I am up to no good.",
    author : "J.K. Rowling, Harry Potter and the Prisoner of Azkaban"
},
{
    quote : "Love all, trust a few, do wrong to none.",
    author : "William Shakespeare, All's Well That Ends Well"
},
{
    quote : "Whenever I feel the need to exercise, I lie down until it goes away.",
    author : "Paul Terry"
},
{
    quote : "There is no friend as loyal as a book.",
    author : "Ernest Hemingway"
},
{
    quote : "One good thing about music, when it hits you, you feel no pain.",
    author : "Bob Marley"
},
{
    quote : "Do one thing every day that scares you",
    author : "Eleanor Roosevelt"
},
{
    quote : "Some infinities are bigger than other infinities.",
    author : "John Green, The Fault in Our Stars"
}
];



const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const idx = Math.floor((Math.random() * quoteList.length))
quote.innerText = quoteList[idx].quote;
author.innerText = quoteList[idx].author;