const router = require('express').Router();

const {signup} = require('../controllers/userController');
const {signupValidator, validate} = require('../validators');

router.post('/signup', signupValidator, validate, signup);


module.exports = router