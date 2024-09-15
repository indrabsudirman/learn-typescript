function sayHello(person) {
    console.log("Hello, ".concat(person.name));
}
function getName(person) {
    return person.name;
}
var person = {
    name: "Indra Bayu Sudirman"
};
console.log(getName(person));
console.log(person.name);
person = {
    name: "Haby"
};
console.log(getName(person));
console.log(person.name);
sayHello(person);
