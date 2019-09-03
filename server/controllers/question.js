var model = require("../models") 
const Sequelize = require("sequelize")
const { Question, Option, Answer} = model; 

class Questions { 
    static  async create(req, res) {
        // get question, course, options and answer from user
        const { description, options, courseId, answer } = req.body

        // create question for course
        const question = await Question.create({ description, courseId })
        
        // create each option for the question
        const optionsObject = options.map(option => {
            return { text: option, questionId: question.id }
        })
        const createdOptions = await Option.bulkCreate(optionsObject)

        // match right option to question as answer
        await Answer.create({ optionId: createdOptions[answer].id, questionId: question.id})

        return res.status(201).send({ message: 'Question succesfully created'})
    }


static async list(req, res) { 
    const { courseId }  = req.query
    const where = courseId ? { courseId } : {}
        const allQuestions = await Question.findAll({
            order: [
                [Sequelize.literal('RANDOM()')]
            ],
            limit: 5,
            where
        })


    let questions = []
    let index = 0
    for (let question of allQuestions) {
        let { id, description, created_at, updated_at, courseId } = question

        questions[index] = { id, description, created_at, updated_at, courseId }

        questions[index].options = await Option.findAll({
            where:{
                questionId: question.id
            }
        })
        index++
    }


    //console.log(que.length)
    return res.status(201).send(questions)
}
}
 module.exports = Questions

