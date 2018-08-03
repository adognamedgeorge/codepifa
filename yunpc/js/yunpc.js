
$(function(){

    (function(){
         let i=0;
         let aImgli=$('.lunbo-img li');
         let len=aImgli.length;
        for(j=0;j<aImgli.length;j++){
            $(".list-li").append('<li> </li>');
            $(".list-li li").eq(j).html(j+1);
        }
        $(".list-li li").first().addClass('active');

        let firstimg=aImgli.first().clone(); //复制第一张图片
        $('.lunbo-img').append(firstimg).width(aImgli.length*($('.lunbo-img img').width()));
        timer=setInterval(function(){
            i++;
            if (i===len) {
                i=0;
                $('.lunbo-img').css({left:0});//保证无缝轮播，设置left值
            }

            $('.lunbo-img').stop().animate({left:-i*700},2000);

            if(i===len){
                $('.list-li li').eq(0).addClass('active').siblings().removeClass('active');
            }else {
                $('.list-li li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },6000);


    })();

  // 轮播
  //   (function(){
  //        let i=0;
  //        let stop;
  //        let len=$('.box2>a').length;
  //       /*	每隔2秒运行一次轮播*/
  //       stop=setInterval(function(){
  //           i++;//1234
  //           if(i>len){
  //               i=0;
  //           }
  //           xiaoguo(i);
  //
  //       },3000);
  //
  //       let aLi=$('.list-li>li');
  //       Box=$('.box2');
  //       aLi.eq(i).css({'background-color':'red'});
  //       function xiaoguo(n){
  //           b=n;
  //           aLi.css({'background-color':'black'});
  //           aLi.eq(b).css({'background-color':'red'});
  //
  //           Box.animate({'margin-left':-n*700+'px'},3000,function(){
  //               if(n==len-1){
  //                   Box.css({'margin-left':0+'px'})
  //               }
  //           });
  //       }
  //
  //
  //   })();
        //返回顶部

    (function(){
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
    })();
    $(window).trigger('scroll');

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





