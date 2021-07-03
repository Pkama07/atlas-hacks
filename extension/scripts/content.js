chrome.storage.local.get("blockedWebsites", ({ blockedWebsites }) => {
    for(website of blockedWebsites) {
        if(window.location.hostname === website) {
            document.body.innerHTML = "<h1>you naughty naughty</h1>";
        }
    }
});
