// index-1-banner
$('.index-1-banner').hover(
    function () {
        $('.index-1-banner-Carousel').css('visibility', 'visible');
        $('.index-1-banner-Carousel>a:first-child').addClass('animated fadeInRight');
        $('.index-1-banner-Carousel>a:last-child').addClass('animated fadeInLeft');
    },
    function () {
        $('.index-1-banner-Carousel').css('visibility', 'hidden');
        $('.index-1-banner-Carousel>a:first-child').removeClass('animated fadeInRight');
        $('.index-1-banner-Carousel>a:last-child').removeClass('animated fadeInLeft');
    }
);

// index-1-userCard
$('.index-1-userCard-about-a').hover(
    function () {
        $('.index-1-userCard-about').addClass('animated swing');
    },
    function () {
        $('.index-1-userCard-about').removeClass('animated swing');
    }
);
$('.index-1-userCard-connection-1').hover(
    function () {
        $('.index-1-userCard-connection-1').addClass('animated rubberBand');
    },
    function () {
        $('.index-1-userCard-connection-1').removeClass('animated rubberBand');
    }
);
$('.index-1-userCard-connection-2').hover(
    function () {
        $('.index-1-userCard-connection-2').addClass('animated rubberBand');
    },
    function () {
        $('.index-1-userCard-connection-2').removeClass('animated rubberBand');
    }
);
$('.index-1-userCard-connection-3').hover(
    function () {
        $('.index-1-userCard-connection-3').addClass('animated rubberBand');
    },
    function () {
        $('.index-1-userCard-connection-3').removeClass('animated rubberBand');
    }
);
$('.index-1-userCard-connection-0').hover(
    function () {
        $('.index-1-userCard-connection-0').addClass('animated rubberBand');
    },
    function () {
        $('.index-1-userCard-connection-0').removeClass('animated rubberBand');
    }
);

$('.index-1-userCard-connection').height(300 - $('.index-1-userCard-about').outerHeight() - 5);
$('.index-1-userCard-connection>div').css('line-height', $('.index-1-userCard-connection').height() + 'px');