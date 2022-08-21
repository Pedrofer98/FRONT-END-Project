//POSSIBLE FAVORITES SECTION INSTEAD OF OR IN ADDITION TO HISTORY SECTION
// const favoritesButton = document.querySelector('.favorites')
// favoritesButton.addEventListener('click', FavList);

// function FavList(event){
//     if (checkbox.status == checked){
//       //move gif to favorites list
//     } else {
//       //remove from favorites list
//     }
//   }


//WORKING GETQUOTE FUNCTION, PRIOR TO FIXING PAGINATION
//   function getQuote(){
//     try {
//       fetch("https://api.quotable.io/quotes")
//       .then(res => res.json())
//       .then(data => {
//         const quotesArray = data.results;
//         let returnArray =[] // where i will push the quotes generated with my fucntion. this array will be the "history"
//         const returnVar = quotesArray[randomNumber].content
//         quotesArray.forEach(individualQuote => {
//             let randomNumber = Math.floor(Math.random()*quotesArray.length)
//             quote.innerHTML = `"${quotesArray[randomNumber].content}"`
//             let actualQuote = quote.innerHTML // one option for "saving" the output.
//             console.log('actualQuote');
//             returnArray.push('actualQuote');
//             author.innerHTML = `"${quotesArray[randomNumber].author}"`
//             });
//         console.log(data)
//         return returnVar;
//       });
//     } catch (error) {
//         console.log(error);
//     }
// }

//WORKING GETQUOTE FUNCTION AFTER FIXING PAGINATION
// function getQuote(){
//     try {
//       fetch("https://api.quotable.io/quotes")
//       .then(res => res.json())
//       .then(data => {
//         let newQuotesArray = []
//         for (i = 0; i <= data.totalPages; i++) {
//           newQuotesArray.push(...data.results)
//         }
//         return newQuotesArray
//       })
//       .then((newQuotesArray) => {
//         renderQuote(newQuotesArray);
//         console.log(quoteHistory);
//       })
//       } catch (error) {
//         console.log(error);
//     }
// }

//HISTORY FEATURE
// function history(quoteGenerated, authorGenerated,imageGenerated){
// }

// const getQuoteOutput = $(getQuote);
// or add eventListener so that when the buttons are clicked, the output of the 
// function is attributed to a variable

// quoteButton.addEventListener("click",function(){
//     getQuote() = getQuoteOutput;
//     console.log(getQuoteOutput);
// })
// quoteButton.addEventListener("click",function(){
//     const getQuoteOutput= getQuote();
//      console.log(getQuoteOutput);
//    })
   


//OPTIMIZE GETQUOTE AND GETIMAGE FUNCTIONS, FETCH DATA ONLOAD, RETURN DATA AND THEN 
//HIT IT WITH GETQUOTE AND GETIMAGE FUNCTIONS
//add the window listener
window.addEventListener("load", getQuote);
//remember to change quote button function call
quoteButton.addEventListener('click', renderQuote(newQuotesArray))

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
    } catch (error) {
      console.log(error);
  }
}


