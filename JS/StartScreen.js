class StartScreen {

    constructor() {
        this.availableModes = new Array();
        this.currentModeIndex = 0;
        this.initializeModes();
        this.initializeButtons();
        this.displaySettingsForCurrentMode();

        // this.doomsgate = new Audio('doomsgate.mp3');
        // this.doomsgate.muted = true;
        // this.doomsgate.play();
        // this.music.play()

        // this.doomsgate = new Audio();
        // this.doomsgate.src = 'doomsgate.mp3';
        // this.doomsgate.load();
        // this.doomsgate.play()
        //     .then(() => {
        //     // Audio is playing.
        //             })
        // .catch(error => {
        //     console.log(error);
        // });
    }



    initializeModes() {
        this.availableModes.push({ name: "HARD ", moves: 7, ammunition: 3, demons: 2 }, { name: "NORMAL", moves: 6, ammunition: 5, demons: 3 }, { name: "EASY", moves: 7, ammunition: 20, demons: 3 })
    }

    initializeButtons() {
        $("#prevMode").click(() => this.changeMode("prev"));
        $("#nextMode").click(() => this.changeMode("next"));
    }

    changeMode(togle) {
        if (togle == "next") {
            if (this.currentModeIndex < 2) {
                this.currentModeIndex++;
            } else {
                this.currentModeIndex = 0;
            }
        } else {
            if (this.currentModeIndex > 0) {
                this.currentModeIndex--;
            } else {
                this.currentModeIndex = 2;
            }
        }
        this.displaySettingsForCurrentMode();
    }

    displaySettingsForCurrentMode() {
        let selectedMode = this.availableModes[this.currentModeIndex];
        $("#modeSelect .selection").html(selectedMode.name);
    }

    getGameParametersFromUserSelect() {
        let selectedMode = this.availableModes[this.currentModeIndex];
        let gameParameters = { modeName: selectedMode.name, demonsNumber: selectedMode.demons, movesNumber: selectedMode.moves, initialAmmo: selectedMode.ammunition };
        return gameParameters;
    }


    hideStartScreen() {
        document.getElementById("startScreen").style.display = "none";
    }

    doomsgate() {
        document.getElementById('doomsgate').play();

        //         // document.getElementById('doomsgate').muted = true;

    }


}


// var music = document.createElement("audio")
// document.body.appendChild(music);
// music.src = "doomsgate.mp3"
// music.play()


// document.body.addEventListener("mousemove", function () {
//     music.play()
// })
// var music = document.createElement("audio")
// document.body.appendChild(music);
// music.src = "doomsgate.mp3"

// document.body.addEventListener("mousemove", function () {
//     music.play()
// })