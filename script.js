// Write your JavaScript code here!
window.addEventListener("load", function(){

   let formNode = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
      pilotName.value

   formNode.addEventListener("submit", function(event){
    event.preventDefault();   

       if (pilotName.value.length === 0) {
         //event.preventDefault();
           alert("Please fill out all boxes")
       } else if (copilotName.value.length === 0){
         //event.preventDefault();
         alert("Please fill out all boxes")
       } else if (isNaN(fuelLevel.value) || fuelLevel.value.length === 0 || fuelLevel.value < 10000){
         //event.preventDefault();
         alert("Please enter a number over 10000 for fuelLevel")
       } else if (isNaN(cargoMass.value) || cargoMass.value.length === 0){
         //event.preventDefault();
         alert("Please enter a number for cargoMass")
       };

       let itemStatusNode = document.getElementById("itemStatus")
   
itemStatusNode.innerHTML = `
<li id="pilotStatus">${pilotName.value}</li>
<li id="copilotStatus">${copilotName.value}</li>
<li id="fuelStatus">${fuelLevel.value}</li>
<li id="cargoStatus">${cargoMass.value}</li>
`;
   console.log(pilotName.value)

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