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



let Hornet = new Motorcycle('Honda', 'Hornet', 2016, '600 cc ', 115, 255);
console.log('My bike is ' + Hornet.age() + ' years old.');
console.log(Hornet.presentation());
console.log(Hornet.timeToDestination(300));
console.log(Hornet.personalRecord(21, 0.1));


let Suzuki = new Motorcycle('Suzuki', 'GSX-R', 2020, '1000cc ', 134, 279);
console.log('My bike is ' + Suzuki.age() + ' years old.');
console.log(Suzuki.presentation());
console.log(Suzuki.timeToDestination(115));
console.log(Suzuki.personalRecord(10, 0.04));


let Ducati = new Motorcycle('Ducati', 'Multistrada V4', 2019, '900cc ', 85, 248);
console.log('My bike is ' + Ducati.age() + ' years old.');
console.log(Ducati.presentation());
console.log(Ducati.timeToDestination(590));
console.log(Ducati.personalRecord(12, 0.06));