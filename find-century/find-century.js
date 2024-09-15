function findCentury(year) {
    var century = 0;
    if (year % 100 != 0) {
        century += 1;
    }
    return century + Math.floor(year / 100);
}
console.log(findCentury(2024));
