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
    static quizlist(req, res) {
        return Quiz.findAll()
            .then(allquiz => res.status(200)
                .send(allquiz));
    }
}
module.exports = Quizes