import './style.css'

const DOMSelectors = {
  btn1: document.getElementById("btn1"),
  btn2: document.getElementById("btn2"),
  btn3: document.getElementById("btn3"),
  btn4: document.getElementById("btn4"),
  btn5: document.getElementById("btn5"),
  btn6: document.getElementById("btn6"),
  btn7: document.getElementById("btn7"),
  container: document.getElementById("container")
};

const URL = "https://emojihub.yurace.pro/api/all"

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.forEach(data =>
        DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="gallery">
        <h2 class="emoji">${data.htmlCode[0]}</h2>
        <h3 class="emojiName"> ${data.name} </h3>
        </div>      
        `
    ));
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

function clearData() {
  DOMSelectors.container.innerHTML = ""
}

DOMSelectors.btn1.addEventListener("click", function() {
  clearData();
  getData(`https://emojihub.yurace.pro/api/all/category/smileys-and-people`)
}),

DOMSelectors.btn2.addEventListener("click", function() {
  clearData();
  getData(`https://emojihub.yurace.pro/api/all/category/animals-and-nature`)
}),

DOMSelectors.btn3.addEventListener("click", function() {
  clearData();
  getData(`https://emojihub.yurace.pro/api/all/category/food-and-drink`)
}),

DOMSelectors.btn4.addEventListener("click", function () {
  clearData();
  getData(`https://emojihub.yurace.pro/api/all/category/travel-and-places`)
}),

DOMSelectors.btn5.addEventListener("click", function () {
  clearData();
  getData(`https://emojihub.yurace.pro/api/all/category/activities`)
}),

DOMSelectors.btn6.addEventListener("click", function () {
  clearData();
  getData(`https://emojihub.yurace.pro/api/all/category/objects`)
}),

DOMSelectors.btn7.addEventListener("click", function () {
  clearData();
  getData(URL)
})

