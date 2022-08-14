// Math.floor(Math.random()*deck.length);
const dataArray = data;
const actualQuotes = dataArray.results;
Math.floor(Math.random()*quotesArray.length);//random quote
const author = actualQuotes.author;
author.innerHTML = author; // this should sub author innerHTML with the actual author name. 




//optimize getQuote function, possibly split into two functions
function getData(){
    try {
      fetch("https://api.quotable.io/quotes")
      .then(res => res.json())
      .then(data => {
        return data;
      });
    } catch (error) {
        console.log(error);
    }
}

function renderQuote(){

}

    
    //WORKING FUNCTION//
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
              console.log(data);
              console.log(quotesArray)
          });
        } catch (error) {
            console.log(error);
        }
    }
    function getImage(){
        try [
            fetch()
            then(res => res.json())
            
        ]
    }



