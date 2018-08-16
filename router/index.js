

var router = [
    './index/index.js', //首页
    './login/login.js', //登录
    './login/goOut.js', //退出登录
    './product/productList.js', //项目列表
    './product/productNew.js', //新手专享列表
    './product/transferList.js', //转让专区列表
    './more/index.js', //更多

    './static.js',//合共加载静态资源
    './upload/index.js',//测试上传图片
];

router = router.map(function (item) {
    return require(item)
})
module.exports = function(app){

    router.forEach((item) => {
        item(app)
    })
}