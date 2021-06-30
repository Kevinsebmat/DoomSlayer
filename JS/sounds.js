var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var shootSound = new Audio('../resources/sounds/shoot.wav');
var gotOne = new Audio('../resources/sounds/gotOne.wav');
var gotZero = new Audio('../resources/sounds/gotZero.wav');
// var demon = new Audio('../resources/sounds/demon.wav');
var level = new Audio('../resources/sounds/level.mp3');
var intro = new Audio('../resources/sounds/doomsgate.mp3');
// var guywalk = new Audio('../resources/sounds/guywalk.mp3')
// var demonfall = new Audio('../resources/sounds/demonfall.wav')



function playSound(intro) {
    this.playSound=document.createElement("audio");
    this.playSound.src= intro;
    this.playSound.setAttribute("preload", "auto");
    this.playSound.setAttribute("controls", "none");
    this.playSound.style.display = "none";
      document.body.appendChild(this.playSound);
      this.play = function(){
    this.playSound.play();
  }
  this.stop = function(){
    this.playSound.pause();
  }

//     var sound;

//     if (name == "shoot") {
//         sound = shootSound;
//     }
//     else if (name == "demonfall"){
//         sound = demonfall;
//     }
//     else if (name == "guywalk"){
//         // intro.pause();
//         sound = intro;
//     }
//     else if (name == "miss") {
//         sound = miss;
//     }
//     else if (name == "level") {
//         sound = level;
//     }
//     else if (name == "empty") {
//         sound = emptyMag;
//     }
//     else if (name == "hit"){
//         sound = hit;
//     }
//     else if (name == "gotOne"){
//         sound = gotOne;
//         demon.pause();
//         demon.currentTime = 0;
//     }
//     else if (name == "gotZero"){
//         sound = gotZero;
//         demon.pause();
//         demon.currentTime = 0;
//     }
//     else if (name == "intro"){
//         sound = intro;
//     }
//     else{
//         sound = demon;
//     }

//     sound.currentTime = 0;
//     sound.play();
 }