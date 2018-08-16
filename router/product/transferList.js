
module.exports = function(app){
    app.get('/product/transferList', (req, res) => {
        res.render( 'product/productList', { title:  '转让专区', sign: req.session.sign});
    });
};