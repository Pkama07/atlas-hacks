chrome.storage.local.get("blockedWebsites", ({ blockedWebsites }) => {
    for(website of blockedWebsites) {
        var listNode = document.getElementById("blocked");
        var liNode = document.createElement("LI");
        var textNode = document.createTextNode(website);
        liNode.append(textNode);
        listNode.append(liNode);
    }
});

const addWebsite = () => {

    var website = document.getElementById("website_input").value;

    chrome.storage.local.get("blockedWebsites", ({ blockedWebsites }) => {
        blockedWebsites.push(website);
        chrome.storage.local.set({"blockedWebsites": blockedWebsites });
    });



    var listNode = document.getElementById("blocked");
    var liNode = document.createElement("LI");
    var textNode = document.createTextNode(website);
    
    liNode.append(textNode);
    listNode.append(liNode);
    document.getElementById("website_input").value = "";

};

document.getElementById("btn").addEventListener("click", addWebsite);

