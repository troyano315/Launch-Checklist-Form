// Write your JavaScript code here!
window.addEventListener("load", function(){

   let formNode = document.getElementById("launchForm");
   formNode.addEventListener("submit", function(event){
       let pilotNameNode = document.getElementById("pilotName");
       let copilotNameNode = document.getElementById("copilotName");
       let fuelLevelNode = document.getElementById("fuelLevel");
       let cargoMassNode = document.getElementById("cargoMass");

       if (pilotNameNode.value.length === 0) {
           event.preventDefault();
           alert("Please fill out all boxes")
       } else if (copilotNameNode.value.length === 0){
         event.preventDefault();
         alert("Please fill out all boxes")
       } else if (isNaN(fuelLevel.value)){
         event.preventDefault();
         alert("Please enter a number for fuelLevel")
       } else if (isNaN(cargoMass.value)){
         event.preventDefault();
         alert("Please enter a number for cargoMass")
       }

   });


})


// window.addEventListener("load", function(){

//    let formNode = document.getElementById("launchForm");
//    formNode.addEventListener("submit", function(event){
//        let nameNode = document.getElementById("name");

//        if (nameNode.value.length === 0) {
//            event.preventDefault();
//            let messageNode = document.getElementById("error-message");
//            messageNode.innerHTML = "Name is required"
//        }

//    });


// })

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/