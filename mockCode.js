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

function addImageToHistory(){
  history.createElement('img');
  history.img.setAttribute('src',imagehistory.length);
};

function addQuoteToHistory(){
  history.createElement('p');
  history.p.setAttribute('class','quote-text-inHistory');
  history.p.innerHTML = quoteHistory.quote+author; // would this substitute lines 112-114?
  // same thing but adding the author to the quote//
  history.createElement('p');
  let pOfAuthor = history.p.setAttribute('class','author-text-inHistory');
  history.pOfAuthor.innerHTML = quoteHistory.author; 


  //function history(quoteGenerated, authorGenerated,imageGenerated){
// }

// const getQuoteOutput = $(getQuote);
// or add eventListener so that when the buttons are clicked, the output of the 
// function is attributed to a variable

quoteButton.addEventListener("click",function(){
    getQuote() = getQuoteOutput;
    console.log(getQuoteOutput);
})
quoteButton.addEventListener("click",function(){
    const getQuoteOutput= getQuote();
     console.log(getQuoteOutput);
   })
   

//

function getRandom(){
    getQuote();
    getImage();
}



{/* <div class='favorites'>
      <div class="col-sm-6">
        <div class="card bg-dark text-white">
            <img src="bao-bun.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <p class="quote-text">Let's get poppin.</p>
                    <p class="author">-Jawann Brady</p>
                </div>
        </div>
      </div> 
    </div> */}



const quoteURL = "https://api.quotable.io/quotes?limit=150"

// HISTORY FEATURE:
function addImageToHistory(){
  history.createElement('img');
  history.img.setAttribute('src',imagehistory.length);
};

function addQuoteToHistory(){
  history.createElement('p');
  history.p.setAttribute('class','quote-text-inHistory');
  history.p.innerHTML = quoteHistory.quote+author; // would this substitute lines 112-114?
  // same thing but adding the author to the quote//
  history.createElement('p');
  let pOfAuthor = history.p.setAttribute('class','author-text-inHistory');
  history.pOfAuthor.innerHTML = quoteHistory.author;

// //optimize getQuote and getImage functions, possibly split into two functions,
//one to fetch/render the data into an array and one to get it into the function
// function getData(){
//     try {
//       fetch("https://api.quotable.io/quotes")
//       .then(res => res.json())
//       .then(data => {
//         return data;
//       });
//     } catch (error) {
//         console.log(error);
//     }
// }

// function renderQuote(){

// }

    

  if(data.totalPages > page){
    await getQuote(page+1)
  }
}

function getQuote(){
  try {
      fetch(quoteURL)
      .then(res => res.json())
      .then(data => {
        newQuotesArray.push(...data.results)
        for (i=data.page; i < data.totalPages; i++) {  
        getQuote() 
        }
      })
  }catch (error) {
      console.log(error);
  }
}
