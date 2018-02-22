var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

     getParalaxScroll();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getParalaxScroll();

});

$(document).scroll(function() {
   
    getParalaxScroll();

});

$(document).ready(function() {
   
    

});


 function getParalaxScroll() {

        $(".paralax-parent").each(function() {

            var top = $(document).scrollTop();

            if (bodyWidth > 768){
                var paralaxStep = top - $(this).offset().top;
                $(this).find(".paralax-block").css({
                 'background-position': 'center '+ ( paralaxStep / 5 ).toFixed(2) +'px'
                });

            }

        });

    }