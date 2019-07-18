$(function () {
    baloonUp();

    function baloonUp() {
        $('.pic2').animate({
            'top': 110
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.pic2').animate({
            'top': 100
        }, 700, null, baloonUp);
    }
});

$(function () {
    baloonUp();

    function baloonUp() {
        $('.pic3').animate({
            'top': 110
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.pic3').animate({
            'top': 100
        }, 700, null, baloonUp);
    }
});

$(function () {
    baloonUp();

    function baloonUp() {
        $('.pic1').animate({
            'top': 110
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.pic1').animate({
            'top': 100
        }, 700, null, baloonUp);
    }
});

$(function () {
    baloonUp();

    function baloonUp() {
        $('.pic4').animate({
            'top': 110
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.pic4').animate({
            'top': 100
        }, 700, null, baloonUp);
    }
});

$(function () {
    baloonUp();

    function baloonUp() {
        $('.pic5').animate({
            'top': 110
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.pic5').animate({
            'top': 100
        }, 700, null, baloonUp);
    }
});

$(window).scroll(  
    function(){  
        //스크롤의 위치가 상단에서 450보다 크면  
        if($(window).scrollTop() > 20){  
        /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
            $('.nexts').addClass("fix");  
            //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
        }else{  
            $('.nexts').removeClass("fix");  
            //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
        }  
    }  
);  

  






