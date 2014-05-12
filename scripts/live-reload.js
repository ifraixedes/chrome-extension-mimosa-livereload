function enableLiveReload(tab, callback) {
  var tabId = tab.id;
  var url = /(https?:\/\/[\w-.:]+)/.exec(tab.url);
  var socket;

  if (url) {
    socket = io.connect(url[0]);
    socket.on('page', reloadPage);
    socket.on('css', reloadPage);
    callback({
      tabId: tabId,
      disable: disable
    });
  } else {
    callback(null);
  }

  function reloadPage() {
    chrome.tabs.reload(tabId, function () {
      // it is a hack because to restore the
      // browser action icon after the tab is reloaded,
      // because it comes back to the intial state.
      // The timeout is the second hack, because without it
      // setIcon doesn't work
      setTimeout(function () {
        chrome.browserAction.setIcon({ 
          path: 'img/flame-from-logo-38.png',
          tabId: tabId
        });
      }, 500);
    });
  }

  function disable(done) {
    socket.removeAllListeners('page');
    socket.removeAllListeners('css');
    done(tabId);
  }
};
