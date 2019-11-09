// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function HeaderComponent() {
    //Elements
    const headerCard = document.createElement("div");
    const dateSpan = document.createElement("span");
    const hTitle = document.createElement("h1");
    const tempSpan = document.createElement("span");

    //Classes
    headerCard.classList.add("header");
    dateSpan.classList.add("date");
    tempSpan.classList.add("temp");

    //Append Elements
    headerCard.appendChild(dateSpan);
    headerCard.appendChild(hTitle);
    headerCard.appendChild(tempSpan);

    return headerCard
};


const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(HeaderComponent());