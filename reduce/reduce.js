function reqListener() {
  const countryarr = JSON.parse(this.responseText);
  const totalPopulation=function(countryarr) {
    var countryData = JSON.parse(this.response);
    const totalPopulation = countryData.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total population of countries:", totalPopulation);
  };

}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();



