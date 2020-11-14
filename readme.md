# Module 4: Javascript - Functional programming

Like in the API project, I used the [Rest Countries API](https://restcountries.eu). This time I decided to create an overview of the flags of all the countries of the world and the user can filter and sort the results.

I tried to stay as true to the concept of functional programming as possible by not using any malleable variables (except for one at the very beginning, it's commented on in the code...) and I used these higher order functions:

1. **Mapping** — To create the innerHTML for the flag container, I mapped a text string for each object in the array to a new array
2. **Joining** — I then joined all of the objects in the newly mapped array together and added it to the HTML
3. **Filter** — I used the filter function to create a new array with only objects that the filtering deemed true
4. **Sort** — I used the sort function to create a new array sorted by either a number (the population of each country) or alphabetically (the alpha3Code for each country)
5. **forEach** — Which technically is a loop and not in the spirit of functional programming I guess, but it's very useful, especially to add event listeneres to buttons :)

Anyway—[check it out](https://jseinarsson.github.io/vefskoli_mod4_4/)