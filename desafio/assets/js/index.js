
import { getSummary } from "./api.js";
import { getPieChart, getBarChart } from "./graphs.js";

let htmlConfirmed = document.getElementById("confirmed");
let htmlDeath = document.getElementById("death");
let htmlRecovered = document.getElementById("recovered");
let htmlDateUpdate = document.getElementById("dateUpdated");
let htmlPieChart = document.getElementById("pizza");
let htmlBarChart = document.getElementById("barras");

const init = async () => {
   let data = await getSummary();
   let dateUpdatedResponse = new Date(data.updated).toLocaleDateString("pt-BR") + " " + new Date(data.updated).toLocaleTimeString("pt-BR");

   htmlConfirmed.innerText = data.totalConfirmed.toLocaleString('pt-BR');
   htmlDeath.innerText = data.totalDeaths.toLocaleString('pt-BR');
   htmlRecovered.innerText = data.totalRecovered.toLocaleString('pt-BR');
   htmlDateUpdate.innerText = `Data de atualização: ` + dateUpdatedResponse;

   let dataPizza = {
        labels: ["Confirmado", "Recuperados", "Mortes"],
        datasets: [{
            backgroundColor: [
            "#cd5d7d",
            "#77acf1",
            "#ffc947"
            ],
            data: [
                data.newConfirmed,
                data.newRecovered,
                data.newDeaths
                
            ]
        }]
    }

    let dataBar = {
        labels: data.topDeathsPerCountry.labels,
        datasets: [{
            backgroundColor: [
            "#cd5d7d",
            "#77acf1",
            "#ffc947"
            ],
            label: "Total de Mortes por País - TOP 10",
            data: data.topDeathsPerCountry.qnt
        }]
    }

   getPieChart(htmlPieChart, dataPizza, "Distribuição de novos casos");
   getBarChart(htmlBarChart, dataBar);
}

init();

