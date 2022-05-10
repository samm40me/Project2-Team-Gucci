const billTotal = 40;
const tipRate = 0.18;


// Enclose the following code in a function that accepts subTotal and tipRate as parameters
function tip (){
    tipPercentage = `${tipRate * 100}%`
    return billTotal * tipRate;
}
tip()
console.log(`${tipPercentage} tip on $${billTotal} is $${tip()}.`);