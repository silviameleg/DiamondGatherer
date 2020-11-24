//Tema Curs 2

//Exercitiul 1:

var myArray = ["Love", "I", "Javascript"];

myArray.splice(0, 2, "I", "Love");
console.log(myArray);

//another way to do it:
// myArray[0] = "I";
// myArray[1] = "Love";

// or you can do it like this:
// myArray.shift()
// myArray.splice(1, 0, "Love")


//Exercitiul 2:

myArr = ["Paul", 1, false, { name: "Jon Snow" },
    [1, 2, 3], null, undefined,
    function() { console.log('Test') }
];

let x = 0;

while (x < myArr.length) {
    console.log(
        "Position: " + x + "; ",
        "Value: " + myArr[x] + "; ",
        "Type: " + typeof myArr[x]);
    x++
}









//Tema Curs 1

var myObj = {
    animalType: "squirrel",
    cutenessLevel: 100,
    canJump: function() {
        console.log("Squirrels love to jump arround!")
    },
    domesticAnimal: false
};

function introduction(name) {
    return "Buna, numele meu este " + name;
}

console.log(introduction("Silvia"))