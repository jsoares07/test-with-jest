// import the function sum from the app.js file
//const { sum } = require('./app.js');

// start your first test
//test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
 //   let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
   // expect(total).toBe(23);
//});

const { fromEuroToDollar } = require('./app.js');

test('convert 2 euros in dolars', () => {

    let total = fromEuroToDollar(2)
    
    expect(total).toBe(2.4)
});


