var model = require("../models")
const { User } = model;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkey224400";

class Login {
    static async create(req, res) {
        const { email, password } = req.body
        let allowLogin = false
        const users = await User.findAll({
            where:{ email }
        })

        if (users && users.length > 0)
            allowLogin = bcrypt.compareSync(password, users[0].password)
        
        if(!allowLogin)
            return res.status(401).send({message: 'Email and Password does not match!'});

        const expiresIn = 24 * 60 * 60;
        delete users[0].password
             const accessToken = jwt.sign(users[0], SECRET_KEY, {
                 expiresIn
             });
        return  res.status(200).send({ "user": users[0], "access_token": accessToken, "expires_in": expiresIn });
    }
}
module.exports = Login;