// background.js

chrome.runtime.onMessage.addListener((message) => {
    console.log("Message received in background:", message); // For debugging
  
    if (message.type === 'openTab' && message.url) {
      chrome.tabs.create({ url: message.url }, (tab) => {
        if (chrome.runtime.lastError) {
          console.error("Error opening tab:", chrome.runtime.lastError);
        } else {
          console.log("Tab opened:", tab);
        }
      });
    }
  });
  