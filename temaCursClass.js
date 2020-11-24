//Tema Curs 2 Exercitiul 6:

class Motorcycle {
    constructor(make, model, year, engineSize, averageSpeed, maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engineSize = engineSize;
        this.averageSpeed = averageSpeed;
        this.maxSpeed = maxSpeed;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    presentation() {
        return ("My bike is a " + this.make + " " + this.model + " with a " + this.engineSize + " engine size.")
    }
    timeToDestination(distance) {
        let time = distance / this.averageSpeed;
        return time;
    }
    personalRecord(distance, time) {
        let record = distance / time;
        return record;
    }
}



let hornet = new Motorcycle('Honda', 'Hornet', 2016, '600 cc ', 115, 255);
console.log('My bike is ' + hornet.age() + ' years old.');
console.log(hornet.presentation());
console.log(hornet.timeToDestination(300));
console.log(hornet.personalRecord(21, 0.1));


let suzuki = new Motorcycle('Suzuki', 'GSX-R', 2020, '1000cc ', 134, 279);
console.log('My bike is ' + suzuki.age() + ' years old.');
console.log(suzuki.presentation());
console.log(suzuki.timeToDestination(115));
console.log(suzuki.personalRecord(10, 0.04));


let ducati = new Motorcycle('Ducati', 'Multistrada V4', 2019, '900cc ', 85, 248);
console.log('My bike is ' + ducati.age() + ' years old.');
console.log(ducati.presentation());
console.log(ducati.timeToDestination(590));
console.log(ducati.personalRecord(12, 0.06));