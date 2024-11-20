var helpArray = ["Select your Event: Wedding, Baby Shower, Birthday Party, Workshop, or Other.",
  "Describe the theme, style, and goal of your event here.",
  "Upload your event storyboard (image, PDF, or document).",
  "Click this button to submit your form.",
  "Click this button to reset the form.",""];

var helpTextDiv;

// Initialize the help text and register event handlers
function init() {
  helpTextDiv = document.getElementById("helpText");

  // Register event listeners for each relevant form element
  registerListeners(document.getElementById("wedding"), 0);
  registerListeners(document.getElementById("babyshower"), 0);
  registerListeners(document.getElementById("birthdayparty"), 0);
  registerListeners(document.getElementById("workshop"), 0);
  registerListeners(document.getElementById("other"), 0);
  registerListeners(document.getElementById("describe"), 1);
  registerListeners(document.getElementById("storyboard"), 2);
  registerListeners(document.getElementById("submit"), 3);
  registerListeners(document.getElementById("reset"), 4);

  // Handle form submission and reset with a confirmation dialog
  var myForm = document.getElementById("form");
  myForm.addEventListener("submit", function() {return confirm("Are you sure you want to submit?");}, false);
  
  myForm.addEventListener("reset", function() {return confirm("Are you sure you want to reset?");}, false);
}

// Utility function to register event listeners
function registerListeners(object, messageNumber) {
  object.addEventListener("focus", function() {
    helpTextDiv.innerHTML = helpArray[messageNumber];
  }, false);
  object.addEventListener("blur", function() {
    helpTextDiv.innerHTML = helpArray[5];
  }, false);
}

// Initialize when the page loads
window.addEventListener("load", init, false);
