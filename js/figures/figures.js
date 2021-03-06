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

//Isoceles Triangle code

function validateSides(side1, side2){
  if(side1 == side2){
    return true;
  } else{
    return false;
  }
}

function heightIsocelesTriangle(side1, side2, base){
  const validation = validateSides(side1, side2)
  if(validation !== true){
    alert("lo que intentas ingresar no es un triangulo isoceles. la medida de sus lados debe ser la misma")
  } else{
    const newBase = (base / 2);
    const operation = (side1 * side2) - (newBase * newBase);
    const result = Math.sqrt(operation);
    return result; 
  }
}

// Circle code

// Diámetro
function diametroCirculo(radius) {
  return radius * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimeterCircle(radius) {
  const diametro = diametroCirculo(radius);
  return diametro * PI;
}

// Área
function areaCircle(radius) {
  return (radius * radius) * PI;
}

// Aquí interactuamos con el HTML


function comprueba(valor){
  const warning = document.getElementById("WarningSquare");
  const input = document.getElementById("InputSquare");

  if(valor.value <= 0){
    warning.classList.add("warning-square_show");
    input.classList.add("warning-square_input")
    valor.value = "";
  } else{
    input.classList.remove("warning-square_input")
    warning.classList.remove("warning-square_show");
  }
}

//Square functions

function changeMathOperationSquare(){
  const checkSquare = document.getElementById("InputCheckArea");
  const button = document.getElementById("BtncalculateSquare");

  if(checkSquare.checked){
    button.setAttribute("onclick", "calculateAreaSquare()");
  }
  else {
    button.setAttribute("onclick", "calculatePerimeterSquare()");
  } 
}
  
function calculatePerimeterSquare() {
  const input = document.getElementById("InputSquare");
  const warning = document.getElementById("WarningSquare");
  const result = document.getElementById("ResultSquare");
  const value = input.value;

  if(value <= 0) {
    warning.classList.add("warning-square_show")
    input.classList.add("warning-square_input")
  }
  else{
    warning.classList.remove("warning-square_show")
    input.classList.remove("warning-square_input")
    const perimeter = perimeterSquare(value);

    result.innerText = "The perimeter of square is " + perimeter + " Cms."
  }
}

function calculateAreaSquare() {
  const input = document.getElementById("InputSquare");
  const warning = document.getElementById("WarningSquare");
  const result = document.getElementById("ResultSquare");
  const value = input.value;

  if(value <= 0) {
    warning.classList.add("warning-square_show")
    input.classList.add("warning-square_input")
  }
  else{
    warning.classList.remove("warning-square_show")
    input.classList.remove("warning-square_input")
    const area = areaSquare(value);
    result.innerText = "The area of square is " + area + " Cms."
  }
}

//Triangle Functions

function changeMathOperationTriangle(){
  const checkSquare = document.getElementById("InputSelect");
  const button = document.getElementById("BtncalculateSquare");

  if(checkSquare.checked){
    button.setAttribute("onclick", "calculateAreaSquare()");
  }
  else {
    button.setAttribute("onclick", "calculatePerimeterSquare()");
  } 
}

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
  const inputHeight = document.getElementById("InputHeightTriangle");
  const inputBase = document.getElementById("InputBaseTriangle");

  const height = inputHeight.value;
  const base = inputBase.value;

  const area = areaTriangle(base, height);

  alert(area)
}

//Isoceles Triangle Functions
function calculateHeightIsocelesTriangle(){
  const sideOne = document.getElementById("InputSideIsocelesTriangle1");
  const sideTwo = document.getElementById("InputSideIsocelesTriangle2");
  const inputBase = document.getElementById("InputBaseIsocelesTriangle");

  const side1 = sideOne.value;
  const side2 = sideTwo.value;
  const base = inputBase.value;
  
  const height = heightIsocelesTriangle(side1, side2, base);

  alert(height)

}


//Circle Functions
function calculatePerimeterCircle(){
  const inputRadius = document.getElementById("InputRadiusCircle");
  
  const radius = inputRadius.value;

  const perimeter = perimeterCircle(radius);

  alert(perimeter)
  
}

function calculateAreaCircle(){
  const inputRadius = document.getElementById("InputRadiusCircle");
  
  const radius = inputRadius.value;

  const area = areaCircle(radius);

  alert(area)
}