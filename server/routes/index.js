const express = require('express')
const router = express.Router()

const universalLoader = require('../../buildServer/main.js')

router.get('/', universalLoader)

module.exports = router
