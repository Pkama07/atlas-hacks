/*
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
document.getElementById("addBtn").addEventListener("click", addWebsite);
*/

function generateList() {
    var myList = document.getElementById('myList');
    myList.innerHTML = '';
    chrome.storage.local.get("tasks", ({tasks}) => {
        for(task of tasks) {
            var listNode = document.getElementById("myList");
            var liNode = document.createElement("LI");
            var textNode = document.createTextNode(task);
            var span = document.createElement("SPAN");
            var i = document.createElement("I");
            i.className = "fas fa-trash";
            span.append(i);
            liNode.append(textNode);
            liNode.append(span);
            span.onclick = () => {
                var index = tasks.indexOf(task);
                tasks.splice(index, 1);
                chrome.storage.local.set({"tasks": tasks});
                generateList();
            };
            listNode.append(liNode);
        }
    });
}

generateList();

document.getElementById("addBtn").addEventListener("click", () => {
    chrome.storage.local.get("tasks", ({tasks}) => {
        tasks.push(document.getElementById("website_input").value);
        chrome.storage.local.set({"tasks": tasks});
    });
    generateList();
});

document.getElementById("timerBtn").addEventListener("click", () => {
    chrome.storage.local.get("hasTimer", ({hasTimer}) => {
        if(hasTimer) {
            window.location.href = "timer.html";
        } else {
            window.location.href = "countdown.html";
            chrome.storage.local.set({"hasTimer": true});
        }
    });
});
document.getElementById("clearBtn").addEventListener("click", () => {
    var myList = document.getElementById('myList');
    myList.innerHTML = '';
    chrome.storage.local.set({"tasks": []});
});
document.getElementById("websites").addEventListener("click", () => {
    window.location.href = "sites.html";
});
document.getElementById("insights").addEventListener("click", () => {
    window.location.href = "insights.html";
});