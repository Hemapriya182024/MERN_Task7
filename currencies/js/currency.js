function reqListener() {
    const countries = JSON.parse(this.responseText);
  
    function hasCurrency(countries) {
      for (let key in countries.currencies) {
      
       if (key === "USD") {
        console.log(countries.name.common); // Return true if the country uses USD
      }
      }
      return false; // Return false if the country doesn't use USD
    }
  
    const usdCountries = countries.filter(hasCurrency);
  
    console.log(usdCountries);
}
  
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
