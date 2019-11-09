// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//DATA RETURNED

// data:
//  topics: Array(5)
//  0: "javascript"
//  1: "bootstrap"
//  2: "technology"
//  3: "jquery"
//  4: "node.js"


function LambdaTimesTopics(){
    axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response =>{

        // console.log(response)
        const topicArr = response.data.topics.map(item =>{ 
            return item
        })

        topicArr.forEach(topic => {
            // tabComponent(topic);
            topicsContainer.appendChild(tabComponent(topic))
        });

        return response
    })
    .catch(error =>{

        console.log(error)
    })
    
}

document.onload = LambdaTimesTopics();

const topicsContainer = document.querySelector(".topics")




function tabComponent(topicData){
    //Elements
    const topic = document.createElement("div");

    //Classes
    topic.classList.add("tab");

    //Content 
    topic.textContent = topicData;

    return topic
}


// console.log(tabComponent("hello"))