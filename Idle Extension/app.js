// // chrome.tabs.query({ currentWindow: true, active: false }, function(tabs) {

// //     for (var i = 0; i < tabs.length; i++) {
// //         console.log(tabs[i].title);

// //         // document.querySelector("p").textContent = tabs[i].title;

// //         var node = document.createElement("LI");
// //         var textnode = document.createTextNode(tabs[i].title);
// //         node.appendChild(textnode);
// //         document.getElementById("myList").appendChild(node);

// //     }
// // });
// //-------------------------

// // function notification() {

// //     chrome.notifications.create({
// //         title: "idle Alert",
// //         message: "Hey!!! you're idle from past 20 seconds",
// //         iconUrl: "48-icon.png",
// //         type: "basic"


// //     });
// // }
// chrome.idle.setDetectionInterval(20);

// chrome.idle.onStateChanged.addListener(
//     // 16, // seconds
//     function(state) {
//         console.log(state);
//         var a = 0;
//         if (state == "idle") {

//             // chrome.browserAction.setPopup(popup.html, () => {
//             chrome.notifications.create("notif", {
//                 title: "idle Alert",
//                 message: "Hey!!! you're idle from past 20 seconds",
//                 iconUrl: "48-icon.png",
//                 type: "basic"


//             });
//             //     window.alert("Heyy");
//             // notification();

//             console.log(state);
//             // window.alert("Hey you're Idle");


//             // });


//             // addListener(function() {
//             //     alert('Hello, World!');
//             // })


//             // document.querySelector("H1").innerHTML = "Idle " + (a++);

//             console.log(1234);
//             // }
//             // if (state === "active") {
//             //     console.log("Helloo");
//             //     // Computer not locked, user active in the last 5 minutes
//             // } else {
//             //     console.log("DDDDD");

//             // Computer is locked, or the user was inactive for 5 minutes
//         }
//     }
// );



// //----------------------
// // chrome.idle.getAutoLockDelay((num) => {

// //     if (num === "active") {

// //         console.log("i'm active")
// //     } else {
// //         window.alert("idle");
// //         console.log("ur idle");
// //         console.log(d);
// //     }


// // });