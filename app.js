//VARIABLES
const quote = document.querySelector(".quote-text");
const searchBtn = document.querySelector("#search");
const author = document.querySelector(".author");
const image = document.querySelector(".card-img");
const imageButton = document.querySelector("#imageButton");
// variables to access dataArray




//EVENT LISTENERS
searchBtn.addEventListener("click",getQuote);
imageButton.addEventListener("click",getImage);



//FUNCTIONS
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



//https://picsum.photos/v2/list
//another function to do the same thing for the image
function getImage(){
  try {
      fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.forEach(individualimage => {
            let randomNumber = Math.floor(Math.random()*data.length)
            image.setAttribute("src",`${data[randomNumber].url}`)
        })
      })
    } catch (error) {
      console.log(error);
  }
}













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
// 