

const router = require('express').Router()
const sendSMS = require('./send')
router.post('/sms', sendSMS);




module.exports = router