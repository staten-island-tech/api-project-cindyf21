
const URL =`https://emojihub.yurace.pro/api/random/group/face-positive`;

async function getData(URL) {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    document.querySelector('h1').insertAdjacentHTML(
        'afterbegin',`<div><h1> ${data.htmlCode[0]} </h1></div`
    )
}
getData(URL);

const URL1 =`https://emojihub.yurace.pro/api/random/category/food-and-drink`;
getData(URL1);

const URL2 =`https://emojihub.yurace.pro/api/random/category/activities`;
getData(URL2);