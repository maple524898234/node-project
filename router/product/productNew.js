
module.exports = function(app){
    app.get('/product/productNew', (req, res) => {
        res.render( 'product/productList', { title:  '新手专享', sign: req.session.sign});
    });
};