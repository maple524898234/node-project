
module.exports = function(app){

    app.get('/login', (req, res) => {
        // if(req.session.sign){
        //     res.redirect('/');
        // }else{
            res.render( 'login/index', { title:  '登录'});
       // }
    });

    app.post('/login.json', (req, res) => {
        res.cookie('loginStatus', 1, { signed: true, maxAge: 24*60*60*1000, httpOnly : true});
        req.session.sign = 1;

        res.send({
            success: true,
            data:{
                code: 1
            }
        });
    })
};