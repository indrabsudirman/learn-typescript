interface Person {
    name: string;
}

function sayHello(person: Person) {
    console.log(`Hello, ${person.name}`)
}

function getName(person: Person) {
    return person.name;
}

let person: Person = {
    name: "Indra Bayu Sudirman"
};

console.log(getName(person));
console.log(person.name);

person = {
    name: "Haby"
}

console.log(getName(person));
console.log(person.name);
sayHello(person);