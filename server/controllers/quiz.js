var model = require("../models")
const { Quiz } = model;
class Quizes {
    static create(req, res) {
        const { score } = req.body
        const { courseId, userId } = req.params
        return Quiz.create({ score, courseId, userId })
            .then(quiz => res.status(201)
                .send({ message: `Your score is ${score} %`, quiz })
            )
    }
    static list(req, res) {
        return Quiz.findAll()
            .then(quizzes => res.status(200)
                .send(quizzes));
    }
}
module.exports = Quizes