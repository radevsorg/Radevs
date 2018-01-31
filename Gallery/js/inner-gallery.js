// Event Listener Creator
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

// Event-listener For Sizing the background of the images in the main gallery
addEvent(window, "resize", function(event) {
    var imgContainer = $('.back-img');
    var imgSize = $('.grid-item-content').height();
    imgContainer.css('height', `${imgSize}px`);
});

// Masonry
function reloadMason() {
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.grid-sizer',
        percentPosition: true,
        transitionDuration: '1.5s'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
}

reloadMason();

// Lightbox
lightbox.option({
    'showImageNumberLabel': true,
    disableScrolling: true,
    wrapAround: true
});


// Filter
$(document).ready(function() {
    //fixing main gallery box backgrounds
    var imgContainer = $('.back-img');
    var imgSize = $('.grid-item-content').height();
    imgContainer.css('height', `${imgSize}px`);

    //toggle design menu when button is clicked
    $(".filter-button").click(function(event) {
        event.preventDefault();
        $(".filter-menu").slideToggle();
    });

    var $logoDesign = $(".logo-design");
    var $brochures = $(".brochures");
    var $menuRestaurant = $(".menu-restaurant");
    var $others = $(".others");
    var $designs = $(".menu li a");

    // FILTER by Design
    $designs.click(function(event) {
        event.preventDefault();
        var $clickedDesign = $(this).attr("id");
        var $clickedDesignSpaced = $clickedDesign.replace("-", " ");
        $("#current-tag").text($clickedDesignSpaced);
        switch($clickedDesign) {
            case "all":
                $(".logo-design, .brochures, .menu-restaurant, .others").fadeIn("slow");
                $(".grid-item a").attr("data-lightbox", "cities");
                break;
            case "logo-design":
                if ($logoDesign.css("display") === "none") {$logoDesign.fadeIn("slow");}
                $(".brochures, .menu-restaurant, .others").hide();
                $(".africa a").attr("data-lightbox", $clickedDesign);
                break;
            case "brochures":
                if ($brochures.css("display") === "none") {$brochures.fadeIn("slow");}
                $(".logo-design, .menu-restaurant, .others").hide();
                $(".australasia a").attr("data-lightbox", $clickedDesign);
                break;
            case "menu-restaurant":
                if ( $menuRestaurant.css("display") === "none") { $menuRestaurant.fadeIn("fast");}
                $(".logo-design, .brochures, .others").hide();
                $(".europe a").attr("data-lightbox", $clickedDesign);
                break;
            case "others":
                if ($others.css("display") === "none") {$others.fadeIn("slow");}
                $(".logo-design, .brochures, .menu-restaurant ").hide();
                $(".north-america a").attr("data-lightbox", $clickedDesign);
                break;
        }
        reloadMason();
    });

});