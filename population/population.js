function reqListener() {
    const countryarr01 = JSON.parse(this.responseText);
    
    function printpopulation(countryarr01) {
        if (countryarr01.population < 200000) {
            console.log(countryarr01.name.common)
        }
    }
    console.log(countryarr01.filter(printpopulation))

}

const req1 = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
