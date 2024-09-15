function adjacentElementsProduct(inputArray: number[]):number {
    let result = -Infinity;

    for (let i = 0; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];

        if (product > result) {
            result = product;
        }
    }

    return result;

}

const inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));