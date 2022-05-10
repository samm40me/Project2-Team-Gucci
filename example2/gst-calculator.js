const subTotal = 40;

function total (subTotal) {
    return subTotal * 0.05 + subTotal;
}
// Enclose the following code in a function that accepts subTotal as a parameter
total(subTotal)
console.log(`${subTotal} plus GST is ${total(subTotal)}.`);