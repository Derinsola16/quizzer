var Candidates = require("../controllers/user")
var Questions = require("../controllers/question")
var Courses = require("../controllers/course")
var Quizes = require("../controllers/quiz")

var appRouter = function (app) { 

 app.get('/api', (req, res) => res.status(200)
.send({ message: 'Welcome to the Quiz API!', })
)

app.post('/candidates', Candidates.create);

app.post('/questions', Questions.create);

app.get('/questions', Questions.list);

app.get('/courses', Courses.list);

app.post('/quizzes', Quizes.create);

app.get('/quizzes', Quizes.list);

}; 

module.exports = appRouter;
// API route for user to signup 