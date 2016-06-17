var L8PR_URL = 'http://l8pr-pr-6.herokuapp.com/open/';
function onClick(info, tab) {
    var urlToOpen = info.linkUrl || info.frameUrl || info.pageUrl;
    chrome.tabs.create({
     url: L8PR_URL + encodeURIComponent(urlToOpen)
   });
}
chrome.contextMenus.create({title: chrome.i18n.getMessage('openInL8prTitle'), onclick: onClick});
