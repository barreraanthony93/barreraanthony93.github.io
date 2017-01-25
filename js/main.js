
var controller = new ScrollMagic.Controller();


//CoverLoader
var 
    black = $(".blackback"),
    rec1 = $(".rec1"),   
    rec2 = $(".rec2"),
    spinner =$(".spinner"),
    symbol = $(".symbol"),
     symbolback = $(".symbolback"),
    symbolMobile = $(".symbolMobile"),
    overlay = $(".CoverSlides")

var CoverLoader = new TimelineMax()
    .to(black, 2, {zIndex:-9999, position: "absolute", delay:.5})
    .to (symbol, 1, {opacity:1, ease:Power1.easeIn})
    .to (symbol, 1, {scale:2, ease:Power1.easeOut})
    .to (symbol, .5, {opacity:0, ease:Power1.easeOut})
   .to (symbolMobile, 1, {opacity:1, ease:Power1.easeIn},"-=3")
    .to (symbolMobile, 1, {scale:1.5, ease:Power1.easeOut}, "-=1")
    .to (symbolMobile, .5, {opacity:0, ease:Power1.easeOut})
    .to(rec1, 1, {x: "-100%", ease:Power4.easeInOut},'-=.5')
    .to(rec2, 1, {x: "100%", ease:Power4.easeInOut},'-=1')
    .set(overlay, { zIndex: -99})
  



    
    //Services

    var 
        servHead = $("#servicesHeader"),
        servIcon = $("#iconServices .service-box")
        
        
    var servicesTl = new TimelineMax()
        .from(servHead, 1, {opacity: 0, y: -100})
        .from(servIcon, 1, {x:100, opacity:0,  ease:Bounce.easeNone},.5,'-=1')
        
    
     var sceneServ = new ScrollMagic.Scene({
        triggerElement: "#tabpanel",
        triggerHook: .1,
         reverse: false,
    })
        .setTween(servicesTl)
        .addIndicators({name: "serv"})
        .addTo(controller);
    

    //animation  
   
    var
        head = $("#head"),
        subhead = $("#subhead"),
        play = $('#playBtn');

    var header = new TimelineMax()
        .from(head, .5, {x:-1000})
        .from(subhead, .5, {x:-1000}, '-=.5')
        .from(play, .5, {x:1000}, '-=.5')
  
        var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            reverse:false,
            
           
        })
        .setTween(header)
        .addIndicators({name: "header"}) 
        .addTo(controller);


    //crecimineto

   var 
        growh2 = $("#growh2"),
        growp = $("#growp"), 
        growbtn = $("#growbtn"),
       brain = $(".headBrain");;
       
    var creci = new TimelineMax()
        .from(brain, 1, {scale: 0, ease:Bounce.easeIn}, '-=.5')
        .from(growh2, 1, {x:-1000})
        .from(growp, 1, {x:-1000}, '-=.5')
        .from(growbtn, 1, {x:1000}, '-=.5')

        var scene2 = new ScrollMagic.Scene({
            triggerElement: "#triggerCrecimiento",
            reverse: false,
        })
        .setTween(creci)
        .addIndicators({name: "conectate"}) 
        .addTo(controller);



//conenctate
    var
        team = $("#headConect h2"),
        teamAll = $('#teamAll')
    
    var teamScene = new TimelineMax()
        .from(team, 2, {opacity:0})
        .from(teamAll, 2, {opacity:0, y:100}, "-=1")
    
    var sceneTeam = new ScrollMagic.Scene({
        triggerElement: "#conectate",
        reverse: false,
    })
    .setTween(teamScene)
    .addIndicators({name:"team"})
    .addTo(controller);












(function($){
        
        var 
            cross = $('#cross'),
            h2cross1 = $('#cross1'),
            h2cross2 = $('#cross2'),
            h2cross3 = $('#cross3'),
            bapth1 = $('#bapth1'),bapth2 = $('#bapth2'),bapth3 = $('#bapth3'),
            equal = $('#equal'),
            bapt = $('#bapt'),
            rock = $('#rock'),
            grave = $('#grave'),
            equal2 = $('#equal2'),
            baptIn = $('#baptIn'),
            resurec = $('#resurec'),
            resurecGround = $('#resurecGround'),
            resurecCloud = $('#resurecCloud'),
            equal3 = $('#equal3'),
            baptOut = $('#baptOut'),
            restart = $('#restartBtn'),
            pausebtn =$("#previousBtn"),
            playbtn =$("#nextBtn"),
            salvacion =$('#salvacion'),
           
        tl = new TimelineLite();
        
        TweenLite.set(restart, {autoAlpha: 0});
        
        
    tl 
        .to(head, 1, {opacity: 0})
        .to(subhead, 1, {opacity: 0}, '-=1')
        .from(cross, 2, {x: 400, scale:0, delay: .5})
        .from(h2cross1, 2, {opacity: 0}, '-=1')
        .to(equal, 2, {opacity: 1, scale:1})
        .from(bapt, 2, {x: -400, scale:0, opacity:0})
        .from(bapth1, 2, {opacity: 0}, '-=1')
        .add('exit')
        .to(cross, 2, {autoAlpha: 0}, 'exit')
        .to(equal, 2, {autoAlpha: 0}, 'exit')
        .to(h2cross1, 2, {opacity: 0}, 'exit')
       
        .from(grave, 2, { scale:0})
        .from(rock, 2, {scale:0}, '-=2')
        .to(rock, 2, {x: -60})
        .to(h2cross2, 2, {opacity: 1, zIndex:9}, '-=1')
        .to(equal2, 2, {opacity: 1, scale:1})
        .to(bapt, 2, {autoAlpha: 0})
        .to(bapth1, 2, {opacity: 0}, '-=1')
        .from(baptIn, 2, {autoAlpha:0}, '-=2')
        .from(bapth2, 2, {opacity: 0}, '-=1')
        .add('exit2')
        .to(grave, 2, {autoAlpha: 0}, 'exit2')
        .to(rock, 2, {autoAlpha: 0}, 'exit2')
        .to(equal2, 2, {autoAlpha: 0}, 'exit2')
        .to(h2cross2, 2, {opacity: 0}, 'exit2')
        
       
         .from(resurec, 2, { scale:0})
        .add('resurecIn')
        .from(resurecGround, 2, { scale:0}, '-=2')
        .from(resurecCloud, 2, { scale:0}, '-=2')
        .from(h2cross3, 2, {opacity: 0}, '-=1')
        .to(equal3, 2, {opacity: 1, scale:1},'-=1')
        .add('resurec')
        .to(resurec, 3, { opacity:0, y:-550}, 'resurec')
        .to(resurecGround, 2, {opacity:.2, y:50}, 'resurec')
        .to(resurecCloud, 2, {opacity:.2, y:50}, 'resurec')
        
        
        .to(baptIn, 2, {autoAlpha: 0})
        .from(baptOut, 2, {autoAlpha: 0}, '-=2')
        .to(bapth2, 2, {opacity: 0}, '-=1')
        .from(bapth3, 2, {opacity: 0}, '-=1')
        .add('exit3')
        .to(resurec, 2, {autoAlpha: 0}, 'exit3')
        .to(resurecGround, 2, {opacity: 0, y:50}, 'exit3')
        .to(resurecCloud, 2, {opacity:0 , y:50}, 'exit3')
        .to(equal3, 2, {autoAlpha: 0}, 'exit3')
        .to(baptOut, 2, {autoAlpha: 0}, 'exit3')
        .to(h2cross3, 2, {opacity: 0}, 'exit3')
        .to(bapth3, 2, {opacity: 0}, 'exit3')
    
        .to(salvacion, 2, {opacity:1} )
        .to(restart, 2, {autoAlpha: 1})
        
        
      
      
    tl.pause();
        
        $('#playBtn').on('click', function(){
            TweenLite.to(play, .5, {autoAlpha: 0});
            TweenLite.to(pausebtn, .5, {opacity:1});
            TweenLite.to(playbtn, .5, {opacity:1});
            tl.play();
        });
     
    $('#previousBtn').on('click', function(){
            
            tl.pause();
        });
     $('#nextBtn').on('click', function(){
            tl.play();
        });
        
        
      
        
          $('#restartBtn').on('click', function(){
              TweenLite.set(restart, {autoAlpha: 0});
            tl.restart();
        });
    
    
    
    ////SUB PAGES/////
    
    var 
        h1 = $(".brand-heading"),
        hsub = $(".intro-text"),
        btn = $(".btn-circle"),
        scenein = $(".sceneIn"),
        menu = $("#menu-toggle"),
        brandImg =$(".navbar-brand"),
        socialTop = $(".socialTop i")
    
    var SubpageInto = new TimelineMax()
    
    .from(h1, 2, {x: 300, opacity: 0, delay:2})
    .from(brandImg, 2, {opacity: 0, delay:2}, '-=1')
    .from(menu, 2, {opacity: 0}, '-=2')
    .from(hsub, 2, {x: -300, opacity: 0},"-=3")
    .from(socialTop, 1, {opacity:0, y:50, ease:Power0.easeNone, delay:1})
    .to(btn, 1, {y: 10, opacity: 1, ease:Power0.easeNone},'-=1')
   
   
    
    ///Predicador
    
      var
        featureImg = $(".featurette-image"),
        featureh2 = $(".featurette-heading"),
        featurep = $(".lead")  
          
    var featureIn = new TimelineMax()
        .from(featureh2, 1, {opacity:0, x:-100})
        .from(featurep, 1, {opacity:0, y:100}, '-=1')
        .from(featureImg, 1, {scale: 0, ease:Bounce.easeOut})
       
    
    var scenetab = new ScrollMagic.Scene({
        triggerElement: "#bio",
        triggerHook: .5,
        
    })
        .setTween(featureIn)
        .addIndicators({name: "featureIn"})
        .addTo(controller);
    
 
        
    })(jQuery);