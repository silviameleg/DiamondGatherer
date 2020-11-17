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