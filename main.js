'use strict';
// Despite many attempts, I just couldn't figure out how to get the api data in a way other than defining an empty object using let, which shouldn't be used in functional programming. If you have any ideas how to fix this code so it doesn't use let, please tell me!

// let data = [];

// async function loadPresidents() {
//     const res = await fetch('./presidents.json');
    
//     if (!res.ok) {
//         throw new Error('Network response error')
//     } else {
//         return await res.json();
//     }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         data = await loadPresidents();
//     } catch (err) {
//         console.log(`Attn! ${err}`);
//         body.innerHTML = (`<h3 class="alert">Something went wrong... please try refreshing the page.</h3>`);
//     }

//     return data;
// });

const presidents = [
    {
        "no": 35,
        "name": "John F.",
        "surname": "Kennedy",
        "dob": {"d": 29, "m": 5, "y": 1917},
        "dod": {"d": 22, "m": 11, "y": 1963},
        "start": {"d": 20, "m": 1, "y": 1961},
        "end": {"d": 22, "m": 11, "y": 1963},
        "party": "Democratic",
        "elections": [1960],
        "vp": "Lyndon B. Johnson",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 36,
        "name": "Lyndon B.",
        "surname": "Johnson",
        "dob": {"d": 27, "m": 8, "y": 1908},
        "dod": {"d": 22, "m": 1, "y": 1973},
        "start": {"d": 22, "m": 11, "y": 1963},
        "end": {"d": 20, "m": 1, "y": 1969},
        "party": "Democratic",
        "elections": [1964],
        "vp": "Hubert Humphrey",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 37,
        "name": "Richard",
        "surname": "Nixon",
        "dob": {"d": 9, "m": 1, "y": 1913},
        "dod": {"d": 22, "m": 4, "y": 1994},
        "start": {"d": 20, "m": 1, "y": 1969},
        "end": {"d": 9, "m": 8, "y": 1974},
        "party": "Republican",
        "elections": [1968, 1972],
        "vp": ["Spiro Agnew", "Gerald Ford"],
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 38,
        "name": "Gerald",
        "surname": "Ford",
        "dob": {"d": 14, "m": 7, "y": 1913},
        "dod": {"d": 26, "m": 12, "y": 2006},
        "start": {"d": 9, "m": 8, "y": 1974},
        "end": {"d": 20, "m": 1, "y": 1977},
        "party": "Republican",
        "elections": [],
        "vp": "Nelson Rockefeller",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 39,
        "name": "Jimmy",
        "surname": "Carter",
        "dob": {"d": 1, "m": 10, "y": 1924},
        "dod": "alive",
        "start": {"d": 20, "m": 1, "y": 1977},
        "end": {"d": 20, "m": 1, "y": 1981},
        "party": "Democratic",
        "elections": [1976],
        "vp": "Walter Mondale",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 40,
        "name": "Ronald",
        "surname": "Reagan",
        "dob": {"d": 6, "m": 2, "y": 1911},
        "dod": {"d": 5, "m": 6, "y": 2004},
        "start": {"d": 20, "m": 1, "y": 1981},
        "end": {"d": 20, "m": 1, "y": 1989},
        "party": "Republican",
        "elections": [1980, 1984],
        "vp": "George H. W. Bush",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 41,
        "name": "George H. W.",
        "surname": "Bush",
        "dob": {"d": 12, "m": 6, "y": 1924},
        "dod": {"d": 30, "m": 11, "y": 2018},
        "start": {"d": 20, "m": 1, "y": 1988},
        "end": {"d": 20, "m": 1, "y": 1993},
        "party": "Republican",
        "elections": [1988],
        "vp": "Dan Quayle",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 42,
        "name": "Bill",
        "surname": "Clinton",
        "dob": {"d": 19, "m": 4, "y": 1946},
        "dod": "alive",
        "start": {"d": 20, "m": 1, "y": 1993},
        "end": {"d": 20, "m": 1, "y": 2001},
        "party": "Democratic",
        "elections": [1992, 1996],
        "vp": "Al Gore",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 43,
        "name": "George W.",
        "surname": "Bush",
        "dob": {"d": 6, "m": 7, "y": 1946},
        "dod": "alive",
        "start": {"d": 20, "m": 1, "y": 2001},
        "end": {"d": 20, "m": 1, "y": 2009},
        "party": "Republican",
        "elections": [2000, 2004],
        "vp": "Dick Cheney",
        "race": "Caucasian",
        "gender": "Male"
    },
    {
        "no": 44,
        "name": "Barack",
        "surname": "Obama",
        "dob": {"d": 4, "m": 8, "y": 1961},
        "dod": "alive",
        "start": {"d": 20, "m": 1, "y": 2009},
        "end": {"d": 20, "m": 1, "y": 2017},
        "party": "Democratic",
        "elections": [2008, 2012],
        "vp": "Joe Biden",
        "race": "African-American",
        "gender": "Male"
    },
    {
        "no": 45,
        "name": "Donald",
        "surname": "Trump",
        "dob": {"d": 14, "m": 6, "y": 1946},
        "dod": "alive",
        "start": {"d": 20, "m": 1, "y": 2017},
        "end": {"d": 20, "m": 1, "y": 2021},
        "party": "Republican",
        "elections": [2016],
        "vp": "Mike Pence",
        "race": "Clown",
        "gender": "Male"
    },
    {
        "no": 46,
        "name": "Joe",
        "surname": "Biden",
        "dob": {"d": 20, "m": 11, "y": 1942},
        "dod": "alive",
        "start": {"d": 20, "m": 1, "y": 2021},
        "end": "president-elect",
        "party": "Democratic",
        "elections": [2020],
        "vp": "Kamala Harris",
        "race": "Caucasian",
        "gender": "Male"
    }
]

// HIGHER ORDER FUNCTIONS

// EMOJIFY PRESIDENTS
// Here we want to create a new array of an emoji for each president depending on data of how old they were when they took office, their race and gender.

// 1. Get age of each president at start

// 2. Create new array with number, age, race and gender.

// 3. Convert age+race+gender into relevant emoji