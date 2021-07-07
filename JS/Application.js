var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let selectedModeName = gameParameters.modeName;
    let selectedMode;

    if (selectedModeName == "EASY") {
        selectedMode = new ExtremeGame(gameParameters);
    } else if (selectedModeName == "NORMAL") {
        selectedMode = new ModernGame(gameParameters);
    } else {
        selectedMode = new ClassicGame(gameParameters);
    }

    startScreen.hideStartScreen();
    selectedMode.startGame();
    // var music = document.createElement("audio")

    // document.body.appendChild(music);
    // music.src = "doomsgate1.mp3"

    // document.body.addEventListener("mousemove", function() {
    //     music.play()
    // })
}


function toggleSound() {
    console.log('am here in toggle sound')
    var audioElem = document.getElementById('my_audio');
    if (audioElem.paused) {
        audioElem.play();
        $(".my-image").attr("src", "resources/images/mute.png");
    } else {
        audioElem.pause();
        $(".my-image").attr("src", "resources/images/speaker.png");
    }
}

// function toggleClass() {
//     $(".plus").click(function() {
//         $(this).toggleClass("minus");
//     })
// }