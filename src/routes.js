/**
 * @author fputra on 01/08/21
 */
const express = require('express')

const router = express.Router()

const apiHello = require('./controllers/hello.controller')

router.use('/v1/default', apiHello)

module.exports = router
