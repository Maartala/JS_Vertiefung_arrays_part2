// Lev1_1_js-vertiefung_array-iteration_forEach()

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

//----

getraenke.sort();
console.log(getraenke);

let myDrinks = getraenke.forEach((elt) => {
    console.log(elt);
    document.write(elt + "<br/>");
    // return elt;
})


// =========================================================

// Lev1_2_js-vertiefung_array-iteration_map()

console.log(getraenke);

let upperDrinks = getraenke.map((elt) => {
    return elt.toUpperCase();
})

console.log(upperDrinks)

// Bonus: Versuche, deine Funktion in ArrowFunction umzuwandeln... wie?


// =========================================================

// Lev1_3_js-vertiefung_array-iteration_map()_sort()

let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

array.sort((a, b) => a - b);
// console.log(array);

const arrayDouble = array.map((elt) => {
    return elt *2
})

console.log(arrayDouble)


// =========================================================

// Lev1_4_js-vertiefung_array-iteration_map()_math.round

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((elt) => {
    return ((elt-32)/1.8).toFixed(0)
})

console.log(celsius);


// =========================================================

// Lev1_5_js-vertiefung_array-iteration_forEach()

let checkNumber = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

let check = checkNumber.map((elt) => {
    if (elt % 3 === 0){
        return elt + 100;
    }else {
        return elt;
    }
})

console.log(check)

