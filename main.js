// In the functional programming paradigm you should avoid using let to define a variable, as they are mallable. This is the only way I know how to create a reusable object with the data from the API however and it's the way that Pedro showed in the Live Coding session.
// However, this object will not be changed in the code after the data has been assigned to it, so in that way, it is in the spirit of functional programming.
let countries = [];

//GET WORLD COUNTRIES
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => {
        if (!res.ok) { throw new Error('network response error') } else { return res.json() }
        })
    .then(data => {
        countries = data;
        getFlags(countries); //Passes countries into the getFlags HTML builder function
    })
    .catch(err => {
        const body = document.querySelector("body");
        console.log(`Error! ${err}`)
        body.innerHTML = `<h1>Something went wrong... please try refreshing the page.</h1>`
    });

// Flag builder --> uses the array.map function to create a text string with HTML and adds it to a new array called "flagsHTML", then uses array.join to join the objects in the array together to add it to the innerHTML of the flagcontainer .flags
function getFlags(selectedCountries) {
    const flagContainer = document.querySelector('.flags');
    flagContainer.innerHTML = "";

    const flagsHTML = selectedCountries.map(country => {
        // Checking if the country name is the same in the native language and in English, if not it prints both names
        if (country.name === country.nativeName) {
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
        } else {
            return `
            <div class="country">
                <img src="${country.flag}" alt="The flag of ${country.name}">
                <div class="info">
                <h3>${country.name}<br>${country.nativeName}</h3>
                <p><span>Capital:</span> ${country.capital}</p>
                <p><span>Region:</span> ${country.subregion}</p>
                </div>
            </div>
            `
        }
    })

    flagContainer.innerHTML = flagsHTML.join("");
}

const selectors = document.querySelectorAll('select');

selectors.forEach(select => {
    select.addEventListener('change', () => {
        const filter = document.querySelector('select[name="filter"]');
        const sort = document.querySelector('select[name="sort"]');

        // filteredSorted(filter.selectedOptions[0].id, sort.selectedOptions[0].id);    
        // filteredSorted(filter.selectedOptions[0].id, sort.selectedOptions[0].id);    
        getFlags(sortCountries(sort.selectedOptions[0].id, filterCountries(filter.selectedOptions[0].id)));
    })
})

function filteredSorted(region, sortOpt) {

    const filteredSortedCountries = sortedCountries(sortOpt, filterCountries(region));

    console.log(filteredSortedCountries);
    // getFlags(filteredSortedCountries);
    // if (reguon === 'All') 

    // // Function checks whether passed in info is the "default", ie. region All and sorted Alphabetically, in which case it uses the getFlags builder with the default countries object.

    // //&& sort === "alpha"
    // if (region === 'All') {
    //     getFlags(countries);
    // } else {
    //     const countriesInRegion = countries.filter(country => country.region === region);

    //     getFlags(countriesInRegion);
    // }
}

function filterCountries(region) {
    if (region === 'All') {
        return countries;
    }

    return countries.filter(country => country.region === region);
}

// This was an interesting one to change to functional programming --> here I would probably have used a switch statement (at the very least an if/else if/else chain...), but I found that it's possible to replace these options with "object literals", which are preferred in functional programming (see this link: https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals)

function sortCountries(sortOpt, countryList) {
    const options = {
        'alpha' : function() {
            return countryList.sort((a, b) => (a.alpha3Code > b.alpha3Code ? 1 : -1));
        },
        'alphaRev' : function() {
            return countryList.sort((a, b) => (a.alpha3Code < b.alpha3Code ? 1 : -1));
        },
        'popLow' : function() {
            return countryList.sort((a, b) => (a.population > b.population ? 1 : -1));
        },
        'popHigh' : function() {
            return countryList.sort((a, b) => (a.population < b.population ? 1 : -1));
        },
        'default' : function() {
            return countryList
        }
    };

    const sortedList = (options[sortOpt] || options['default'])();
    return sortedList
    //console.log(sortedList);

    // return (options[sortOpt] || options['default'])();
}


// FILTER COUNTRY FLAGS BY REGION
// Targets all the HTML elements with the class of ".region__btn"
// const regionBtns = document.querySelectorAll('.region__btn');

// // For each button it'll run an event listener, if clicked it will run the function filteredCountries, passing in the ID of the btn
// regionBtns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         e.preventDefault;
//         filteredSorted(btn.id);
//     })
// })

// function filteredSorted(region, sort) {
//     // Function checks whether passed in region is equal to all, if not, it uses array.filter to create a new object with just the countries that have a country.region equal to the passed in region and then runs the getFlags builder with the new object.
//     if (region === 'All') {
//         getFlags(countries);
//     } else {
//         const countriesInRegion = countries.filter(country => country.region === region);

//         getFlags(countriesInRegion);
//     }
// }

// // REORDER LIST BY VALUE
// const sortBtns = document.querySelectorAll('.sort__btn');

// sortBtns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         e.preventDefault;
//         sortedCountries(btn.id);
//     })
// })

// function sortedCountries(sorted) {
//     switch(sorted) {
//         case "alpha":
//             //do something
//             break;
//         case "alphaReverse":
//             //do something
//             break;
//         case "popHigh":
//             //do something
//             break;
//         case "popLow":
//             //do something
//             break;
//         default:
//             getFlags(countries);
//             break;
//     }
// }