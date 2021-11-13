chrome.bookmarks.getRecent(20, function(items) {
    items.forEach(function(item) {
        console.log(item);


        var node = document.createElement("LI");
        var textnode = document.createTextNode(item.title);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);

        var r = document.querySelector("li").textContent;

        document.querySelector("li").addEventListener("click", function() {
            console.log("Hiiiii");
        });




    });
});

chrome.tabs.query({ currentWindow: true, active: true }, function(a) {
    console.log(a[0].title);

});

chrome.tabs.query({ currentWindow: true, active: false }, function(tabs) {

    for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i]);

    }
});

// chrome.bookmarks.remove({
//     'parentId': "1",
//     'title': tabs[0].title,
//     'url': tabs[0].url
// });

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    console.log(tabs[0].title);
    document.querySelector("#addb").addEventListener("click", function() {
        chrome.bookmarks.create({
            'parentId': "1",
            'title': tabs[0].title,
            'url': tabs[0].url
        });
    });
});
// var node1 = document.createElement("LI");
// var textnode1 = document.createTextNode(tabs[0].title);
// node1.appendChild(textnode1);
// document.getElementById("myList").appendChild(node1);


// console.log(aaaa);