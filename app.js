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
const history = document.querySelector("#history");
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
        let newQuotesArray = []
        for (i = 0; i <= data.totalPages; i++) {
          newQuotesArray.push(...data.results)
        }


        // Pedro's Changes
        const quotesArray = data.results;
        let randomNumber = Math.floor(Math.random()*quotesArray.length)
        let randomQuote = quotesArray[randomNumber].content;
        let randomAuthor = quotesArray[randomNumber].author
        quote.innerHTML = `"${randomQuote}"`;
        author.innerHTML = `"${randomAuthor}"`;
        let actualQuote = quote.innerHTML // one option for "saving" the output.
        // console.log(actualQuote);
        quoteHistory.push({author: randomAuthor, quote: randomQuote});
        console.log(quoteHistory);

        
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

        // console.log(data);
        // data.forEach(individualimage => {

            let randomNumber = Math.floor(Math.random()*data.length)
            let randomImage = data[randomNumber].download_url;
            console.log(randomImage);
            image.setAttribute("src",`${randomImage}`);
            imagehistory.push(randomImage);



            // Dave's commented code
            // let imagesArray = []
            // for (i = 0; i <= data.totalPages; i++) {
            //   imagesArray.push(...data.results)
            // }
            // return newQuotesArray
            //     let randomNumber = Math.floor(Math.random()*data.length)
            //     image.setAttribute("src",`${data[randomNumber].download_url}`)

        })

      // })
    } catch (error) {
      console.log(error);
  }
  console.log(imagehistory);
}

function renderImage(){
  let randomNumber = Math.floor(Math.random()*data.length)
  image.setAttribute("src",`${data[randomNumber].download_url}`)
}

function getRandom(){
  getQuote();
  getImage();
  console.log(quoteHistory);
  console.log(imagehistory);
}

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


