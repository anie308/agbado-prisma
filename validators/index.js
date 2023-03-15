const {check, validationResult} = require('express-validator');


exports.signupValidator = [
    check('firstname').trim().not().isEmpty().withMessage('First name is required'),
    check('lastname').trim().not().isEmpty().withMessage('First name is required'),
    check('email').trim().not().isEmpty().withMessage('Email is required').isEmail().withMessage('Please provide a valid email'),
    check('password').trim().not().isEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    check('phonenumber').trim().not().isEmpty().withMessage('Phone number is required').isLength({min: 11}).withMessage('Phone number must be at least 11 characters long'),
]

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if(error.length){
        return res.status(401).json({error: error[0].msg})
    }
    next() //if no error, move to the next middleware
}