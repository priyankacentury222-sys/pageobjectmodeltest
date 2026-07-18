
//const{Given,when,Then} = require("@cucumber/cucumber");

const { Given, When, Then } = require('@cucumber/cucumber');

Given('checking demo', function () {

    console.log("Java")
 
});

When('print some message', function () {

    console.log("Selenium")
 
});

Then('result value', function () {
   
    console.log("cucumber")

  
});