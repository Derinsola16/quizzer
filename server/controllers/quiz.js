var model = require("../models")
var Sequelize = require("sequelize")
var sequelize = new Sequelize('quizzer', 'postgres', 'Aderinsola16',{host: 'localhost', dialect: 'postgres'});

const { Quiz, Answer} = model;
class Quizes {
    static async create(req, res) {
         
        // collect courseId, userId and questions array from request body
        const { courseId, userId, questions } = req.body

        // compute score
        let score = 0
        for(let question of questions){
           const answer = await Answer.findAll({
               where: {
                   questionId: question[0],
                   optionId: question[1]
               }
           })
           
           score += (answer.length * 20)
        }
        // crreate quiz
        await Quiz.create({courseId, userId, score})

        // return message and score as response
        return res.status(201).send({ message: 'Quiz succesfully recorded', score })
        
        
        //pair each question to to an option
        //  const questionObject = questions.map(question => {
        //     return { optionId: question, questionId: question }
        // })
        // const createdQuestions = await Answer.bulkCreate(questionObject)

        

        //  return res.status(201).send({ message: 'Quiz succesfully created'})
        //  console.log(createdQuestions)

    }


    static async list(req, res) {
       
        const quizzes = await sequelize.query(`SELECT "Quizzes".*, "Users".email FROM "Quizzes", "Users" WHERE "Quizzes"."userId" = "Users".id`, { type: sequelize.QueryTypes.SELECT })

      
     return res.status(201).send(quizzes);
           
    }
   
}
module.exports = Quizes