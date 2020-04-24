const { Client } = require('pg')

const client = new Client({
    //change user
    user: 'postgres',
    host: 'localhost',
    database: 'makersbnb',
    password: null,
    port: 5432,
})

// client.connect()

'use strict';

function Space (name, description, price, start, end, landlordid=20) {
    this.updateDatabase(name, description, price, start, end, landlordid);
    this.name = name;
    this.description = description;
    this.dailyPrice = price;
    this.availabilityFrom = start;
    this.availabilityTo = end;
}

   
Space.prototype.addName = function(name) {
    this.name = name;
}

Space.prototype.addDescription = function(string) {
    this.description = string;
}

Space.prototype.addDailyPrice = function(price) {
    this.dailyPrice = price;
}

Space.prototype.addAvailabilityFrom = function(dateString) {
  this.availabilityFrom = new Date(dateString).toDateString();
}

Space.prototype.addAvailabilityTo = function(dateString) {
  this.availabilityTo = new Date(dateString).toDateString();
}

Space.prototype.updateDatabase = function(name, price, description, startdate, enddate, pretendID) {
  client.connect()
  client.query("INSERT INTO spaces (name, price, description, startdate, enddate, landlordid) VALUES ('"+name+"', "+price+", '"+description+"', '"+startdate+"', '"+enddate+"', "+pretendID+");", (err, res) => {
    client.end()
  })
}

// Space.prototype.showAllSpaces = function() {
//   // client.connect()
//   client.query('SELECT * FROM spaces', (err, res) => {
//     console.log(res.rows)
//     client.end()
//   })
// }


module.exports = Space;