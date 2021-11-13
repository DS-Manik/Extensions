  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
      console.log(tabs);
      var node1 = document.createElement("LI");
      var textnode1 = document.createTextNode(tabs[0].title);
      node1.appendChild(textnode1);
      document.getElementById("myList").appendChild(node1);
  })

  chrome.tabs.executeScript(null, {
      file: "my.js"
  });

  chrome.runtime.onMessage.addListener(function(a, b, c) {
      chrome.browserAction.setBadgeText({ text: a.toString() });

      console.log(a);
  });