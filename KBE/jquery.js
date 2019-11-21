// $(document).ready(function(){
//     $("a").click(function(){
//         alert("Hello");
//     });
// });
 
// $(function() {
  
    var slideCount =  $(".slider-advantages ul li").length;
    var slideWidth =  $(".slider-advantages ul li").width();
    var slideHeight =  $(".slider-advantages ul li").height();
    var slideUlWidth =  slideCount * slideWidth;
    
    $(".slider-advantages").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider-advantages ul").css({"width":slideUlWidth, "margin-left": - slideWidth});
    $(".slider-advantages ul li:last-child").prependTo($(".slider-advantages ul"));
    
    function moveLeft() {
      $(".slider-advantages ul").stop().animate({
        left: + slideWidth
      },1400, function() {
        $(".slider-advantages ul li:last-child").prependTo($(".slider-advantages ul"));
        $(".slider-advantages ul").css("left","");
      });
    }
    
    function moveRight() {
      $(".slider-advantages ul").stop().animate({
        left: - slideWidth
      },700, function() {
        $(".slider-advantages ul li:first-child").appendTo($(".slider-advantages ul"));
        $(".slider-advantages ul").css("left","");
      });
    };
    
    $(".navi-right").click(function(){
        moveRight();
      });
      
      $(".navi-left").click(function(){
        moveLeft();
      });
           
// })


// counter_____________________________

let finalNumber = Number($(".active-number").html())
let number = 0;

$(window).scroll(function(){
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }
  if(elementScrolled('.active-number')) {
    const counter = setInterval(() => {
      if(number !==finalNumber){
        number = number + 1; 
        $(".active-number").html(`${number}`)
      }else{
        clearInterval(counter)
      }  
    }, 200);
  }
});

let finalNumberOne = Number($(".active-number-one").html())
let numberOne = 0;

$(window).scroll(function(){
  function elementScrolledOne(elem)
  {
    var docViewTopOne = $(window).scrollTop();
    var docViewBottomOne = docViewTopOne + $(window).height();
    var elemTopOne = $(elem).offset().top;
    return ((elemTopOne <= docViewBottomOne) && (elemTopOne >= docViewTopOne));
  }
  if(elementScrolledOne('.active-number-one')) {
    const counterOne = setInterval(() => {
      if(numberOne !== finalNumberOne){
        numberOne = numberOne + 1; 
        $(".active-number-one").html(`${numberOne}`)
      }else{
        clearInterval(counterOne)
      }  
    }, 200);
  }
});

let finalNumberTwo = Number($(".active-number-two").html())
let numberTwo = 0;

$(window).scroll(function(){
  function elementScrolledTwo(elem)
  {
    var docViewTopTwo = $(window).scrollTop();
    var docViewBottomTwo = docViewTopTwo + $(window).height();
    var elemTopTwo = $(elem).offset().top;
    return ((elemTopTwo <= docViewBottomTwo) && (elemTopTwo >= docViewTopTwo));
  }
  if(elementScrolledTwo('.active-number')) {
    const counterTwo = setInterval(() => {
      if(numberTwo !== finalNumberTwo){
        numberTwo = numberTwo + 1; 
        $(".active-number-two").html(`${numberTwo}`)
      }else{
        clearInterval(counterTwo)
      }  
    }, 200);
  }
});