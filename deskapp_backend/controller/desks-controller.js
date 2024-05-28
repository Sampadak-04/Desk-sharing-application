const Booking = require("../model/Booking");

const fetchDesks = async (req,res) =>{
    try{
        const bookings = await Booking.find();
        return res.status(200).json(bookings);
    }catch(error){
        return res.status(500).json({ error: "An error occurred" });
    }
}

const fetchUserDesks = async (req,res) => {
    const today = new Date();
    try{
        const userId = req.query.userId;
        const userBookings = await Booking.find({userId:userId});
        const futureBookings = userBookings.filter(booking => {
            const [day, month, year] = booking.bookingDate.split('/');
            const date = new Date(`${year}-${month}-${day}`);
            //console.log(date)
            if(date >= today)
                return date;
        })
        
        return res.status(200).json(futureBookings);
    }catch(error){
        return res.status(500).json({error: "An error occurred"});
    }
}


module.exports = { fetchDesks,fetchUserDesks };