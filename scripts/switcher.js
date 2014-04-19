'use strict';

var tabsLiveReloadEnabled = {};

chrome.browserAction.onClicked.addListener(function (tab) {
  if (!tabsLiveReloadEnabled[tab.id]) {
    enableLiveReload(tab, function (info) {
      if (info) {
        tabsLiveReloadEnabled[info.tabId] = info.disable;
        chrome.browserAction.setIcon({ 
          path: 'img/flame-from-logo-38.png',
          tabId: info.tabId
        });
      } 
    });
  } else {
    tabsLiveReloadEnabled[tab.id](function (tabId) {
      delete tabsLiveReloadEnabled[tabId];

      chrome.browserAction.setIcon({ 
        path: 'img/flame-from-logo-38-bw.png',
        tabId: tabId
      });
    });   
  }
});
