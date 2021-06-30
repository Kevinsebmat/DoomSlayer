class PointsHandler{

    constructor(demonsNumber){
        this.pointsNumber = 0;
        this.level = 0;
        this.demonsNumber = demonsNumber;
    }

    addPoints(successfulHits){
        if (successfulHits == 1) {
            this.pointsNumber += 10;
            this.displayUpdatedPointsNumber();
        }
        else if (successfulHits > 1){
            this.pointsNumber += 20 * successfulHits;
            this.displayUpdatedPointsNumber();
        }
    }

    addLevel(){
        this.level +=1;
        this.displayUpdatedLevelNumber();
    }

    displayUpdatedLevelNumber(){
        $("#levelCount").html(this.level);
    }

    displayUpdatedPointsNumber(){
        $("#scoreCount").html(this.pointsNumber);
    }
}