
chrome.storage.local.get(["totalTime", "totalTasks", "totalTasksCompleted"], ({totalTime, totalTasks, totalTasksCompleted}) => {
    document.getElementById("percTask").innerHTML = Math.floor(totalTasksCompleted * 100 / totalTasks) + "%";
    document.getElementById("totalTime").innerHTML = totalTime.hours + "h " + totalTime.minutes + "m " + totalTime.seconds + "s";
    document.getElementById("totalTasks").innerHTML = totalTasksCompleted;
});

document.getElementById("title").addEventListener("click", () => {
    window.location.href = "popup.html";
});