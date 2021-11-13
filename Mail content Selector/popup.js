chrome.contextMenus.create({

    title: "Send as mail",
    contexts: ["selection", "page"],
    onclick: myfunction
});

function myfunction(text) {

    // alert(text.selectionText);
    chrome.tabs.create({ url: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&body=" + text.selectionText });
}