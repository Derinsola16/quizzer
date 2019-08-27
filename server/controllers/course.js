var model = require("../models")
const { Course } = model;
class Courses {
    static create(req, res) {
        const { name } = req.body
        return Course.create({ name })
            .then(course => res.status(201)
                .send({ message: `Your course has been created successfully `, course })
            )
    }

    static list(req, res) {
        return Course.findAll()
            .then(allcourses => res.status(200)
                .send(allcourses));
    }
}    

module.exports = Courses