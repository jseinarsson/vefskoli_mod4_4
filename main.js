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

// FLAG BUILDER
// Uses the array.map function to create a text string with HTML and adds it to a new array called "flagsHTML", then uses array.join to join the objects in the array together to add it to the innerHTML of the flagcontainer .flags
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

// FILTER AND SORT
const selectors = document.querySelectorAll('select');

// Adds event listener for every selector on the page.
selectors.forEach(select => {
    select.addEventListener('change', () => {
        const filter = document.querySelector('select[name="filter"]');
        const sort = document.querySelector('select[name="sort"]');
        
        // Some nested functions here. getFlags(selectedCountries) takes one parameter --> the result of sortCountries(sortOpt, countryList), which takes two parameters --> sortOpt is the selected option in the sort selection element in the HTML, countryList is the result of the filterContries(region) which takes one parameter --> the selected option in the filter selection element in the HTML
        getFlags(sortCountries(sort.selectedOptions[0].id, filterCountries(filter.selectedOptions[0].id)));
    })
})

// FILTER COUNTRIES
function filterCountries(region) {
    if (region === 'All') {
        return countries;
    }
    // First checks if the region is all 'all' in which case it returns the countries list, if not, we use array.filter to filter out the countries whose country.region value matches the selected region. This arrow function only adds the country if country.region === region returns true.
    return countries.filter(country => country.region === region);
}

// SORT COUNTRIES
// This was an interesting one to change to functional programming --> here I would probably have used a switch statement (at the very least an if/else if/else chain...), but I found that it's possible to replace these options with "object literals", which are preferred in functional programming (see this link: https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals)

function sortCountries(sortOpt, countryList) {
    // Each of these options returns a newly sorted array. countryList.sort takes in two parameters (a and b) and checks the value/order of each against each other, moving it up and down in the array accordingly.
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
}