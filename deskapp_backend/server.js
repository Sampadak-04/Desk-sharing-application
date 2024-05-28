const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const cron = require('node-cron');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes.js');
const bookingRoutes = require('./routes/booking-routes.js');
const desksRoutes = require('./routes/desks-routes.js');
const Booking = require('./model/Booking.js');
require('dotenv').config();
const dbUrl = process.env.DB_URL;
const PORT = 4000;
//middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser());

//routes
app.use("/users",userRoutes);
app.use("/desks",bookingRoutes);
app.use("/sections",desksRoutes);

//connection
mongoose.connect(dbUrl)
    .then(() => {
        app.listen(PORT,() =>{
            console.log(`Server running at Port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error);
    })

const deleteOldBookings = async () =>{
    try{
        const today = new Date();
        const d = today.toLocaleDateString("en-GB","dd-MM-yyyy");
        const result = await Booking.deleteMany({ bookingDate: { $lt: d } });
        console.log(`Deleted ${result.deletedCount} old bookings`);
    }catch(error){
        console.log("Error deleting old bookings: ",error);
    }
};
//cron.schedule('0 0 * *',deleteOldBookings);
module.exports = app;