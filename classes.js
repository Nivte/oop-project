//dom

let $createBtn = document.getElementById("createBtn");
let $fillWaterBtn = document.getElementById("fillWaterBtn");
let $heatBtn = document.getElementById("heatBtn");
let $createRingBtn = document.getElementById("createRingBtn");

//variables

// let color = "";
// let waterTank = 0;
// let temperature = 25;
let kettleArr = [];

function addKettle() {
  kettleArr.push(new Kettle());
  renderAddKettle();
}

// place to start a class

class Kettle {
  //constructor

  constructor(color) {
    this.color = color;
    this.waterTank = 0;
    this.temperature = 25;
    this.isBoiling = false;
  }

  //kettle.prototype functions

  fillWater() {
    if (this.waterTank < 85 && this.isBoiling === false) {
      console.log((this.waterTank += 10));
      console.log(kettleArr);
      renderWaterLevel();

      // let index = 0;
      console.log(kettleArr.length);
    }
  }

  heat() {
    if (this.waterTank > 25) {
      if (!this.isBoiling) {
        this.temperature = 100;

        this.waterTank = this.waterTank * 0.8;

        console.log(kettleArr);
        renderHeat();
        this.isBoiling = true;
      }
    } else {alert ("you need more water")}
  } 
}

// let newKettle = new kettle("silver");

function getKettles() {
  console.log(kettleArr);
}
getKettles();

$fillWaterBtn.addEventListener("click", () =>
  kettleArr.length > 0
    ? kettleArr[kettleArr.length - 1].fillWater()
    : alert("you have to open the package first")
);

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
