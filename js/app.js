

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    });

    $("#closeModal").click(function(){
      $("#contactUsModal").modal("hide");
    });

    $('.nav-item').click(function(){
      setTimeout(function () {
        const navbarNav = document.querySelector('#navbarNav');
        if(navbarNav.classList.contains('show')) {
            $('#navbar-toggler').click();
        }
      }, 1000);
    });
});
