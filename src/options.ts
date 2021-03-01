const saveOptions = () => {
  var deckName = (document.getElementById('deck') as HTMLInputElement).value;
  chrome.storage.sync.set({
    deckName: deckName,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

const restoreOptions = () => {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    deckName: "",
  }, (items) => {
    (document.getElementById('deck') as HTMLInputElement).value = items.deckName
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
