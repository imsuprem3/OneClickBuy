
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: localStorage.amazon + "*dash=true"});
});
