chrome.storage.sync.get('blockedUser', function(data) {
  const blockedUser = data.blockedUser;

  if (blockedUser) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const messages = document.querySelectorAll('div[role="row"]');

          let hideMessage = false;

          messages.forEach((message) => {
            const sender = message.querySelector('div[aria-label^="Open chat details for"]');
            const senderName = sender ? sender.getAttribute('aria-label') : '';

            if (senderName.includes(blockedUser)) {
              hideMessage = true;
              message.style.display = 'none';
            } else if (senderName) {
              hideMessage = false;
            }

            if (hideMessage) {
              message.style.display = 'none';
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});
