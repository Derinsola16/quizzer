var model = require("../models")
const { User } = model; 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const SECRET_KEY = "secretkey224400";

class Candidates { 
    static async create(req, res) { 
    const { email} = req.body
    const password  =  bcrypt.hashSync(req.body.password, saltRounds);
    const role = 'CANDIDATE'

      const users = await User.create({role, email, password})

        const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: users.id }, SECRET_KEY, {
                     expiresIn
                });

        return res.status(201).send({ message: 'User successfully created', "user": users, "access_token": accessToken, "expires_in": expiresIn})
    }
}
   module.exports = Candidates;