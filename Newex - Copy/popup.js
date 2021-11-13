
// chrome.browserAction.onClicked.addListener(function() {
  document.getElementById("myBtn").onclick=setInterval(function(){
    // ("click",setInterval(function() {
    console.log("aaaa");
chrome.tabs.executeScript(null,{
    file: 'a.js'
  })
},10000);
// }),10000000);

// document.getElementById("myBtn").addEventListener("click", function() {
//   console.log("Hello World!");
// });