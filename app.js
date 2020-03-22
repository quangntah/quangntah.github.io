$(document).ready(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');

        
    });

    $('.m1').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop: 0
           }, 1000);
    });
    $('.m2').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi2').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m3').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi3').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m4').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi4').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m5').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi5').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    


    // doi mau
    $('.mauxanh').click(function (e) { 
        e.preventDefault();
        $('body').addClass('xanh');
        $('body').removeClass('vang');
    });
    $('.mauvang').click(function (e) { 
        e.preventDefault();
        $('body').addClass('vang');
        $('body').removeClass('xanh');
    });
    $('.maublue').click(function (e) { 
        e.preventDefault();
        $('body').removeClass('xanh');
        $('body').removeClass('vang');
    });

    $(window).scroll(function () { 
        console.log(window.pageYOffset)
    {
       
    
        } if (window.pageYOffset >= $('.khoi4').offset().top )
        {
            $('.menu').removeClass('active');
            $('.m4').addClass('active');
        } else if (window.pageYOffset >= $('.khoi3').offset().top )
        {
            $('.menu').removeClass('active');
            $('.m3').addClass('active');
        } else if (window.pageYOffset >= $('.khoi2').offset().top )
        {
            $('.menu').removeClass('active');
            $('.m2').addClass('active');
        } else {
            $('.menu').removeClass('active');
            $('.m1').addClass('active');
        }
    });
});