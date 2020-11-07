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

// Load API with info on European countries
// async function loadCountries() {
//     const res = await fetch('https://restcountries.eu/rest/v2/region/europe');

//     if (!res.ok) {
//         throw new Error('Network response error');
//     } else {
//         return await res.json();
//     }
// }

// const countries = document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         await loadCountries();
//     } catch (err) {
//         body.innerHTML = (`<h1 class="alert">Something went wrong... please try refreshing the page.</h3>`);
//     }
// });

// console.log(countries);


// const regionBtns = document.querySelectorAll('.regionBtn');

// async function loadCountries(region) {
//     const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);

//     if (!res.ok) {
//         throw new Error('Network response error');
//     } else {
//         return await res.json();
//     }
// }

// regionBtns.forEach(function (btn) {
//     btn.addEventListener('click', async () => {
//         try {
//             return await loadCountries(btn.id);
//         } catch (err) {
//             error.innerHTML = (`<h1 class="alert">Something went wrong... please try refreshing the page.</h3>`);
//         }
//     });
// });

const error = document.querySelector('.error');

function loadCountries(region) {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response error');
            } else {
                return res.json();
            }
        })
        .then(data => {return data})
        .catch(err => {
            console.error(err)
            error.innerHTML = (`<h1 class="alert">Something went wrong... please try again.</h3>`)
        });
}

// const europe = loadCountries('europe');

console.log(loadCountries('europe'));

// async function loadCountries(region) {
//         const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);

//     if (!res.ok) {
//         throw new Error('Network response error');
//     } else {
//         return await res.json();
//     }
// }

// const europe = loadCountries('europe');
// console.log(europe);