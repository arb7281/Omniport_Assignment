const  db  = require('../models');

const User = db.users
const Order = db.orders
const OrderChair = db.orderChair
const OrderTable = db.orderTable
const OrderTop = db.orderTop

exports.checkout = async (req, res) => {
    const { name, email, cart } = req.body;

    console.log("printing in checkout controller", req.body)

    try {
        // Create user
        const user = await User.create({ name, email });

        // console.log("printing user data", user)
        const amount = cart.reduce((sum, item) => sum + item.price, 0);
        // console.log("priniting amount", amount)

        // const usersId = user.id

        // console.log("printing userId", usersId)
    
        const order = await Order.create({ amount, userId: user.id });
        // console.log("printing order", order)

       
        for (const item of cart) {
            if (item.category === 'Chairs') {
                await OrderChair.create({ orderId: order.id, chairId: item.id });
            } else if (item.category === 'Table') {
                await OrderTable.create({ orderId: order.id, tableId: item.id });
            } else if (item.category === 'Top') {
                await OrderTop.create({ orderId: order.id, topId: item.id });
            }
        }

        res.json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal Server Error' });
    }
};
