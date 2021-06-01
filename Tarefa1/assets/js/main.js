
import { getSummary, getDataFormated } from "./api.mjs";

let selectedValue = "";
let dataInitial = "";

// Elements
let selectInput = document.getElementById("combo");
let dateInput = document.getElementById("today");
let textCasesConfirmed = document.getElementById("confirmed");
let textDeaths = document.getElementById("death");
let textRecovered = document.getElementById("recovered");
let textActives = document.getElementById("active");

let init = async () => {
    dataInitial = await getDataFormated();
    let count = 0;

    dataInitial.map(data => {
        if(data.date === "2021-05-05T00:00:00Z"){
            count = count + data.Deaths 
        }
        
    })

    console.log(count);
}


selectInput.addEventListener("change", function (event) {
    selectedValue = event.target.value;
    console.log(selectedValue);
});

window.addEventListener("load", init);



