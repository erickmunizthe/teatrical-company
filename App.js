const renderPlainText = require("./src/statement.js");
const invoices = require('./data/invoices.json');
const plays = require('./data/plays.json');

for (let invoice of invoices) {
    console.log(renderPlainText(invoice));
}
