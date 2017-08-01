$(function(){
  $('.btn_more').click(function(){
    $('.section1_contents_dn').slideDown();
  })
  // 버튼스크립트

  var ww = $('.slide').width();
  var idx = 0;

  $('.main_next').click(function(){
    $('.slide li').eq(idx).find('div').animate({
      left:-ww
    }).parent().next().find('div').css({
      'display':'block','left':ww
    }).animate({
      'left':0
    })
    idx++

    if(idx == $('.slide li').length){
      idx = 0;
      $('.slide li').eq(idx).find('div').css({
        'left':ww
      }).animate({
        'left':'0'
      })
    }
  })

  $('.main_prev').click(function(){
    $('.slide li').eq(idx).find('div').animate({
      'left':ww
    }).parent().prev().find('div').css({
      'display':'block','left':-ww
    }).animate({
      'left':0
    })
    idx--

    if(idx < 0){
      idx = $('.slide li').length-1;
      $('.slide li').eq(idx).find('div').css({
        'left':-ww, 'display':'block'
      }).animate({
        'left':'0'
      })
    }
  })
  // 슬라이드

  var aa = $('.section2_contents li').width();
  var idx = 0;

  $('.section2_next').click(function(){
    $('.section2_contents li').eq(idx).find('span').animate({
      left:-aa
    }).parent().next().find('span').css({
      'display':'block','left':aa
    }).animate({
      'left':0
    })
    idx++

    if(idx == $('.slide li').length){
      idx = 0;
      $('.slide li').eq(idx).find('div').css({
        'left':ww
      }).animate({
        'left':'0'
      })
    }
  })

  $('.login').click(function(e){
    e.preventDefault();
    $('#log').load("popup.html #login_box");
    $(window).scrollTop(0);
  })

  $('#log').on('click','.close',function(){
    // console.log('fkjd;afkj');
    $('#log').children('#login_box').remove();
  })
  //회원가입창
})
