let score = "";
let result = {
  director: ["babaa", "babba", "babbb", "baaaa"],
  photographer: ["bbaaa", "bbaab", "bbaba", "bbabb"],
  producer: ["abaaa", "abaab", "ababa", "ababb"],
  supervisor: ["bbbaa", "bbbab", "bbbba", "bbbbb"],
  audio: ["abbaa", "abbab", "abbba", "abbbb"],
  art: ["aaaaa", "aaaab", "baabb", "baaab"],
  actor: ["aaaba", "aaabb", "aabbb", "babab"],
  light: ["aabaa", "aabba", "baaba", "aabab"],
};
let imgs = [
  "story",
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
  "letter",
];
let question = [
  [
    "臉上佈滿皺紋，手上抱著野貓的白髮老爺爺",
    "拄著鑲滿寶石的拐杖，飄浮在半空中的老公公",
  ],
  ["一捲老舊的藏寶圖", "一捲拍完的底片"],
  ["馬上去找可用的材料建造 小船離開", "先休息一下，躺在岸邊欣 賞滿天星空"],
  ["起身發出更大的聲音把它嚇走", "假裝熟睡，等待它自行離開"],
  ["留下繼續旅程", "回到最初的電影院"],
];
let btns;
let btn = document.querySelectorAll(".btn");
let imgsCount = 0;
let body = document.querySelector("body");
let resultKey = Object.keys(result);
let resultValue = Object.values(result);
let resultImg = document.createElement("img");
console.log(resultImg);
btn.forEach((e) => {
  e.addEventListener("click", function gank(e) {
    if (imgsCount < 6) {
      body.style.backgroundImage = "url(./imgsJ/" + imgs[imgsCount] + ".jpg";
    }
    imgsCount += 1;
    if (imgsCount == 1) {
      btn.forEach((e) => {
        e.style.top = "18rem";
        e.style.width = "8.72rem";
        e.firstChild.innerText = "前進冒險";
      });
    }
    if (imgsCount >= 2) {
      body.innerHTML = `   <div class='btn' data-value='a'><div>${
        question[imgsCount - 2][0]
      }</div></div><div class='btn' data-value='b'><div>${
        question[imgsCount - 2][1]
      }</div></div>`;
      btns = document.querySelectorAll(".btn");
      btns.forEach((e) => {
        e.firstChild.style.fontSize = "0.8rem";
        e.style.padding = "0rem 2rem";
        e.style.marginBottom = "1.25rem";
        e.style.width = "14.7rem";
        e.style.left = "0.5rem";

        e.addEventListener("click", (e) => {
          score += e.target.getAttribute("data-value");
          console.log(score);
          if (imgsCount == 5) {
            btns.forEach((e) => {
              e.style.top = "6.5rem";
            });
          }
          let questionNum = 0;
          btns.forEach((e) => {
            if (imgsCount < 6) {
              e.innerHTML = `<div>${question[imgsCount - 1][questionNum]}<div>`;
              questionNum += 1;
            }
          });
          if (
            imgsCount == 0 ||
            imgsCount == 3 ||
            imgsCount == 4 ||
            imgsCount == 0
          ) {
            body.style.backgroundImage =
              "url(./imgs1x/" + imgs[imgsCount] + ".png)";
          } else {
            body.style.backgroundImage =
              "url(./imgsJ/" + imgs[imgsCount] + ".jpg)";
          }

          imgsCount += 1;
          if (imgsCount == 7) {
            btns.forEach((e) => {
              e.remove();
            });
            body.innerHTML = `   <div class='btn' data-value='a'>點擊展開<div></div></div> `;
            let resultBtn = document.querySelector(".btn");
            console.log(resultBtn);
            resultBtn.style.top = "14.2rem";
            resultBtn.style.left = "0.4rem";
            resultBtn.style.width = "11.5rem";
            console.log(answer(score));
            resultBtn.addEventListener("click", (e) => {
              resultBtn.remove();
              body.style.backgroundImage = "none";
              body.appendChild(resultImg);
              if (answer(score) == "light") {
                resultImg.src = "./imgs1x/" + answer(score) + ".jpg";
              } else {
                resultImg.src = "./imgs1x/" + answer(score) + ".png";
              }
              // body.style.backgroundImage =
              //   "url(./imgs1x/" + answer(score) + ".png)";
            });
          }
        });
      });
    }
  });
});

function answer(score) {
  for (let i = 0; i < resultKey.length; i++) {
    for (let j = 0; j < resultValue[i].length; j++)
      if (score === resultValue[i][j]) {
        return resultKey[i];
      }
  }
}
