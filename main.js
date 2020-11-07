// let countries = [];

// async function loadCountries(region) {
//     const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);

//     if (!res.ok) {
//         console.log('Error');
//     } else {
//         console.log(`Ok, got ${region}`);
//         return await res.json();
//     }
// }

// regionBtns.forEach(function (btn) {
//     btn.addEventListener('click', async () => {
//         try {
//             countries = await loadCountries(btn.id);
//         } catch (err) {
//             error.innerHTML = (`<h1 class="alert">Something went wrong... please try again.</h3>`);
//         }

//         return countries;
//     });
// });

// console.log(countries);

// // On dom load, the loadcountries function is run and tries to assign the JSON string to the countries object, else it console logs the error and changes the DOM contents
// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         countries = await loadCountries();
//     } catch (err) {
//         console.log(`Attn! ${err}`);
//         body.innerHTML = (`<h1 class="alert">Something went wrong... please try refreshing the page.</h3>`);
//     }

//     return countries;
// });

const regionBtns = document.querySelectorAll(".regionBtn");
const error = document.querySelector(".error");

function getCountries(region) {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response error');
            } else {
                return res.json();
            }
        })
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
            error.innerHTML = (`<h3>Something went wrong... please try again</h3>`)
        });
}

const europe = getCountries('europe');

console.log(europe);