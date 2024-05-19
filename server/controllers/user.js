const db = require("../models")

const User = db.users
// const Order = db.orders

console.log("prinitng User model", User)
// const Order = db.orders

const createUser = async (req, res) => {

    console.log("I am inside createUser controller")
    let info = {
        name: req.body.userName,
        email: req.body.email,
    }

    console.log("printing body data", info)

    const user = await User.create(info)

    console.log("printing user object received from db", user)

    if(!user){
        res.status(500).json({
            status: false,
            message:"failed to make call to db"
        })
    }else{
        res.status(200).send(user)
        console.log(user)
    
    }   
}

module.exports = {
    createUser
    
}