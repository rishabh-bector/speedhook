function speedScript(num) {
    return `
    var elt = document.createElement("script");
    elt.innerHTML = "var playerElement = document.getElementsByClassName('vjs-tech')[0]; console.log(playerElement); var player = window.videojs(playerElement.id); player.ready(function() { this.playbackRate(` + num + `); }); player.play();";
    document.head.appendChild(elt);
    `
}

let s0 = document.getElementById('s0');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');

s0.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: speedScript(0.25) });
    });
};

s1.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: speedScript(0.5) });
    });
};

s2.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: speedScript(1.0) });
    });
};

s3.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: speedScript(1.5) });
    });
};

s4.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: speedScript(2.0) });
    });
};

s5.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: speedScript(10.0) });
    });
};