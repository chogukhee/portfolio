$(function(){
  $('.btn_more').click(function(){
    $('.section1_contents_dn').slideDown();
  })
})

$(function(){

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
})
