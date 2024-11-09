// content.js

function findUnsubscribeLinks () {
  //DEBUGGING
  console.log('Gmail has been detected -- running content.js')

  // Find all links on the page
  var links = window.document.querySelectorAll('a')
  //DEBUG
  console.log(links.length + ' links acquired: ' + links)

  // Send each unsubscribe link to the background script after checking to see if it's an unsubscribe link
  for (const link of links) {
    //"i" after the RegEx makes it case-insensitive
    if (
      /unsubscribe/i.test(link.textContent) ||
      /unsubscribe/i.test(link.href)
    ) {
      //DEBUG
      console.log('LINK SET: ' + link.href)
      //It says "unsubscribe," so open a tab.
      chrome.runtime.sendMessage({ type: 'openTab', url: link.href })
    }
  }
}
/* THIS ISN'T WORKING AND I THINK IT MAY NEED TO MOVE TO BACKGROUND.JS-- DO
   WE EVEN NEED A CONTENT.JS OR CAN ALL BE HANDLED IN BACKGROUND SCRIPT? */

   // Run findUnsubscribeLinks() after the entire DOM is loaded
chrome.webNavigation.onDOMContentLoaded.addListener((x) => {
findUnsubscribeLinks();
});
