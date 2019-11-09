/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imgArr = [
  "mountains",
  "computer",
  "trees",
  "turntable",
]

function carouselComponent(images){
  //Elements 
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  
  //Append In order
  carousel.appendChild(leftButton)

  images.forEach(img => {
    // console.log(img)
    const imgItem = document.createElement("img");
    imgItem.src = `./assets/carousel/${img}.jpeg`;

    carousel.appendChild(imgItem);
    

  })
  const rightButton = document.createElement("div");

  //Classes
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  //Event Listners

  rightButton.addEventListener("click", (event)=>{
    // console.log(event)
    imageShow(event);
  })

  leftButton.addEventListener("click", (event)=>{
    // console.log(event)
    imageShow(event);
  })

  //Append
  carousel.appendChild(rightButton);
  

  return carousel
}


const carouselComplete = carouselComponent(imgArr)

const carouselEntry = document.querySelector(".carousel-container");

carouselEntry.appendChild(carouselComplete);


//Image reference

const imagesReference = document.querySelectorAll("img");

// console.log(imagesReference);

let count = 0;

let selectedImg = imagesReference[count]
selectedImg.style.display = "block";

function imageShow(target){


 
  // console.log(target.target.className);
  
  if(target.target.className == "right-button"){
    // console.log("right", target)

    selectedImg.style.display = "none";

    count++;
    if(count > 3){
      count = 0;
    }

    // console.log(count)

    selectedImg = imagesReference[count];

    selectedImg.style.display = "block";

  } else if (target.target.className == "left-button"){

    // console.log("left")

    selectedImg.style.display = "none";
    count--;
    
    if(count < 0){
      count = 3;
    }

    // console.log(count)
    selectedImg = imagesReference[count];

    selectedImg.style.display = "block";

  }


}
