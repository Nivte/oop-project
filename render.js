let $table = document.getElementById("table");
console.log($table);
let $testBtn = document.getElementById("testBtn");
console.log($testBtn);

$testBtn.addEventListener("click", waterLevel);

function showKettle() {
  hjs = 0;
  tjs = 24;
  $table.innerHTML += ` <div id="system class="system">
  <img id="kettlePic" class="kettle" src="kettle.jpeg" alt="" />

  <img onclick="heatW()" id="heatBtn${index}" class="heatBtn" src="button.jpeg" alt="" />

  <div id="water${index}" class="water" style="height: ${hjs}vh; top: ${tjs}vh;" ></div>
</div>`;
}

let hjs = 0;
// newKettle.waterTank * 0.26;
let tjs = 24;
function waterLevel() {
  //   $water1.style.height = "5vh";

  hjs = newKettle.waterTank * 0.26;
  document.getElementById(`water${index - 1}`).style.height = `${hjs}vh`;
  document.getElementById(`water${index - 1}`).style.top = `${tjs}vh`;
  // hhh += 2.6;
  if (tjs > 4) {
    tjs -= 2.6;
    console.log(kettleArr);
  }
}
