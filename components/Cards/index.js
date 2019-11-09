// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// data:
    // articles:

        // bootstrap: Array(3)
            // 0: 
                // authorName: "FIDO WALKSALOT"
                // authorPhoto: "./assets/fido.jpg"
                // headline: "Bootstrap 5: Get a Sneak Peak at all the New Feature
            // 1: {headline: "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
            // 2: {headline: "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
            // length: 3

        //  javascript: Array(4)
            // 0: {headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects", authorPhoto: "./assets/sir.jpg", authorName: "SIR RUFF'N'STUFF"}
            // 1: {headline: "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences", authorPhoto: "./assets/bones.jpg", authorName: "BONES R. LIFE"}
            // 2: {headline: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'", authorPhoto: "./assets/puppers.jpg", authorName: "PUPPER S. DOGGO"}
            // 3: {headline: "Typescript: Ten Things you Should Know Before Building Your Next Angular Application", authorPhoto: "./assets/sir.jpg", authorName: "SIR RUFF'N'STUFF"}
            // length: 4

function lambdaArticles(){

    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response =>{

        // console.log(response.data.articles);
        // const articlesArray = Array.from(response.data);
        // console.log(articlesArray);

        //Loop over articles
        for(let article in response.data.articles){
            // console.log(article);

            //create array of all the articles of each type
            const articlesArr = response.data.articles[article].map(element => {
                // console.log (element)
                return element
            });

            //loop over array and append data
            articlesArr.forEach(item =>{
                const articleComp = articleComponents(item);
                articlesEntry.appendChild(articleComp);
            })
        }


    })
    .catch(error =>{
        console.log(error);
    })
}

document.onload = lambdaArticles();

function articleComponents(articleData){
    //Elements
    const articleCard = document.createElement("div")
    const headlineArticle = document.createElement("div");
    const authArticle = document.createElement("div");
    const imgArticleCon = document.createElement("div");
    const imgArticle = document.createElement("img")
    const authName = document.createElement("span");

    //Classes
    articleCard.classList.add("card");
    headlineArticle.classList.add("headline");
    authArticle.classList.add("author");
    imgArticleCon.classList.add("img-container");


    //Append
    articleCard.appendChild(headlineArticle);
    articleCard.appendChild(authArticle);
    authArticle.appendChild(imgArticleCon);
    imgArticleCon.appendChild(imgArticle);
    authArticle.appendChild(authName);

    headlineArticle.textContent = articleData.headline;
    imgArticle.src = articleData.authorPhoto;
    authName.textContent = articleData.authorName;
    return articleCard
}

const articlesinfo = {
    headline: "Bootstrap 5: Get a Sneak Peak at all the New Feature",
    authorPhoto: "./assets/fido.jpg",
    authorName: "Fido",
}



// console.log(articleComponents(articlesinfo));


const articlesEntry = document.querySelector(".cards-container")

// articlesEntry.appendChild(articleComponents(articlesinfo))