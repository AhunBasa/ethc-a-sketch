const main = document.querySelector('body');

let container = createContainer(16);

main.appendChild(container);

changeColor();

function createContainer(n) {
  
  const container = document.createElement('div');
  container.classList.add('container');
  
  for(let i = 0; i < n; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    for(let j = 0; j < n; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      column.appendChild(cell);  
    }
  }
  return container;
}

function changeColor() {
  let cells = document.querySelectorAll('.cell');
    
  cells.forEach(cell => {
    let count = 0; 
    cell.addEventListener('mouseenter', (e) => {
      count++;
      let hue;
      let lightness;
      if(document.querySelector('input[type="radio"').checked) {
        hue = Math.floor(Math.random()* 360);
        lightness = 80 - count * 8;
        saturation = 20;
      } else {
        hue = 0;
        lightness = 30;
        saturation = 0;
      }
      cell.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    })
  });

}

let slidebar = document.getElementById('slidebar');
slidebar.addEventListener('change', changeResolution);
let resolution = slidebar.value;

function changeResolution() {
  resolution = slidebar.value;
  container.remove();
  container = createContainer(resolution);
  main.appendChild(container);
  changeColor();
  document.querySelector('label').innerText = `${resolution} X ${resolution}`;
}

const button = document.querySelector('button');
button.onclick = removeContainer;
function removeContainer() {
  container.remove();
  container = createContainer(16);
  main.appendChild(container);
  changeColor();
  slidebar.value = 16;
  document.querySelector('label').innerText = '16 X 16';
}


