
module.exports = function(app){
    app.get('/', (req, res) => {
        res.render( 'index/index', { title:  '首页', sign: req.session.sign});
    });
};