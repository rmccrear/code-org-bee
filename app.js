const board = document.getElementById('board');
const sprites = ['flower', 'honeycomb'];
const backgroundSprites = ['grass', 'tree'];
let beePosition = { x: 0, y: 3 };
let pollenCollected = 0;
let honeyMade = 0;
let beeOrientation = 0; // 0: right, 90: down, 180: left, 270: up

function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (i === 3) {
        let sprite;
        if (j === 0) {
          sprite = 'grass';
        } else {
          sprite = sprites[Math.floor(Math.random() * sprites.length)];
        }
        const img = document.createElement('img');
        img.src = `img/${sprite}.webp`;
        img.classList.add('background');
        cell.appendChild(img);
        if (sprite === 'flower' || sprite === 'honeycomb') {
          const label = document.createElement('div');
          label.classList.add('label');
          label.textContent = '1';
          cell.appendChild(label);
        }
      } else {
        const backgroundSprite = backgroundSprites[Math.floor(Math.random() * backgroundSprites.length)];
        const img = document.createElement('img');
        img.src = `img/${backgroundSprite}.webp`;
        img.classList.add('background');
        cell.appendChild(img);
      }
      board.appendChild(cell);
    }
  }
  updateBeePosition();
}

function updateBeePosition() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    const beeImg = cell.querySelector('.bee');
    if (beeImg) cell.removeChild(beeImg);
  });
  const beeImg = document.createElement('img');
  beeImg.src = 'img/bee.webp';
  beeImg.classList.add('bee');
  if (beeOrientation === 0) {
    beeImg.style.transform = 'scaleX(1)';
  } else if (beeOrientation === 180) {
    beeImg.style.transform = 'scaleX(-1)';
  } else {
    beeImg.style.transform = `rotate(${beeOrientation}deg)`;
  }
  board.children[beePosition.y * 8 + beePosition.x].appendChild(beeImg);
}

function moveBee(direction) {
  switch (direction) {
    case 'ArrowUp':
      if (beePosition.y > 0) beePosition.y--;
      break;
    case 'ArrowDown':
      if (beePosition.y < 7) beePosition.y++;
      break;
    case 'ArrowLeft':
      if (beePosition.x > 0) beePosition.x--;
      break;
    case 'ArrowRight':
      if (beePosition.x < 7) beePosition.x++;
      break;
  }
  updateBeePosition();
}

function turnLeft() {
  beeOrientation = (beeOrientation - 90 + 360) % 360;
  updateBeePosition();
}

function turnRight() {
  beeOrientation = (beeOrientation + 90) % 360;
  updateBeePosition();
}

function moveForward() {
  switch (beeOrientation) {
    case 0: // right
      if (beePosition.x < 7) beePosition.x++;
      break;
    case 90: // down
      if (beePosition.y < 7) beePosition.y++;
      break;
    case 180: // left
      if (beePosition.x > 0) beePosition.x--;
      break;
    case 270: // up
      if (beePosition.y > 0) beePosition.y--;
      break;
  }
  updateBeePosition();
}

function gatherPollen() {
  const beeCell = board.children[beePosition.y * 8 + beePosition.x];
  const backgroundImg = beeCell.querySelector('.background');
  const label = beeCell.querySelector('.label');
  if (backgroundImg && backgroundImg.src.includes('img/flower.webp') && label && label.textContent === '1') {
    pollenCollected++;
    label.textContent = '0';
    console.log(`Pollen collected: ${pollenCollected}`);
  } else {
    console.log('The bee is not on a flower or pollen has already been collected!');
  }
}

function makeHoney() {
  const beeCell = board.children[beePosition.y * 8 + beePosition.x];
  const backgroundImg = beeCell.querySelector('.background');
  const label = beeCell.querySelector('.label');
  if (backgroundImg && backgroundImg.src.includes('img/honeycomb.webp') && label && label.textContent === '1') {
    honeyMade++;
    label.textContent = '0';
    console.log(`Honey made: ${honeyMade}`);
  } else {
    console.log('The bee is not on a honeycomb or honey has already been made!');
  }
}

function randomizeLine() {
  for (let j = 0; j < 8; j++) {
    const cell = board.children[3 * 8 + j];
    cell.innerHTML = '';
    let sprite;
    if (j === 0) {
      sprite = 'grass';
    } else {
      sprite = sprites[Math.floor(Math.random() * sprites.length)];
    }
    const img = document.createElement('img');
    img.src = `img/${sprite}.webp`;
    img.classList.add('background');
    cell.appendChild(img);
    if (sprite === 'flower' || sprite === 'honeycomb') {
      const label = document.createElement('div');
      label.classList.add('label');
      label.textContent = '1';
      cell.appendChild(label);
    }
  }
  updateBeePosition();
}

function atFlower() {
  const beeCell = board.children[beePosition.y * 8 + beePosition.x];
  const backgroundImg = beeCell.querySelector('.background');
  return backgroundImg && backgroundImg.src.includes('img/flower.webp');
}

function atHoneycomb() {
  const beeCell = board.children[beePosition.y * 8 + beePosition.x];
  const backgroundImg = beeCell.querySelector('.background');
  return backgroundImg && backgroundImg.src.includes('img/honeycomb.webp');
}

// document.addEventListener('keydown', (event) => moveBee(event.key));
createBoard();