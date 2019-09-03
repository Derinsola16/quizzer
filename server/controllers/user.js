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
    //await User.create({email, password, role })
        await User.create({role, email, password}, (err) => {
            if (err) return res.status(500).send("Server error!");
            findUserByEmail(email, (err, user) => {
                if (err) return res.status(500).send('Server error!');
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                res.status(200).send({
                    "user": user, "access_token": accessToken, "expires_in": expiresIn
                });
            });
        });
           
    return res.status(201).send({ message: 'User successfully created', data: null})
    }
}
   module.exports = Candidates;