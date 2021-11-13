// var j = document.getElementById(download_images);
// console.log(j);
// j.addEventListener("click", function() {
chrome.browserAction.onClicked.addListener(function() {

    chrome.tabs.executeScript(null, {
        file: "imgdwnld.js",

    });
    console.log("Hiiii");


    chrome.runtime.onMessage.addListener(
        function(argg, sender, sendResponse) {
            var arg = argg;
            // chrome.runtime.sendMessage(arg);

            console.log(argg);

            for (i = 0; i < argg.length; i++) {
                var img_url = argg[i];

                // saveas = img_url.replace(/[^a-zA-Z0-9]/g, '-');
                console.log(i);

                chrome.downloads.download({
                    url: arg[i],
                    filename: "img" + (i + 1) + ".jpeg",
                    saveAs: false
                });
            }
        });
});


// function sendResponse() {}
// chrome.downloads.download({
//     url: "https://www.unleashed-technologies.com/sites/default/files/2020-05/image_url_drupal_blog_post_large.jpg",
//     filename: "1.jpeg"

// });