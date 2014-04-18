'use strict';

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    file: 'scripts/socket.io.js'
  });
  
  chrome.tabs.executeScript({
    file: 'scripts/live-reload.js'
  });
});
