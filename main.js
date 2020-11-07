// GETTING THE API — THIS IS NOT CORRECT ACCORDING TO FUNCTIONAL PARADIGM, I TRIED DOING IT DIFFERENTLY BUT IT NEVER WORKED...
let countries = [];
const body = document.querySelector("body");

// Load API with information on world countries
async function loadCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');

    //Throws error is result is not OK (results are not OK if they don't return a code between 200 and 299), else it returns the data as JSON
    if (!res.ok) {
        throw new Error('Network response error');
    } else {
        return await res.json();
    }
}

// On dom load, the loadcountries function is run and tries to assign the JSON string to the countries object, else it console logs the error and changes the DOM contents
document.addEventListener("DOMContentLoaded", async () => {
    try {
        countries = await loadCountries();
    } catch (err) {
        console.error(`Attn! ${err}`);
        body.innerHTML = (`<h1 class="alert">Something went wrong... please try refreshing the page.</h3>`);
    }

    return countries;
});

////////////

const regionBtn = document.querySelectorAll(".regionBtn");

regionBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(countries);
        const thisRegion = countries.filter(country => country.region === btn.id);
        console.log(thisRegion)
    });
});



