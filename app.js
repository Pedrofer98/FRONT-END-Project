//VARIABLES
// this is where all the VAR's are for our DOM manipulation. ranging from the buttons in the HTML
// to the arrays we 'pushed' the data from our API's into. 
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
let dropdown = document.querySelector("select");
let select = document.getElementById("categorySelection")
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
const imageInHistory = document.querySelector(".card-img-Hist1");
const quoteInHistory = document.querySelector(".quote-text-history1");
const authorInHistory = document.querySelectorAll(".author-History1");
const historyDeckToAppend = document.getElementById("history-deck");
const randomPage = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let selectedCategory = null;
let newQuotesArray = [];
let imagesArray = [];
let tagArray = [];
let counter = 0;


//EVENT LISTENERS
// event listeners that ilicit the fucntionality of our program. we have an 'onLoad' 
// that triggers the function that 'fetches' the data from our API's, and 'onClicks' that 
// trigger the render fucntions, ultimately displaying the quote and image on our app.
window.addEventListener("load", onLoad);
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",renderImage);
quoteButton.addEventListener('click', renderQuote)
dropdown.addEventListener("change", function (event) {
    selectedCategory = event.target.value;
    getQuoteFromCategory();
  });


//FUNCTIONS
function onLoad(){
  Promise.all([getImage(), getQuote()])
    .then(() => {
      initialRenderImage();
      initialRenderQuote();
      renderHistory(); // was rendering twice before we made it a separate function.
    });
}
// onLoad: **promise fixed a big "loading" issue. the promise essentially allowed us to 
// pull the data from our 2 API's and THEN render them. without the promise we were loading data from 1 api (quote)
// but other was not loaded on time. 
//so this function sets the Data with the promise, and then once its fetched, it is used in our render fucntions.


function fillDropdown() {
    if (counter ===99){
        reset();
    }
    counter += 1;
    newQuotesArray.map(
      (quote) => tagArray.push(...quote.tags)
    )
   let noDuplicatesArray = tagArray.filter((c, index) => {
      return tagArray.indexOf(c) === index;   
    })
    for(i=0; i<noDuplicatesArray.length; i++) {
      let option = document.createElement("option"),
      text = document.createTextNode(noDuplicatesArray[i]);
      option.appendChild(text);
      option.setAttribute("value", noDuplicatesArray[i]);
      select.insertBefore(option, select.lastChild);
    }
  }
  //first creates an array of all the tags (categories) on the page that is fetched
  //then filters through the array to get rid of all the duplicate tags
  //pushed the values of the noDuplicates array into the dropdown

  function getQuoteFromCategory() {
  let categoryArray = newQuotesArray.filter(
    (categoryArray) => categoryArray.tags[0] === selectedCategory
  );
  let randomNumber = Math.floor(Math.random() * categoryArray.length);
  let randomQuote = categoryArray[randomNumber].content;
  let randomAuthor = categoryArray[randomNumber].author;
  quote.innerHTML = `"${randomQuote}"`;
  author.innerHTML = `~${randomAuthor}`;
  renderHistory();
}
  //filters through newQuotesArray to match the value of the selected option
  //gets a random number to set as the index of category array to pull
  //pushes both the quote and author to the inner HTML
  //runs renderHistory function
   

async function getQuote(){
  let quoteURL = `https://api.quotable.io/quotes?limit=100&page=${randomPage(1, 14)}`
  try {
    let results = await fetch(quoteURL);
    let data = await results.json();
    newQuotesArray.push(...data.results)
    fillDropdown();
  }catch (error) {
      console.log(error);
  }
}
// we made the url of API 1 into a variable and then fetched it. the 'wait' ensures the data is actually 
// fetched before we make it into json format. then we push the data in json format into our newQuotes array. 
// we will pull the quotes from this array in the rendering function.


function initialRenderQuote(){
  let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
  let randomQuote = newQuotesArray[randomNumber].content;
  let randomAuthor = newQuotesArray[randomNumber].author;
  quote.innerHTML = `"${randomQuote}"`
  author.innerHTML = `~${randomAuthor}`
}
// we use the Math methods to generate a random number, set that to a variable,
// use that random number as the index in the newQuotesArray in order to extract a random quote.
// do the same thing (using the same random number) to access the author key value pair of the quote. 
// then we set the inner HTML of quote and author in the HTML to the quote+author generated.

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
    // we pull 100 quotes per fetch, so the counter triggers a reset fucntion that empties the 
    // quotes array and sets it the timer to 0. making sure we fetch 'fresh' batch of 100 quotes. 
    // the function is essentially the same as the previous render, but it also triggers the 
    // renderHistory, which renders the quote into our history feature. 



async function getImage(){
  try {
      let data = await fetch(`https://picsum.photos/v2/list?limit=100`) ;
      let data2 = await data.json();
      imagesArray.push(...data2);
  }catch (error) {
      console.log(error);
  }
}
// same thing as the getQuote fucntion, but with our second API, 
//and fetching img data.



function initialRenderImage(){
  let randomNumber = Math.floor(Math.random()*imagesArray.length)
  let randomImage = imagesArray[randomNumber].download_url;
  image.setAttribute("src",`${randomImage}`);
}
// same thing as the render quote in terms of syntax but setting the src attribute of 
// to the random img generated and sends it to the imgArray.

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
// same as the render img and renderQuote. but also triggers the render history. 
 

function getRandom(){
  if (counter === 99){
    reset();
  }
  counter += 1;
  initialRenderImage();
  initialRenderQuote();
  renderHistory();
}
// triggers the initial render img+quote to generate a random img+quote combo.
// sends that random combo into the history as well .

//HELPER FUNCTIONS
function renderHistory(){
  let historyItem = document.createElement('div');
    historyItem.classList.add("col-4");
    historyItem.innerHTML = 
        `<div class="col">
          <div class="card bg-dark text-white">
            <img src="${image.src}" class="card-img" alt="..."> 
                <div class="card-img-overlay">
                  <p class="quote-text-history1">${quote.innerHTML}</p>
                  <p class="author-History1">~${author.innerHTML}</p>
                </div>
          </div>
        </div>`;
    historyDeckToAppend.appendChild(historyItem);
}
// this function creates the Div that is the history and sets all the HTML elements  
//

function reset (){
    newQuotesArray = [];
    imagesArray = [];
    noDuplicatesArray = [];
    getQuote();
    getImage();
    counter = 0;
}
// empties the Img and quote arrays that we use to render the quotes on screen and
// sets the counter to 0, ensuring we fecth a new batch of quotes. 