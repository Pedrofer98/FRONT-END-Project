//VARIABLES
const quote = document.querySelector(".quote-text");
const randomButton = document.querySelector("#randomButton");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
const quoteButton = document.querySelector("#quoteButton");
let actualQuote = quote.innerHTML;
let quoteHistory =[];
// variables to access dataArray




//EVENT LISTENERS
randomButton.addEventListener("click",getRandom);
imageButton.addEventListener("click",getImage);
quoteButton.addEventListener("click",getQuote);






//FUNCTIONS
//still need to get all the quotes and not just the first page
// function getQuote(){
//     try {
//       fetch("https://api.quotable.io/quotes")
//       .then(res => res.json())
//       .then(data => {
//         const quotesArray = data.results;
//         quotesArray.forEach(individualQuote => {
//             let randomNumber = Math.floor(Math.random()*quotesArray.length)
//             quote.innerHTML = `"${quotesArray[randomNumber].content}"`
//             author.innerHTML = `"${quotesArray[randomNumber].author}"`
//             });
//         console.log(data)
//       });
//     } catch (error) {
//         console.log(error);
//     }
// }
function getQuote(){
  
  try {
    fetch("https://api.quotable.io/quotes")
    .then(res => res.json())
    .then(data => {
      const quotesArray = data.results;
       // where i will push the quotes generated with my fucntion. this array will be the "history"
      

      
          let randomNumber = Math.floor(Math.random()*quotesArray.length)
          let randomQuote = quotesArray[randomNumber].content;
          let randomAuthor = quotesArray[randomNumber].author
          quote.innerHTML = `"${randomQuote}"`;
          author.innerHTML = `"${randomAuthor}"`;
          let actualQuote = quote.innerHTML // one option for "saving" the output.
          // console.log(actualQuote);
          quoteHistory.push({author: randomAuthor, quote: randomQuote});
          
   

          // console.log(returnArray);
          
         
          

        

      
      
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

