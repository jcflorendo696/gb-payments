const fetch = require('node-fetch');


//  config - percents/max/amount/discount
const config        = "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in";
const configNatural = "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural";
const configLegal   = "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical";


let clientAmount = 50;

fetch(config)
    .then( data => data.json())
    .then( res => {
        console.log(res);
        console.log(clientAmount * res.percents)
    })




