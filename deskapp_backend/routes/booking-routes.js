const express = require('express');

const { BookAvailable,BookDesk } = require('../controller/booking-controller');
const router = express.Router();

router.post('/bookavailable',BookAvailable)
router.post('/booking',BookDesk);


module.exports = router;