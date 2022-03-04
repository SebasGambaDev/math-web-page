//Square Code
function perimeterSquare(side) {
  return side * 4;
}

function areaSquare(side) {
  return side * side;
}

//Triangle Code
function perimeterTriangle(side1, side2, base) {
  return side1 + side2 + base;
}

function areaTriangle(base, height) {
  return (base * height) / 2;
}

// Circle code

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML

//Square functions
function calculatePerimeterSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;

  const perimetro = perimeterSquare(value);
  alert(perimetro);
}

function calculateAreaSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;

  const area = areaA(value);
  alert(area);
}

//Triangle Functions
function calculatePerimeterTriangle(){
  const input1 = document.getElementById("InputSideTriangle1");
  const input2 = document.getElementById("InputSideTriangle2");
  const inputBase = document.getElementById("InputBaseTriangle");
  
  const side1 = parseInt(input1.value);
  const side2 = parseInt(input2.value);
  const base = parseInt(inputBase.value);

  const perimeter = perimeterTriangle(side1, side2, base);

  alert(perimeter);
}

function calculateAreaTriangle(){
  //TO DO
}

//Circle Functions
function calculatePerimeterCircle(){
  //TO DO
}

function calculateAreaCircle(){
  //TO DO

}