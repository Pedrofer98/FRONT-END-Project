//VARIABLES
const quote = document.querySelector(".quote-text");
const searchBtn = document.querySelector("#search");
// const author = document.querySelector(".author")


//EVENT LISTENERS
searchBtn.addEventListener("click",getQuote)


//FUNCTIONS
function getQuote(){
    try {
      fetch("https://api.quotable.io/quotes")
      .then(res => res.json())
      .then(data => {
          const results = data.results[0];
          quote.innerHTML = `"${results.content}"`;
          console.log(data);
          console.log(results.content);
         // author.innerHTML = data.author;
      });
    } catch (error) {
        console.log(error);
    }
}

Math.floor(Math.random()*deck.length);











// function getImage(){
    
//}

// function renderImage (){
    
//     `<div class="col-sm-6">
//             <div class="card bg-dark text-white">
//                 <img src="bao-bun.jpg" class="card-img" alt="...">
//                 <div class="card-img-overlay">
//                   <p class="quote-text">${data.content}</p>
//                   <p class="author">${data.author}</p>
//                 </div>
//               </div>
//             </div>
//     `
// }





// https://api.quotable.io/quotes