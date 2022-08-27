//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
let dropdown = document.querySelector("select");
let select = document.getElementById("categorySelection")
let selectedCategory = null;
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
const dropdownButton = document.querySelector("#dropdownButton");
const imageInHistory = document.querySelector(".card-img-Hist1");
const quoteInHistory = document.querySelector(".quote-text-history1");
const authorInHistory = document.querySelectorAll(".author-History1");
const historyDeckToAppend = document.getElementById("history-deck");


let newQuotesArray = [];
let imagesArray = [];
let tagArray = [];

const randomPage = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let counter = 0;

// select.innerHTML ="";

//EVENT LISTENERS
window.addEventListener("load", onLoad);
//single event handler for load function, then call image, then call quote


//window.addEventListener("load", fillDropdown)
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
function fillDropdown() {
      if (counter ===99){
      newQuotesArray = [];
      imagesArray = [];
      getQuote();
      getImage();
      counter = 0;
    }
    counter += 1;
    //console.log(newQuotesArray.tags)
    newQuotesArray.map(
     (quote) => tagArray.push(...quote.tags)
    )
   let noDuplicates = tagArray.filter((c, index) => {
    return tagArray.indexOf(c)
    === index;   })
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


function renderQuote (){
    if (counter === 99){
      newQuotesArray = [];
      imagesArray = [];
      getQuote();
      getImage();
      counter = 0;
    }
    counter += 1;
    let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
    let randomQuote = newQuotesArray[randomNumber].content;
    let randomAuthor = newQuotesArray[randomNumber].author;
    quote.innerHTML = `"${randomQuote}"`
    author.innerHTML = `~${randomAuthor}`
    // renderHistory(image,randomQuote,randomAuthor)
    
    let historyItem = document.createElement('div');
    historyItem.classList.add("col-4");
    historyItem.innerHTML = 
        `<div class="card bg-dark text-white">
        <img src="${image.src}" class="card-img" alt="..."> 
                  <div class="card-img-overlay">
                      <p class="quote-text-history1">${randomQuote}</p>
                      <p class="author-History1">-${randomAuthor}</p>
                  </div>
          </div>`;
    historyDeckToAppend.appendChild(historyItem);
    console.log(image.download_url);
    }


async function getImage(){
  try {
      let data = await fetch(`https://picsum.photos/v2/list?limit=100`) ;
      let data2 = await data.json();
      // debugger;
      imagesArray.push(...data2);
      //.then(renderImage)
  }catch (error) {
      console.log(error);
  }
}


function renderImage(){
  if (counter === 99){
    newQuotesArray = [];
    imagesArray = [];
    getQuote();
    getImage();
    counter = 0;
  }
  counter += 1;
  let randomNumber = Math.floor(Math.random()*imagesArray.length)
  let randomImage = imagesArray[randomNumber].download_url;
  image.setAttribute("src",`${randomImage}`);
  // renderHistory(randomImage)
}
  

  // imageInHistory.setAttribute("src",`${randomImage}`);//alternative 1. issue:
  // we need to din. create the HTML elements and have their src's set to the randomImg.

// option 2
  // historyDeckToAppend.appendChild(`
  //      <div class="col-4">
  //         <div class="card bg-dark text-white">
  //             <img src="${randomImage}" class="card-img-Hist1" alt="...">
  //                  <div class="card-img-overlay">
  //                      <p class="quote-text-history1">${quote.innerHTML}</p>
  //                      <p class="author-History1">-${author.innerHTML}</p>
  //                 </div>
  //          </div>
  //      </div>`)
 

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


// function renderHistory (randomImage,){
//   historyDeckToAppend.appendChild(`
//        <div class="col-4">
//           <div class="card bg-dark text-white">
//               <img src="${randomImage}" class="card-img-Hist1" alt="...">
//                   <div class="card-img-overlay">
//                       <p class="quote-text-history1">${randomQuote}</p>
//                       <p class="author-History1">-${randomAuthor}</p>
//                   </div>
//           </div>
//       </div>`)
// }

function renderHistory(param1,param2,param3){
  let historyItem = document.createElement('div');
  historyItem.classList.add("col-4");
  historyItem.innerHTML = 
      `<div class="card bg-dark text-white">
            <img src="${param1}" class="card-img-Hist1" alt="...">
                <div class="card-img-overlay">
                    <p class="quote-text-history1">${param2}</p>
                    <p class="author-History1">-${param3}</p>
                </div>
        </div>`;
  historyDeckToAppend.appendChild(historyItem);
}

function onLoad(){
  Promise.all([getImage(), getQuote()])
    .then(() => {
      renderImage();
      renderQuote();
    });
}



function loadData(){
  
}