var model = require("../models")
var Sequelize = require("sequelize")
var sequelize = new Sequelize('dchgj7mbd6kdt8', 'jxvwwdvmuktigb', '43e3fcdc233588774ac127c5fa69be41e30b4deae8b0306098f4cef7fa63080f', {host: ' ec2- 23 - 21 - 177 - 102.compute - 1.amazonaws.com', dialect: 'postgres'});

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

    }


    static async list(req, res) {
       
        const quizzes = await sequelize.query(`SELECT "Quizzes".*, "Users".email FROM "Quizzes", "Users" WHERE "Quizzes"."userId" = "Users".id`, { type: sequelize.QueryTypes.SELECT })

      
     return res.status(201).send(quizzes);
           
    }
   
}
module.exports = Quizes