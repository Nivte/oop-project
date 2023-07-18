let $table = document.getElementById("table");
// console.log($table);
// let $testBtn = document.getElementById("testBtn");
// console.log($testBtn);

// $testBtn.addEventListener("click", waterLevel);

function renderAddKettle() {
  const index = kettleArr.length - 1;
  hjs = 0;
  tjs = 24;
  $table.innerHTML += ` <div id="system${index}" class="system">
  <img id="kettlePic" class="kettle" src="kettle.jpeg" alt="" />

 

  <img onclick="kettleArr[event.target.id[7]].heat()" id="heatBtn${index}"  class="heatBtn" src="button.jpeg" alt="" />

  <div id="water${index}" class="water" style="height: ${0}vh; top: ${0}vh;" ></div>
</div>`;
}

let hjs = 0;

let tjs = 24;
function renderWaterLevel() {
  hjs = kettleArr[kettleArr.length - 1].waterTank * 0.26;
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
  hjs = kettleArr[event.target.id[7]].waterTank * 0.26;
  tjs += check - hjs + 2.6;

  document.getElementById(
    `water${event.target.id[7]}`
  ).style.height = `${hjs}vh`;
  document.getElementById(`water${event.target.id[7]}`).style.top = `${tjs}vh`;
  hjs = 0;
  tjs = 24;

  document.getElementById(
    `system${event.target.id[7]}`
  ).innerHTML += `<img class="steam" src="steam.jpeg" alt="">`;
}
