$(function () {

    let app = {
        init(){

            

            // $.ajax({
            //         url: 'http://api.douban.com/v2/movie/subject/1764796',
            //         type: 'get',
            //         dataType: 'json',
            //         success(data){
            //             console.log(data)
            //         },
            //         data:{
                       
            //         },
            //         error(data){
                       
            //         }
            //     });

            this.swiper();

        },
        swiper(){

            new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,        
                pagination: {
                  el: '.swiper-pagination',
                }
              })   
        },
        btnGoOut(){

            $('.btnGoOut').click(function () {
                $.ajax({
                    url: './goOut.json',
                    type: 'post',
                    dataType: 'json',
                    success(){
                        location.reload();
                    }
                });
            })
        }
    };

    app.init();
})