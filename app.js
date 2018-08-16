let express = require('express');
let artTemplate = require('express-art-template');
//let artTemplate = require('art-template');
let path = require('path');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let bodyParser = require('body-parser');
let compression = require('compression');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'static/views'));
app.use(express.static(path.join(__dirname, '/static')));

app.engine('.html', artTemplate);
app.set('view engine','html');

app.use(compression()); // 开启 gzip 压缩
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let credential = require('./credentials');
app.use(cookieParser(credential.cookieSecret));
let sessionD = session({resave: true, saveUninitialized: true, secret : credential.cookieSecret, key: 'SESSIONID',cookie: { maxAge: 30*60*1000 }})
app.use(sessionD)

require('./router/index')(app);

// 获取本地 以太网 IPv4 的 ip 地址
function getIp(){
    let os = require('os');

    let platform = os.platform();

    let ifaces = os.networkInterfaces();    

    if(platform == 'win32'){
        for (let dev in ifaces) {
            if('以太网' == dev){
                for(let i = 0, len = ifaces[dev].length; i < len; i++){
                    if (ifaces[dev][i].family == 'IPv4') {
                        return ifaces[dev][i].address;
                    }
                }
            }
        }
    }else if(platform == 'linux'){
        return ifaces.eth0[0].address;
    }
}

let server = app.listen(3000, function () {

    let host = getIp();
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});