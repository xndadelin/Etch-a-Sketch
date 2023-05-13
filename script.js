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
    console.log(val);
    console.log(gridValue);
for(let i = 1; i <=val*val; ++i){
    const div = document.createElement('div');
    div.style.cssText = `display: inline-block; flex-direction: row;border: 0.1px solid black; padding: 0px; margin: 0px; margin-bottom: -3px; margin-top: -1px; height: ${gridValue}px; width: ${gridValue}px;`;
    grid.appendChild(div);
}
});