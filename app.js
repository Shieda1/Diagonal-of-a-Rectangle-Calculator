// https://calculator.swiftutors.com/diagonal-of-a-rectangle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const diagonalofaRectangleRadio = document.getElementById('diagonalofaRectangleRadio');
const widthoftheRectangleRadio = document.getElementById('widthoftheRectangleRadio');
const heightoftheRectangleRadio = document.getElementById('heightoftheRectangleRadio');

let diagonalofaRectangle;
let widthoftheRectangle = v1;
let heightoftheRectangle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

diagonalofaRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Width of the Rectangle';
  variable2.textContent = 'Height of the Rectangle';
  widthoftheRectangle = v1;
  heightoftheRectangle = v2;
  result.textContent = '';
});

widthoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Diagonal of a Rectangle';
  variable2.textContent = 'Height of the Rectangle';
  diagonalofaRectangle = v1;
  heightoftheRectangle = v2;
  result.textContent = '';
});

heightoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Diagonal of a Rectangle';
  variable2.textContent = 'Width of the Rectangle';
  diagonalofaRectangle = v1;
  widthoftheRectangle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(diagonalofaRectangleRadio.checked)
    result.textContent = `Diagonal of a Rectangle = ${computeDiagonalofaRectangle().toFixed(2)}`;

  else if(widthoftheRectangleRadio.checked)
    result.textContent = `Width of the Rectangle = ${computeWidthoftheRectangle().toFixed(2)}`;

  else if(heightoftheRectangleRadio.checked)
    result.textContent = `Height of the Rectangle = ${computeHeightoftheRectangle().toFixed(2)}`;
})

// calculation

function computeDiagonalofaRectangle() {
  return Math.sqrt(Math.pow(Number(widthoftheRectangle.value), 2) + Math.pow(Number(heightoftheRectangle.value), 2));
}

function computeWidthoftheRectangle() {
  return Math.sqrt(Math.pow(Number(diagonalofaRectangle.value), 2) - Math.pow(Number(heightoftheRectangle.value), 2));
}

function computeHeightoftheRectangle() {
  return Math.sqrt(Math.pow(Number(diagonalofaRectangle.value), 2) - Math.pow(Number(widthoftheRectangle.value), 2));
}