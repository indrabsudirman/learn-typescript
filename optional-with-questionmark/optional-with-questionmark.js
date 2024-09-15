function sayHai(name, age) {
    if (age) {
        return "Hello ".concat(name, ", your age is ").concat(age);
    }
    else {
        return "Hello ".concat(name);
    }
}
console.log(sayHai("Indra"));
console.log(sayHai("Haby", 4));
