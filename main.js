

const URL =`https://emojihub.yurace.pro/api/random`;

async function getData(URL) {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    document.querySelector('h1').insertAdjacentHTML(
        'afterbegin',`<div><h1> ${data.name} ${data.htmlCode} </h1></div`
    )
}
getData(URL);
