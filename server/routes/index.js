var Candidates = require("../controllers/user")
var Questions = require("../controllers/question")
var Courses = require("../controllers/course")
var Quizes = require("../controllers/quiz")

var appRouter = function (app) { 

 app.get('/api', (req, res) => res.status(200)
.send({ message: 'Welcome to the Quiz API!', })
)

app.post('/api/candidates', Candidates.signUp); 

app.get('/api/allcandidate', Candidates.candidatelist);

app.post('/api/:courseId/questions', Questions.create);

app.get('/api/allquestions', Questions.list);

app.post('/api/courses', Courses.create);

app.get('/api/allcourses', Courses.list);

app.post('/api/:courseId/:userId/quizes', Quizes.create);

app.get('/api/allquiz', Quizes.quizlist);

}; 

module.exports = appRouter;
// API route for user to signup  export default (app) => {}