let http = require('http')

module.exports = function(app){

    app.get('/static/', (req, respons) => {

        let url = req.originalUrl;
        url = url.split('??')[1];
        url = url.split(',');

        var getUrlFn = getUrl(url);
        getUrlFn(0);

        function getUrl(arr) {

            const { host } = req.headers;
            let rawData = '';

            return function(i){
                http.get('http://'+ host + '/' + arr[i], (res) => {
                    res.setEncoding('utf8');
                    res.on('data', (chunk) => { rawData += chunk;});
                    res.on('end', () => {
                        try {
                            arr.shift();
                            if(arr.length > 0){
                                getUrlFn(0)
                            }else{
                                respons.send(rawData);
                            }
                        } catch (e) {
                            console.error(e.message);
                        }
                    });
                }).on('error', (e) => {
                    console.error(e.message);
                });
            }
        }
    })
}