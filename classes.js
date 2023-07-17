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


// place to start a class

class kettle {
  //constructor

  constructor(color) {
    this.color = color;
    this.waterTank = 0;
    this.temperature = 25;
  }

  //kettle.prototype functions



  addKettle() {
    kettleArr.push({ newKettle, index });
    renderAddKettle();
    kettleArr[kettleArr.length - 1].newKettle.waterTank = 0;
    // kettleArr[kettleArr.length - 2].newKettle.waterTank = 20;
    console.log(kettleArr);
    index++;
  }

  fillWater() {
    // if (this.waterTank < 90) {
    //   this.waterTank += 10;

    console.log((kettleArr[kettleArr.length - 1].newKettle.waterTank += 10));
    console.log(kettleArr);
    renderWaterLevel();

    // document.getElementById(`water${index - 1}`).style.height = `${hjs}vh`;
    // }
  }

  heat() {
    console.log((this.temperature = 100));

    this.waterTank = this.waterTank * 0.8;

    console.log(kettleArr);
    renderHeat();
  }
}

let index = 0;

let newKettle = new kettle("silver");

function getKettles() {
  console.log(kettleArr);
}
getKettles();

$fillWaterBtn.addEventListener("click", newKettle.fillWater);

// function addKettle() {
//   kettleArr.push({ newKettle, index });
//   renderAddKettle();
//   kettleArr[kettleArr.length - 1].newKettle.waterTank = 0;
//   // kettleArr[kettleArr.length - 2].newKettle.waterTank = 20;
//   console.log(kettleArr);
//   index++;
// }

// matching functions with buttons

// $createBtn.addEventListener("click", addKettle);

// let names = ["a", "b", "c", "d"];

// console.log(names);

// for (let i=0;i<10;i++) {
//     names.push(names[i])

// }

// console.log(names)

// $createRingBtn.addEventListener("click", addRingKettle);

// let rId = 0;

// let ringKettleArr = [];
// function addRingKettle() {
//   ringKettleArr.push({ ringKettle1, rId });
//   rId++;
//   console.log(ringKettleArr);
// }

// ringKettle.prototype.ring = function ring() {
//   if (temperature > 95) {
//     this.bell = true;
//   }
// };

// function ringKettle(color) {
//   kettle.call(this);

//   let bell;
//   this.bell = false;
// }

// function ringKettle(color) {
//   kettle.call(this);

//   let bell;
//   this.bell = false;
// }

// ring function

// creating instances for example

// let newKettle = new kettle("blue");
// let ringKettle1 = new ringKettle("blue");
// console.log(ringKettle1);
// console.log(newKettle);
