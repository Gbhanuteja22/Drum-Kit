// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         makesound(this.innerText);
//         buttonanimation(this.innerText);
//     });
// }
// function makesound(i){
//     switch(i){
//         case 'w':var crash=new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//         case 'a':var kick=new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;
//         case 's':var snare=new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//         case 'd':var tom1=new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//         case 'j':var tom2=new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//         case 'k':var tom3=new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//         case 'l':var tom4=new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//     }
// }

// document.addEventListener("keypress",function (e){
//     makesound(e.key);
//     buttonanimation(e.key);
// });
// function buttonanimation(chose){
//     var active=document.querySelector("."+chose);
//     active.classList.add("pressed");
//     setTimeout(function(){
//         active.classList.remove("pressed");
//     },100);
// }










// Get base path dynamically for GitHub Pages subfolder support
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
            // do nothing if key not recognized
            break;
    }
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonanimation(event.key);
});

function buttonanimation(chose) {
    var active = document.querySelector("." + chose);
    if (active) {  // Check if element exists to avoid errors
        active.classList.add("pressed");
        setTimeout(function () {
            active.classList.remove("pressed");
        }, 100);
    }
}
