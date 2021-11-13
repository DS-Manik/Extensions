var zz;

zz = document.querySelector('.bsU').textContent;

console.log(zz);

chrome.runtime.sendMessage(zz);