class Player {
  constructor() {
    this.width = 30;
    this.height = 10;
    this.positionX = 35;
    this.positionY = 0;

    //Starting CSS positions and assignment relying on class values (not in the css file)
    this.updateUI();
  }

  updateUI() {
    const playerElm = document.getElementById("player");
    playerElm.style.left = this.positionX + "vw";
    playerElm.style.bottom = this.positionY + "vh";
    playerElm.style.width = this.width + "vw";
    playerElm.style.height = this.height + "vh";
  }

  moveLeft() {
    this.positionX--; // this takes care of moving left
    if (this.positionX < 0) {
      this.positionX = 0;
    }
    this.updateUI();
  }
  moveRight() {
    this.positionX++; // this takes care of moving right
    if (this.positionX > 70) {
      this.positionX = 70;
    }
    this.updateUI();
  }
}

class Obstacle {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 30;
    this.positionY = 100; //vh
    this.obstacleElm = null;

    this.createDomElement();
  }

  createDomElement() {
    //step 1: create element
    this.obstacleElm = document.createElement("div");

    //step 2: add content or modify (ex: innerHTML)
    this.obstacleElm.className = "obstacle";

    //Step 3: append to dom (parentElm.appendChild())
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.obstacleElm);
  }

  updateUI() {
    this.obstacleElm.style.left = this.positionX + "vw";
    this.obstacleElm.style.bottom = this.positionY + "vh";
    this.obstacleElm.style.width = this.width + "vw";
    this.obstacleElm.style.height = this.height + "vh";
  }

  moveDown() {
    this.positionY--;
    if (this.positionY < 0) {
      this.obstacleElm.remove();
    }
    this.updateUI();
  }
}

//Create an instance of the class player
const player = new Player();

//create instance of obstacle and setInterval

//create obstacles
const obstaclesArr = []; // stores instances of the class Obstacle
setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 3_000);

//move obstacles
setInterval(() => {
  obstaclesArr.forEach((obstacleInstance) => {
    obstacleInstance.moveDown();
  });
}, 4_0);

// Event listeners
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});
