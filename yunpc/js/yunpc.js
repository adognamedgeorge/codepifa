
$(function(){
  // 轮播
    (function(){
         let i=-1;
         let stop;
        /*	每隔2秒运行一次轮播*/
        stop=setInterval(function(){
            i++;
            if(i>4){
                i=1;
            }
            xiaoguo(i);
        },8000);

        let aLi=$('.list-li>li');
        Box=$('.box2');
        aLi.eq(0).css({'background-color':'red'});
        function xiaoguo(n){
            b=n-1;
            aLi.css({'background-color':'black'});
            aLi.eq(b).css({'background-color':'red'});

            Box.animate({'margin-left':-n*700+'px'},3000,function(){
                if(n==4){
                    Box.css({'margin-left':0+'px'})
                }
            });
        }


    })();
        //返回顶部
    $(function(){
        //1.楼梯什么时候显示，800px scroll--->scrollTop
        $(window).on('scroll',function(){
            let $scroll=$(this).scrollTop();
            if($scroll>=305){
                $('#scrollTop').show();
            }else{
                $('#scrollTop').hide();
            }

            //4.拖动滚轮，对应的楼梯样式进行匹配
            $('.category').each(function(){
                $loutitop=$('.category').eq($(this).index()).offset().top+215;
                Ali=$('#scrollTop li');
                if($loutitop>$scroll){//楼层的top大于滚动条的距离
                    Ali.removeClass('selected');
                    Ali.eq($(this).index()).addClass('selected');
                    return false;//中断循环
                }
            });
        });

        //3.回到顶部
        $('.toTop').on('click',function(){
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:0
            })
        });
    })


});









// (function(){
//      let backButton=$('.scr-bg2');
//      let oDiv=$('#scrollTop');
//     backButton.on('click',function(){
//         $('html,body').animate({scrollTop:0},800)
//     });
//     $(window).on('scroll',function(){
//         if($(window).scrollTop()>360)
//         oDiv.fadeIn();
//         else
//         oDiv.fadeOut();
//
//     });
// })();
// $(window).trigger('scroll');


// for(i=0;i<len;i++){
//      aItembg[i].onOff=true;
//      aItembg[i].on('click',function(){
//         if(this.onOff){
//             this.addClass("cover");
//             this.onOff=false;
//         }else {
//             this.removeClass("cover");
//             this.onOff=true;
//         }
//      });
//  }


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

//2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left

// let $loutili=$('#scrollTop li').not('.toTop');
// $loutili.on('click',function(){
//     $(this).addClass('selected').siblings('li').removeClass('selected');
//     let $loutitop=$('.category').eq($(this).index()).offset().top;
//     //获取每个楼梯的offsetTop值
//     $('html,body').animate({//$('html,body')兼容问题body属于chrome
//         scrollTop:$loutitop
//     })
// });





