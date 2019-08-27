//import Users from '../controllers/user';
var Users = require("../controllers/user")
var appRouter = function (app) { 

 app.get('/api', (req, res) => res.status(200)
.send({ message: 'Welcome to the BookStore API!', })
)
}; 
app.post('/api/users', Users.signUp); 


module.exports = appRouter;
// API route for user to signup  export default (app) => {}