//모바일
$('.appbarCloseBt').on('click',function(){
    $('.mobile-menu').css('left','-100%');
    $('#header .header-mobile-menu').css('left','0');
});
$('.appbarBt').on('click',function(){
    $('.mobile-menu').css('left','0');
    $('#header .header-mobile-menu').css('left','100%');
});


//section4 클릭 슬라이드
$(function(){
    let moving=$('.s4-1_bottom>ul');
    let timer=null;
    let liwidth=($('.s4-1_bottom>ul>li').width())+45;
    //console.log(liwidth)

    slide();
    function slide(){ 
        timer=setInterval(function(){
           moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
           })
        },2000);
    }

    $('.s4-1_bottom').on({mouseover:function(){
        clearInterval(timer); 
    },mouseout:function(){
        slide();
    }});

    $('.s4_b_rightBtn').click(function(){
        moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
        })
    })
    $('.s4_b_leftBtn').click(function(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.css({left:-liwidth}).stop().animate({left:0},500)
    })
});

//section5 클릭 슬라이드
$(function(){
    let moving=$('.s5-1_bottom>ul');
    let timer=null;
    let liwidth=($('.s5-1_bottom>ul>li').width())+25;
    //console.log(liwidth)

    slide();
    function slide(){ 
        timer=setInterval(function(){
           moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
           })
        },2000);
    }

    $('.s5-1_bottom').on({mouseover:function(){
        clearInterval(timer); 
    },mouseout:function(){
        slide();
    }});

    $('.s5_b_rightBtn').click(function(){
        moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
        })
    })
    $('.s5_b_leftBtn').click(function(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.css({left:-liwidth}).stop().animate({left:0},500)
    })
});



//top버튼 위로
$( '.f_r' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 600 );
	return false;
} );

$( '.m_f2_right' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 600 );
	return false;
} );


AOS.init();