var model = require("../models")
const { User } = model; 
const bcrypt = require('bcrypt');
const saltRounds = 10;


class Candidates { 
    static async create(req, res) { 
    const { email} = req.body
    const password  =  bcrypt.hashSync(req.body.password, saltRounds);
    const role = 'CANDIDATE'

      const user = await User.create({role, email, password})  
      delete user.password

        return res.status(201).send({ message: 'User successfully created', user})
    }
}
   module.exports = Candidates;