/* Пункты меню. Анимация. */
$(document).ready(function(){
    $('#frstmenu').hover(function(){
        $('.menuLine1').addClass('activated');
    },
    function(){
        $('.menuLine1').removeClass('activated');
    })
    $('#sndtmenu').hover(function(){
        $('.menuLine2').addClass('activated');
    },
    function(){
        $('.menuLine2').removeClass('activated');
    })
    $('#thrdmenu').hover(function(){
        $('.menuLine3').addClass('activated');
    },
    function(){
        $('.menuLine3').removeClass('activated');
    })
    $('#fourthmenu').hover(function(){
        $('.menuLine4').addClass('activated');
    },
    function(){
        $('.menuLine4').removeClass('activated');
    })
});
/* --------------------------- */

/* Анимация появления/исчезновения меню при нажатии на кнопку-гамбургер */
var wrapperMenu = document.querySelector('.wrapper-menu');
var popUp = document.getElementById("popUp");
var i = 0;

wrapperMenu.addEventListener('click', function(){
    if (i == 0){
        wrapperMenu.classList.toggle('open');
        popUp.style.opacity = "1"
        return i++
    }
    if (i == 1){
        wrapperMenu.classList.toggle('open');
        popUp.style.opacity = "0"
        return i--
    }
    
});
/* --------------------------- */
