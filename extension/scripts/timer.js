
var timer;

chrome.storage.local.get(["isTicking", "hours", "minutes", "seconds"], ({isTicking, hours, minutes, seconds}) => {
    document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
    if(!isTicking) {
        chrome.storage.local.get(["hours", "minutes", "seconds"], ({hours, minutes, seconds}) => {
            var endTime = Date.now() + seconds * 1000 + minutes * 60000 + hours * 3600000;
            chrome.storage.local.set({"endTime": endTime});
        });
    } else {
        timer = setInterval(countdown, 500);
        document.getElementById("btnText").innerHTML = "stop";
    }
});

const countdown = () => {
    chrome.storage.local.get("endTime", ({ endTime }) => {
        var distance = endTime - Date.now();
        chrome.storage.local.set({
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
        chrome.storage.local.get(["hours", "minutes", "seconds"], ({hours, minutes, seconds}) => {
            document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
            if(hours === 0 && minutes === 0 && seconds === 0) {
                chrome.storage.local.set({"isTicking": false});
                clearInterval(timer);
            }
        });
    });
}


document.getElementById("playPause").addEventListener("click", () => {
    chrome.storage.local.get("isTicking", ({isTicking}) => {
        if(isTicking) {
            chrome.storage.local.set({"isTicking": false});
            document.getElementById("btnText").innerHTML = "start";
            clearInterval(timer);
        } else {
            chrome.storage.local.set({"isTicking": true});
            document.getElementById("btnText").innerHTML = "stop";
            chrome.storage.local.get(["hours", "minutes", "seconds"], ({hours, minutes, seconds}) => {
                var endTime = Date.now() + seconds * 1000 + minutes * 60000 + hours * 3600000;
                chrome.storage.local.set({"endTime": endTime});
            });
            timer = setInterval(countdown, 500);
        }
    });
    
});

document.getElementById("title").addEventListener("click", () => {
    window.location.href = "popup.html";
});
