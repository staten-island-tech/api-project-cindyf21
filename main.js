/*
//get a promise
function greet(name){
    const greetPromise = new Promise(function(resolve, reject){
        resolve(`Hello ${name}`);
    });
    return greetPromise;
}
const mandy = greet("Mandy");

//handle the promise
mandy.then((result) => {
    //putting data into HTML
    console.log(result);
});
*/

const URL =`https://api.quotable.io/random`;

async function getData(URL){
    try {
        //requesting a response REST API's 
        const response = await fetch(URL);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error, "Uh Oh");
        document.querySelector("h1").textContent = "Ahh no";
    }
}
getData(URL);