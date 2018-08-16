
module.exports = function(app){
    app.get('/more', (req, res) => {
        res.render( 'more/index', { title:  '更多'});
    });
};