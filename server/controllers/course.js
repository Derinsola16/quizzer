var model = require("../models")
const { Course } = model;
class Courses {

    static list(req, res) {
        return Course.findAll()
            .then(allcourses => res.status(200)
                .send(allcourses));
    }
}    

module.exports = Courses