const { Client } = require('pg')

const client = new Client({
    user: 'alexakearns',
    host: 'localhost',
    database: 'space',
    password: null,
    port: 5432,
    })

    client.connect()
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
    client.end()
    })