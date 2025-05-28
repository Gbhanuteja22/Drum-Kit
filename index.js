function makesound(i){
    const basePath = window.location.pathname.includes("Drum-Kit") ? "/Drum-Kit/" : "/";
    switch(i){
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
    }
}
