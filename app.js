//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
let dropdown = document.querySelector("select");
let select = document.getElementById("categorySelection")
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
const dropdownButton = document.querySelector("#dropdownButton");
const imageInHistory = document.querySelector(".card-img-Hist1");
const quoteInHistory = document.querySelector(".quote-text-history1");
const authorInHistory = document.querySelectorAll(".author-History1");
const historyDeckToAppend = document.getElementById("history-deck");
const randomPage = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let selectedCategory = null;
let newQuotesArray = [];
let imagesArray = [];
let tagArray = [];
let counter = 95;


//EVENT LISTENERS
window.addEventListener("load", onLoad);
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",renderImage);
quoteButton.addEventListener('click', renderQuote)
dropdownButton.addEventListener("click", fillDropdown);
dropdown.addEventListener("change", function (event) {
    selectedCategory = event.target.value;
    //fillDropdown();
    getQuoteFromCategory();
  });


//FUNCTIONS
function onLoad(){
  Promise.all([getImage(), getQuote()])
    .then(() => {
      initialRenderImage();
      initialRenderQuote();
      renderHistory();
    });
}

function fillDropdown() {
    if (counter ===99){
        reset();
    }
    counter += 1;
    //console.log(newQuotesArray.tags)
    newQuotesArray.map(
      (quote) => tagArray.push(...quote.tags)
    )
   let noDuplicates = tagArray.filter((c, index) => {
      return tagArray.indexOf(c) === index;   
    })
    console.log(noDuplicates)
    for(i=0; i<noDuplicates.length; i++) {
      let option = document.createElement("option"),
      text = document.createTextNode(noDuplicates[i]);
      option.appendChild(text);
      option.setAttribute("value", noDuplicates[i]);
      select.insertBefore(option, select.lastChild);
    }
  }
   

async function getQuote(){
  let quoteURL = `https://api.quotable.io/quotes?limit=100&page=${randomPage(1, 14)}`
  try {
    let results = await fetch(quoteURL);
    let data = await results.json();
    newQuotesArray.push(...data.results)
    //.then(renderQuote)
  }catch (error) {
      console.log(error);
  }
}

function initialRenderQuote(){
  let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
  let randomQuote = newQuotesArray[randomNumber].content;
  let randomAuthor = newQuotesArray[randomNumber].author;
  quote.innerHTML = `"${randomQuote}"`
  author.innerHTML = `~${randomAuthor}`
}

function renderQuote (){
    if (counter === 99){
      reset();
    }
    counter += 1;
    let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
    let randomQuote = newQuotesArray[randomNumber].content;
    let randomAuthor = newQuotesArray[randomNumber].author;
    quote.innerHTML = `"${randomQuote}"`
    author.innerHTML = `~${randomAuthor}`
    renderHistory();
    }


async function getImage(){
  try {
      let data = await fetch(`https://picsum.photos/v2/list?limit=100`) ;
      let data2 = await data.json();
      imagesArray.push(...data2);
  }catch (error) {
      console.log(error);
  }
}

function initialRenderImage(){
  let randomNumber = Math.floor(Math.random()*imagesArray.length)
  let randomImage = imagesArray[randomNumber].download_url;
  image.setAttribute("src",`${randomImage}`);
}

function renderImage(){
  if (counter === 99){
    reset();
  }
  counter += 1;
  let randomNumber = Math.floor(Math.random()*imagesArray.length)
  let randomImage = imagesArray[randomNumber].download_url;
  image.setAttribute("src",`${randomImage}`);
  renderHistory();
}
 

function getRandom(){
  if (counter === 99){
    reset();
  }
  counter += 1;
  initialRenderImage();
  initialRenderQuote();
  renderHistory();
}


function renderHistory(){
  let historyItem = document.createElement('div');
    historyItem.classList.add("col-4");
    historyItem.innerHTML = 
        `<div class="card bg-dark text-white">
        <img src="${image.src}" class="card-img" alt="..."> 
                  <div class="card-img-overlay">
                      <p class="quote-text-history1">${quote.innerHTML}</p>
                      <p class="author-History1">~${author.innerHTML}</p>
                  </div>
          </div>`;
    historyDeckToAppend.appendChild(historyItem);
}


function reset (){
    newQuotesArray = [];
    imagesArray = [];
    getQuote();
    getImage();
    counter = 0;
}