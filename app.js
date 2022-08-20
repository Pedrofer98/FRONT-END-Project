//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
let quoteHistory =[];

//EVENT LISTENERS
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",getImage);
quoteButton.addEventListener("click",getQuote);


//FUNCTIONS

function getQuote(){
    try {
      fetch("https://api.quotable.io/quotes?page=103")
      .then(res => res.json())
      .then(data => {
        let newQuotesArray = []
        for (i = 0; i <= data.totalPages; i++) {
          newQuotesArray.push(...data.results)
        }
        return newQuotesArray
      })
      .then((newQuotesArray) => {
        renderQuote(newQuotesArray);
        console.log(quoteHistory);
      })
      } catch (error) {
        console.log(error);
    }
}

function renderQuote (array){
    let actualQuote = quote.innerHTML;
    let randomNumber = Math.floor(Math.random()*array.length)
    let randomQuote = array[randomNumber].content;
    let randomAuthor = array[randomNumber].author;
    quote.innerHTML = `"${randomQuote}"`
    author.innerHTML = `"${randomAuthor}"`
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


//still need to get all the images and not just the first page
function getImage(){
  try {
      fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(data => {
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

function renderImage(){
  let randomNumber = Math.floor(Math.random()*data.length)
  image.setAttribute("src",`${data[randomNumber].download_url}`)
}

function getRandom(){
  getQuote();
  getImage();
}

