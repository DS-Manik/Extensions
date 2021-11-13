// const btn = document.querySelector("button");
// btn.addEventListener("click", function() {

// document.querySelector("p").textContent = chrome.history.search(query);

var popupDiv = document.querySelector(".hList");

var ul = document.createElement('ul');
popupDiv.appendChild(ul);

function oneWeekAgo() {
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return nextweek.getTime();
}
console.log(oneWeekAgo());
urlArray = [];
var i = 0;
var dateNow = Date.now();
chrome.history.search({
    text: '',
    'startTime': oneWeekAgo(),
    // 'maxResults': 100
}, function(data) {

    data.forEach(function(page) {
        var aa = (page.url);


        var node = document.createElement("LI");
        var textnode = document.createTextNode(aa);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);

        //-----------------------------

        // var z = document.createElement('p');
        // z.innerHTML = String(aa);
        // document.body.appendChild(z);
        //--------------------------------
        // 
        // var z = document.createElement('p');
        // z.innerHTML = aa;
        // document.body.appendChild(z);

        //---------------------------------

        // for (var i = 0; i < 10; i++) {
        urlArray.push(page.url);
        // console.log(urlArray[i].text);
        // }


        // console.log(urlArray);

        //---------------------









        console.log(typeof data);
    });
});

// console.log(Array.isArray(urlArray));

// urlArray.forEach(element => console.log(element));

// console.log(urlArray[4]);
//------------------

// const newArr = urlArray.map(myFunction)

// function myFunction(num) {
//     return num;
// }
// console.log(newArr);

// for (var i = 0; i < 10; i++) {
//     console.log(urlArray[i]);


//     var node = document.createElement("LI");
//     var textnode = document.createTextNode(String(urlArray[i]));
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);

//     var z = document.createElement('p');
//     z.innerHTML = String(urlArray[i]);
//     document.body.appendChild(z);

// }


//------------------
//     var ul = document.createElement('ul');
//     popupDiv.appendChild(ul);

//     for (var i = 0, ie = data.length; i < ie; ++i) {
//         var a = document.createElement('a');
//         a.href = data[i];
//         a.appendChild(document.createTextNode(data[i]));
//         a.addEventListener('click', onAnchorClick);

//         var li = document.createElement('li');
//         li.appendChild(a);

//         ul.appendChild(li);
//     }
// }

// })