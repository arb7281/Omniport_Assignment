const dbConfig = require('../config/database.js');
//getting configurations to connect with database
const {Sequelize, DataTypes} = require('sequelize');
//we are connecting with DB using sequelize ORM
//we provide all the information required for sequelize to make connection with db before that make sure your mySQL server running on same host as mentioned the information 
//you gave into the config file
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

//to check if using sequelize we are able to connect or not
sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

//taking empty object of db to store our newly created db configurations such as Sequelize and sequlize and our model schemas
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//adding schemas to db
db.orders = require('./Order.js')(sequelize, DataTypes)
db.users = require('./User.js')(sequelize, DataTypes)
db.orderChair = require('./orderChair.js')(sequelize, DataTypes)
db.orderTable = require('./orderTable.js')(sequelize, DataTypes)
db.orderTop = require('./orderTop.js')(sequelize, DataTypes)

db.users.hasMany(db.orders, {foreignKey: 'userId'});
db.orders.belongsTo(db.users, {foreignKey: "userId"});



db.orders.hasMany(db.orderChair, {foreignKey: 'orderId'});
db.orderChair.belongsTo(db.orders, {foreignKey: 'orderId'});



db.orders.hasMany(db.orderTable, {foreignKey: 'orderId'});
db.orderTable.belongsTo(db.orders, {foreignKey: 'orderId'});



db.orders.hasMany(db.orderTop, {foreignKey: 'orderId'});
db.orderTop.belongsTo(db.orders, {foreignKey: 'orderId'});

//using sync method we are synchronizing all the model with db
//force: false helps us to keep the data persist in data base if we are 
db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db