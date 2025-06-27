class Player {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.positionX = 20;
    this.positionY = 20;
  }

  moveLeft() {
    this.positionX--;
    console.log(`moving left...${this.positionX}`);
  }
  moveRight() {
    this.positionX++;
    console.log(`moving right...${this.positionX}`);
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
