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
      fetch("https://api.quotable.io/quotes")
      .then(res => res.json())
      .then(data => {
        const quotesArray = data.results;
        quotesArray.forEach(individualQuote => {
            let randomNumber = Math.floor(Math.random()*quotesArray.length)
            quote.innerHTML = `"${quotesArray[randomNumber].content}"`
            author.innerHTML = `"${quotesArray[randomNumber].author}"`
            });
        console.log(data)
      });
    } catch (error) {
        console.log(error);
    }
}

//still need to get all the images and not just the first page
function getImage(){
  try {
      fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.forEach(individualimage => {
            let randomNumber = Math.floor(Math.random()*data.length)
            image.setAttribute("src",`${data[randomNumber].download_url}`)
        })
      })
    } catch (error) {
      console.log(error);
  }
}
function getRandom(){
  getQuote();
  getImage();
}

