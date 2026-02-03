function celToFahr (celsius) {
    const fahrenheit = (celsius * 9/5) +32;
    return fahrenheit;
}
const fahrenheit = celToFahr(-42);
console.log(fahrenheit);
