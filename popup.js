// document.addEventListener("DOMContentLoaded", function() {
//   var button = document.getElementById("helloButton");
//   button.addEventListener("click", function() {
//     alert("Hello, World!");
//   });
// });


// popup.js
document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("helloButton");
  button.addEventListener("click", function() {
    chrome.runtime.sendMessage({ action: "getGreeting" }, function(response) {
      if (response && response.greeting) {
        alert(response.greeting);
      } else {
        alert("Failed to get greeting from background.js");
      }
    });
  });

  
  document.getElementById("getEnv").addEventListener("click",function(){
  	chrome.runtime.sendMessage({ action: "getEnv" }, function(response) {
      
      console.log(response);
      if (response && response.env) {
      	document.getElementById("domainUrl").innerHTML=response.env;
      }

    });
  });

  document.getElementById("changeDev").addEventListener("click",function(){
  	chrome.runtime.sendMessage({ action: "changeDev" }, function(response) {
      
      console.log(response);
      if (response && response.message) {
      	alert(response.message);
      }

    });
  });


    document.getElementById("changeProd").addEventListener("click",function(){
  	chrome.runtime.sendMessage({ action: "changeProd" }, function(response) {
      
      console.log(response);
      if (response && response.message) {
      	alert(response.message);
      }

    });
  });






});
