let val;
const grid = document.querySelector('.grid');
const value = document.querySelector('.btn');
value.addEventListener('click', () => {
    const divs = document.querySelectorAll('.grid div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
    val = parseInt(prompt('ok'));
    let gridValue = 600/val - 2;
for(let i = 1; i <=val*val; ++i){
    const div = document.createElement('div');
    div.className = `square`;
    div.style.cssText = `display: inline-block; draggable="false"; flex-direction: row;border: 0.1px solid black; padding: 0%; margin: 0%; height: ${gridValue}px; width: ${gridValue}px;`;
    grid.appendChild(div);
    div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = 'red';
    });
    div.addEventListener('mouseleave', () => {
      div.style.backgroundColor = 'red';
    });
}
});
const divs = document.querySelectorAll('.square');
