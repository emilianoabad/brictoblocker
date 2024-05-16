chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ blockedUser: '' }, function() {
    console.log("The blocked user is set to an empty string.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlContains: 'web.whatsapp.com' },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
