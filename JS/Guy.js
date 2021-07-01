class Guy {

    constructor(id) {
        this.guyId = `#${id}`;
    }

    launchWalkoutAnimation() {
        let walkBackground = "url(../resources/sprites/guy/guyeWalking.gif)";
        let sniffBackground = "url(../resources/sprites/guy/walk3.gif)";
        let stopBackground = "url(../resources/sprites/guy/found.png)";
        let jumpBackground = "url(../resources/sprites/guy/doomshoot.gif)";

        $(this.guyId)
            .animate({ left: "20%", }, 1000, function() {
                $(this).css("background-image", sniffBackground)
            })
            .animate({ left: "20%", }, 1000, function() {
                $(this).css("background-image", walkBackground);
            })
            .animate({ left: "40%", }, 1000, function() {
                $(this).css("background-image", sniffBackground);
            })
            .animate({ left: "40%", }, 1000, function() {
                $(this).css("background-image", stopBackground);
            })
            .animate({ left: "40%", }, 500, function() {
                $(this).css("background-image", jumpBackground)
                    .css("animation-name", "guyJump")
            })
            .animate({ opacity: "40%", }, 700, function() {
                $(this).css("display", "none");
            })
    }


    showGuyWithKilledDemons(killedDemons) {
        console.log("show guywith killed demons")
        if (killedDemons == 0) {
            document.getElementById("guy2").style.display = "block";
            $(this.guyId).css("backgroundImage", 'url(../resources/sprites/guy/bk.gif)');
            const myVar = $(this.guyId)
            $("guy2").fadeIn();
            setTimeout(function() {
                hideImage(myVar)
            }, 2000);

            function hideImage(myVar) {
                document.getElementById("guy2").style.display = "none";
            }
        } else if (killedDemons >= 1) {
            document.getElementById("guy2").style.display = "block";
            $(this.guyId).css("backgroundImage", 'url(../resources/sprites/guy/gotOne.gif)');
            const myVar = $(this.guyId);
            $("guy2").fadeIn();
            setTimeout(function() {
              hideImage(myVar)
            }, 2000);
              function hideImage(myVar) {
                document.getElementById("guy2").style.display = "none";
              }
        } else {
            document.getElementById("guy2").style.display = "block";
            $(this.guyId).css(
              "backgroundImage",
              "url(../resources/sprites/guy/bk.gif)"
            );
            const myVar = $(this.guyId);
            $("guy2").fadeIn();
            setTimeout(function () {
              hideImage(myVar);
            }, 2000);

            function hideImage(myVar) {
              document.getElementById("guy2").style.display = "none";
            }
        }

        $(this.guyId)
            .animate({ bottom: "35%", }, 600, function() {})
            // change to wait
            .animate({ bottom: "35%", }, 800, function() {})
            .animate({ bottom: "15%", }, 600, function() {})
    }
}