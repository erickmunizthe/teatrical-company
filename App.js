const { textStatement, htmlStatement } = require("./src/statement.js");
const invoices = require("./data/invoices.json");
const plays = require("./data/plays.json");

for (let invoice of invoices) {
  console.log(textStatement(invoice));
  console.log(htmlStatement(invoice));
}
