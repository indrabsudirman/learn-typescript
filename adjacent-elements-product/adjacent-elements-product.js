function adjacentElementsProduct(inputArray) {
    var result = -Infinity;
    for (var i = 0; i < inputArray.length - 1; i++) {
        var product = inputArray[i] * inputArray[i + 1];
        if (product > result) {
            result = product;
        }
    }
    return result;
}
var inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));
