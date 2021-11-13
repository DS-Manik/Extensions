
// chrome.browserAction.onClicked.addListener(function() {
//   document.getElementById("myBtn").addEventListener("click",setInterval(function() {
//     console.log("aaaa");
// chrome.tabs.executeScript(null,{
//     file: 'a.js'
//   });
// }),1000);

document.getElementById("btn").addEventListener("click", function() {
  console.log("Hello World!");
  chrome.tabs.executeScript(null,{
    file: 'a.js'
  });
});
var xx;
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

 console.log(msg);
//  console.log(msg.b2);
//  console.log(msg.b3);
//  console.log(msg.b4);
//  console.log(msg.b5);
//  console.log(msg.b6);
//   xx=b1;



});
// console.log(xx);
