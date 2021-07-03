document.getElementById("homepageBtn").addEventListener("click", () => {
    window.location.href = "popup.html";
});

document.getElementById("startBtn").addEventListener("click", () => {
    var hours = parseInt(document.getElementById("hours").value),
        minutes = parseInt(document.getElementById("minutes").value),
        seconds = parseInt(document.getElementById("seconds").value);
    var endTime = seconds * 1000 + minutes * 60000 + hours * 3600000;
    chrome.storage.local.set({"hours": hours, "minutes": minutes, "seconds": seconds, "endTime": Date.now() + endTime});
    window.location.href = "timer.html";
});