$(function() {
  var controller = new ScrollMagic.Controller();
  var containerScene = new ScrollMagic.Scene({
    triggerHook: 'onLeave', 
    offset: -25,
    triggerElement: '#blockOne',
    duration:400
  })
  .setPin('#blockOne')
  /*.addIndicators()*/
  .addTo(controller);
  
var containerScene2 = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  offset: -25,
  triggerElement: '#blockTwo',
  duration: 600
})
.setPin('#blockTwo')
/*.addIndicators()*/
.addTo(controller);
  
var containerScene3 = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  offset:-25,
  triggerElement: '#blockThree',
  duration:600
})
.setPin('#blockThree')
/*.addIndicators()*/
.addTo(controller);
  
  var containterScene3 = new ScrollMagic.Scene({
    triggerHook: 'onLeave',
    offset: -25,
    triggerElement: '#blockFour',
    duration:100
  })
  .setPin('#blockFour')
  /*.addIndicators()*/
  .addTo(controller);
  
});

$(document).ready(function(){
  $('.scroll-link').on('click', function(event){
  event.preventDefault();
  var sectionID = $(this).attr("data-id");
  scrollToID('#' + sectionID, 500);
  });
  $('.scroll-top').on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop:0}, 'slow'); 		
  });
  $('#nav-toggle').on('click', function (event) {
  event.preventDefault();
  $('#main-nav').toggleClass("open");
  });
  });
  function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  if (mainNav.hasClass("open")) {
  mainNav.css("height", "1px").removeClass("in").addClass("collapse");
  mainNav.removeClass("open");
  }
  }
  if (typeof console === "undefined") {
  console = {
  log: function() { }
  };
  }

  var commentSlider = {
  
    'config' : {
      'container' : $('#wrapper')
    },
      
    'init' : function(config) {
        if(config && typeof(config) == 'object') {
          $.extend(commentSlider.config, config);
        }
      
        
        commentSlider.$container = commentSlider.config.container;
  
        
        commentSlider.$paragraphs = commentSlider.$container.
          find('p');
      
        
        commentSlider.$dots = commentSlider.$container.
          find('ul.dots-wrap > li');
      
        
        commentSlider.$firstDot = commentSlider.$container.
          find('ul.dots-wrap > li:first-child');
      
        
        commentSlider.$firstParagraph = commentSlider.$container.
          find('p:first-child');
        
        
        commentSlider.$firstDot.addClass('active');
  
        
        commentSlider.$firstParagraph.addClass('activeText');
      
        
        commentSlider.currentItem(commentSlider.$paragraphs, commentSlider.$dots);
        commentSlider.setActiveDot(commentSlider.$dots);
        commentSlider.timer();
    },
    
    
    'timer' : function() {
      setInterval(function(){ 
        
      }, 5000);
    }, 
    
    
    'dotNumber' : function($dot) {
      var dotClassArray = [];
      var dotClassList = dotClassArray.push($dot.attr('class'));
      var splitArray = dotClassArray.toString().split(' ');
      
      for(i = 0; i < splitArray.length; i++) {
        if (splitArray[i] === "dot") { 
          splitArray.splice(i, 1);
          var dotClickedNumber = splitArray[i];
          commentSlider.paragraphNumber(dotClickedNumber, commentSlider.$paragraphs);
        }
      }
    },
    
    'paragraphNumber' : function(dotClickedNumber, $paragraphs) {
      $paragraphs.each(function() {
          var $paragraph = $(this);
          var paragraphClass = $paragraph.attr('class');    
         
          if(paragraphClass === dotClickedNumber) {          
            $paragraph.addClass('activeText');
            $paragraph.siblings().removeClass('activeText').addClass('slideLeft');
            setTimeout(function () { 
               $paragraph.siblings().removeClass('slideLeft');    
            }, 400);          
          }
      });
    },

    'currentItem' : function($paragraphs, $dots) {
      $paragraphs.each(function(i) {
        var $paragraph = $(this);
        $paragraph.addClass([] + i);
      });
      
      $dots.each(function(i) {
        var $dot = $(this);
        $dot.addClass([] + i);
      });
    },
    
    
    'setActiveDot' : function($dots) {
      $dots.each( function() {
        var $dot = $(this);
        $dot.on('click', function() {
          if($dot.hasClass('active')) {
            return false;
          } else {
            $dot.addClass('active');
            $dot.siblings().removeClass('active');
          }
          commentSlider.dotNumber($dot);      
        });
      });
    }
  };
    
  
  $(document).ready(commentSlider.init);

  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}