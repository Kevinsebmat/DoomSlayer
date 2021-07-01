class demon {

    constructor(id, demonMovesNumber) {
        this.demonMovesNumber = demonMovesNumber;
        this.demonId = `#${id}`;
        this.isAlive = true;
        this.moveCount = 0;
        this.demonFlight;
        this.currentWidth = 48;
        this.currentHeight = 20;
    }


    startFlight() {
        this.resurrect();
        this.demonFlight = setInterval(() => this.fly(), 1000);
    }


    resurrect() {
        this.isAlive = true;
        this.moveCount = 0;
        this.currentWidth = 48;
        this.currentHeight = 20;
        this.moveToInitialPosition();
    }


    stopFlightAnimation() {
        clearInterval(this.demonFlight);
        $(this.demonId).stop(true);
    }


    moveToInitialPosition() {
        $(this.demonId).css("bottom", "3%");
    }


    flyOut() {
        this.stopFlightAnimation();
        let destWidth = this.getRandomWidth(10, 85);
        this.changedemonBackground(destWidth, 100);
        $(this.demonId).animate({ bottom: `100%`, left: `${destWidth}%` }, 500, function() {})
    }


    fallDown() {
        this.isAlive = false;
        let this_ = this;
        this.stopFlightAnimation();
        $(this.demonId).css("background-image", "url(../resources/sprites/demon/hit.png)")

        setTimeout(function() {
            $(this_.demonId)
                .css("background-image", "url(../resources/sprites/demon/falling.gif)")
                .animate({ bottom: `3%`, }, 650);
        }, 150);
    }

   


    fly() {
        this.moveCount++;
        let destWidth = this.getRandomWidth(10, 85);
        let destHeight = this.getRandomHeight(35, 85);
        this.changedemonBackground(destWidth, destHeight);
        $(this.demonId).animate({ bottom: `${destHeight}%`, left: `${destWidth}%` }, 1000)
        this.currentWidth = destWidth;
        this.currentHeight = destHeight;
    }


    changedemonBackground(destWidth, destHeight) {
        if (destWidth > this.currentWidth) {
            $(this.demonId)
                .css("background-image", "url(../resources/sprites/demon/flyright.gif)");
            if (destHeight - this.currentHeight > 20) {
                $(this.demonId)
                    .css("background-image", "url(../resources/sprites/demon/flyrightup.gif)");
            }
            if (destHeight - this.currentHeight < -20) {
                $(this.demonId)
                    .css("background-image", "url(../resources/sprites/demon/flyrightdown.gif)");

            }
        } else {
            $(this.demonId)
                .css("background-image", "url(../resources/sprites/demon/flyleft.gif)");

            if (destHeight - this.currentHeight > 20) {
                $(this.demonId)
                    .css("background-image", "url(../resources/sprites/demon/flyleftup.gif)");
            }
            if (destHeight - this.currentHeight < -20) {
                $(this.demonId)
                    .css("background-image", "url(../resources/sprites/demon/flyleftdown.gif)");
            }
        }
    }


    getRandomWidth(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    getRandomHeight(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}