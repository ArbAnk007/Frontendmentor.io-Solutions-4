const url = "https://api.adviceslip.com/advice/117";
const adviceCounterContainer = document.querySelector(".advice-count-container");
const adviceContainer = document.querySelector(".advice-container");
const changeQuoteBtn = document.querySelector(".dice-container");
let adviceCounter = JSON.parse(localStorage.getItem("adviceCounter")) || 1;

const getData = async () => {
    adviceContainer.innerHTML = "";
    adviceCounterContainer.innerHTML = "";
    const response = await fetch(url);
    const finalData = await response.json();
    const adviceCounerParaElement = document.createElement("p");
    const adviceParaElement = document.createElement("p");
    const counterNode = document.createTextNode(`ADVICE #${adviceCounter}`);
    const adviceNode = document.createTextNode(`"${finalData.slip.advice}"`);
    adviceCounerParaElement.appendChild(counterNode);
    adviceCounterContainer.appendChild(adviceCounerParaElement);
    adviceParaElement.appendChild(adviceNode);
    adviceContainer.appendChild(adviceParaElement);
    adviceCounter++
    localStorage.setItem("adviceCounter",JSON.stringify(adviceCounter));
}

getData()

changeQuoteBtn.addEventListener("click", getData)
