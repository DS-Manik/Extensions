var imgs = document.getElementsByTagName("img");
// for (var i = 0; i < imgs.length; i++) {
// console.log(imgs);
var srcList = [];
for (var i = 0; i < imgs.length; i++) {
    srcList.push(imgs[i].src);
    // console.log(imgs[i]);

    // chrome.downloads.download({
    //     url: imgs[1].src,
    //     filename: i + "jpeg"

    // });
    // chrome.runtime.sendMessage(imgs[i].src);

}
// console.log(srcList);
// }
chrome.runtime.sendMessage(srcList);


// console.log("Hey thereee")


// chrome.downloads.download({
//     url: "https://www.unleashed-technologies.com/sites/default/files/2020-05/image_url_drupal_blog_post_large.jpg",
//     filename: "1.jpeg"

// });


// chrome.downloads.download({
//     url: imgs[1].src,
//     filename: i + "jpeg"

// });
// chrome.contextMenus.create({
//     title: "download all images",
//     contexts: ["page"],
//     onclick: myfunction
// });

// function myfunction() {

//     chrome.downloads.download({
//         url: ,
//         filename: "ufo.jpg"

//     });
//     console.log("Hiiiiii");
// document.querySelector("body").style.fontFamily = "Lucida Console";
// alert("done");

// }