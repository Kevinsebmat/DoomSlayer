class Game {

    constructor(gameParameters) {
        this.guy1 = new Guy("guy1");
        this.guy2 = new Guy("guy2");
        this.demonMovesNumber = gameParameters.movesNumber;
        this.shotHandler = new ShotHandler(gameParameters.initialAmmo);
        this.pointsHandler = new PointsHandler(gameParameters.demonsNumber);
        this.demonsHandler = new demonsHandler(gameParameters.demonsNumber, gameParameters.movesNumber);
        this.roundEndCountdown;
        this.percentProgress = 0;
        this.lives = 3;
        this.newRoundTimeout;
        this.totalSuccessfulHits = 0;
        this.totalShotsNumber = 0;
    }

    startGame() {
        this.guy1.launchWalkoutAnimation();
        setTimeout(() => this.startNewRound(), 7300);
    }

    shoot() {
        this.totalShotsNumber++;
        let successfulHits = this.shotHandler.checkIfHitSuccessful(this.demonsHandler.demons);
        this.demonsHandler.demonsKilledInRound += successfulHits;

        if (successfulHits > 0) {
            this.totalSuccessfulHits += successfulHits;
            this.pointsHandler.addPoints(successfulHits);
            this.percentProgress = this.demonsHandler.countPrecentOfdemonsKilled();
            displayProgressOnProgressBar(this.percentProgress);
        }
        this.checkIfRoundIsFinished();
    }

    checkIfRoundIsFinished() {
        if (this.demonsHandler.checkAlldemonsAreShot() || this.shotHandler.checkIsNoAmmoLeft()) {
            this.finishRound();
        }
    }

    finishRound() {
        this.stopCountdownToRoundEnd();
        this.shotHandler.disablehooting();
        this.demonsHandler.removeRemainingdemons();
        this.guy2.showGuyWithKilledDemons(this.demonsHandler.demonsKilledInRound);
        this.newRoundTimeout = setTimeout(() => this.startNewRound(), 2000);
        this.checkIfRoundIsPassed();
    }

    checkIfRoundIsPassed() {
        if (this.percentProgress < 95) {
            this.subtractLives();
        }
    }

    subtractLives() {
        disableLifeIcon(this.lives);
        this.lives--;
        if (this.lives < 1) { this.finishGame(); }
    }

    finishGame() {
        window.clearTimeout(this.newRoundTimeout);
        let accuracy = Math.round(this.totalSuccessfulHits / this.totalShotsNumber * 100);
        displayEndScreen(this.pointsHandler, this.totalSuccessfulHits, accuracy);
    }

    startNewRound() {
        displayProgressOnProgressBar(0);
        this.percentProgress = 0;
        this.pointsHandler.addLevel();
        this.setCountdownToRoundEnd();
        this.demonsHandler.startdemonsFlight();
        this.shotHandler.enableShooting();
        this.shotHandler.resetAmmo();
    }

    stopCountdownToRoundEnd() {
        window.clearTimeout(this.roundEndCountdown);
    }

    setCountdownToRoundEnd() {
        let timeToRoundEnd = this.demonMovesNumber * 1000;
        this.roundEndCountdown = setTimeout(() => this.finishRound(), timeToRoundEnd);
    }
}


class ExtremeGame extends Game {

    constructor(gameParameters) {
        super(gameParameters);
        this.initializeCurrentModeSettings();
        this.shooting;
        this.mouseX;
        this.mouseY;
    }

    initializeCurrentModeSettings() {
        $(".sky").css("backgroundImage", "url(../resources/sprites/background/sky3.png)");
        $(".sky").mousedown(() => this.startAutoShooting(event));
        $(".sky").mouseup(() => this.stopAutoShooting(event));
        $("#gunIcon").attr("src", "../resources/sprites/weapons/auto.png");
    }

    saveCurrentCoordinates() {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
    }

    startAutoShooting(event) {
        $(".sky").on("mousemove", () => this.saveCurrentCoordinates());
        this.shooting = setInterval(() => this.shoot(), 100);
    }

    stopAutoShooting() {
        $(".sky").off("mousemove");
        clearInterval(this.shooting);
    }

    shoot() {
        this.totalShotsNumber++;
        let successfulHits = this.shotHandler.checkIfHitSuccessful(this.demonsHandler.demons, this.mouseX, this.mouseY);
        this.demonsHandler.demonsKilledInRound += successfulHits;
        if (successfulHits > 0) {
            this.totalSuccessfulHits += successfulHits;
            this.pointsHandler.addPoints(successfulHits);
            this.percentProgress = this.demonsHandler.countPrecentOfdemonsKilled();
            displayProgressOnProgressBar(this.percentProgress);
        }
        this.checkIfRoundIsFinished();
    }

    finishRound() {
        this.stopAutoShooting();
        this.stopCountdownToRoundEnd();
        this.shotHandler.disablehooting();
        this.demonsHandler.removeRemainingdemons();
        this.guy2.showGuyWithKilledDemons(this.demonsHandler.demonsKilledInRound);
        this.newRoundTimeout = setTimeout(() => this.startNewRound(), 2000);
        this.checkIfRoundIsPassed();
        this.addNewdemon();
    }

    addNewdemon() {
        if (this.demonsHandler.numberOfdemons < 20) {
            this.demonsHandler.createNewdemon();
        }
    }
}


class ModernGame extends Game {

    constructor(gameParameters) {
        super(gameParameters);
        this.changeBackgroudsForCurrentMode();
    }

    changeBackgroudsForCurrentMode() {
        $(".sky").css("backgroundImage", "url(../resources/sprites/background/modern.png)");
        $(".bushes").css("backgroundImage", "url(../resources/sprites/background/bushes.png)");
        $("#sky").click(this.shoot.bind(this));
        $("#gunIcon").attr("src", "../resources/sprites/weapons/shotgun.png");
    }
}


class ClassicGame extends Game {
    constructor(gameParameters) {
        super(gameParameters);
        this.changeBackgroudsForCurrentMode();
    }

    changeBackgroudsForCurrentMode() {
        $(".sky").css("backgroundImage", "url(../resources/sprites/background/sky1.gif)");
        $("#sky").click(this.shoot.bind(this));
    }
}