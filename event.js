let menuItem = {
  id: 'talk',
  title: 'How to Pronounce',
  contexts: ['selection']
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(selectedData) {
  if (selectedData.menuItemId == 'talk' && selectedData.selectionText) {
    chrome.tts.speak(selectedData.selectionText, { rate: 1.0 });
  }
});
