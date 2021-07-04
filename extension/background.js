chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({"blockedWebsites": []});
    chrome.storage.local.set({"totalTasks": 49});
    chrome.storage.local.set({"totalTasksCompleted": 22});
    chrome.storage.local.set({"totalTime": {"hours": 7, "minutes": 30, "seconds": 0}});
    chrome.storage.local.set({"isTicking": false});
    chrome.storage.local.set({"tasks": ["Study for math", "Make spanish project", "Schedule SAT"]});
    chrome.storage.local.set({"hasTimer": false});
});

