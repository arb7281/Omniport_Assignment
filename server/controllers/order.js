const db = require("../models")
//we are getting this db from models we defined in models folder
//please note we re not requesting db from specific file its directly fetching db from specific file automaticaly

const Order = db.orders

const createOrder = async (req, res) => {

    let info = {
        amount: req.body.totalAmount,
    }

    const order = await Order.create(info)
    res.status(200).send(order)
    console.log(user)

}

module.exports = {
    createOrder
    
}