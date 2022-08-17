const favoritesButton = document.querySelector('.favorites')
favoritesButton.addEventListener('click', FavList);

function FavList(event){
    if (checkbox.status == checked){
      //move gif to favorites list
    } else {
      //remove from favorites list
    }
  }



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

//history feature
// function history(quoteGenerated, authorGenerated,imageGenerated){
    
// }
// const getQuoteOutput = $(getQuote);
// or add eventListener so that when the buttons are clicked, the output of the function is attributed to a variable

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

    


