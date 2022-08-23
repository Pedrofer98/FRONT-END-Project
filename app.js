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

//EVENT LISTENERS
window.addEventListener("load", getQuote);
window.addEventListener("load", getImage);
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",renderImage);
quoteButton.addEventListener('click', renderQuote)



//FUNCTIONS
function getQuote(){
  try {
    fetch("https://api.quotable.io/quotes")
    .then(res => res.json())
    .then(data => {
      //pagination isn't fixed, i thought it was w/ this but it's not, 
      //it's just pushing the same initial set over and over
      for (i = 0; i <= data.totalPages; i++) {
        newQuotesArray.push(...data.results)
      }
    })
  }catch (error) {
      console.log(error);
  }
}

function renderQuote (){
    let actualQuote = quote.innerHTML;
    let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
    let randomQuote = newQuotesArray[randomNumber].content;
    let randomAuthor = newQuotesArray[randomNumber].author;
    quote.innerHTML = `"${randomQuote}"`
    author.innerHTML = `~${randomAuthor}`
    quoteHistory.push({author: randomAuthor, quote: randomQuote});
  }



//still need to fix pagination
function getImage(){
  try {
      fetch(`https://picsum.photos/v2/list?limit=100`)
      .then(res => res.json())
      .then(data => {
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
}

function getRandom(){
  renderQuote();
  renderImage();
}

