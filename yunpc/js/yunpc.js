
$(function(){
  // 轮播
    (function(){
         i=-1;
         stop;
        /*	每隔2秒运行一次轮播*/
        stop=setInterval(function(){
            i++;
            if(i>4){
                i=1;
            }
            xiaoguo(i);
        },8000)

        $('.list-li>li').eq(0).css({'background-color':'red'})
        function xiaoguo(n){
            b=n-1;
            $('.list-li>li').css({'background-color':'black'})
            $('.list-li>li').eq(b).css({'background-color':'red'})
            $('.dian').animate({'width':700+'px'},3000)
            $('.dian').animate({'width':0+'px'},100)
            $('.box2').animate({'margin-left':-n*700+'px'},3000,function(){
                if(n==4){
                    $('.box2').css({'margin-left':0+'px'})
                }
            })
        }


    })();
        //返回顶部
    (function(){
         backButton=$('.scr-bg2');
         oDiv=$('#scrollTop');
        backButton.on('click',function(){
            $('html,body').animate({scrollTop:0},800)
        });
        $(window).on('scroll',function(){
            if($(window).scrollTop()>360)
                oDiv.fadeIn();
            else
                oDiv.fadeOut();
        });
    })();
    $(window).trigger('scroll');




// 按钮出现隐藏
    // (function(){
    //     oBtn=$('.btn');
    //     oSp=$('.sp-slid');
    //     oSp.mouseover(function(){
    //         oBtn.show();
    //     });
    //     oSp.mouseout(function(){
    //         oBtn.hide();
    //     });
    // })();
});











