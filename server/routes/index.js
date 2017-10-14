const express = require('express')
const router = express.Router()

const universalLoader = require('../universal.js')

router.get('/', universalLoader)

module.exports = router
