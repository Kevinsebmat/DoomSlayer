class demonsHandler{
    
    constructor(numberOfdemons, demonMovesNumber){
        this.demonMovesNumber = demonMovesNumber;
        this.initialdemonsNumber = numberOfdemons;
        this.numberOfdemons = 0;
        this.demons = new Array();
        this.demonsKilledInRound = 0;
        this.createdemons();
    }

    startdemonsFlight(){
        this.demonsKilledInRound = 0;
        this.demons.forEach(demon => {
            demon.startFlight();
        });
    }

    removeRemainingdemons(){
        this.demons.forEach(demon => {
            if (demon.isAlive) {
                demon.flyOut();
            }
        });
    }

    checkAlldemonsAreShot(){
        if (this.demonsKilledInRound == this.numberOfdemons) {
            return true;
        }
        return false;
    }

    countPrecentOfdemonsKilled(){
        let percent = Math.round(this.demonsKilledInRound/this.numberOfdemons*100);
        return percent;
    }

    createNewdemon(){
        this.numberOfdemons ++;
        let id = this.demons.length;
        this.demons.push(new demon(id, this.demonMovesNumber));
        $("#sky").append(`<div id="${id}" class="demon"></div>`);
    }

    createdemons(){
        for (let i = 0; i < this.initialdemonsNumber; i++) {
            this.createNewdemon();
        }
    }
}