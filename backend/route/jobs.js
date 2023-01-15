const express = require('express');
const { index, insert } = require('../controller/jobs');

const router = express.Router();


router.get("",index)
router.post("",insert)

module.exports = router;