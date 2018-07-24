
$(function(){
  // 轮播
    (function(){
        var i=0;
        var stop;
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
            var b=n-1;
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
        /*	左右按钮*/
        function huan(n){
            var j=i;
            i=i+n;

            if(i>4){
                i=1;
            }
            if(i<0){
                i=1;
            }
            xiaoguo(i);
        }

        /*	鼠标放上大块*/
        $('.lunbo').mouseover(function(){
            clearInterval(stop);
            stop=null;
            $('.btn').show();

        });
        /*	鼠标离开大块*/
        $('.lunbo').mouseout(function(){
            if(stop==null){
                stop=setInterval(function(){
                    i++;
                    if(i>4){
                        i=1;
                    }
                    xiaoguo(i);
                },3000)
            }
            $('.btn').hide();
            $('.btn-con-l').text('');
            $('.btn-con-r').text('');
        });
        /*按钮小标题*/
        $('.list-li>li').mouseover(function(){
            clearInterval(stop);
            stop=null;
            i= Number($(this).text());
            xiaoguo($(this).text());
            $('.box').stop(true,true);
            $('.dian').stop(true,true);
        });
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
});











