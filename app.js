//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
let quoteHistory = [];
let newQuotesArray = [];
let imagesArray = [];
let imagehistory =[];
<<<<<<< HEAD
const imgHist= document.querySelector(".card-img-history");
const quoteHist = document.querySelector(".quote-text-history");
const authorHist = document.querySelector(".author-history");
=======

const history = document.querySelector("#history");
>>>>>>> 2564ef4d67afd0aad925db5cf4e394f70b935f20
// variables to access dataArray



<<<<<<< HEAD
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let counter = 0;
=======

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let counter = 0;

>>>>>>> 2564ef4d67afd0aad925db5cf4e394f70b935f20

//EVENT LISTENERS
window.addEventListener("load", getQuote);
window.addEventListener("load", getImage);
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",renderImage);
quoteButton.addEventListener('click', renderQuote)



//FUNCTIONS
function getQuote(){
  let quoteURL = `https://api.quotable.io/quotes?limit=100&page=${randomNumber(1, 14)}`
  try {
    fetch(quoteURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      newQuotesArray.push(...data.results)
    })
  }catch (error) {
      console.log(error);
  }
}

function renderQuote (){
    if (counter === 99){
      newQuotesArray = [];
      imagesArray = [];
      getQuote();
      getImage();
      counter = 0;
    }
    counter += 1;
    let actualQuote = quote.innerHTML;
    let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
    let randomQuote = newQuotesArray[randomNumber].content;
    let randomAuthor = newQuotesArray[randomNumber].author;
    quote.innerHTML = `"${randomQuote}"`
    author.innerHTML = `~${randomAuthor}`
    quoteHistory.push({author: randomAuthor, quote: randomQuote});
    addQuoteToHistory();
  }

//still need to fix pagination
function getImage(){
  try {
      fetch(`https://picsum.photos/v2/list?limit=100`)
      .then(res => res.json())
      .then(data => {
        //run recursion just like in getquote up to a static #
        imagesArray.push(...data);
    }) 
  }catch (error) {
      console.log(error);
  }
}

function renderImage(){
  let randomNumber = Math.floor(Math.random()*imagesArray.length)
  let randomImage = imagesArray[randomNumber].download_url;
  image.setAttribute("src",`${randomImage}`);
  imagehistory.push(randomImage);
  addImageToHistory();

}

function getRandom(){
  if (counter === 99){
    newQuotesArray = [];
    imagesArray = [];
    getQuote();
    getImage();
    counter = 0;
  }
  counter += 1;
  renderImage();
  renderQuote();
}

<<<<<<< HEAD



=======

function addImageToHistory(){
  history.createElement('img');
  history.img.setAttribute('src',imagehistory[imagehistory.length-1]);// .length does not return last item.
};

function addQuoteToHistory(){
  history.createElement('p');
  history.p.setAttribute('class','quote-text-inHistory');
  history.p.innerHTML = quoteHistory.quote+author; // would this substitute lines 112-114?
  // same thing but adding the author to the quote//
  history.createElement('p');
  let pOfAuthor = history.p.setAttribute('class','author-text-inHistory');
  history.pOfAuthor.innerHTML = quoteHistory.author;
}

>>>>>>> 2564ef4d67afd0aad925db5cf4e394f70b935f20
