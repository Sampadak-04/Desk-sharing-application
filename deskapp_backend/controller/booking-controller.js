const Booking = require("../model/Booking");

const BookAvailable = async (req, res) => {
    try {
        let flag = false;
        const {
            deskId,
            bookingDate,
            userId
        } = req.body;
        const bookings = []
        for (let i = 0; i < bookingDate.length; i++) {
            const book = (await Booking.findOne({ bookingDate: bookingDate[i], deskId: deskId }));
            if (book)
                bookings.push(book.bookingDate)
        }
        const availableDates = bookingDate.filter(date => !bookings.includes(date));
    
        if (availableDates.length !== 0) {
            const booked = []
            const date = availableDates
            for (let i = 0; i < availableDates.length; i++) {
                const bookingDate = date[i];
                const add = await Booking.create({
                    deskId,
                    bookingDate,
                    userId
                })
            
            if (add)
                booked.push(add)
            }
            return res.status(200).json(booked);
        }else{
            return res.status(400).json({error: "Sorry! Desk is not available for any of the dates"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "An error occurred" });
    }
}

const BookDesk = async (req, res) => {
    try {
        let flag = false;
        const {
            deskId,
            bookingDate,
            userId
        } = req.body;
        const bookings = []
        for (let i = 0; i < bookingDate.length; i++) {
            const book = (await Booking.findOne({ bookingDate: bookingDate[i], deskId: deskId }));
            if (book)
                bookings.push(book)
        }

        if (bookings.length != 0) {
            return res.status(200).json(bookings);
        } else {
            //return res.status(400).json({error:"Not found"})
            const booked = []
            const date = bookingDate
            for (let i = 0; i < date.length; i++) {
                const bookingDate = date[i];
                const add = await Booking.create({
                    deskId,
                    bookingDate,
                    userId
                })
                if (add)
                    booked.push(add)
            }
            return res.status(200).json({ flag: true });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "An error occurred" });
    }
}

module.exports = { BookAvailable, BookDesk };
