var model = require("../models")
const { Course } = model;
class Courses {
    static async list(req, res) {
        const courses = await Course.findAll()        
          return res.status(201).send(courses);
    }
}    

module.exports = Courses