var allButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < allButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var keyWord = this.innerHTML;
        playSound(keyWord);
        animation(keyWord);
    });
} /*
document.querySelector(".w").addEventListener("click", function () {
    var sound = new Audio('sounds/crash.mp3');
    sound.play();
});

*/
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    animation(event.key);
});

function playSound(keyPress) {

    switch (keyPress) {
        case "w":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case "a":
            var sound1 = new Audio('sounds/kick-bass.mp3');
            sound1.play();
            break;
        case "s":
            var sound2 = new Audio('sounds/snare.mp3');
            sound2.play();
            break;
        case "d":
            var sound3 = new Audio('sounds/tom-1.mp3');
            sound3.play();
            break;
        case "j":
            var sound4 = new Audio('sounds/tom-2.mp3');
            sound4.play();
            break;
        case "k":
            var sound5 = new Audio('sounds/tom-3.mp3');
            sound5.play();
            break;
        case "l":
            var sound6 = new Audio('sounds/tom-4.mp3');
            sound6.play();
            break;
    }
}
function animation(keyPress) {

    var buttonActive = document.querySelector("." + keyPress);
    buttonActive.classList.add("pressed");

    setTimeout(function () {
        buttonActive.classList.remove("pressed");
    }, 100);


}


