// this is my function that sums two numbers
//const sum = (a,b) => {/
//    return a + b
//}

// just a console log for ourselves.
//console.log(sum(7,3));

//module.exports = { sum }


///////////////////////////////////////////////

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (qtyEuro) => Number((qtyEuro * oneEuroIs.USD).toFixed(1));

console.log(fromEuroToDollar(2))

module.exports = { fromEuroToDollar };