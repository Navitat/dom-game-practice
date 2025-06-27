class Player {
  constructor() {
    this.width = 30;
    this.height = 10;
    this.positionX = 40;
    this.positionY = 0;

    //Starting CSS positions and assignment relying on class values (not in the css file)
    const playerElm = document.getElementById("player");
    playerElm.style.left = this.positionX + "vw";
    playerElm.style.bottom = this.positionY + "vh";
    playerElm.style.width = this.width + "vw";
    playerElm.style.height = this.height + "vh";
  }

  moveLeft() {
    this.positionX--; // this takes care of moving left

    const playerElm = document.getElementById("player");
    playerElm.style.left = this.positionX + "vw"; // remember to update the UI
  }
  moveRight() {
    this.positionX++; // this takes care of moving left

    const playerElm = document.getElementById("player");
    playerElm.style.left = this.positionX + "vw"; // remember to update the UI
  }
}

//Create an instance of the class player
const player = new Player();

// Event listeners
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});
