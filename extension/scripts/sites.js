function generateList() {
    var myList = document.getElementById('myList');
    myList.innerHTML = '';
    chrome.storage.local.get("blockedWebsites", ({blockedWebsites}) => {
        for(website of blockedWebsites) {
            var listNode = document.getElementById("myList");
            var liNode = document.createElement("LI");
            var textNode = document.createTextNode(website);
            var span = document.createElement("SPAN");
            var i = document.createElement("I");
            i.className = "fas fa-trash";
            span.append(i);
            liNode.append(textNode);
            liNode.append(span);
            span.onclick = () => {
                var index = blockedWebsites.indexOf(website);
                blockedWebsites.splice(index, 1);
                chrome.storage.local.set({"blockedWebsites": blockedWebsites});
                generateList();
            };
            listNode.append(liNode);
        }
    });
}

generateList();

document.getElementById("addBtn").addEventListener("click", () => {
    chrome.storage.local.get("blockedWebsites", ({blockedWebsites}) => {
        blockedWebsites.push(document.getElementById("website_input").value);
        chrome.storage.local.set({"blockedWebsites": blockedWebsites});
    });
    generateList();
});

document.getElementById("title").addEventListener("click", () => {
    window.location.href = "popup.html";
});

document.getElementById("clearBtn").addEventListener("click", () => {
    var myList = document.getElementById('myList');
    myList.innerHTML = '';
    chrome.storage.local.set({"blockedWebsites": []});
});