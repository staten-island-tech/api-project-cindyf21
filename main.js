import '../css/style.css'
import {DOMSelectors} from './dom'


const URL =``;

// async function getData(URL){
//     try {
//         //requesting a response REST API's 
//         const response = await fetch(URL);
//         if(response.status != 200){
//             throw new Error(response.statusText);
//         }
//         //convert response to JSON
//         const data = await response.json();
//         document.querySelector("h1").textContent = data.content;
//     } catch (error) {
//         console.log(error, "Uh Oh");
//         document.querySelector("h1").textContent = "Ahh no";
//     }
// }
// getData(URL);

async function getData() {
    let response = await fetch(
        ""
    );
    let data = await response.json();
    console.log(data);
    data.results.forEach(() => console.log());
}
getData();