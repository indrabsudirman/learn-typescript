function printNumber(n, current) {
    if (current === void 0) { current = 1; }
    if (current <= n) {
        process.stdout.write(current.toString());
        if (current < n) {
            process.stdout.write(", ");
        }
        printNumber(n, current + 1);
    }
}
printNumber(10);
