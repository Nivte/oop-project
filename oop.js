//dom

let $createBtn = document.getElementById("createBtn");
let $fillWaterBtn = document.getElementById("fillWaterBtn");
let $heatBtn = document.getElementById("heatBtn");
let $createRingBtn = document.getElementById("createRingBtn");

//variables

let color = "";
let waterTank = 0;
let temperature = 25;
let kettleArr = [];

//constructors

function kettle(color) {
  this.color = color;
  this.waterTank = 0;
  this.temperature = 25;
}

function ringKettle(color) {
  kettle.call(this);

  let bell;
  this.bell = false;
}

//prototype matching

ringKettle.prototype = Object.create(kettle.prototype);

//constructor matching

ringKettle.prototype.constructor = ringKettle;

//prototype functions

kettle.prototype.fillWater = function fillWater() {
  // if (this.waterTank < 90) {
  //   this.waterTank += 10;

  console.log((kettleArr[kettleArr.length - 1].newKettle.waterTank += 10));

  console.log(kettleArr);

  // document.getElementById(`water${index - 1}`).style.height = `${hjs}vh`;
  // }
};

kettle.prototype.heat = function heat() {
  console.log((this.temperature = 100));

  this.waterTank = this.waterTank * 0.8;
};

//ring function

ringKettle.prototype.ring = function ring() {
  if (temperature > 95) {
    this.bell = true;
  }
};

//creating instances for example

// let newKettle = new kettle("blue");
// let ringKettle1 = new ringKettle("blue");
// console.log(ringKettle1);
// console.log(newKettle);

//matching functions with buttons

$createBtn.addEventListener("click", addKettle);

let index = 0;

let newKettle = new kettle("silver");

function addKettle() {
  kettleArr.push({ newKettle, index });
  renderAddKettle();
  kettleArr[kettleArr.length - 1].newKettle.waterTank = 0;
  // kettleArr[kettleArr.length - 2].newKettle.waterTank = 20;
  console.log(kettleArr);
  index++;
}

function getKettles() {
  console.log(kettleArr);
}
getKettles();

$fillWaterBtn.addEventListener("click", fill);

function fill() {
  newKettle.fillWater();

  renderWaterLevel();
}

// $heatBtn.addEventListener("click", heatW);

function heatW() {
  newKettle.heat();

  console.log(kettleArr);
  renderHeat();
}

// let names = ["a", "b", "c", "d"];

// console.log(names);

// for (let i=0;i<10;i++) {
//     names.push(names[i])

// }

// console.log(names)

$createRingBtn.addEventListener("click", addRingKettle);

let rId = 0;

let ringKettleArr = [];
function addRingKettle() {
  ringKettleArr.push({ ringKettle1, rId });
  rId++;
  console.log(ringKettleArr);
}
