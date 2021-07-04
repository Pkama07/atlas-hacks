chrome.storage.local.get("blockedWebsites", ({ blockedWebsites }) => {
    for(website of blockedWebsites) {
        chrome.storage.local.get(["isTicking", "tasks"], ({isTicking, tasks}) => {
            if(window.location.hostname === website && (isTicking || tasks.length !== 0)) {
                window.location.href = "https://images.ctfassets.net/yqezig6gzu6c/ylQrKm2xBbK90KCRblyap/adddba355d9dc7928d1763be560f9b0c/Blocked_Websites_Blog_.jpg?w=800&h=420&q=100&fm=webp";
            }
        });
    }
});
