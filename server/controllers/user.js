//import model from '../models'; 
var model = require("../models")
const { User } = model; 

class Users { 
    static signUp(req, res) { 
    const { email, password } = req.body 
    return User.create({email, password })
    .then(userData => res.status(201)
    .send({ success: true, message: 'User successfully created', userData })
    ) 
} 
} 
   moudle.exports = Users;