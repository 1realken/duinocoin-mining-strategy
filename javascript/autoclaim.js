// I'm a robot you fricking idiot, I can click, dude.
// Code to cheat the faucet at https://duino-faucet.com/ for free coins
// Author: kendoodoo

// Define the function 
function autoclickfaucet(){
  // Sleep for 1 hour
  await sleep(3600000);
  // Reload the site to correct the time
  window.location.reload();
  // Set input value to the Duinocoin user
  document.getElementById("name").value = "kendoodoo";
  // Click the submit button!
  document.getElementById("submitButton").click();
  // Loop forever
  autoclickfaucet()
}

// Start this first
autoclickfaucet()
