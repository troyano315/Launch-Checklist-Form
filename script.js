// Write your JavaScript code here!
window.addEventListener("load", function(){

   let formNode = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let itemStatusNode = document.getElementById("itemStatus")
   let launchStatusNode = document.getElementById("launchStatus")
   formNode.addEventListener("submit", function(event){
    event.preventDefault();   

       if (pilotName.value.length === 0 || !isNaN(pilotName.value)) {
         //event.preventDefault();
           alert("Please enter a word for Pilot Name  ")
       } else if (copilotName.value.length === 0 || !isNaN(copilotName.value)){
         //event.preventDefault();
         alert("Please enter a word for CoPilot Name ")
       } else if (isNaN(fuelLevel.value) || fuelLevel.value.length === 0){
         //event.preventDefault();
         alert("Please enter a number for fuelLevel")
       } else if (isNaN(cargoMass.value) || cargoMass.value.length === 0){
         //event.preventDefault();
         alert("Please enter a number for cargoMass")
       };

       if (fuelLevel.value < 10000) {
         launchStatusNode.innerHTML = `
         <h2 id="launchStatus" style="color:red">"Shuttle not ready for launch"</h2>
         `;
         itemStatusNode.innerHTML = `
         <li id="pilotStatus">${pilotName.value} is not ready for launch</li>
         <li id="copilotStatus">${copilotName.value} is not ready for launch</li>
         <li id="fuelStatus">Fuel level check failed. Please fill fuel over 10000 </li>
         <li id="cargoStatus">Cargo Mass: ${cargoMass.value} </li>
         `;
       } else {
         launchStatusNode.innerHTML = `
         <h2 id="launchStatus" style="color:green">"Shuttle is ready for launch"</h2>
         `;
         itemStatusNode.innerHTML = `
         <li id="pilotStatus">${pilotName.value} is ready for launch</li>
         <li id="copilotStatus">${copilotName.value} is ready for launch</li>
         <li id="fuelStatus">Fuel level check passed</li>
         <li id="cargoStatus">Cargo Mass: ${cargoMass.value}</li>
         `;
       }

       if (cargoMass.value > 10000) {
         launchStatusNode.innerHTML = `
         <h2 id="launchStatus" style="color:red">"Shuttle not ready for launch"</h2>
         `;
         itemStatusNode.innerHTML = `
         <li id="pilotStatus">${pilotName.value} is not ready for launch</li>
         <li id="copilotStatus">${copilotName.value} is not ready for launch</li>
         <li id="cargoStatus">There is too much mass for the shuttle to take off.</li>
         `;
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