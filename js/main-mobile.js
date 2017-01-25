
var controller = new ScrollMagic.Controller();


//CoverLoader
var 
    black = $(".blackback"),
    rec1 = $(".rec1"),   
    rec2 = $(".rec2"),
    symbolMobile = $(".symbolMobile"),
    overlay = $(".CoverSlides")

var CoverLoader = new TimelineMax()
    .to(black, 2, {zIndex:-9999, position: "absolute", delay:.5})
    .to (symbolMobile, 1, {opacity:1, ease:Power1.easeIn},"-=3")
    .to (symbolMobile, 1, {scale:1.5, ease:Power1.easeOut}, "-=1")
    .to (symbolMobile, .5, {opacity:0, ease:Power1.easeOut})
    .to(rec1, 1, {x: "-100%", ease:Power4.easeInOut},'-=1')
    .to(rec2, 1, {x: "100%", ease:Power4.easeInOut},'-=1')
    .set(overlay, { zIndex: -99})
  