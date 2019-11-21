$(document).ready(function () {

    /**
     * PARALLAX
     */
    var $parallaxBox = $('.parallaxBox');

    function parallaxIt(e, target, movementX, movementY) {
        var relX = e.pageX - $parallaxBox.offset().left;
        var relY = e.pageY - $parallaxBox.offset().top;

        gsap.to(target, 1, {
            x: (relX - $parallaxBox.width() / 2) / $parallaxBox.width() * movementX,
            y: (relY - $parallaxBox.height() / 2) / $parallaxBox.height() * movementY
        });
    }

    $parallaxBox.mousemove(function(e) {
        if(window.innerWidth > 1000) {
            parallaxIt(e, '.cubeParallax__second', 45, 0);
            parallaxIt(e, '.cubeParallax__third', -50, 50);
        }
    });

});