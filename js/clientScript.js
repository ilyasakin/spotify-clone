document.addEventListener("DOMContentLoaded", function() {
let play = true;
    document.getElementById("playPause").addEventListener("click", function() {
        if (play == true) {
            console.log("pause");
            document.getElementById("playPauseImg").src="images/pause.svg";
            play = false;
            } else {
                document.getElementById("playPauseImg").src="images/play.svg";
                play = true;
            }
        });
    });