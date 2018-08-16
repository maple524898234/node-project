
module.exports = function(app){
    app.get('/product/productList', (req, res) => {
        res.render( 'product/productList', { title:  '优选散标', sign: req.session.sign});
    });
};