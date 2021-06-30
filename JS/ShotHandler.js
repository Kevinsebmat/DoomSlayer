class ShotHandler{

    constructor(initialAmmo){
        this.initialAmmo = initialAmmo;
        this.ammo = initialAmmo;
        this.shoot = new Audio('../resources/sounds/shoot.wav');
    }

    getAmmoNumber(){
        return this.ammo;
    }

    resetAmmo(){
        this.ammo = this.initialAmmo;
        this.changeShootBoxImage();
    }

    checkIsNoAmmoLeft(){
        if (this.ammo == 0) {
            return true;
        }
        return false;
    }

    checkIfHitSuccessful(demons, mouseX, mouseY){
        if (mouseX == undefined || mouseY == undefined) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
        let numberOfSuccessfulHits = 0;
        this.subtractAmmunition();

        for (let index = 0; index < demons.length; index++) {
            let demon = demons[index];
            let demonPosition = $(demon.demonId).offset();

            if(this.isShotOndemon(mouseX,mouseY,demonPosition) && demon.isAlive){
                demon.fallDown();
                numberOfSuccessfulHits++;
            }   
        }
        if (numberOfSuccessfulHits>1) {
            showComboMessage(mouseX,mouseY, numberOfSuccessfulHits);
        }
        return numberOfSuccessfulHits;
    }

    subtractAmmunition(){
        this.shoot.currentTime = 0;
        this.shoot.play();
        this.ammo--;
        this.changeShootBoxImage();
    }

    isShotOndemon(mouseX,mouseY,demonPosition) {
        let demonX = demonPosition.left;
        let demonY = demonPosition.top;
        let demonWidth = 150;
        let demonHeight = 150;
    
        if ((mouseX>=demonX) && (mouseX <= demonX+demonHeight) && 
            (mouseY >= demonY) && (mouseY <= demonY+demonWidth)){
            return true;
        }
        return false;
    }

    changeShootBoxImage() {
        //add displaying images on classic and modern game mode;
        $("#ammunitionAmmount").html(this.ammo)
    }

    enableShooting(){
        $("#shootBlocker").hide();
    }

    disablehooting(){
        $("#shootBlocker").show();
    }
}


