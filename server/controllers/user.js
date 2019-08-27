var model = require("../models")
const { User } = model; 

class Candidates { 
    static signUp(req, res) { 
    const { email, password } = req.body
    const role = 'CANDIDATE'
    return User.create({email, password, role })
    .then(userData => res.status(201)
    .send({ success: true, message: 'User successfully created', userData })
    ) 
} 

static candidatelist(req, res) {
        return User.findAll()
            .then(allcandidate => res.status(200)
                .send(allcandidate));
    }
} 
   module.exports = Candidates;