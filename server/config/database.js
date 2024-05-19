
//mandatory step to create mySQL connection
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'newdatabase',
    dialect: 'mysql',

    ///max - maximum connection at a time, min - minimum connections at a time, 
    pool: {
        max: 5,
        min: 0,
        acquire:30000,
        idle:10000
    }
}