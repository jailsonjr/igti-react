
export let getSummary = async () => {
    let getData = await (await fetch("https://api.covid19api.com/summary")).json();
    return getData;
}

export let getCountries = async () => {
    let getData = await (await fetch("https://api.covid19api.com/countries")).json();
    return getData;
}

export let getDataFormated = async() => {
    let getData = await (await fetch("https://api.covid19api.com/country/Djibouti?from=2021-05-05T00:00:00Z&to=2021-05-05T00:00:00Z")).json();
    return getData;                 
}