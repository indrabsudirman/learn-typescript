function sayHai(name: string, age?: number): string {
    if (age) {
        return `Hello ${name}, your age is ${age}`;
    } else {
        return `Hello ${name}`
    }
}

console.log(sayHai("Indra"))
console.log(sayHai("Haby", 4))