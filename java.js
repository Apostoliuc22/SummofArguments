function sum() {
    let a = 0;
    for (let b = 0; b < arguments.length; b++) {
        a += arguments[b];
    }
    return a;
}
console.log(sum(1, 2, 3, 10, 5, 6));