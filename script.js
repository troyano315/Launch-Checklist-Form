window.addEventListener("load", function(){

    let formNode = document.getElementById("launchForm");
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");
    let itemStatusNode = document.getElementById("itemStatus");
    let launchStatusNode = document.getElementById("launchStatus");
    let missionTargetNode = document.getElementById("missionTarget");
    formNode.addEventListener("submit", function(event){
     event.preventDefault();
     
     let pilot_CopilotNotReady = pilotName.value.length === 0 || !isNaN(pilotName.value) || copilotName.value.length === 0 || !isNaN(copilotName.value);
     let fuel_CargoNotReady = isNaN(fuelLevel.value) || fuelLevel.value.length === 0 || isNaN(cargoMass.value) || cargoMass.value.length === 0;
      event.preventDefault();
      
      function cargoState() {
       if (cargoMass.value >= 10000) {
           return "There is too much mass for the shuttle to take off. Reduce mass under 10000" 
         } else {
           return `Cargo mass check passed! Cargo Mass:${cargoMass.value}`;
         }
     };
   
     function fuelState(){
       if (fuelLevel.value <= 10000) {
         return "Fuel level check failed. Please fill fuel over 10000";
       } else {
         return `Fuel level check passed! Fuel level: ${fuelLevel.value}`;
       }
     };

       function pilotState() {
    if (!pilot_CopilotNotReady) {
      return `Pilot ${pilotName.value} is ready`
    }
     }; 

        function copilotState() {
        if (!pilot_CopilotNotReady) {
          return `CoPilot ${copilotName.value} is ready`
        }
         }; 

         function isReady() {
            if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
              return launchStatusCheck.innerHTML = `
              <h2 id="launchStatus" style="color:green">"Shuttle is ready for launch"</h2>
                <ul id="itemStatus">
                    <li id="pilotStatus">${pilotState()}</li>
                    <li id="copilotStatus">${copilotState()}</li>
                    <li id="fuelStatus">${fuelState()}</li>
                    <li id="cargoStatus">${cargoState()}</li>
                </ul>
        `;
             } 
            };
 

     if (pilot_CopilotNotReady) {
        launchStatusCheck.innerHTML = `
      
        <h2 id="launchStatus">Awaiting Information Before Launch</h2>
          <ul id="itemStatus">
              <li id="pilotStatus"></li>
              <li id="copilotStatus"></li>
              <li id="fuelStatus"></li>
              <li id="cargoStatus"></li>
          </ul>
        `;
          alert("Please enter a word for pilot and copilot  ")
      } else if (fuel_CargoNotReady){
        launchStatusCheck.innerHTML = `
        <h2 id="launchStatus">Awaiting Information Before Launch</h2>
          <ul id="itemStatus">
              <li id="pilotStatus"></li>
              <li id="copilotStatus"></li>
              <li id="fuelStatus"></li>
              <li id="cargoStatus"></li>
          </ul>
        `;
        alert("Please enter a number for fuelLevel and cargoMass")
      }  else if (!fuel_CargoNotReady || !pilot_CopilotNotReady){
        launchStatusCheck.innerHTML = `
        <h2 id="launchStatus" style="color:red">"Shuttle not ready for launch"</h2>
          <ul id="itemStatus">
              <li id="pilotStatus">${pilotState()}</li>
              <li id="copilotStatus">${copilotState()}</li>
              <li id="fuelStatus">${fuelState()}</li>
              <li id="cargoStatus">${cargoState()}</li>
          </ul>
        `;
        isReady()
      }
 
    });
 
 });
