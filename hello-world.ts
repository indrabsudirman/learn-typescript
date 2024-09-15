(() => {
    let hello: string = "Hello World from TS";
    console.log(hello.toUpperCase());
    let id: number = 12.2
    console.log(id)

    let books: object[] = [
        {name: "Learn Typescript from scratch", author: "Nurshahaby"},
        {name: "Learn Arabic for student", author: "Nurlubna"}
    ]

    console.log(books)
    books.pop()
    console.log(books)
})();
