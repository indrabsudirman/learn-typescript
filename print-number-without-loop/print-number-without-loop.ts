function printNumber(n: number, current: number = 1): void {
    if (current <= n) {
        process.stdout.write(current.toString());
        if (current < n) {
            process.stdout.write(", ");
        }
        printNumber(n, current + 1);
    }
}

printNumber(10);
