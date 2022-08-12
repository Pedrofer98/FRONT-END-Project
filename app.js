const quote = document.querySelector(".quote-text");
const btn = document.querySelector(".button");
const author = document.querySelector("")

btn.addEventListener("click",getQuote)

function getQuote(){
    fetch("https://api.quotable.io/quotes")
    .then( res => res.json());
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
    console.log()
}

// function getImage(){
    
//}

function renderImage (){
    
    `<div class="col-sm-6">
            <div class="card bg-dark text-white">
                <img src="bao-bun.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <p class="quote-text">${data.content}</p>
                  <p class="author">${data.author}</p>
                </div>
              </div>
            </div>
    `
}





// https://api.quotable.io/quotes