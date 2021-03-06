const { Client } = require('pg')

const client = new Client({
    //change user
    user: 'postgres',
    host: 'localhost',
    database: 'makersbnb',
    password: null,
    port: 5432,
})

client.connect()

function Renter (name , dob, gender){
    this.name = name;
    this.dob = dob;
    this.gender = gender;
}

Renter.prototype.addName = function(name){
    client.query("INSERT INTO renter (name) VALUES ('"+ name +"');", (err, res) => {
        client.end()
       
    })
    this.name = name
}

Renter.prototype.addDob = function(dob){
    if (this.isValidDate (dob)) {
    this.dob = dob;}
}

Renter.prototype.addGender = function(gender){
    this.gender = gender
}

Renter.prototype.isValidDate = function(dateString)
{
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var parts = dateString.split("/");
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
};

Renter.prototype.makeBooking = function (bookingOject){
 // We'll allow the user to create a booking oject here
}

module.exports = Renter;