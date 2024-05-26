function reqListener() {
    const countryarr = JSON.parse(this.responseText);
    function printcountries(countryarr) {
        if(countryarr.region === "Asia")
        console.log(countryarr.name.common);
    }
    const result = countryarr.filter(printcountries);
}
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://restcountries.com/v3.1/all");
    req.send();
