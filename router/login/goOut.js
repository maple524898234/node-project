
module.exports = function(app){

    app.post('/goOut.json', (req, res) => {

        req.session.destroy();
        res.send({})
    })
}