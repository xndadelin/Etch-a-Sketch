const resetButton = document.querySelector('.resetbtn')
const grid = document.querySelector('.grid');
const value = document.querySelector('.btn');
const Value = document.querySelector('.gridvalue');
const Color = document.querySelector('#color');
const rainbow = document.querySelector('.rainbow');

let val = 16;
let selectedColor = '#000000';
Value.textContent = `${val}x${val}`;
  Color.addEventListener('input', () => {
     selectedColor = Color.value;
  });
  
  resetButton.addEventListener('click', () => {
    const divs1 = document.querySelectorAll('.grid div');
    divs1.forEach((div) => {
      div.style.backgroundColor = '#FFFFFF';
    });
    resetButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
      resetButton.style.transform = 'scale(1)';
    }, 100);
  });

function createGrid (val, gridValue) {
  for(let i = 1; i <=val*val; ++i){
    const div = document.createElement('div');
    div.className = `square`;
    div.style.cssText = `display: inline-block; draggable="false"; flex-direction: row;border: 0.1px solid black; padding: 0%; margin: 0%; height: ${gridValue}px; width: ${gridValue}px;`;
    grid.appendChild(div);
}
}

createGrid(16, 35.5);
const divs1 = document.querySelectorAll('.grid div');
  divs1.forEach((div) => {
    div.style.backgroundColor = '#FFFFFF';
  });
  let isMouseDown = false;
  divs1.forEach((div) => {
    div.addEventListener("mousedown", function() {
      isMouseDown = true;
    });
  });
  divs1.forEach((div) => {
    div.addEventListener("mouseup", function() {
      isMouseDown = false;
    });
  });
  divs1.forEach((div) => {
      div.addEventListener('mousemove', function(event) {
  if (isMouseDown && event.buttons === 1) { //
    const div = event.target;
    div.style.backgroundColor = `${selectedColor}`;
  }
});
  divs1.forEach((div) => {
    div.setAttribute('draggable', 'false');
    });
});

value.addEventListener('mousemove', () => {
  val = value.value;
  Value.textContent = `${val}x${val}`;
    const divs = document.querySelectorAll('.grid div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].remove();
  } 
    let gridValue = 600/val - 2;
    createGrid(val, gridValue);
    const divs1 = document.querySelectorAll('.grid div');
    divs1.forEach((div) => {
      div.style.backgroundColor = '#FFFFFF';
    });
    let isMouseDown = false;
    divs1.forEach((div) => {
      div.addEventListener("mousedown", function() {
        isMouseDown = true;
      });
    });
    divs1.forEach((div) => {
      div.addEventListener("mouseup", function() {
        isMouseDown = false;
      });
    });
    divs1.forEach((div) => {
          div.addEventListener('mousemove', function(event) {
      if (isMouseDown && event.buttons === 1) { //
        const div = event.target;
        div.style.backgroundColor = `${selectedColor}`;
      }
    });
    });
    divs1.forEach((div) => {
      div.setAttribute('draggable', 'false');
    });

});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rainbow.addEventListener('click', () => {
  let isMouseDown = false;
  divs1.forEach((div) => {
    div.addEventListener("mousedown", function() {
      isMouseDown = true;
    });
  });
  divs1.forEach((div) => {
    div.addEventListener("mouseup", function() {
      isMouseDown = false;
    });
  });
  divs1.forEach((div) => {
        div.addEventListener('mousemove', function(event) {
    if (isMouseDown && event.buttons === 1) { //
      const div = event.target;
      div.style.backgroundColor = getRandomColor();
    }
  });
  });
  divs1.forEach((div) => {
    div.setAttribute('draggable', 'false');
  });
});