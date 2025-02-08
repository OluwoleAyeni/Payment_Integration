const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: mongoose.Schema.Types.Mixed,
    },
    paystack_ref: {
        type: String,
    },
    amount: {
        type: Number,
    },
    isSubscribed: {
        type: Boolean,
    },
    planName: {
        type: String,
    },
    timeSubscribed: {
        type: Date,
    },
})

const User = mongoose.model("user", userSchema)

module.exports = User 