var id = $('#___rc-p-id').attr("value");
var data = "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";
var arr = new Array();

$.getJSON(data, function(data) {
    
    $.each(data, function(key, val) {
        var elements = val.items[0].sellers[0].commertialOffer.BuyTogether;
        $(elements).each(function(data, val){
            var myNum = "/api/catalog_system/pub/products/search/?fq=productId:"+this+"";
            arr.push(myNum);
            return arr = this.arr;
        });
    });
});

console.log(arr);



var slide = $('.slide'),
$slider = $('.slider'),
$progressBar = $('.progress'),
$progressBarLabel = $('.slider__label');


$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

    $progressBarLabel.text((nextSlide + 1) + " | " + (slick.slideCount));
});

if (slide.length > 0) {
    slide.slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: true,
        dots: false,
        draggable: true,
        touchMove: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}
