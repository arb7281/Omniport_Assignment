const express = require("express")

const router = express.Router()

const {
    createOrder
} = require("../controllers/order")

const {
    checkout
} = require("../controllers/checkOutController")


router.post("/createOrder", createOrder)

router.post("/checkout", checkout)

module.exports = router