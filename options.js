document.getElementById('save').addEventListener('click', function() {
  const blockedUser = document.getElementById('blockedUser').value;

  chrome.storage.sync.set({ blockedUser: blockedUser }, function() {
    console.log('Blocked user is set to ' + blockedUser);
  });
});
