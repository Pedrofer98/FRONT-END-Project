//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
let dropdown = document.querySelector("select");
let selectedCategory = null;
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");


let actualQuote = quote.innerHTML;
let quoteHistory = [];
let imagehistory = [];
let categories = ["sports", "competition"];
// variables to access dataArray

//EVENT LISTENERS
randomButton.addEventListener("click", getRandom);
imageButton.addEventListener("click", getImage);
quoteButton.addEventListener("click", getQuote);

//kelly changes
if (dropdown)
  dropdown.addEventListener("change", function (event) {
    selectedCategory = event.target.value;
    //fillDropdown();
    getQuoteFromCategory();
  });

//FUNCTIONS

//kelly changes
// function fillDropdown() {
//   fetch("https://api.quotable.io/quotes")
//     .then((res) => res.json())
//     .then((data) => {
//       let newQuotesArray = data.results;
//       for (i = 0; i < newQuotesArray.length; i++) {
//         let categories = newQuotesArray[i].tags[i];
//         let next = document.createElement("option");
//         next.textContent = categories;
//         next.value = categories;
//         selectedCategory.appendChild(next);
//       }

//let categoryArray = newQuotesArray[i].tags;
//     });
// }

function getQuoteFromCategory() {
  fetch("https://api.quotable.io/quotes")
    .then((res) => res.json())
    .then((data) => {
      let newQuotesArray = data.results;
      console.log(newQuotesArray);
      // for (i = 0; i <= data.totalPages; i++) {
      //   newQuotesArray.push(...data.results);
      // }
      let categoryArray = newQuotesArray.filter(
        (categoryArray) => categoryArray.tags[0] === selectedCategory
      );
      renderQuote(categoryArray);
    });
}

function getQuote() {
  try {
    fetch("https://api.quotable.io/quotes?page=103")
      .then((res) => res.json())
      .then((data) => {
        let newQuotesArray = [];
        for (i = 0; i <= data.totalPages; i++) {
          newQuotesArray.push(...data.results);
        }

        // Pedro's Changes
        const quotesArray = data.results;
        //console.log(quotesArray);
        let randomNumber = Math.floor(Math.random() * quotesArray.length);
        let randomQuote = quotesArray[randomNumber].content;
        let randomAuthor = quotesArray[randomNumber].author;
        quote.innerHTML = `"${randomQuote}"`;
        author.innerHTML = `"${randomAuthor}"`;
        let actualQuote = quote.innerHTML; // one option for "saving" the output.
        // console.log(actualQuote);
        quoteHistory.push({ author: randomAuthor, quote: randomQuote });

        return newQuotesArray;
      })
      .then((newQuotesArray) => {
        renderQuote(newQuotesArray);
      });
  } catch (error) {
    console.log(error);

let quoteHistory = [];
let newQuotesArray = [];
let imagesArray = [];
let imagehistory =[];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let counter = 0;

//EVENT LISTENERS
window.addEventListener("load", getQuote);
window.addEventListener("load", getImage);
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",renderImage);
quoteButton.addEventListener('click', renderQuote)


//FUNCTIONS
function getQuote(){
  let quoteURL = `https://api.quotable.io/quotes?limit=100&page=${randomNumber(1, 14)}`
  try {
    fetch(quoteURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      newQuotesArray.push(...data.results)
    })
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
    let actualQuote = quote.innerHTML;
    let randomNumber = Math.floor(Math.random()*newQuotesArray.length)
    let randomQuote = newQuotesArray[randomNumber].content;
    let randomAuthor = newQuotesArray[randomNumber].author;
    quote.innerHTML = `"${randomQuote}"`
    author.innerHTML = `~${randomAuthor}`
    quoteHistory.push({author: randomAuthor, quote: randomQuote});

  }
}


function renderQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  quote.innerHTML = `"${array[randomNumber].content}"`;
  author.innerHTML = `"${array[randomNumber].author}"`;
}

//still need to get all the images and not just the first page
function getImage() {
  try {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // data.forEach(individualimage => {

        let randomNumber = Math.floor(Math.random() * data.length);
        let randomImage = data[randomNumber].download_url;
        console.log(randomImage);
        image.setAttribute("src", `${randomImage}`);
        imagehistory.push(randomImage);

        // Dave's commented code
        // let imagesArray = []
        // for (i = 0; i <= data.totalPages; i++) {
        //   imagesArray.push(...data.results)
        // }
        // return newQuotesArray
        //     let randomNumber = Math.floor(Math.random()*data.length)
        //     image.setAttribute("src",`${data[randomNumber].download_url}`)
      });

    // })
  } catch (error) {
    console.log(error);
=======
//still need to fix pagination
function getImage(){
  try {
      fetch(`https://picsum.photos/v2/list?limit=100`)
      .then(res => res.json())
      .then(data => {
        //run recursion just like in getquote up to a static #
        imagesArray.push(...data);
    }) 
  }catch (error) {
      console.log(error);

  }
}


function renderImage() {
  let randomNumber = Math.floor(Math.random() * data.length);
  image.setAttribute("src", `${data[randomNumber].download_url}`);
}

function getRandom() {
  getQuote();
  getImage();
  console.log(quoteHistory);
  console.log(imagehistory);

function renderImage(){
  let randomNumber = Math.floor(Math.random()*imagesArray.length)
  let randomImage = imagesArray[randomNumber].download_url;
  image.setAttribute("src",`${randomImage}`);
  imagehistory.push(randomImage);
}

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
