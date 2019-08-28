var model = require("../models")
const { User } = model; 

class Candidates { 
    static create(req, res) { 
    const { email, password } = req.body
    const role = 'CANDIDATE'
    return User.create({email, password, role })
    .then(userData => res.status(201)
    .send({ success: true, message: 'User successfully created', userData })
    ) 
} 
} 
   module.exports = Candidates;