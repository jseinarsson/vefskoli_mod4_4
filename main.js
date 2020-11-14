// // GET THE WORLD COUNTRIES API
// // Just the same method I used in the API Guide
// let countries = [];

// async function loadCountries() {
//     const res = await fetch('https://restcountries.eu/rest/v2/all');

//     if (!res.ok) {
//         throw new Error('Network response error');
//     } else {
//         return await res.json();
//     }
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     const body = document.querySelector("body");

//     try {
//         countries = await loadCountries();
//     } catch (err) {
//         console.log(`Attn! ${err}`);
//         body.innerHTML = (`<h1>Something went wrong... please try refreshing the page.</h1>`);
//     }

//     return countries;
// });

let countries = [];

//GET WORLD COUNTRIES

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => {
        if (!res.ok) { throw new Error('Network response error') } else { return res.json() }
        })
    .then(data => {
        countries = data;
        console.log(countries);
        getFlags(countries);
    })
    .catch(err => {
        console.log(`Error! ${err}`)
        
    });


function getFlags(countries) {
    const flagContainer = document.querySelector('.flags');
    flagContainer.innerHTML = "";

    const flagsHTML = countries.map(country => {
        return `

        
        <div class="country">
            <img src="${country.flag}" alt="The flag of ${country.name}">
            <div class="info">
            <h3>${country.name}</h3>
            <p><span>Capital:</span> ${country.capital}</p>
            <p><span>Region:</span> ${country.subregion}</p>
            </div>
        </div>
        `
    })

    flagContainer.innerHTML = flagsHTML.join("");
}