var model = require("../models")
const { Course } = model;
class Courses {

    static list(req, res) {
        return Course.findAll()
            .then(courses => res.status(200)
                .send(courses));
    }
}    

module.exports = Courses