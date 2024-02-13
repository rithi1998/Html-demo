var newNumber=new Intl.NumberFormat("en-US");//number formatting
//newNumber.format(1234567.89);
console.log(newNumber.format(1234567.89))

var newCurrency=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});
console.log(newCurrency.format(1234567.89));//currency formatting

var newDate=new Intl.DateTimeFormat("en-US");
console.log(newDate.format(new Date("2024-02-13")));//date formatting


