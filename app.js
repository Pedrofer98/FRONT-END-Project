//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
let actualQuote = quote.innerHTML;
let quoteHistory =[];
let imagehistory =[];
// variables to access dataArray




//EVENT LISTENERS
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",getImage);
quoteButton.addEventListener("click",getQuote);






//FUNCTIONS

function getQuote(){
  
  try {
    fetch("https://api.quotable.io/quotes")
    .then(res => res.json())
    .then(data => {
      const quotesArray = data.results;
       
          let randomNumber = Math.floor(Math.random()*quotesArray.length)
          let randomQuote = quotesArray[randomNumber].content;
          let randomAuthor = quotesArray[randomNumber].author
          quote.innerHTML = `"${randomQuote}"`;
          author.innerHTML = `"${randomAuthor}"`;
          let actualQuote = quote.innerHTML // one option for "saving" the output.
          // console.log(actualQuote);
          quoteHistory.push({author: randomAuthor, quote: randomQuote});

    });
    console.log(quoteHistory);
    // let actualQuote = quote.innerHTML;
    //   let actualAuthor = author.innerHTML;
    //   console.log(actualAuthor);
    //   console.log(actualQuote);
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
        // data.forEach(individualimage => {

            let randomNumber = Math.floor(Math.random()*data.length)
            let randomImage = data[randomNumber].download_url;
            console.log(randomImage);
            image.setAttribute("src",`${randomImage}`);
            imagehistory.push(randomImage);

        })

      // })
    } catch (error) {
      console.log(error);
  }
  console.log(imagehistory);
}
function getRandom(){
  getQuote();
  getImage();
  console.log(quoteHistory);
  console.log(imagehistory);
}

