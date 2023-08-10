const express = require('express')
const router = express.Router()

const AuthController = require('../Controller/AuthController')
const Forms = require('../Forms/contactForm')
//const authenticator = require('../Middleware/authenticate')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/', AuthController.index)
router.put('/update', AuthController.update)
router.post('/contact', Forms.formSubmit)

module.exports = router