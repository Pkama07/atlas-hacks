const countdown = () => {
    chrome.storage.local.get("endTime", ({ endTime }) => {
        var distance = endTime - Date.now();
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
    });
    
}

var timer = setInterval(countdown, 500);

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(timer);
    window.location.href = "popup.html";
})