const basePath = window.location.pathname.includes("Drum-Kit") ? "/Drum-Kit/" : "/";
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makesound(this.innerText);
        buttonanimation(this.innerText);
    });
}
function makesound(key) {
    switch (key) {
        case 'w':
            new Audio(basePath + "sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio(basePath + "sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio(basePath + "sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio(basePath + "sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio(basePath + "sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio(basePath + "sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio(basePath + "sounds/tom-4.mp3").play();
            break;
        default:
            break;
    }
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonanimation(event.key);
});
function buttonanimation(chose) {
    var active = document.querySelector("." + chose);
    if (active) { 
        active.classList.add("pressed");
        setTimeout(function () {
            active.classList.remove("pressed");
        }, 100);
    }
}
