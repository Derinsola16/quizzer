var model = require("../models") 
const Sequelize = require("sequelize")
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkey224400";
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

    const { authorization } = req.headers
    
    const token = authorization && authorization.split(" ") && authorization.split(" ")[1]

    let isAdmin = false
    if (token){
        const user = jwt.verify(token, SECRET_KEY)
        isAdmin = user && user.role === 'EXAMINER'
    }
     
    
    
     let findParam
    if(!isAdmin){
    const { courseId } = req.query
    const where = courseId ? { courseId } : {}
    findParam = {
        order: [
            [Sequelize.literal('RANDOM()')]
        ],
        limit: 5,
        where
    }
    } else findParam = {}
    
    const allQuestions = await Question.findAll(findParam)


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

