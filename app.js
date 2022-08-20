//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
// variables to access dataArray




//EVENT LISTENERS
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",getImage);
quoteButton.addEventListener("click",getQuote);






//FUNCTIONS
//still need to get all the quotes and not just the first page
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
          renderQuote(newQuotesArray)
    })
      } catch (error) {
        console.log(error);
    }
}

function renderQuote (array){
    let randomNumber = Math.floor(Math.random()*array.length)
    quote.innerHTML = `"${array[randomNumber].content}"`
    author.innerHTML = `"${array[randomNumber].author}"`
  }


//still need to get all the images and not just the first page
function getImage(){
  try {
      fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // let imagesArray = []
        // for (i = 0; i <= data.totalPages; i++) {
        //   imagesArray.push(...data.results)
        // }
        // return newQuotesArray
        //     let randomNumber = Math.floor(Math.random()*data.length)
        //     image.setAttribute("src",`${data[randomNumber].download_url}`)
        })
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

