const container = document.createElement('div');
container.classList.add('container');
const main = document.querySelector('body');
main.appendChild(container);






let n = 14;

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');

    container.appendChild(cell);  
  }
}


console.log(container);
