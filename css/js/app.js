$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slidsROScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
    });
});


/**------------------Timer contdown--------------------**/

function countdown(){
    var eventTime =new Date("aug 20, 2021 00:00:00").getTime();
    var currentTime  =new Date().getTime();
    var remTime = eventTime - currentTime;
    var d =Math.floor(remTime/ (1000*60*60*24));
   
    var h =Math.floor((remTime % (1000*60*60*24) ) / (1000*60*60));
    
    var m =Math.floor((remTime % (1000*60*60) ) / (1000*60));
    
    var s =Math.floor((remTime % (1000*60) ) / 1000); 

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minuts").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
    countdown()