const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    deskId:{
        type:String,
        required:true
    },
    bookingDate:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const Booking = mongoose.model('Booking',bookingSchema);

module.exports = Booking;