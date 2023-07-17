let $table = document.getElementById("table");
// console.log($table);
// let $testBtn = document.getElementById("testBtn");
// console.log($testBtn);

// $testBtn.addEventListener("click", waterLevel);

function renderAddKettle() {
  hjs = 0;
  tjs = 24;
  $table.innerHTML += ` <div id="system" class="system">
  <img id="kettlePic" class="kettle" src="kettle.jpeg" alt="" />

 

  <img onclick="newKettle.heat()" id="heatBtn${index}" class="heatBtn" src="button.jpeg" alt="" />

  <div id="water${index}" class="water" style="height: ${0}vh; top: ${0}vh;" ></div>
</div>`;
}

let hjs = 0;
// newKettle.waterTank * 0.26;
let tjs = 24;
function renderWaterLevel() {
  //   $water1.style.height = "5vh";

  hjs = newKettle.waterTank * 0.26;
  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.height = `${hjs}vh`;
  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.top = `${tjs}vh`;
  // hhh += 2.6;
  if (tjs > 4) {
    tjs -= 2.6;
  }
}

let check = 0;
function renderHeat() {
  check = hjs;
  hjs = newKettle.waterTank * 0.26;
  tjs += check - hjs + 2.6;

  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.height = `${hjs}vh`;
  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.top = `${tjs}vh`;
}
