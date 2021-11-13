console.log("Hemllooooo");

// setInterval(function(){
//     document.querySelector("").click();
// },1000)
var a1=document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.kix-tablerenderer > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > div").innerText;
console.log(a1);
var a2=document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.kix-tablerenderer > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > div > div > div > span:nth-child(2) > span > span").innerText;
console.log(a2);

var a3=document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.kix-tablerenderer > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > div > div > span:nth-child(2) > span > span").innerText;
console.log(a3);

var a4=document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.kix-tablerenderer > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > div > div > div > span:nth-child(2) > span > span").innerText;
console.log(a4);

var a5=document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.kix-tablerenderer > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > div > div > div > div > span:nth-child(2) > span > span").innerText;
console.log(a5);

var a6=document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.kix-tablerenderer > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > div > div > div > span:nth-child(2) > span > span:nth-child(1) > div > span").innerText;
console.log(a6);

// chrome.extension.sendMessage({b1:a1,b2:a2,b3:a3,b4:a4,b5:a5,b6:a6}, function(){});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: a2}, function(response) {});  
});