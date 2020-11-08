// 'use strict';

// I created my own dataset with data on every president elected since 1960
const presidents = [
    {
        name: "John F. Kennedy",
        president: 35,
        ageInauguration: {years: 43, days: 236},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Democratic",
        elections: {year: 1960, won: true, opponent: "Richard Nixon"}, 
        tookOffice: {d: 20, m: 1, y: 1961},
        leftOffice: {d: 22, m: 11, y: 1963},
        reason: "Assassinated",
        alive: false,
        vp: {name: "Lyndon B. Johnson", vicepresident: 37, ageInauguration: {years: 52, days: 146}, tookOffice: {d: 20, m: 1, y: 1961}, leftOffice: {d: 22, m: 11, y: 1963}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Lyndon B. Johnson",
        president: 36,
        ageInauguration: {years: 55, days: 87},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Democratic",
        elections: {year: 1964, won: true, opponent: "Barry Goldwater"}, 
        tookOffice: {d: 22, m: 11, y: 1963},
        leftOffice: {d: 20, m: 1, y: 1969},
        reason: "Did not seek reelection",
        alive: false,
        vp: {name: "Hubert Humphrey", vicepresident: 38, ageInauguration: {years: 53, days: 238}, tookOffice: {d: 20, m: 1, y: 1965}, leftOffice: {d: 20, m: 1, y: 1969}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Richard Nixon",
        president: 37,
        ageInauguration: {years: 56, days: 11},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Republican",
        elections: [{year: 1960, won: false, opponent: "John F. Kennedy"}, {year: 1968, won: true, opponent: "Hubert Humphrey"}, {year: 1972, won: true, opponent: "George McGovern"}], 
        tookOffice: {d: 20, m: 1, y: 1969},
        leftOffice: {d: 9, m: 8, y: 1974},
        reason: "Resigned",
        alive: false,
        vp: [{name: "Spiro Agnew", vicepresident: 39, ageInauguration: {years: 50, days: 72}, tookOffice: {d: 20, m: 1, y: 1969}, leftOffice: {d: 10, m: 10, y: 1973}, ethnicity: "Caucasian", gender: "Male"}, {name: "Gerald Ford", vicepresident: 40, ageInauguration: {years: 60, days: 145}, tookOffice: {d: 6, m: 12, y: 1973}, leftOffice: {d: 9, m: 8, y: 1974}, ethnicity: "Caucasian", gender: "Male"}]
    },
    {
        name: "Gerald Ford",
        president: 38,
        ageInauguration: {years: 61, days: 26},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Republican",
        elections: {year: 1976, won: false, opponent: "Jimmy Carter"}, 
        tookOffice: {d: 9, m: 8, y: 1974},
        leftOffice: {d: 20, m: 1, y: 1977},
        reason: ["Placeholder", "Lost reelection"],
        alive: false,
        vp: {name: "Nelson Rockefeller", vicepresident: 41, ageInauguration: {years: 66, days: 164}, tookOffice: {d: 19, m: 12, y: 1974}, leftOffice: {d: 20, m: 1, y: 1977}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Jimmy Carter",
        president: 39,
        ageInauguration: {years: 52, days: 111},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Democratic",
        elections: [{year: 1976, won: true, opponent: "Gerald Ford"}, {year: 1980, won: false, opponent: "Ronald Reagan"}], 
        tookOffice: {d: 20, m: 1, y: 1977},
        leftOffice: {d: 20, m: 1, y: 1981},
        reason: "Lost reelection",
        alive: true,
        vp: {name: "Walter Mondale", vicepresident: 42, ageInauguration: {years: 49, days: 15}, tookOffice: {d: 20, m: 1, y: 1977}, leftOffice: {d: 20, m: 1, y: 1981}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Ronald Reagan",
        president: 40,
        ageInauguration: {years: 69, days: 348},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Republican",
        elections: [{year: 1980, won: true, opponent: "Jimmy Carter"}, {year: 1984, won: true, opponent: "Walter Mondale"}], 
        tookOffice: {d: 20, m: 1, y: 1981},
        leftOffice: {d: 20, m: 1, y: 1989},
        reason: "Term-limit",
        alive: false,
        vp: {name: "George H. W. Bush", vicepresident: 43, ageInauguration: {years: 56, days: 222}, tookOffice: {d: 20, m: 1, y: 1981}, leftOffice: {d: 20, m: 1, y: 1989}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "George H. W. Bush",
        president: 41,
        ageInauguration: {years: 64, days: 222},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Republican",
        elections: [{year: 1988, won: true, opponent: "Michael Dukakis"}, {year: 1992, won: false, opponent: "Bill Clinton"}], 
        tookOffice: {d: 20, m: 1, y: 1989},
        leftOffice: {d: 20, m: 1, y: 1993},
        reason: "Lost reelection",
        alive: false,
        vp: {name: "Dan Quayle", vicepresident: 44, ageInauguration: {years: 41, days: 351}, tookOffice: {d: 20, m: 1, y: 1989}, leftOffice: {d: 20, m: 1, y: 1993}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Bill Clinton",
        president: 42,
        ageInauguration: {years: 46, days: 154},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Democratic",
        elections: [{year: 1992, won: true, opponent: "George H. W. Bush"}, {year: 1996, won: true, opponent: "Bob Dole"}], 
        tookOffice: {d: 20, m: 1, y: 1993},
        leftOffice: {d: 20, m: 1, y: 2001},
        reason: "Term-limit",
        alive: true,
        vp: {name: "Al Gore", vicepresident: 45, ageInauguration: {years: 44, days: 295}, tookOffice: {d: 20, m: 1, y: 1993}, leftOffice: {d: 20, m: 1, y: 2001}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "George W. Bush",
        president: 43,
        ageInauguration: {years: 54, days: 198},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Republican",
        elections: [{year: 2000, won: true, opponent: "Al Gore"}, {year: 2004, won: true, opponent: "John Kerry"}], 
        tookOffice: {d: 20, m: 1, y: 2001},
        leftOffice: {d: 20, m: 1, y: 2009},
        reason: "Term-limit",
        alive: true,
        vp: {name: "Dick Cheney", vicepresident: 46, ageInauguration: {years: 59, days: 356}, tookOffice: {d: 20, m: 1, y: 2001}, leftOffice: {d: 20, m: 1, y: 2009}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Barack Obama",
        president: 44,
        ageInauguration: {years: 47, days: 169},
        ethnicity: "Mixed",
        gender: "Male",
        party: "Democratic",
        elections: [{year: 2008, won: true, opponent: "John McCain"}, {year: 2012, won: true, opponent: "Mitt Romney"}],
        tookOffice: {d: 20, m: 1, y: 2009},
        leftOffice: {d: 20, m: 1, y: 2017},
        reason: "Term-limit",
        alive: true,
        vp: {name: "Joe Biden", vicepresident: 47, ageInauguration: {years: 66, days: 61}, tookOffice: {d: 20, m: 1, y: 2009}, leftOffice: {d: 20, m: 1, y: 2017}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Donald J. Trump",
        president: 45,
        ageInauguration: {years: 70, days: 220},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Republican",
        elections: [{year: 2016, won: true, opponent: "Hillary Clinton"}, {year: 2020, won: false, opponent: "Joe Biden"}],
        tookOffice: {d: 20, m: 1, y: 19},
        leftOffice: {d: 20, m: 1, y: 19},
        reason: "Lost reelection",
        alive: true,
        vp: {name: "Mike Pence", vicepresident: 48, ageInauguration: {years: 57, days: 227}, tookOffice: {d: 20, m: 1, y: 2017}, leftOffice: {d: 20, m: 1, y: 2021}, ethnicity: "Caucasian", gender: "Male"}
    },
    {
        name: "Joe Biden",
        president: 46,
        ageInauguration: {years: 78, days: 61},
        ethnicity: "Caucasian",
        gender: "Male",
        party: "Democratic",
        elections: {year: 2020, won: true, opponent: "Donald J. Trump"}, 
        tookOffice: {d: 20, m: 1, y: 2021},
        leftOffice: undefined,
        reason: "Incumbent",
        alive: true,
        vp: {name: "Kamala Harris", vicepresident: 49, ageInauguration: {years: 56, days: 92}, tookOffice: {d: 20, m: 1, y: 2021}, leftOffice: undefined, ethnicity: "Mixed", gender: "Female"}
    }
]

// HIGHER ORDER FUNCTIONS

// forEach

presidents.forEach

// Filter








// EMOJIFY PRESIDENTS
// Here we want to create a new array of an emoji for each president depending on data of how old they were when they took office, their ethnicity and gender and the same information for their vice presidents.

// const btn = document.querySelector('.button');

// btn.addEventListener('click', e => {
//     console.log(presidents);

//     const emojis = presidents.map(president => president.ageInauguration.years >= 67 ? 'Old' : 'Not Old')

//     console.log(emojis);
//     console.log(presidents);
// })