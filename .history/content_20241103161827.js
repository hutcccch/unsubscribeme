// content.js

function findUnsubscribeLinks() {
    const unsubscribeEmails = [];
  
    // Find all links on the page
    const links = document.querySelectorAll("a");
  
    // Loop through each link to find ones with "unsubscribe" in the text or URL
    links.forEach((link) => {
      if (/unsubscribe/i.test(link.textContent) || /unsubscribe/i.test(link.href)) {
        unsubscribeEmails.push({
          subject: "Unsubscribe Link Found",
          unsubscribeLink: link.href
        });
  
        // Send each unsubscribe link to the background script to open in a new tab
        chrome.runtime.sendMessage({ type: 'openTab', url: link.href });
      }
    });
  
    // Send the unsubscribe link data to the popup for feedback
    chrome.runtime.sendMessage({ type: 'emailList', emails: unsubscribeEmails });
  }
  
  // Run findUnsubscribeLinks when the page loads
  window.addEventListener("load", findUnsubscribeLinks);
  