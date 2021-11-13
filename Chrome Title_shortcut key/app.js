// console.log(document.querySelector("title").textContent);
// chrome.tabs.getCurrent(function(tab) {
//     console.log(tab.url);
// });
chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    console.log(tabs);
    var node1 = document.createElement("LI");
    var textnode1 = document.createTextNode(tabs[0].title);
    node1.appendChild(textnode1);
    document.getElementById("myList").appendChild(node1);
})


chrome.tabs.query({ currentWindow: true, active: false }, function(tabs) {

    for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i].title);

        // document.querySelector("p").textContent = tabs[i].title;


        var node = document.createElement("LI");
        var textnode = document.createTextNode(tabs[i].title);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);


        //-----------------------------
        // var z = document.createElement('p');
        // z.innerHTML = String(tabs[i].title);
        // document.body.appendChild(z);
        //-----------------------------

    }
});