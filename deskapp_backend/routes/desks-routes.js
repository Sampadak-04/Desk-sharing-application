const express = require('express');

const { fetchDesks,fetchUserDesks } = require('../controller/desks-controller');
const router = express.Router();

router.get("/getdesks",fetchDesks);
router.get("/getuserdesks",fetchUserDesks);
module.exports = router;