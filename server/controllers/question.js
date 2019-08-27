var model = require("../models") 
const { Question } = model; 
class Questions { 
    static create(req, res) { 
    const { description } = req.body 
    const { courseId } = req.params 
    return Question.create({ description, courseId })
    .then(question => res.status(201)
    .send({ message: `Your question ${description} has been created successfully `, question })
    ) 
}
static list(req, res) { 
    return Question.findAll()
    .then(allquestions => res.status(200)
    .send(allquestions)); 
}
}
 module.exports = Questions