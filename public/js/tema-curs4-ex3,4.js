// tema curs 4 exercitiul 3:
// 3. Creați două clase Employee și Person
// 1. Stabiliti o relație de mostenire între cele doua
// 2. Adaugat 3 metode specifice unui angajat(Employee)
// 3. Adaugati 2 metode generice unei persoane(Person)
// 4. Utilizati 2 instanțe de tip angajat Employee și apelați metodele.

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    introduction() {
        console.log(`My name is ${this.name} ${this.surname} and I like ${this.preferences()}.`);
    }
    preferences() {
        return 'cake';
    }
    contract() {
        return 'pernanent';
    }
}

class Employee extends Person {

    preferences() {
        return 'coffee';
    }

    contract(y) {
        return y;
    }
}

const contr = ['part-time', 'full-time']

let johnny = new Employee('Johnny', 'English');
let anna = new Employee('Anna', 'Isacson');

console.log(johnny.introduction());
console.log(johnny.preferences());
console.log(johnny.contract(contr[0]));

console.log(anna.introduction());
console.log(anna.preferences());
console.log(anna.contract(contr[1]));




// tema curs 4 exercitiul 4:
//folosind high order function, faceți următoarele.
//1. Filtrati array-ul astfel incat sa obtineti doar valorile numerice.
// 2. Modificați array - ul rezultat înmulțind fiecare valoare cu 10.
// 3. Afișați suma tuturor numerelor rezultate într - o variabila result.

let arr = [1, -2, 6, -7, 10, 9, 14, true, false, null, undefined];

arr.filter((item) => typeof item === "number");

arr.map((item) => item * 10);

arr.reduce((total, valCurenta) => total + valCurenta, 0);