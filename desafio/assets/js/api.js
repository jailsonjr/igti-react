
export const getSummary = async () => {
    let response = await axios("https://api.covid19api.com/summary");
    
    return {
        totalConfirmed: response.data.Global.TotalConfirmed,
        totalDeaths: response.data.Global.TotalDeaths,
        totalRecovered: response.data.Global.TotalRecovered,
        newConfirmed: response.data.Global.TotalConfirmed,
        newDeaths: response.data.Global.TotalDeaths,
        newRecovered: response.data.Global.TotalRecovered,
        updated: response.data.Date,
        topDeathsPerCountry: getTopCountrysDeaths(response.data.Countries)
    }
}

export const getTopCountrysDeaths = (arrayCountrys) => {

    let sortedArray = arrayCountrys.sort((element1, element2) => {
        return element2.TotalDeaths - element1.TotalDeaths
    });

    let labels = [];
    let qnt = [];

    sortedArray.slice(0,10).map((data) => {
        labels.push(data.Country);
        qnt.push(data.TotalDeaths);
    });

    return {
        labels,
        qnt
    };
}

