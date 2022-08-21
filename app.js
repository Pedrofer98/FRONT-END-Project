//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
let quoteHistory =[];
let newQuotesArray = [];

//EVENT LISTENERS
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",getImage);
quoteButton.addEventListener('click', renderQuote)
window.addEventListener("load", getQuote);


//FUNCTIONS
function getQuote(){
  try {
    fetch("https://api.quotable.io/quotes")
    .then(res => res.json())
    .then(data => {
      for (i = 0; i <= data.totalPages; i++) {
        newQuotesArray.push(...data.results)
      }
    })
    } catch (error) {
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

// function renderHistory(){
//     let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
//     let randomQuote = newQuotesArray[randomNumber].content;
//     let randomAuthor = newQuotesArray[randomNumber].author;
//     let actualQuote = quote.innerHTML // one option for "saving" the output.
//     // console.log(actualQuote);
//     quoteHistory.push({author: randomAuthor, quote: randomQuote});
// }


//still need to fix pagination and separate out the fetch portion
function getImage(){
  try {
      fetch(`https://picsum.photos/v2/list?limit=${newQuotesArray.length}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //there are likely a ton of pages to this API, travis' recommendation is to pull at least as many
        //photos as there are quotes, loop through in a similar fashion to getQuote and use newQuotesArray.length
        let imagehistory =[];
        let randomNumber = Math.floor(Math.random()*data.length);
        let randomImage = data[randomNumber].download_url;
        image.setAttribute("src",`${randomImage}`);
        imagehistory.push(randomImage);
        console.log(imagehistory);
      })
            // Dave's commented code
            // let imagesArray = []
            // for (i = 0; i <= data.totalPages; i++) {
            //   imagesArray.push(...data.results)
            // }
            // return newQuotesArray
            //     let randomNumber = Math.floor(Math.random()*data.length)
            //     image.setAttribute("src",`${data[randomNumber].download_url}`)
      // })
    } catch (error) {
      console.log(error);
  }
}

//need to do the same thing w/ image function
function renderImage(){
  let randomNumber = Math.floor(Math.random()*data.length)
  image.setAttribute("src",`${data[randomNumber].download_url}`)
}

function getRandom(){
  renderQuote();
  getImage();
}

