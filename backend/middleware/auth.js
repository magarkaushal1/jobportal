const {body} = require('express-validator')
const validate = require('../util/validate')
const jwt = require("jsonwebtoken")

const signup_validator = validate(
    [
        body('name').exists(),
        body('email').exists(),
        body('password').isLength({ min : 5}),
        body('role').exists(),
    ]
)

const login_validator = validate(
    [
        body('email').exists().withMessage('email field is required.'),
        body('password').exists(),
    ]
)

const authenticateToken = (req,res,next)=>{
    console.log("inside token verification")

    let token = req.headers.authorization.split("")[1]
    console.log(token)

    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
     next();
}


module.exports = {
    signup_validator,
    login_validator,
}