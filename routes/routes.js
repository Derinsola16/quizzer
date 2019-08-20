var appRouter = function (app) {
    // app.get("/", function (req, res) {
    //     res.status(200).json("Welcome to our restful API");
    // });

    app.get('/users', (req, res) => {
        return res.json('GET HTTP method on user resource');
    });

    app.post('/users', (req, res) => {
        return res.json('POST HTTP method on user resource');
    });

    app.put('/users/:userId', (req, res) => {
        return res.json(
            `PUT HTTP method on user/${req.params.userId} resource`,
        );
    });

    app.delete('/users/:userId', (req, res) => {
        return res.json(
            `DELETE HTTP method on user/${req.params.userId} resource`,
        );
    });


}

module.exports = appRouter;
